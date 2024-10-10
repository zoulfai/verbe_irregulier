const verbs = [
    
        { base: "arise", past: "arose", pastParticiple: "arisen", translation: "surgir" },
        { base: "awake", past: "awoke", pastParticiple: "awoken", translation: "se réveiller" },
        { base: "be", past: "was/were", pastParticiple: "been", translation: "être" },
        { base: "bear", past: "bore", pastParticiple: "borne", translation: "porter" },
        { base: "beat", past: "beat", pastParticiple: "beaten", translation: "battre" },
        { base: "become", past: "became", pastParticiple: "become", translation: "devenir" },
        { base: "begin", past: "began", pastParticiple: "begun", translation: "commencer" },
        { base: "bend", past: "bent", pastParticiple: "bent", translation: "plier" },
        { base: "bet", past: "bet", pastParticiple: "bet", translation: "parier" },
        { base: "bind", past: "bound", pastParticiple: "bound", translation: "lier" },
        { base: "bite", past: "bit", pastParticiple: "bitten", translation: "mordre" },
        { base: "bleed", past: "bled", pastParticiple: "bled", translation: "saigner" },
        { base: "blow", past: "blew", pastParticiple: "blown", translation: "souffler" },
        { base: "break", past: "broke", pastParticiple: "broken", translation: "casser" },
        { base: "bring", past: "brought", pastParticiple: "brought", translation: "apporter" },
        { base: "build", past: "built", pastParticiple: "built", translation: "construire" },
        { base: "burn", past: "burnt", pastParticiple: "burnt", translation: "brûler" },
        { base: "buy", past: "bought", pastParticiple: "bought", translation: "acheter" },
        { base: "catch", past: "caught", pastParticiple: "caught", translation: "attraper" },
        { base: "choose", past: "chose", pastParticiple: "chosen", translation: "choisir" },
        { base: "come", past: "came", pastParticiple: "come", translation: "venir" },
        { base: "cost", past: "cost", pastParticiple: "cost", translation: "coûter" },
        { base: "cut", past: "cut", pastParticiple: "cut", translation: "couper" },
        { base: "deal", past: "dealt", pastParticiple: "dealt", translation: "traiter" },
        { base: "dig", past: "dug", pastParticiple: "dug", translation: "creuser" },
        { base: "do", past: "did", pastParticiple: "done", translation: "faire" },
        { base: "draw", past: "drew", pastParticiple: "drawn", translation: "dessiner" },
        { base: "dream", past: "dreamt", pastParticiple: "dreamt", translation: "rêver" },
        { base: "drink", past: "drank", pastParticiple: "drunk", translation: "boire" },
        { base: "drive", past: "drove", pastParticiple: "driven", translation: "conduire" },
        { base: "eat", past: "ate", pastParticiple: "eaten", translation: "manger" },
        { base: "fall", past: "fell", pastParticiple: "fallen", translation: "tomber" },
        { base: "feed", past: "fed", pastParticiple: "fed", translation: "nourrir" },
        { base: "feel", past: "felt", pastParticiple: "felt", translation: "sentir" },
        { base: "fight", past: "fought", pastParticiple: "fought", translation: "combattre" },
        { base: "find", past: "found", pastParticiple: "found", translation: "trouver" },
        { base: "fly", past: "flew", pastParticiple: "flown", translation: "voler" },
        { base: "forbid", past: "forbade", pastParticiple: "forbidden", translation: "interdire" },
        { base: "forget", past: "forgot", pastParticiple: "forgotten", translation: "oublier" },
        { base: "forgive", past: "forgave", pastParticiple: "forgiven", translation: "pardonner" },
        { base: "freeze", past: "froze", pastParticiple: "frozen", translation: "geler" },
        { base: "get", past: "got", pastParticiple: "got/gotten", translation: "obtenir" },
        { base: "give", past: "gave", pastParticiple: "given", translation: "donner" },
        { base: "go", past: "went", pastParticiple: "gone", translation: "aller" },
        { base: "grow", past: "grew", pastParticiple: "grown", translation: "grandir" },
        { base: "hang", past: "hung", pastParticiple: "hung", translation: "pendre" },
        { base: "have", past: "had", pastParticiple: "had", translation: "avoir" },
        { base: "hear", past: "heard", pastParticiple: "heard", translation: "entendre" },
        { base: "hide", past: "hid", pastParticiple: "hidden", translation: "cacher" },
        { base: "hit", past: "hit", pastParticiple: "hit", translation: "frapper" },
        { base: "hold", past: "held", pastParticiple: "held", translation: "tenir" },
        { base: "hurt", past: "hurt", pastParticiple: "hurt", translation: "blesser" },
        { base: "keep", past: "kept", pastParticiple: "kept", translation: "garder" },
        { base: "know", past: "knew", pastParticiple: "known", translation: "savoir/connaître" },
        { base: "lay", past: "laid", pastParticiple: "laid", translation: "poser" },
        { base: "lead", past: "led", pastParticiple: "led", translation: "mener" },
        { base: "learn", past: "learnt", pastParticiple: "learnt", translation: "apprendre" },
        { base: "leave", past: "left", pastParticiple: "left", translation: "partir" },
        { base: "lend", past: "lent", pastParticiple: "lent", translation: "prêter" },
        { base: "let", past: "let", pastParticiple: "let", translation: "permettre" },
        { base: "lie", past: "lay", pastParticiple: "lain", translation: "être couché" },
        { base: "lose", past: "lost", pastParticiple: "lost", translation: "perdre" },
        { base: "make", past: "made", pastParticiple: "made", translation: "faire" },
        { base: "mean", past: "meant", pastParticiple: "meant", translation: "signifier" },
        { base: "meet", past: "met", pastParticiple: "met", translation: "rencontrer" },
        { base: "pay", past: "paid", pastParticiple: "paid", translation: "payer" },
        { base: "put", past: "put", pastParticiple: "put", translation: "mettre" },
        { base: "read", past: "read", pastParticiple: "read", translation: "lire" },
        { base: "ride", past: "rode", pastParticiple: "ridden", translation: "monter" },
        { base: "ring", past: "rang", pastParticiple: "rung", translation: "sonner" },
        { base: "rise", past: "rose", pastParticiple: "risen", translation: "s'élever" },
        { base: "run", past: "ran", pastParticiple: "run", translation: "courir" },
        { base: "say", past: "said", pastParticiple: "said", translation: "dire" },
        { base: "see", past: "saw", pastParticiple: "seen", translation: "voir" },
        { base: "seek", past: "sought", pastParticiple: "sought", translation: "chercher" },
        { base: "sell", past: "sold", pastParticiple: "sold", translation: "vendre" },
        { base: "send", past: "sent", pastParticiple: "sent", translation: "envoyer" },
        { base: "set", past: "set", pastParticiple: "set", translation: "fixer" },
        { base: "shake", past: "shook", pastParticiple: "shaken", translation: "secouer" },
        { base: "shine", past: "shone", pastParticiple: "shone", translation: "briller" },
        { base: "shoot", past: "shot", pastParticiple: "shot", translation: "tirer" },
        { base: "show", past: "showed", pastParticiple: "shown", translation: "montrer" },
        { base: "shut", past: "shut", pastParticiple: "shut", translation: "fermer" },
        { base: "sing", past: "sang", pastParticiple: "sung", translation: "chanter" },
        { base: "sit", past: "sat", pastParticiple: "sat", translation: "s'asseoir" },
        { base: "sleep", past: "slept", pastParticiple: "slept", translation: "dormir" },
        { base: "speak", past: "spoke", pastParticiple: "spoken", translation: "parler" },
        { base: "spend", past: "spent", pastParticiple: "spent", translation: "dépenser" },
        { base: "stand", past: "stood", pastParticiple: "stood", translation: "se tenir debout" },
        { base: "steal", past: "stole", pastParticiple: "stolen", translation: "voler" },
        { base: "stick", past: "stuck", pastParticiple: "stuck", translation: "coller" },
        { base: "strike", past: "struck", pastParticiple: "struck", translation: "frapper" },
        { base: "swear", past: "swore", pastParticiple: "sworn", translation: "jurer" },
        { base: "swim", past: "swam", pastParticiple: "swum", translation: "nager" },
        { base: "take", past: "took", pastParticiple: "taken", translation: "prendre" },
        { base: "teach", past: "taught", pastParticiple: "taught", translation: "enseigner" },
        { base: "tear", past: "tore", pastParticiple: "torn", translation: "déchirer" },
        { base: "tell", past: "told", pastParticiple: "told", translation: "dire" },
        { base: "think", past: "thought", pastParticiple: "thought", translation: "penser" },
        { base: "throw", past: "threw", pastParticiple: "thrown", translation: "jeter" },
        { base: "understand", past: "understood", pastParticiple: "understood", translation: "comprendre" },
        { base: "wake", past: "woke", pastParticiple: "woken", translation: "réveiller" },
        { base: "wear", past: "wore", pastParticiple: "worn", translation: "porter (un vêtement)" },
        { base: "win", past: "won", pastParticiple: "won", translation: "gagner" },
        { base: "write", past: "wrote", pastParticiple: "written", translation: "écrire" }
    
    
];

