// --- CONFIGURATION : 100 QUESTIONS ---
const quizData = [
  { q: "Quel est le plus grand pays du monde ?", r: ["Russie", "Canada"], c: "Russie" },
  { q: "Quelle est la capitale du Bénin ?", r: ["Cotonou", "Porto-Novo"], c: "Porto-Novo" },
  { q: "Qui a découvert l'Amérique en 1492 ?", r: ["Christophe Colomb", "Vasco de Gama"], c: "Christophe Colomb" },
  { q: "Sur quel continent se trouve l'Égypte ?", r: ["Asie", "Afrique"], c: "Afrique" },
  { q: "Quelle est la capitale de la France ?", r: ["Marseille", "Paris"], c: "Paris" },
  { q: "Quel fleuve traverse l'Égypte ?", r: ["Le Nil", "L'Amazone"], c: "Le Nil" },
  { q: "Dans quel pays se trouve la Tour de Pise ?", r: ["Italie", "Espagne"], c: "Italie" },
  { q: "Quelle est la capitale de l'Allemagne ?", r: ["Munich", "Berlin"], c: "Berlin" },
  { q: "Quel océan sépare l'Europe de l'Amérique ?", r: ["Atlantique", "Pacifique"], c: "Atlantique" },
  { q: "Qui était Nelson Mandela ?", r: ["Un président", "Un chanteur"], c: "Un président" },
  { q: "Quel pays a la forme d'une botte ?", r: ["Italie", "Grèce"], c: "Italie" },
  { q: "Quelle est la capitale du Japon ?", r: ["Séoul", "Tokyo"], c: "Tokyo" },
  { q: "Où se trouvent les pyramides de Gizeh ?", r: ["Égypte", "Maroc"], c: "Égypte" },
  { q: "Quel est le plus petit pays du monde ?", r: ["Monaco", "Vatican"], c: "Vatican" },
  { q: "En quelle année a débuté la 1ère Guerre Mondiale ?", r: ["1914", "1939"], c: "1914" },
  { q: "Quel pays est surnommé le Pays du Soleil Levant ?", r: ["Chine", "Japon"], c: "Japon" },
  { q: "Quelle est la capitale des États-Unis ?", r: ["New York", "Washington D.C."], c: "Washington D.C." },
  { q: "Où se trouve la Statue de la Liberté ?", r: ["New York", "Paris"], c: "New York" },
  { q: "Quel est le plus long fleuve du monde ?", r: ["Le Nil", "L'Amazone"], c: "L'Amazone" },
  { q: "Quelle est la capitale du Sénégal ?", r: ["Dakar", "Abidjan"], c: "Dakar" },
  { q: "Quel est le symbole chimique de l'Eau ?", r: ["CO2", "H2O"], c: "H2O" },
  { q: "Quelle planète est la plus proche du Soleil ?", r: ["Vénus", "Mercure"], c: "Mercure" },
  { q: "Quel organe pompe le sang ?", r: ["Le Cœur", "Le Foie"], c: "Le Cœur" },
  { q: "Quel gaz respirons-nous pour vivre ?", r: ["Azote", "Oxygène"], c: "Oxygène" },
  { q: "Combien font 7 x 8 ?", r: ["54", "56"], c: "56" },
  { q: "Quelle est la vitesse de la lumière (env.) ?", r: ["300 000 km/s", "150 000 km/s"], c: "300 000 km/s" },
  { q: "Quel métal est attiré par un aimant ?", r: ["Le Fer", "L'Aluminium"], c: "Le Fer" },
  { q: "Quelle planète a des anneaux visibles ?", r: ["Saturne", "Mars"], c: "Saturne" },
  { q: "Quel est le symbole de l'Or ?", r: ["Ag", "Au"], c: "Au" },
  { q: "Qui a inventé l'ampoule électrique ?", r: ["Edison", "Tesla"], c: "Edison" },
  { q: "Combien y a-t-il de planètes dans le système solaire ?", r: ["8", "9"], c: "8" },
  { q: "Quelle est la température d'ébullition de l'eau ?", r: ["90°C", "100°C"], c: "100°C" },
  { q: "Quel est l'os le plus long du corps humain ?", r: ["Fémur", "Tibia"], c: "Fémur" },
  { q: "De quel côté le Soleil se lève-t-il ?", r: ["Est", "Ouest"], c: "Est" },
  { q: "Quelle est la formule de la force (Newton) ?", r: ["F = m x a", "F = m + v"], c: "F = m x a" },
  { q: "Quel est le composant principal de l'air ?", r: ["Oxygène", "Azote"], c: "Azote" },
  { q: "Qui a formulé la loi de la gravité ?", r: ["Newton", "Einstein"], c: "Newton" },
  { q: "Quel est le centre d'un atome ?", r: ["Noyau", "Électron"], c: "Noyau" },
  { q: "L'énergie solaire vient de...", r: ["La Lune", "Le Soleil"], c: "Le Soleil" },
  { q: "Quel animal est un mammifère marin ?", r: ["Requin", "Baleine"], c: "Baleine" },
  { q: "Combien de C1 le Real Madrid a-t-il (record) ?", r: ["10", "15"], c: "15" },
  { q: "Quel joueur a le plus de Ballons d'Or ?", r: ["Messi", "Ronaldo"], c: "Messi" },
  { q: "Dans quel stade joue le Real Madrid ?", r: ["Camp Nou", "Bernabéu"], c: "Bernabéu" },
  { q: "Combien de temps dure un match de foot ?", r: ["80 min", "90 min"], c: "90 min" },
  { q: "Qui est le surnommé 'CR7' ?", r: ["Ronaldo", "Ronaldinho"], c: "Ronaldo" },
  { q: "Quel pays a gagné la Coupe du Monde 2022 ?", r: ["France", "Argentine"], c: "Argentine" },
  { q: "Qui est le meilleur buteur de l'histoire du Real ?", r: ["Raul", "Ronaldo"], c: "Ronaldo" },
  { q: "Quel sport joue LeBron James ?", r: ["Tennis", "Basket"], c: "Basket" },
  { q: "Combien de joueurs dans une équipe de Basket ?", r: ["5", "11"], c: "5" },
  { q: "Qui est le 'Roi' du football ?", r: ["Pelé", "Maradona"], c: "Pelé" },
  { q: "Quelle ville a accueilli les JO 2024 ?", r: ["Londres", "Paris"], c: "Paris" },
  { q: "Quel joueur porte le numéro 10 au Real (2025) ?", r: ["Modric", "Mbappé"], c: "Modric" },
  { q: "Quel est le nom de l'équipe du Bénin ?", r: ["Écureuils", "Guépards"], c: "Guépards" },
  { q: "Qui a gagné l'Euro 2024 ?", r: ["Espagne", "Angleterre"], c: "Espagne" },
  { q: "Combien de points vaut un panier à trois points ?", r: ["2", "3"], c: "3" },
  { q: "Quel est le sport de Novak Djokovic ?", r: ["Tennis", "Golf"], c: "Tennis" },
  { q: "Où se joue le tournoi de Roland-Garros ?", r: ["Paris", "Londres"], c: "Paris" },
  { q: "Quel pays a inventé le football ?", r: ["Brésil", "Angleterre"], c: "Angleterre" },
  { q: "Quel est le record du 100m (Bolt) ?", r: ["9.58s", "9.72s"], c: "9.58s" },
  { q: "Quelle équipe est la rivale du Real Madrid ?", r: ["Barcelone", "Milan"], c: "Barcelone" },
  { q: "Qui a dit 'Je pense, donc je suis' ?", r: ["Socrate", "Descartes"], c: "Descartes" },
  { q: "Complétez : 'L'union fait la...'", r: ["Force", "Joie"], c: "Force" },
  { q: "Qui a peint la Joconde ?", r: ["Vinci", "Picasso"], c: "Vinci" },
  { q: "Quel est l'auteur de 'Cendrillon' ?", r: ["Charles Perrault", "La Fontaine"], c: "Charles Perrault" },
  { q: "Qui a dit 'I have a dream' ?", r: ["Martin Luther King", "Malcolm X"], c: "Martin Luther King" },
  { q: "Quelle est la langue la plus parlée au monde ?", r: ["Anglais", "Mandarin"], c: "Mandarin" },
  { q: "Quel instrument joue Mozart ?", r: ["Piano", "Guitare"], c: "Piano" },
  { q: "Qui est le créateur de Facebook ?", r: ["Elon Musk", "Mark Zuckerberg"], c: "Mark Zuckerberg" },
  { q: "Quel est le premier mois de l'année ?", r: ["Janvier", "Février"], c: "Janvier" },
  { q: "Combien de jours y a-t-il dans une année bissextile ?", r: ["365", "366"], c: "366" },
  { q: "Qui est le génie de la relativité ?", r: ["Einstein", "Newton"], c: "Einstein" },
  { q: "Quelle couleur obtient-on en mélangeant Bleu et Jaune ?", r: ["Vert", "Orange"], c: "Vert" },
  { q: "Quel est le nom du bateau de Titanic ?", r: ["Olympia", "Titanic"], c: "Titanic" },
  { q: "Qui est l'auteur de Harry Potter ?", r: ["J.K. Rowling", "Stephen King"], c: "J.K. Rowling" },
  { q: "Quelle fête célèbre-t-on le 25 décembre ?", r: ["Noël", "Pâques"], c: "Noël" },
  { q: "Quel est l'animal le plus rapide au monde ?", r: ["Guépard", "Lion"], c: "Guépard" },
  { q: "Qui a peint le plafond de la Chapelle Sixtine ?", r: ["Michel-Ange", "Raphaël"], c: "Michel-Ange" },
  { q: "Quelle est la monnaie de l'Europe ?", r: ["Dollar", "Euro"], c: "Euro" },
  { q: "Combien de lettres y a-t-il dans l'alphabet ?", r: ["24", "26"], c: "26" },
  { q: "Qui est le dieu de la foudre (Grec) ?", r: ["Zeus", "Poséidon"], c: "Zeus" },
  { q: "Quel mois vient après Juillet ?", r: ["Août", "Septembre"], c: "Août" },
  { q: "Combien font 100 / 4 ?", r: ["20", "25"], c: "25" },
  { q: "Quelle est la couleur de l'émeraude ?", r: ["Rouge", "Vert"], c: "Vert" },
  { q: "Combien de faces a un cube ?", r: ["6", "8"], c: "6" },
  { q: "Quel animal produit du miel ?", r: ["Abeille", "Guêpe"], c: "Abeille" },
  { q: "Combien d'heures y a-t-il dans une journée ?", r: ["12", "24"], c: "24" },
  { q: "Quel est le cri du lion ?", r: ["Rugissement", "Hennissement"], c: "Rugissement" },
  { q: "Quel fruit donne le vin ?", r: ["Pomme", "Raisin"], c: "Raisin" },
  { q: "Combien font 15 + 15 + 15 ?", r: ["45", "50"], c: "45" },
  { q: "Quelle est la capitale de l'Espagne ?", r: ["Madrid", "Barcelone"], c: "Madrid" },
  { q: "Combien de secondes dans une minute ?", r: ["60", "100"], c: "60" },
  { q: "Quel est le métal des canettes de soda ?", r: ["Fer", "Aluminium"], c: "Aluminium" },
  { q: "Quel est le plus grand océan ?", r: ["Atlantique", "Pacifique"], c: "Pacifique" },
  { q: "Combien font 9 x 9 ?", r: ["72", "81"], c: "81" },
  { q: "Quel bois utilise-t-on pour faire du papier ?", r: ["Arbre", "Plastique"], c: "Arbre" },
  { q: "Quel est l'animal qui ne dort jamais ?", r: ["Dauphin", "Fourmi"], c: "Dauphin" },
  { q: "Qui est l'ennemi de Batman ?", r: ["Joker", "Luthor"], c: "Joker" },
  { q: "Quel est le pays du Taj Mahal ?", r: ["Inde", "Pakistan"], c: "Inde" },
  { q: "Combien de continents existe-t-il ?", r: ["5", "7"], c: "7" },
  { q: "Quelle est la capitale du Canada ?", r: ["Toronto", "Ottawa"], c: "Ottawa" }
];

