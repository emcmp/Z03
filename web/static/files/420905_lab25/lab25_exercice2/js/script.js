// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 1 : Éliminer les répétitions
//
// Identifiez les bouts de code répétitifs et modifiez le code en utilisant
// les bonnes stratégies. (boucles, fonctions et / ou déplacement de code)
//
// À priorio, il y a :
// - Une boucle à ajouter.
// - Une fonction à créer. (Possible que vous en fassiez plusieurs, mais il
//   y en a une qui est beaucoup plus saillante)
// - Un groupe de blocs conditionnels à modifier.
//
// ⛔ Assurez-vous que la page fonctionne encore comme avant après avoir
// fait vos modifications !
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

// Variables globales
let gPlanifJeu = null;      // Planificateur à intervalles pour l'animation des gobelets
let gGobelets = [];         // Les trois éléments HTML des gobelets
let gGemme = null;          // Élément HTML de la gemme
let gJeuActif = false;      // Le jeu est lancé ?
let gChoixPossible = false; // Le joueur peut faire son choix ?
let gEtapeAnimation = 0;    // Étape de l'animation (abaisser = 1, jongler = 2 ou remonter = 3)
let gTypeEchange = null;    // Quels deux gobelets sont en train d'être échangés ("0-1", "0-2" ou "1-2")

function init() {

    gGobelets = document.querySelectorAll(".gobelet");
    gGemme = document.querySelector(".gemme");

    document.querySelector(".bouton1").addEventListener("click", jouer);

    gGobelets[0].addEventListener("click", choisirGobelet);
    gGobelets[1].addEventListener("click", choisirGobelet);
    gGobelets[2].addEventListener("click", choisirGobelet);

}

// Gère la progression de l'animation qui abaisse les trois gobelets
function abaisserGobelets() {

    let top1 = parseInt(gGobelets[0].style.top);
    
    if (top1 >= 70) {
        gEtapeAnimation = 2;
        gEchangesRestants = 15;
        gProgresEchange = 0;
        gGemme.style.display = "none";
        
        let r = Math.random();
        if (r < 0.33) {
            gTypeEchange = "0-1";

            let index1 = 0;
            let index2 = 1;
            gPosition1 = parseInt(gGobelets[index1].style.left);
            gPosition2 = parseInt(gGobelets[index2].style.left);
        }
        else if (r < 0.67) {
            gTypeEchange = "0-2";

            let index1 = 0;
            let index2 = 2;
            gPosition1 = parseInt(gGobelets[index1].style.left);
            gPosition2 = parseInt(gGobelets[index2].style.left);
        }
        else {
            gTypeEchange = "1-2";

            let index1 = 1;
            let index2 = 2;
            gPosition1 = parseInt(gGobelets[index1].style.left);
            gPosition2 = parseInt(gGobelets[index2].style.left);
        }
    }

    top1 = Math.min(70, top1 + 5);
    for (let i = 0; i < gGobelets.length; i++) {
        gGobelets[i].style.top = `${top1}px`;
    }

}

// Gère la progression de l'animation qui échange deux gobelets
function echangeGobelets() {

    if (gEchangesRestants == 0) {
        finAnimation2();
        return;
    }

    if (gProgresEchange >= 200) {
        gEchangesRestants -= 1;
        gProgresEchange = 0;

        let r = Math.random();
        if (r < 0.33) {
            gTypeEchange = "0-1";

            let index1 = 0;
            let index2 = 1;
            gPosition1 = parseInt(gGobelets[index1].style.left);
            gPosition2 = parseInt(gGobelets[index2].style.left);
        }
        else if (r < 0.67) {
            gTypeEchange = "0-2";

            let index1 = 0;
            let index2 = 2;
            gPosition1 = parseInt(gGobelets[index1].style.left);
            gPosition2 = parseInt(gGobelets[index2].style.left);
        }
        else {
            gTypeEchange = "1-2";

            let index1 = 1;
            let index2 = 2;
            gPosition1 = parseInt(gGobelets[index1].style.left);
            gPosition2 = parseInt(gGobelets[index2].style.left);
        }

        return;
    }

    animationEchange();

}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// Pas besoin d'analyser le code à partir d'ici
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

let gEchangesRestants = 0;
let gProgresEchange = 0;
let gPosition1 = 0;
let gPosition2 = 0;

function animationEchange() {

    let index1 = gTypeEchange == "1-2" ? 1 : 0;
    let index2 = gTypeEchange == "0-1" ? 1 : 2;

    gProgresEchange += 25;

    let deltaX = gProgresEchange / 200;
    let deltaY = 1 - Math.abs(deltaX * 2 - 1);

    gGobelets[index1].style.left = gPosition1 + (gPosition2 - gPosition1) * deltaX + "px";
    gGobelets[index2].style.left = gPosition2 + (gPosition1 - gPosition2) * deltaX + "px";
    gGobelets[index1].style.top = 70 - 70 * deltaY + "px";
    gGobelets[index2].style.top = 70 + 70 * deltaY + "px";

}

function finAnimation2(){

    clearInterval(gPlanifJeu);
    gPlanifJeu = null;
    gEtapeAnimation = 3;
    gGemme.style.display = "block";
    gGemme.style.left = parseInt(gGobelets[0].style.left) + 8 + "px";
    gChoixPossible = true;

}

function remonterGobelets() {

    let top3 = parseInt(gGobelets[0].style.top);
    if (top3 <= 0) {
        clearInterval(gPlanifJeu);
        gEtapeAnimation = 0;
        gPlanifJeu = null;
    }
    top3 = Math.max(0, top3 - 5);

    for (let i = 0; i < gGobelets.length; i++) {
        gGobelets[i].style.top = `${top3}px`;
    }

}

function choisirGobelet() {

    if (gChoixPossible) {

        gJeuActif = false;
        gChoixPossible = false;
        gPlanifJeu = setInterval(animer, 25);

    }

}

function jouer() {

    if (gJeuActif == false) {

        gJeuActif = true;
        gPlanifJeu = setInterval(animer, 25);
        gEtapeAnimation = 1;

    }

}

function animer() {

    switch (gEtapeAnimation) {
        case 1: abaisserGobelets(); break;
        case 2: echangeGobelets(); break;
        case 3: remonterGobelets(); break;
    }

}