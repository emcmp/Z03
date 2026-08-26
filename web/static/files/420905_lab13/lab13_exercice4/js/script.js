let gArgent = 20;

function init(){

    document.querySelector(".play").addEventListener("click", jouer);

}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 1 : Compléter choisirSymboleAleatoire()
//
// Dans 33% des cas : retourne "🍆"
// Dans 33% des cas : retourne "🍑"
// Dans 34% des cas : retourne "🗿"
//
// Si vous avez bien codé cette fonction, les roulettes de la machine 
// s'arrêteront aléatoirement sur un des trois symboles.
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

function choisirSymboleAleatoire(){

    return "🍑"; // À retirer ou remplacer

}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 2 : Compléter calculerGain()
//
// Cette fonction RETOURNE le montant gagné selon le résultat de la machine :
//
// - Tous les symboles sont identiques :
//      - Tous des "🍆" -> 5
//      - Tous des "🍑" -> 10
//      - Tous des "🗿" -> 100
//
// - Deux symboles ADJACENTS (collés, côte-à-côte) sont identiques : on retourne 1.
// - Sinon : on retourne 0.
//
// ⭐ Défi : Utiliser seulement 6 fois l'opérateur ==
//
// Si vous avez bien codé cette fonction, les gains de la machine seront 
// cohérents avec ceux mentionnés plus haut ↑
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

function calculerGain(symbole1, symbole2, symbole3){

    return 0; // À retirer ou remplacer

}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// Ne pas modifier à partir d'ici
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

let slots = [
    ["eggplant", "moyai", "peach", "eggplant", "moyai", "peach"],
    ["peach", "moyai", "eggplant", "peach", "moyai", "eggplant"],
    ["peach", "eggplant", "peach", "moyai", "eggplant", "moyai"]
];

let index = [0, 0, 0];
let active = [false, false, false];
let chosen = [null, null, null];

let interval = null;
let buffer = 0;

function jouer(){

    if(active[2]) return;

    document.querySelector(".message").textContent = "";
    gArgent -= 1;
    document.querySelector(".argent").textContent = `Argent : ${gArgent} $`;
    buffer = 20;
    interval = setInterval(update,120);
    for(let i = 0; i < chosen.length; i++){
        chosen[i] = choisirSymboleAleatoire();
        active[i] = true;
    }

}

function update(){

    buffer -= 1;
    if(active[0] && buffer < 15) tryToStop(0);
    if(active[1] && buffer < 10) tryToStop(1);
    if(active[2] && buffer < 5) tryToStop(2);

    for(let i = 1; i < 4; i++){
        if(active[i - 1] && (i != 2 || buffer <= 18) && (i != 3 || buffer <= 16)) slots[i-1].push(slots[i-1].splice(0, 1)[0]);
        for(let j = 1; j < 6; j++){
            document.querySelector(".slot" + i + j).src = "images/" + slots[i - 1][j - 1] + ".png";
        }
    }

    if(!(active[0] || active[1] || active[2])){
        end();
    }

}

function tryToStop(index){

    if(getWord(chosen[index]) == slots[index][2]){
        active[index] = false;
    }
    
}

function end(){

    clearInterval(interval);
    let montant = calculerGain(chosen[0], chosen[1], chosen[2]);
    if(montant > 0){
        gArgent += montant;
        document.querySelector(".argent").textContent = `Argent : ${gArgent} $`;
        document.querySelector(".message").textContent = `+${montant} $ 🥳`;
    } 
    

}

function getWord(emoji){

    switch(emoji){
        case "🗿" : return "moyai";
        case "🍑" : return "peach";
        case "🍆" : return "eggplant";
    }

}