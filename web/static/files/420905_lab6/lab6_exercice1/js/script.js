// Variables globales
let gCelcius = 20;
let gCouleur = "bleu";
let gAimeCoder = false;
let gBesoinDiplome = false;

// Les écouteurs d'événements sont déjà complétés !
function init(){

    document.querySelector(".bouton1").addEventListener("click", reduireCelcius);
    document.querySelector(".bouton2").addEventListener("click", monterCelcius);
    document.querySelector(".bouton3").addEventListener("click", switchCouleur);
    document.querySelector(".bouton4").addEventListener("click", switchAimeCoder);
    document.querySelector(".bouton5").addEventListener("click", switchBesoinDiplome);

    document.querySelector(".bouton6").addEventListener("click", messageTemperature);
    document.querySelector(".bouton7").addEventListener("click", messageLabo);
    document.querySelector(".bouton8").addEventListener("click", messageCouleur);
    document.querySelector(".bouton9").addEventListener("click", messageCouleurMieux);

}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 1 : Compléter messageLabo()
//
// - Si gAimeCoder est true, on remplace le contenu textuel de .texte par 
//   "Faire ce labo m'amuse ! 🥳".
// - Sinon, si gBesoinDiplome est true, le texte sera 
//   "Il faut que je fasse ce labo 🤓".
// - Sinon, le texte sera "Byeeee *mic drop* 🎤".
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
function messageLabo(){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 2 : Compléter messageTemperature()
//
// - Si gCelcius vaut 30 ou plus, on remplace le texte de .texte par
//   "J'ai chaud 🥵".
// - Sinon, si gCelcius vaut 10 ou moins, le texte sera "J'ai froid 🥶".
// - Sinon, on ne fait rien. (Pas de else !)
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
function messageTemperature(){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 3 : Compléter messageCouleur()
//
// - Si gCouleur vaut "bleu", le texte de .texte deviendra 
//   "Ma couleur préférée : bleu".
// - Sinon, si gCouleur vaut "rouge", le texte sera "Ma couleur préférée : rouge".
// - Sinon, si gCouleur vaut "jaune", le texte sera "Ma couleur préférée : jaune".
// - Sinon, si gCouelur vaut "vert", le texte sera "Ma couleur préférée : vert".
// - Sinon, le texte sera "Ma couleur préférée : rose".
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
function messageCouleur(){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 4 : Compléter messageCouleurMieux()
//
// - Cette fonction fait exactement la même chose que la fonction précédente,
//   mais en mieux : remplacez le tas de if, else if, else ... par une seule
//   ligne de code qui utilise un template string et la variable gCouleur pour
//   afficher le bon message.
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
function messageCouleurMieux(){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// Ne pas toucher le code à partir d'ici. Ce sont seulement les fonctions qui
// permettent de modifier les valeurs des variables globales en jouant avec
// les boutons dans la pages.
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

function switchBesoinDiplome(){

    gBesoinDiplome = !gBesoinDiplome
    document.querySelector(".besoinDiplome").textContent = gBesoinDiplome;
    document.querySelector(".texte").textContent = "⌛";

}

function switchAimeCoder(){

    gAimeCoder = !gAimeCoder
    document.querySelector(".aimeCoder").textContent = gAimeCoder;
    document.querySelector(".texte").textContent = "⌛";

}

function switchCouleur(){

    gCouleur = gCouleur == "bleu" ? "rouge" :
        (gCouleur == "rouge" ? "jaune" :
        (gCouleur == "jaune" ? "vert" :
        (gCouleur == "vert" ? "rose" : "bleu")));
    document.querySelector(".couleur").textContent = gCouleur;
    document.querySelector(".texte").textContent = "⌛";

}

function reduireCelcius(){

    gCelcius -= 1;
    document.querySelector(".celcius").textContent = gCelcius;
    document.querySelector(".texte").textContent = "⌛";

}

function monterCelcius(){

    gCelcius += 1;
    document.querySelector(".celcius").textContent = gCelcius;
    document.querySelector(".texte").textContent = "⌛";

}