const quizData = {
    level1: [
        { category: "Basics", q: "Über welche Handelsplätze werden physische Rohstoffe primär mittels standardisierter Terminkontrakte abgewickelt?", options: ["Warenterminbörsen (z.B. CME)", "New York Stock Exchange (NYSE)", "Dezentrale Kryptobörsen", "Lokale Handelsregister"], correct: 0, fb: "Korrekt. Warenterminbörsen wie die CME fungieren als globale Referenzmärkte für Rohstoffe." },
        { category: "Basics", q: "Welcher Finanzmarkt gilt aufgrund seines täglichen Handelsvolumens im Billionen-Bereich als der liquideste Markt der Welt?", options: ["Der globale Aktienmarkt", "Der Kryptowährungsmarkt", "Der Devisenmarkt (Forex)", "Der Markt für Immobilienfonds"], correct: 2, fb: "Richtig. Der Forex-Markt ist das liquide Fundament des internationalen Finanzsystems." },
        { category: "Basics", q: "Was definiert den wesentlichen Unterschied zwischen langfristigem Investment und aktivem Trading?", options: ["Die Höhe des verfügbaren Startkapitals", "Die Haltedauer sowie die strategische Zielsetzung", "Die visuelle Darstellung der Kursdaten", "Die Wahl der eingesetzten Analysesoftware"], correct: 1, fb: "Exakt. Investment zielt auf Wertsteigerung, während Trading auf die Generierung von Cashflow fokussiert ist." },
        { category: "Market", q: "Welche rechtliche Stellung nimmt ein Anleger durch den Erwerb einer Aktie innerhalb eines Unternehmens ein?", options: ["Gläubigerstatus gegenüber der Gesellschaft", "Miteigentümer am Eigenkapital des Unternehmens", "Inhaber einer physischen Sachleistung", "Besitzer einer reinen Schuldverschreibung"], correct: 1, fb: "Korrekt. Als Aktionär partizipieren Sie direkt am Eigenkapital und somit am Erfolg des Unternehmens." },
        { category: "Market", q: "Welche Anlageklasse wird in Marktphasen hoher Unsicherheit klassischerweise als 'Sicherer Hafen' (Risk-Off) präferiert?", options: ["Wachstumswerte aus dem Tech-Sektor", "Hochspekulative Kryptowerte", "Rohöl (WTI/Brent)", "Physisches Anlagegold"], correct: 3, fb: "Gold dient historisch als wertbeständiger Stabilitätsanker in Krisenzeiten." },
        { category: "Mindset", q: "Welcher Anteil des monatlichen Einkommens sollte im 6-Konten-Modell idealerweise dem Konto für 'Finanzielle Freiheit' zugeführt werden?", options: ["10 Prozent", "55 Prozent", "5 Prozent", "25 Prozent"], correct: 0, fb: "Richtig. 10% bilden die Basis für den Aufbau Ihres investierbaren Kapitals." },
        { category: "Mindset", q: "Welche Funktion übernimmt das 'Bildungskonto' innerhalb einer strukturierten Finanzplanung?", options: ["Rücklage für unvorhergesehene Notfälle", "Finanzierung von Konsumgütern", "Investition in Fachwissen und persönliche Weiterentwicklung", "Deckung laufender Lebenshaltungskosten"], correct: 2, fb: "Die Investition in das eigene Humankapital erzielt langfristig die höchste Rendite." },
        { category: "Market", q: "Welche Preisreaktion ist bei einer signifikant steigenden Nachfrage und gleichzeitig begrenztem Angebot zu erwarten?", options: ["Ein progressiver Preisanstieg", "Eine unmittelbare Preissenkung", "Eine dauerhafte Stagnation des Kurses", "Die temporäre Einstellung des Handels"], correct: 0, fb: "Korrekt. Das Gesetz von Angebot und Nachfrage ist die treibende Kraft der Preisbildung." },
        { category: "Mindset", q: "Wie wird der 'Innere Wert' (Intrinsic Value) eines Vermögenswertes fachlich definiert?", options: ["Der aktuell am Chart sichtbare Preis", "Die fundamentale Bewertung des realen Wertes", "Der historische Durchschnittspreis", "Das kumulierte Handelsvolumen"], correct: 1, fb: "Richtig. Der Preis reflektiert die Marktmeinung, der Wert die fundamentale Realität." },
        { category: "Basics", q: "Was beschreibt der Begriff 'Liquidität' im Kontext des Wertpapierhandels?", options: ["Die erzielte Gesamtrendite", "Die Anzahl handelbarer Krypto-Token", "Die Fähigkeit, Positionen ohne großen Spread zeitnah zu liquidieren", "Die tägliche Volatilitätsrate"], correct: 2, fb: "Hohe Liquidität erlaubt einen Marktein- und austritt ohne signifikante Kursabweichungen." },
        { category: "Basics", q: "Was stellt das Kernmerkmal von Anleihen (Bonds) im Vergleich zu Aktien dar?", options: ["Es handelt sich um Unternehmensanteile", "Es sind verbriefte Darlehen an Staaten oder Unternehmen", "Sie repräsentieren dezentrale Token", "Es handelt sich um reine Versicherungsverträge"], correct: 1, fb: "Anleihen sind festverzinsliche Wertpapiere, bei denen der Anleger als Fremdkapitalgeber fungiert." },
        { category: "Market", q: "Warum wird der Australische Dollar (AUD) im Devisenhandel oft als 'Rohstoffwährung' klassifiziert?", options: ["Aufgrund der engen Korrelation zu Rohstoffexporten", "Weil die Währung physisch mit Gold gedeckt ist", "Da sie ausschließlich gegen Rohstoffe gehandelt wird", "Weil es sich um einen algorithmischen Stablecoin handelt"], correct: 0, fb: "Die australische Wirtschaft ist stark von Rohstoffpreisen abhängig." },
        { category: "Mindset", q: "Welches Marktverhalten kennzeichnet ein klassisches 'Risk-Off'-Szenario?", options: ["Aggressive Käufe von Technologiewerten", "Erhöhung der Hebelwirkung in spekulativen Assets", "Kapitalflucht in sichere Staatsanleihen und Edelmetalle", "Starke Zunahme der Kreditaufnahme für Aktienkäufe"], correct: 2, fb: "In Risk-Off-Phasen dominiert die Kapitalerhaltung gegenüber der Gewinnmaximierung." },
        { category: "Basics", q: "Was ist die primäre Dienstleistung eines Brokers für einen aktiven Trader?", options: ["Die Übernahme sämtlicher Handelsentscheidungen", "Die Bereitstellung des technischen und rechtlichen Marktzugangs", "Die Garantie auf konstante Gewinnbeteiligungen", "Die reine Entwicklung von Handelssoftware"], correct: 1, fb: "Der Broker fungiert als notwendige Schnittstelle zwischen Trader und Börsenplatz." },
        { category: "Market", q: "Welche Schutzfunktion übernimmt die gesetzliche Einlagensicherung für den Anleger?", options: ["Absicherung des Kapitals im Falle einer Institutsinsolvenz", "Garantie auf spekulative Kursgewinne", "Befreiung von der Kapitalertragsteuer", "Vollständiger Verzicht auf Transaktionsgebühren"], correct: 0, fb: "Die Einlagensicherung bildet das regulatorische Sicherheitsnetz für Ihr Guthaben." }
    ],
    level2: [
        { category: "Market", q: "Welcher Charttyp gilt als Standard für die tiefgreifende Analyse der Marktpsychologie?", options: ["Einfacher Linienchart", "Punkt-und-Figure-Chart", "Histogramm-Darstellung", "Candlestick-Chart (Kerzenchart)"], correct: 3, fb: "Candlesticks visualisieren die Interaktion zwischen Käufern und Verkäufern am präzisesten." },
        { category: "Market", q: "Welche Information liefert der horizontale Strich auf der LINKEN Seite eines Balkencharts (Bar Chart)?", options: ["Den offiziellen Schlusskurs", "Den Eröffnungskurs der Periode", "Das Tagestief", "Das Tageshoch"], correct: 1, fb: "Die linke Notierung markiert stets den Kurs zum Zeitpunkt der Periodeneröffnung." },
        { category: "Market", q: "Welchen spezifischen Vorteil bietet die Verwendung eines Liniencharts in der Analyse?", options: ["Maximale Detailtiefe jeder Kursbewegung", "Reduksehen von Marktrauschen zur Identifikation des Trends", "Darstellung von Eröffnungskursen", "Integrierte Volumenvisualisierung"], correct: 1, fb: "Liniencharts konzentrieren sich auf Schlusskurse und verdeutlichen so die übergeordnete Richtung." },
        { category: "Mindset", q: "Was impliziert der Begriff 'überkauft' (Overbought) im Rahmen der technischen Analyse?", options: ["Ein ideales Signal für den Markteinstieg", "Eine potenzielle Erschöpfung der Käuferseite", "Einen garantierten weiteren Kursanstieg", "Die bevorstehende Schließung des Handelsplatzes"], correct: 1, fb: "Ein überkaufter Zustand deutet auf eine statistisch erhöhte Korrekturwahrscheinlichkeit hin." },
        { category: "Mindset", q: "Welche Kennzahl liefert der Relative-Stärke-Index (RSI) primär?", options: ["Politische Nachrichtenrelevanz", "Unternehmensspezifische Dividendenrenditen", "Die Dynamik der Preisbewegung sowie Marktextreme", "Quartalsbezogene Gewinnprognosen"], correct: 2, fb: "Der RSI misst die Geschwindigkeit und Veränderung von Preisbewegungen." },
        { category: "Basics", q: "Welche Orderart ist für eine UNMITTELBARE Ausführung zum aktuell besten Marktpreis zu wählen?", options: ["Limit Order", "Stop Order", "Trailing Stop", "Market Order"], correct: 3, fb: "Market Orders priorisieren die Ausführungsgeschwindigkeit gegenüber dem Preis." },
        { category: "Basics", q: "Worin liegt das Hauptrisiko bei der Verwendung einer Limit-Order?", options: ["Es besteht keine Garantie auf eine Orderausführung", "Der Preis ist grundsätzlich schlechter als der Marktpreis", "Es fallen deutlich höhere Transaktionskosten an", "Die Order unterliegt einer rechtlichen Nachschusspflicht"], correct: 0, fb: "Wird das Preislimit vom Markt nicht erreicht, bleibt die Order unberücksichtigt." },
        { category: "Basics", q: "Welches Instrument stellt die essenzielle Absicherung gegen existenzbedrohende Verluste dar?", options: ["Ein hohes Take-Profit-Ziel", "Eine ausreichende Kapitalisierung", "Der konsequente Stop-Loss", "Eine hochperformante Internetanbindung"], correct: 2, fb: "Der Stop-Loss ist das primäre Werkzeug zur aktiven Risikobegrenzung." },
        { category: "Basics", q: "Welche Auswirkung hat der Einsatz eines Hebels (Leverage) auf das Handelsdepot?", options: ["Vollständige Absicherung des Eigenkapitals", "Proportionale Erhöhung der Kaufkraft sowie des Risikos", "Garantie auf eine positive Performance", "Reduktion der anfallenden Broker-Gebühren"], correct: 1, fb: "Leverage wirkt als Multiplikator für potenzielle Gewinne, aber auch für Verluste." },
        { category: "Basics", q: "Was definiert einen 'Margin Call' im professionellen Handel?", options: ["Ein Beratungsgespräch mit dem Mentor", "Die Aufforderung zur Deckung unzureichender Sicherheiten", "Eine Information über erzielte Gewinne", "Ein notwendiges Software-Update"], correct: 1, fb: "Ein Margin Call dient dem Schutz des Brokers und des Traders vor Überschuldung." },
        { category: "Market", q: "Was signalisiert ein ausgeprägter Docht an der Oberseite einer Kerze?", options: ["Anhaltend starken Kaufdruck", "Deutliche Ablehnung des Preisniveaus durch Verkäufer", "Die Bestätigung einer Trendfortsetzung", "Ein extrem niedriges Handelsvolumen"], correct: 1, fb: "Obere Dochte indizieren, dass das hohe Preisniveau nicht gehalten werden konnte." },
        { category: "Basics", q: "Was charakterisiert eine OCO-Order (One Cancels the Other)?", options: ["Der zeitgleiche Erwerb zweier unterschiedlicher Assets", "Zwei gekoppelte Orders, bei denen die Ausführung einer die andere löscht", "Eine vollständig gebührenfreie Transaktion", "Eine Orderart, die ausschließlich für Kryptowerte verfügbar ist"], correct: 1, fb: "OCO-Orders werden häufig zur gleichzeitigen Platzierung von Stop-Loss und Take-Profit genutzt." },
        { category: "Market", q: "Wie wird das Phänomen der 'Slippage' im Handel definiert?", options: ["Ein technischer Übertragungsfehler", "Die Differenz zwischen gewünschtem und tatsächlichem Ausführungspreis", "Eine spezifische Form der Trendfolgestrategie", "Ein Indikator für langfristige Volatilität"], correct: 1, fb: "Slippage tritt verstärkt in volatilen Marktphasen oder bei geringer Liquidität auf." },
        { category: "Mindset", q: "Was beschreibt das sogenannte 'Marktsentiment'?", options: ["Rein technische Datenauswertungen", "Die psychologische Grundstimmung der Marktteilnehmer", "Die Rechenleistung von Handelsalgorithmen", "Die Arbeit aller makroökonomischen Kennzahlen"], correct: 1, fb: "Das Sentiment gibt Aufschluss darüber, ob Angst oder Gier den Markt dominiert." },
        { category: "Basics", q: "Welches Merkmal ist bei der Brokerwahl für gehebelte Produkte von kritischer Bedeutung?", options: ["Der Ausschluss der Nachschusspflicht", "Die Bereitstellung maximaler Hebelverhältnisse", "Die Frequenz täglicher Marktnachrichten", "Der Zugang zu exklusiven VIP-Vorteilen"], correct: 0, fb: "Der Verzicht auf Nachschusspflicht schützt Sie vor Verlusten, die Ihr Guthaben übersteigen." }
    ],
    level3: [
        { category: "Market", q: "Wie definiert sich ein technisch intakter Aufwärtstrend?", options: ["Eine Abfolge ausschließlich grüner Kerzen", "Das Handelsvolumen steigt kontinuierlich an", "Eine Struktur aus höheren Hochs und höheren Tiefs", "Eine Performance von über 50 Prozent"], correct: 2, fb: "Ein Trend bleibt bestehen, solange die Abfolge steigender Extrempunkte intakt ist." },
        { category: "Market", q: "Durch welches Ereignis gilt eine Trendstruktur formal als gebrochen?", options: ["Eintritt in eine temporäre Seitwärtsphase", "Rückgang der Volatilität während der Handelszeiten", "Die Ausbildung eines tieferen Tiefs (Lower Low)", "Das Erreichen eines neuen Allzeithochs"], correct: 2, fb: "Ein Schlusskurs unterhalb des letzten relevanten Tiefs signalisiert das Ende des Trends." },
        { category: "Market", q: "Welchen Stellenwert nimmt der Primärtrend in der professionellen Analyse ein?", options: ["Orientierung am kurzfristigen 5-Minuten-Chart", "Bestimmung des übergeordneten, langfristigen Gesamtbildes", "Analyse der heutigen Intraday-Bewegung", "Spezifische Untersuchung von Kryptowährungen"], correct: 1, fb: "Der Primärtrend gibt die strategische Richtung für alle untergeordneten Analysen vor." },
        { category: "Basics", q: "Was konkretisiert die '1-Prozent-Regel' im Risikomanagement?", options: ["Die Erzielung von 1% Rendite pro Handelstag", "Die Begrenzung des Risikos auf maximal 1% des Gesamtkapitals pro Trade", "Dass lediglich 1% der Trades verlustbehaftet sein dürfen", "Die Beschränkung des Portfolios auf ein einzelnes Asset"], correct: 1, fb: "Diese Regel schützt das Gesamtkapital effektiv vor kumulierten Verlustserien." },
        { category: "Basics", q: "Welches Ziel verfolgt eine fundierte Risk-On / Risk-Off Analyse?", options: ["Die Suche nach unterbewerteten Einzelaktien", "Die Bewertung der globalen Risikobereitschaft der institutionellen Anleger", "Die Festlegung der optimalen Hebelwirkung", "Der Vergleich anfallender Transaktionsgebühren"], correct: 1, fb: "Sie gibt Aufschluss darüber, ob Kapital in Risiko-Assets oder Sicherheits-Assets fließt." },
        { category: "Mindset", q: "Weshalb wiederholen sich spezifische Chartmuster über Jahrzehnte hinweg?", options: ["Aufgrund einheitlicher Programmierungen von Algorithmen", "Infolge politischer Vorgaben der Zentralbanken", "Als Resultat rein zufälliger Marktbewegungen", "Aufgrund der konstanten menschlichen Psychologie"], correct: 3, fb: "Emotionale Reaktionsmuster wie Angst und Gier bleiben zeitlos und bilden die Basis der Charttechnik." },
        { category: "Mindset", q: "Was charakterisiert das Phänomen des 'Revenge Trading'?", options: ["Besonders geduldiges Abwarten auf Handelssignale", "Emotional gesteuertes Handeln nach einem Verlustereignis", "Breite Diversifikation über verschiedene Anlageklassen", "Konsequentes Handeln entgegen dem vorherrschenden Trend"], correct: 1, fb: "Rache-Trading führt meist zu irrationalen Entscheidungen und erhöhtem Kapitalverlust." },
        { category: "Mindset", q: "Welcher Faktor ist statistisch gesehen entscheidend für den langfristigen Tradingerfolg?", options: ["Eine Trefferquote von nahezu 100 Prozent", "Die Rechengeschwindigkeit der Hardware", "Ein konsequentes Risk- und Money-Management", "Der schnellstmögliche Zugang zu Marktnachrichten"], correct: 2, fb: "Erfolgreiche Trader managen primär ihr Risiko, nicht ihre Gewinnprognosen." },
        { category: "Market", q: "Welcher Faktor wird bei der Darstellung eines Point & Figure Charts explizit ignoriert?", options: ["Die Zeitachse", "Die Preisbewegung", "Das Handelsvolumen", "Die Trendrichtung"], correct: 0, fb: "Point & Figure Charts fokussieren sich ausschließlich auf die reine Preisaktion." },
        { category: "Market", q: "Was ist das primäre Ziel der technischen Analyse?", options: ["Die Nutzung statistischer Wahrscheinlichkeiten für Handelsentscheidungen", "Die exakte Vorhersage zukünftiger Kursverläufe", "Der Nachweis der eigenen Marktmeinung", "Die vollständige Ignoranz fundamentaler Daten"], correct: 0, fb: "Trading ist kein Vorhersage-Geschäft, sondern das Handeln von Wahrscheinlichkeitsvorteilen." },
        { category: "Basics", q: "Wie hoch beziffert sich das Risiko bei einem Einsatz von 1% auf ein Gesamtkapital von 10.000 Euro?", options: ["10 Euro", "100 Euro", "1.000 Euro", "500 Euro"], correct: 1, fb: "Korrekt. Das Risiko pro Position beträgt in diesem Fall 100 Euro." },
        { category: "Market", q: "Welche Marktsituation folgt häufig auf einen signifikanten Trendbruch?", options: ["Ein unmittelbar einsetzender Gegentrend", "Eine Seitwärtsphase oder ein grundlegender Trendwechsel", "Die sofortige Einstellung des aktiven Handels", "Es ergeben sich keinerlei Auswirkungen"], correct: 1, fb: "Nach einem Trendbruch tritt der Markt oft in eine Phase der Neuorientierung ein." },
        { category: "Mindset", q: "Warum gilt die Führung eines Handelsjournals für professionelle Trader als obligatorisch?", options: ["Als Nachweisdokument für Kreditinstitute", "Aufgrund gesetzlicher steuerlicher Vorschriften", "Zur objektiven Analyse von Fehlern und zur Prozessoptimierung", "Als rein statistischer Zeitvertreib"], correct: 2, fb: "Ein Journal ist das wichtigste Werkzeug für die persönliche und fachliche Weiterentwicklung." },
        { category: "Market", q: "Worauf liegt der Fokus der Fundamentalanalyse im Kern?", options: ["Identifikation von Chartmustern und Indikatoren", "Nutzung automatisierter Trading-Bots", "Ableitung von Signalen aus gleitenden Durchschnitten", "Ermittlung des Inneren Wertes auf Basis wirtschaftlicher Daten"], correct: 3, fb: "Die Fundamentalanalyse untersucht die Ursachen hinter den Preisbewegungen." },
        { category: "Basics", q: "Welchen strategischen Vorteil bietet eine hohe Kapitaleffizienz im Trading?", options: ["Vollständige Befreiung von der Steuerlast", "Erhöhte Sicherheit durch Verzicht auf Hebel", "Geringere Eigenkapitalbindung bei kontrolliertem Risiko", "Nutzung maximaler Hebel ohne Risikomanagement"], correct: 2, fb: "Kapitaleffizienz erlaubt eine optimale Diversifikation bei gleichzeitigem Kapitalschutz." }
    ]
};

