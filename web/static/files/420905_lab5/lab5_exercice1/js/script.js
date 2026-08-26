// Variables globales
let gJeSuisFatigue = false;
let gPrixPantalons = 50;
let gAliment = "brocoli";

// Les écouteurs d'événements sont déjà complétés !
function init(){

    document.querySelector(".bouton1").addEventListener("click", switchFatigue);
    document.querySelector(".bouton2").addEventListener("click", switchAliment);
    document.querySelector(".bouton3").addEventListener("click", reduirePrix);
    document.querySelector(".bouton4").addEventListener("click", augmenterPrix);

    document.querySelector(".bouton5").addEventListener("click", messageFatigue);
    document.querySelector(".bouton6").addEventListener("click", messagePrix);
    document.querySelector(".bouton7").addEventListener("click", messageAliment);

}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 1 : Compléter messageFatigue()
//
// - Si gJeSuisFatigue contient true, on remplace le contenu textuel de 
//   l'élément .texte par "Voici la solution : ☕"
//
// Pour tester cette fonction, jouez avec la valeur de gJeSuisFatigue. Quand
// la variable vaut false, il ne devrait rien se passer en cliquant sur le
// bouton Fatigue. Quand la variable vaut true, le message devrait apparaître 
// à la place du sablier ⌛
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
function messageFatigue(){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 2 : Compléter messagePrix()
//
// - Si gPrixPantalons est plus grand ou égal à 100, le texte de .texte
//   est remplacé par "Je vais chercher un rip-off cheap sur Amazon à la place 😏"
// - De plus, si gPrixPantalons est inférieur à 30, le texte de .texte est
//   remplacé par "Wow c'est un beau prix. C'est sus ඞ".
//
// Lorsque vous testerez, jouez avec la valeur de gPrixPantalons. à 100 et
// plus, vous aurez le message qui mentionne Amazon. À moins de 30 (donc 20
// ou moins vu que la variable fait des bonds de 10) vous aurez le message 
// qui mentionne que c'est sus.
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
function messagePrix(){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 3 : Compléter messageAliment()
//
// - Si gAliment vaut "brocoli", on remplace le texte de .texte par 
//   "Miam. Un des aliments avec le plus de nutriments 🥦".
// - Si gAliment ne vaut pas "brocoli", on remplace le texte de .texte par
//   "Huh, c'est mieux le brocoli 🚫🍫".
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
function messageAliment(){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// Ne pas toucher le code à partir d'ici. Ce sont seulement les fonctions qui
// permettent de modifier les valeurs des variables globales en jouant avec
// les boutons dans la pages.
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

function switchFatigue(){

    gJeSuisFatigue = !gJeSuisFatigue;
    document.querySelector(".jeSuisFatigue").textContent = gJeSuisFatigue;
    document.querySelector(".texte").textContent = "⌛";

}

function switchAliment(){

    gAliment = gAliment == "brocoli" ? "chocolat" : "brocoli";
    document.querySelector(".aliment").textContent = gAliment;
    document.querySelector(".texte").textContent = "⌛";

}

function reduirePrix(){

    gPrixPantalons -= 10;
    document.querySelector(".prix").textContent = gPrixPantalons;
    document.querySelector(".texte").textContent = "⌛";

}

function augmenterPrix(){

    gPrixPantalons += 10;
    document.querySelector(".prix").textContent = gPrixPantalons;
    document.querySelector(".texte").textContent = "⌛";

}