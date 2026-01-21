<?php
/**
 * Plugin Name: Investalo Akademie Quiz
 * Description: Professionelles 3-Level Quiz mit KI-Mentor und One-Shot Logik.
 * Version: 2.8
 * Author: Chris / Investalo
 */

if (!defined('ABSPATH')) exit;

// Assets laden aus dem assets-Ordner
add_action('wp_enqueue_scripts', function() {
    wp_enqueue_style('investalo-quiz-css', plugins_url('assets/quiz.css', __FILE__), array(), '2.8');
    wp_enqueue_script('investalo-quiz-js', plugins_url('assets/quiz.js', __FILE__), array('jquery'), '2.8', true);
    
    wp_localize_script('investalo-quiz-js', 'investaloSettings', array(
        'ajax_url' => admin_url('admin-ajax.php'),
        'nonce'    => wp_create_nonce('investalo_quiz_nonce')
    ));
});

// Admin Menü für OpenAI Key
add_action('admin_menu', function() {
    add_options_page('Investalo Quiz', 'Investalo Quiz', 'manage_options', 'investalo-quiz', 'investalo_quiz_settings_page');
});

function investalo_quiz_settings_page() {
    ?>
    <div class="wrap">
        <h1>Investalo Quiz Einstellungen</h1>
        <form method="post" action="options.php">
            <?php 
            settings_fields('investalo_quiz_group'); 
            do_settings_sections('investalo-quiz'); 
            submit_button(); 
            ?>
        </form>
    </div>
    <?php
}

add_action('admin_init', function() {
    register_setting('investalo_quiz_group', 'investalo_openai_key');
    add_settings_section('investalo_main_section', 'KI Konfiguration', null, 'investalo-quiz');
    add_settings_field('openai_key', 'OpenAI API Key', function() {
        $val = get_option('investalo_openai_key');
        echo '<input type="password" name="investalo_openai_key" value="'.esc_attr($val).'" class="regular-text" placeholder="sk-...">';
    }, 'investalo-quiz', 'investalo_main_section');
});

// KI Feedback via AJAX
add_action('wp_ajax_get_ai_feedback', 'investalo_get_ai_feedback');
add_action('wp_ajax_nopriv_get_ai_feedback', 'investalo_get_ai_feedback');

function investalo_get_ai_feedback() {
    check_ajax_referer('investalo_quiz_nonce', 'nonce');
    $name = sanitize_text_field($_POST['user_name']);
    $stats = sanitize_text_field($_POST['category_stats']); 
    $api_key = get_option('investalo_openai_key');

    if (empty($api_key)) wp_send_json_error('Kein API Key hinterlegt.');

    $response = wp_remote_post('https://api.openai.com/v1/chat/completions', array(
        'headers' => array('Authorization' => 'Bearer ' . $api_key, 'Content-Type' => 'application/json'),
        'timeout' => 30,
        'body' => json_encode(array(
            'model' => 'gpt-4o-mini',
            'messages' => array(
                array('role' => 'system', 'content' => 'Du bist der Investalo Mentor. Analysiere kurz die Fehler (Basics, Market, Mindset). Sei motivierend, duze den Schüler, Anrede "Hallo [Name]". Max 3 Sätze.'),
                array('role' => 'user', 'content' => "Schüler Name: $name. Statistik: $stats")
            )
        ))
    ));

    if (is_wp_error($response)) wp_send_json_error('API Fehler');
    $body = json_decode(wp_remote_retrieve_body($response), true);
    wp_send_json_success($body['choices'][0]['message']['content']);
}

// Shortcode [investalo_quiz]
add_shortcode('investalo_quiz', function() {
    ob_start(); ?>
    <div class="quiz-main-container fade-in">
        <header class="scam-top">
            <div class="avatar-wrap">
                <img src="<?php echo plugins_url('assets/ohnehintergrund_quiz.png', __FILE__); ?>" alt="Mentor">
            </div>
            <div class="scam-title">
                <h1 id="quiz-level-title">Akademie Quiz</h1>
                <div class="scam-sub">Vom Anfänger zum Profi-Trader</div>
            </div>
        </header>
        <div id="quizStatusText" class="quiz-status-text"></div>
        <div class="quiz-progress-container"><div class="quiz-progress-bar" id="progressBar"></div></div>
        <div id="quiz-content"></div>
    </div>
    <?php return ob_get_clean();
});