let currentLvl = 1, currentQIdx = 0, score = 0, userName = "", sessionScore = 0, isAnswering = false;
let totalErrorCounts = { "Basics": 0, "Market": 0, "Mindset": 0 };
let sessionStats = { "Basics": 0, "Market": 0, "Mindset": 0, "totalPerCat": { "Basics": 0, "Market": 0, "Mindset": 0 } };

function render() {
    const cont = document.getElementById('quiz-content');
    const statusText = document.getElementById('quizStatusText');

    if (!userName) {
        cont.innerHTML = `<h3>Akademie Quiz</h3><p>Verrate uns deinen Namen für die Analyse:</p><input type="text" id="userNameInput" placeholder="Dein Name..."><button onclick="startQ()" class="primary-btn">Quiz starten</button>`;
        if(statusText) statusText.style.display = 'none';
        return;
    }

    if(statusText) statusText.style.display = 'block';
    const q = quizData[`level${currentLvl}`][currentQIdx];
    
    if (!sessionStats.totalPerCat[q.category]) sessionStats.totalPerCat[q.category] = 0;
    sessionStats.totalPerCat[q.category]++;

    document.getElementById('quiz-level-title').innerHTML = `Level ${currentLvl} <span class="score-pill">Punkte: ${score}</span>`;
    
    const totalQuestions = 45;
    const currentQuestionNum = ((currentLvl - 1) * 15) + (currentQIdx + 1);
    if(statusText) statusText.innerText = `Frage ${currentQuestionNum} von ${totalQuestions}`;

    document.getElementById('progressBar').style.width = `${(((currentLvl - 1) * 15 + currentQIdx) / 45) * 100}%`;
    
    let html = `<div class="fade-in"><h2 class="question-text">${q.q}</h2><div class="options-grid">`;
    q.options.forEach((o, i) => { html += `<div class="quiz-box" onclick="checkAnswer(${i})">${o}</div>`; });
    cont.innerHTML = html + `</div><div id="fb" class="feedback-area" style="display:none;"></div></div>`;
    isAnswering = false;
}