// --- LOGIQUE DE NAVIGATION ---
let currentQIndex = 0;
let userScore = 0;
let userLevel = 1;

function navTo(screenId) {
  // Masquer tous les écrans
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  // Afficher l'écran demandé
  const target = document.getElementById(screenId);
  if(target) target.classList.add('active');
  
  // Si on va vers le jeu, on lance la première question
  if(screenId === 'screen-game') {
    currentQIndex = 0;
    userScore = 0;
    userLevel = 1;
    updateDisplay();
    loadQuestion();
  }
}

function toggleSettings(show) {
  document.getElementById('settings-overlay').style.display = show ? 'flex' : 'none';
}

// --- LOGIQUE DU JEU ---
function loadQuestion() {
  const qData = quizData[currentQIndex];
  const qTextElement = document.getElementById('q-text');
  const optionsGrid = document.getElementById('options-grid');
  
  if(!qTextElement || !optionsGrid) return;

  // Affichage du texte
  qTextElement.innerText = qData.q;
  
  // Barre de progression
  const progress = (currentQIndex / quizData.length) * 100;
  document.getElementById('progress-fill').style.width = progress + "%";

  // Nettoyage et création des boutons
  optionsGrid.innerHTML = "";
  qData.r.forEach(choice => {
    const btn = document.createElement('button');
    btn.className = "btn-sub choice-btn";
    btn.innerText = choice;
    btn.onclick = () => checkResponse(choice);
    optionsGrid.appendChild(btn);
  });
}

