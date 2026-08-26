// Variables globales
let gPrixPomme = 3;
let gPrixRaisin = 4;
let gPrixMelon = 5;
let gPortefeuille = 10;

// Les écouteurs d'événements sont déjà complétés !
function init(){

    document.querySelector(".bouton1").addEventListener("click", reduirePortefeuille);
    document.querySelector(".bouton2").addEventListener("click", augmenterPortefeuille);
    document.querySelector(".bouton3").addEventListener("click", reduirePrixPomme);
    document.querySelector(".bouton4").addEventListener("click", augmenterPrixPomme);
    document.querySelector(".bouton5").addEventListener("click", reduirePrixRaisin);
    document.querySelector(".bouton6").addEventListener("click", augmenterPrixRaisin);
    document.querySelector(".bouton7").addEventListener("click", reduirePrixMelon);
    document.querySelector(".bouton8").addEventListener("click", augmenterPrixMelon);

    document.querySelector(".bouton9").addEventListener("click", auMoinsUnPasCher);
    document.querySelector(".bouton10").addEventListener("click", tousChers);
    document.querySelector(".bouton11").addEventListener("click", tousMemePrix);
    document.querySelector(".bouton12").addEventListener("click", assezArgent);

}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 1 : Compléter auMoinsUnPasCher()
//
// - Si au moins un des trois fruits coûte 3 ou moins, on remplace le texte 
//   de l'élément .texte par "Certains prix sont supers 🙏".
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
function auMoinsUnPasCher(){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 2 : Compléter tousChers()
//
// - Si les trois fruits coûtent plus que 5, le texte est remplacé par 
//   "aaaaaaa les prix sont scandaleux ! 😠".
// - Sinon, le texte est remplacé par "Les prix sont pas pires 🤔".
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
function tousChers(){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 3 : Compléter tousMemePrix()
//
// - Si les trois fruits ont le même prix, le message affiché dans .texte
//   est "Huh pas très originaux ces prix 😨",
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
function tousMemePrix(){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 4 : Compléter assezArgent()
//
// - Si j'ai assez d'argent dans mon portefeuille pour acheter 3 pommes, le
//   message dans .texte sera "Je suis un client très satisfait 🫃".
// - Sinon, si j'ai assez d'argent pour acheter 2 raisins OU 1 melon, le
//   message sera "Je suis un client un peu satisfait 🫃".
// - Sinon, le message sera "Je suis un client insatisfait 🦴".
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
function assezArgent(){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// Ne pas toucher le code à partir d'ici. Ce sont seulement les fonctions qui
// permettent de modifier les valeurs des variables globales en jouant avec
// les boutons dans la pages.
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

function reduirePortefeuille(){

    gPortefeuille -= 1;
    document.querySelector(".portefeuille").textContent = gPortefeuille;
    document.querySelector(".texte").textContent = "⌛";

}

function augmenterPortefeuille(){

    gPortefeuille += 1;
    document.querySelector(".portefeuille").textContent = gPortefeuille;
    document.querySelector(".texte").textContent = "⌛";

}

function reduirePrixPomme(){

    gPrixPomme -= 1;
    document.querySelector(".prixPomme").textContent = gPrixPomme;
    document.querySelector(".texte").textContent = "⌛";

}

function augmenterPrixPomme(){

    gPrixPomme += 1;
    document.querySelector(".prixPomme").textContent = gPrixPomme;
    document.querySelector(".texte").textContent = "⌛";

}

function reduirePrixRaisin(){

    gPrixRaisin -= 1;
    document.querySelector(".prixRaisin").textContent = gPrixRaisin;
    document.querySelector(".texte").textContent = "⌛";

}

function augmenterPrixRaisin(){

    gPrixRaisin += 1;
    document.querySelector(".prixRaisin").textContent = gPrixRaisin;
    document.querySelector(".texte").textContent = "⌛";

}

function reduirePrixMelon(){

    gPrixMelon -= 1;
    document.querySelector(".prixMelon").textContent = gPrixMelon;
    document.querySelector(".texte").textContent = "⌛";

}

function augmenterPrixMelon(){

    gPrixMelon += 1;
    document.querySelector(".prixMelon").textContent = gPrixMelon;
    document.querySelector(".texte").textContent = "⌛";

}