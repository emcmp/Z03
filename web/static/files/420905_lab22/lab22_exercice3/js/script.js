// Variables globales
let gNbConjoints = 0;
let gElementTexte;
let gSituation = "incendie";

// Écouteurs d'événements
function init(){

    gElementTexte = document.querySelector(".texte");

    document.querySelector(".bouton1").addEventListener("click", augmenterNbConjoints);
    document.querySelector(".bouton2").addEventListener("click", reduireNbConjoints);
    document.querySelector(".bouton3").addEventListener("click", changerSituation);

    document.querySelector(".boutonA").addEventListener("click", messageSituation);
    document.querySelector(".boutonB").addEventListener("click", messageAmis);

}

// ⭐ ATTENTION ! Pas le droit d'utiliser de if / else / else if pour ces TODOs !

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 1 : Compléter messageSituation()
//
// - Selon la valeur de gSituation, on met un texte différent dans .texte
//      → "incendie" : "🔥 aaaaaaaa 🔥"
//      → "pandémie" : "VITE je dois acheter du papier de toilettes et réinstaller Zoom !! 🧻"
//      → "grève" : "🕺 Pas d'école yeeepee ! 🕺"
//
// Si vous voulez, au lieu d'utiliser document.querySelector(".texte").texContent = ...,
// vous pouvez utiliser gElementTexte.textContent = ...
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
function messageSituation(){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 2 : Compléter messageAmis()
//
// Selon la valeur de gNbConjoints, on met un message différent dans .texte :
//      → 0 : "Es-tu libre jeudi soir à 21h30 ? 🌙"
//      → 1 : "Haha, tant pis alors 💍"
//      → 2 : "Tant que vous êtes heureux ! 👤👤👤"
//      → Toute autre valeur : "Wow euh. Vous avez un lit king au moins ? 🛌"
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
function messageAmis(){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// Ne pas toucher au code à partir d'ici
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

function augmenterNbConjoints(){
    gNbConjoints = Math.max(0, gNbConjoints - 1);
    document.querySelector("#nbConjoints").textContent = gNbConjoints;
    document.querySelector(".texte").textContent = "⏳";
}

function reduireNbConjoints(){
    gNbConjoints += 1;
    document.querySelector("#nbConjoints").textContent = gNbConjoints;
    document.querySelector(".texte").textContent = "⏳";
}

function changerSituation(){
    gSituation = gSituation == "incendie" ? "pandémie" : 
    (gSituation == "pandémie" ? "grève" : "incendie");
    document.querySelector("#situation").textContent = gSituation;
    document.querySelector(".texte").textContent = "⏳";
}