function checkResponse(answer) {
  const correct = quizData[currentQIndex].c;
  
  if(answer === correct) {
    userScore += 10;
    if(userScore % 50 === 0) userLevel++; // Monte de niveau tous les 50 pts
  }
  
  currentQIndex++;
  updateDisplay();

  if(currentQIndex < quizData.length) {
    loadQuestion();
  } else {
    alert("Félicitations ! Vous avez terminé le Quiz des Génies.\nScore final : " + userScore);
    navTo('screen-home');
  }
}

function updateDisplay() {
  const sVal = document.getElementById('score-val');
  const lVal = document.getElementById('lvl-val');
  if(sVal) sVal.innerText = userScore < 10 ? "0" + userScore : userScore;
  if(lVal) lVal.innerText = userLevel;
}
// --- SYSTÈME AUDIO ---
const sfxClick = document.getElementById('sound-click');
const sfxSuccess = document.getElementById('sound-success');
const sfxError = document.getElementById('sound-error');
const volSlider = document.getElementById('vol-fx');

// Fonction pour jouer un son avec le volume choisi
function playSound(sound) {
    let volume = volSlider ? volSlider.value / 100 : 0.5;
    sound.volume = volume;
    sound.currentTime = 0; // Recommence le son au début
    sound.play();
}

// --- MODIFICATION DE TA FONCTION DE RÉPONSE ---
function checkResponse(answer) {
  const correct = quizData[currentQIndex].c;
  
  if(answer === correct) {
    playSound(sfxSuccess); // Son de victoire !
    userScore += 10;
    if(userScore % 50 === 0) userLevel++;
  } else {
    playSound(sfxError); // Son d'erreur discret
  }
  
  currentQIndex++;
  updateDisplay();

  if(currentQIndex < quizData.length) {
    setTimeout(loadQuestion, 500); // Petit délai pour laisser le son finir
  } else {
    alert("Félicitations ! Score final : " + userScore);
    navTo('screen-home');
  }
}

// Ajoute aussi le son sur le bouton Commencer
function navTo(screenId) {
  playSound(sfxClick); // Son de clic menu
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(screenId);
  if(target) target.classList.add('active');
  
  if(screenId === 'screen-game') {
    currentQIndex = 0;
    userScore = 0;
    userLevel = 1;
    updateDisplay();
    loadQuestion();
  }
  }
   
