// Variables globales
let gAge = 15;
let gManegePourAdultes = false;
let gNom = "Yolande";
let gStyle = "Flashy";

// Les écouteurs d'événements sont déjà complétés !
function init(){

    document.querySelector(".bouton1").addEventListener("click", reduireAge);
    document.querySelector(".bouton2").addEventListener("click", augmenterAge);
    document.querySelector(".bouton3").addEventListener("click", changerNom);
    document.querySelector(".bouton4").addEventListener("click", changerStyle);

    document.querySelector(".bouton6").addEventListener("click", sinon1);
    document.querySelector(".bouton7").addEventListener("click", sinon2);
    document.querySelector(".bouton8").addEventListener("click", sinon3);

}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 1 : Compléter sinon1()
//
// - Si gNom contient "Yolande", le texte de .texte devient "Yo Yolande ! 👋". 
//   Sinon, le texte devient "Allo Ali ! 👋".
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

function sinon1(){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 2 : Compléter sinon2()
//
// - Si gAge est inférieur à 13, le texte de .texte sera 
//   "Pas de tour de manège pour toi ! 😭". 
//   Sinon, le texte sera "Bon tour de manège ! 🎢".
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

function sinon2(){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 3 : Compléter la fonction sinon3()
//
// - Si gStyle vaut "Flashy", on veut les styles suivants pour .texte : 
//   bordure de couleur "magenta", couleur de fond "cyan" et texte de couleur
//   "crimson".
//   (Utilisez style.borderColor, style.color et style.backgroundColor)
// - Sinon, on veut les styles suivants : bordure de couleur "black", couleur 
//   de fond "white" et texte de couleur "black".
//
// - De plus, dans tous les cas, APRÈS le if else, le texte de la boîte est 
//   changé pour "Le style X a été appliqué.", où X doit être remplacé par la 
//   valeur de la variable gStyle à l'aide d'une concaténation. (Ce qui
//   donnera quelque chose comme "Le style Flashy a été appliqué.")
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

function sinon3(){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// Ne pas toucher le code à partir d'ici. Ce sont seulement les fonctions qui
// permettent de modifier les valeurs des variables globales en jouant avec
// les boutons dans la pages.
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

function boutonsVariables(){
    document.querySelector(".bouton1").addEventListener("click", reduireAge);
    document.querySelector(".bouton2").addEventListener("click", augmenterAge);
    document.querySelector(".bouton3").addEventListener("click", changerNom);
    document.querySelector(".bouton4").addEventListener("click", changerManege);
    document.querySelector(".bouton5").addEventListener("click", changerStyle);
}

function reduireAge(){
    gAge -= 1;
    document.querySelector(".age").textContent = gAge;
    document.querySelector(".texte").textContent = "⌛";
}

function augmenterAge(){
    gAge += 1;
    document.querySelector(".age").textContent = gAge;
    document.querySelector(".texte").textContent = "⌛";
}

function changerNom(){
    gNom = gNom == "Yolande" ? "Ali" : "Yolande";
    document.querySelector(".nom").textContent = gNom;
    document.querySelector(".texte").textContent = "⌛";
}

function changerStyle(){
    gStyle = gStyle == "Flashy" ? "Sobre" : "Flashy";
    document.querySelector(".style").textContent = gStyle;
    document.querySelector(".texte").textContent = "⌛";
}