window.startQ = () => { 
    const val = document.getElementById('userNameInput').value.trim();
    if(!val) return;
    userName = val; render(); 
};

window.checkAnswer = (i) => {
    if (isAnswering) return; 
    isAnswering = true; 

    const q = quizData[`level${currentLvl}`][currentQIdx];
    const boxes = document.querySelectorAll('.quiz-box');
    const fbDiv = document.getElementById('fb');

    boxes.forEach(b => b.style.pointerEvents = 'none');

    if (i === q.correct) { 
        score++; sessionScore++;
        sessionStats[q.category]++;
        boxes[i].classList.add('correct'); 
        fbDiv.innerHTML = "✅ <strong>Richtig!</strong> " + q.fb; 
    } else { 
        totalErrorCounts[q.category]++;
        boxes[i].classList.add('wrong');
        boxes[q.correct].classList.add('correct');
        fbDiv.innerHTML = "❌ <strong>Leider falsch.</strong> " + q.fb; 
        boxes[i].style.animation = "shake 0.4s ease";
    }

    fbDiv.style.display = 'block';

    setTimeout(() => {
        if (currentQIdx >= 14) { showLevelSummary(); } 
        else { currentQIdx++; render(); }
    }, 3500);
};

function showLevelSummary() {
    const cont = document.getElementById('quiz-content');
    const statusText = document.getElementById('quizStatusText');
    if(statusText) statusText.style.display = 'none';

    let personalNote = (sessionScore >= 13) ? `Hervorragend, ${userName}!` : (sessionScore >= 10) ? `Gute Arbeit, ${userName}.` : `Nicht verzagen, ${userName}.`;

    let statsHtml = '<div class="category-summary">';
    for (const cat in sessionStats.totalPerCat) {
        const perc = Math.round((sessionStats[cat] / sessionStats.totalPerCat[cat]) * 100) || 0;
        statsHtml += `<div class="category-stat-row"><div class="category-label"><span>${cat}</span><span>${perc}%</span></div><div class="category-bar-bg"><div class="category-bar-fill" style="width:${perc}%"></div></div></div>`;
    }
    statsHtml += '</div>';

    cont.innerHTML = `<div class="fade-in" style="text-align:center;"><h3>Level ${currentLvl} abgeschlossen!</h3><p class="personal-note">"${personalNote}"</p>${statsHtml}<button onclick="${currentLvl < 3 ? 'nextLevel()' : 'finishQuiz()'}" class="primary-btn">${currentLvl < 3 ? 'Weiter zu Level ' + (currentLvl+1) : 'Zur Mentor-Analyse'}</button></div>`;
}