function loadVerbs() {
    const tableBody = document.getElementById("verbsTable");
    verbs.forEach((verb, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${verb.base}</td>
            <td><input type="text" id="past-${index}" placeholder="Prétérit" oninput="validateInput(${index}, 'past')"></td>
            <td><input type="text" id="participle-${index}" placeholder="Participe Passé" oninput="validateInput(${index}, 'participle')"></td>
            <td><input type="text" id="translation-${index}" placeholder="Traduction" oninput="validateInput(${index}, 'translation')"></td>
            <td id="result-${index}"></td>
        `;
        tableBody.appendChild(row);
    });
}

function validateInput(index, column) {
    const inputField = document.getElementById(`${column}-${index}`);
    const answer = inputField.value.trim().toLowerCase();
    const correctAnswer = verbs[index][column].toLowerCase();
    
    if (answer === correctAnswer) {
        inputField.style.backgroundColor = "#d4edda";  // Vert pour correct
    } else {
        inputField.style.backgroundColor = "#f8d7da";  // Rouge pour incorrect
    }
}

function checkAnswers() {
    let correctPast = 0;
    let correctParticiple = 0;
    let correctTranslation = 0;

    verbs.forEach((verb, index) => {
        const pastAnswer = document.getElementById(`past-${index}`).value.trim().toLowerCase();
        const participleAnswer = document.getElementById(`participle-${index}`).value.trim().toLowerCase();
        const translationAnswer = document.getElementById(`translation-${index}`).value.trim().toLowerCase();

        if (pastAnswer === verb.past.toLowerCase()) correctPast++;
        if (participleAnswer === verb.pastParticiple.toLowerCase()) correctParticiple++;
        if (translationAnswer === verb.translation.toLowerCase()) correctTranslation++;

        const resultCell = document.getElementById(`result-${index}`);
        resultCell.textContent = (pastAnswer === verb.past.toLowerCase() && 
                                  participleAnswer === verb.pastParticiple.toLowerCase() && 
                                  translationAnswer === verb.translation.toLowerCase()) ? "✅" : "❌";
    });

}

function showAllAnswers() {
    verbs.forEach((verb, index) => {
        document.getElementById(`past-${index}`).value = verb.past;
        document.getElementById(`participle-${index}`).value = verb.pastParticiple;
        document.getElementById(`translation-${index}`).value = verb.translation;

        // Met à jour la couleur des champs pour indiquer qu'ils sont corrects
        document.getElementById(`past-${index}`).style.backgroundColor = "#d4edda";
        document.getElementById(`participle-${index}`).style.backgroundColor = "#d4edda";
        document.getElementById(`translation-${index}`).style.backgroundColor = "#d4edda";
    });
}


// Fonctions existantes

function resetFields() {
    verbs.forEach((_, index) => {
        // Efface les valeurs des champs de saisie
        document.getElementById(`past-${index}`).value = "";
        document.getElementById(`participle-${index}`).value = "";
        document.getElementById(`translation-${index}`).value = "";

        // Rétablit la couleur de fond par défaut
        document.getElementById(`past-${index}`).style.backgroundColor = "";
        document.getElementById(`participle-${index}`).style.backgroundColor = "";
        document.getElementById(`translation-${index}`).style.backgroundColor = "";

        // Efface le résultat
        document.getElementById(`result-${index}`).textContent = "";
    });
}

window.onload = loadVerbs;