window.nextLevel = () => { 
    currentLvl++; currentQIdx = 0; sessionScore = 0;
    sessionStats = { "Basics": 0, "Market": 0, "Mindset": 0, "totalPerCat": { "Basics": 0, "Market": 0, "Mindset": 0 } };
    render(); 
};

async function finishQuiz() {
    const cont = document.getElementById('quiz-content');
    cont.innerHTML = `<div class="fade-in"><h3>Dein Mentor wertet jetzt alles aus...</h3></div>`;
    const summary = `Basics Fehler: ${totalErrorCounts.Basics}, Market Fehler: ${totalErrorCounts.Market}, Mindset Fehler: ${totalErrorCounts.Mindset}`;
    
    const fd = new FormData();
    fd.append('action', 'get_ai_feedback');
    fd.append('user_name', userName);
    fd.append('category_stats', summary);
    fd.append('nonce', investaloSettings.nonce);
    
    try {
        const resp = await fetch(investaloSettings.ajax_url, { method: 'POST', body: fd });
        const res = await resp.json();
        showFinalEnd(res.data);
    } catch (e) { showFinalEnd("Klasse Leistung! Bleib am Ball."); }
}

function showFinalEnd(aiTxt) {
    document.getElementById('quiz-content').innerHTML = `<div class="fade-in" style="text-align:center;"><h2>Akademie-Abschluss</h2><div class="mentor-feedback-box">${aiTxt}</div><p>Gesamtergebnis: <strong>${score} von 45 Punkten</strong></p><button onclick="location.reload()" class="primary-btn">Neustart</button></div>`;
    document.getElementById('progressBar').style.width = "100%";
}

document.addEventListener('DOMContentLoaded', render);
