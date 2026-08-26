// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 1 : Améliorer le type de blocs utilisés
//
// Le découpage des fonctions est déjà convenable, mais pouvez-vous réviser
// les types de blocs (if / else, switch, condition ternaire, while, do while et
// for) utilisés ? Faites-les modifications nécessaires pour que les blocs 
// utilisés soient plus élégants et lisibles ✨🔍
//
// ⛔ Assurez-vous que la page fonctionne encore comme avant après avoir
// fait vos modifications !
//
// 🙋‍♂️🙋‍♀️ Les exercices d'aujourd'hui sont un peu plus « subjectifs » en
// apparence. N'hésitez pas à demander à l'enseignant(e) d'approuver les
// changements que vous avez faits à mesure ou à la fin du labo.
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

// Variables globales
let gHistoriqueReponses = [];
let gAnimationEnCours = false;
let gRad = 0;

function init(){

    document.querySelector(".bouton1").addEventListener("click", tourner);
    document.querySelector(".bouton2").addEventListener("click", afficherouCacherHistorique);

}

// Fait tourner la roue dans la page et la rend indisponible pour trois secondes.
function tourner(){

    switch(gAnimationEnCours){
        case true : break;
        case false :
            gAnimationEnCours = true;
            setTimeout(finAnimationRoue, 3000);
            gRad += Math.PI * 6 + Math.random() * Math.PI * 2;
            document.querySelector(".roue").style.transform = `rotate(${gRad}rad)`;
            break;
    }

}

// Bascule la visibilité de l'historique des réponses dans la page.
function afficherouCacherHistorique(){

    let historique = document.querySelector(".historique");

    if(historique.style.display == "none"){
        historique.style.display = "block";
    }
    else{
        historique.style.display = "none";
    }

}

// Rend la roue disponible à nouveau et détermine quelle réponse a été obtenue.
function finAnimationRoue(){

    gAnimationEnCours = false;

    // Ces quelques lignes font peut-être peur mais le but est juste d'obtenir 
    // une valeur entière entre 0 et 3 à partir de la rotation de la roue.
    let rad = gRad + 0.25 * Math.PI;
    
    for(let i = 0; rad > Math.PI * 2; i++){
        rad -= Math.PI * 2;
    }

    rad = Math.floor((rad / Math.PI) * 2);
    
    if(rad == 0){
        ajoutHistorique("???");
    }
    else if(rad == 1){
        ajoutHistorique("Oui");
    }
    else if(rad == 2){
        ajoutHistorique("Non");
    }
    else if(rad == 3){
        ajoutHistorique("Peut-être");
    }

}

// Ajoute la dernière réponse obtenue dans l'historique de la page.
function ajoutHistorique(reponse){

    gHistoriqueReponses.push(reponse);

    document.querySelector(".valeursHistorique").textContent = "";

    let i = 0;
    
    while(i < gHistoriqueReponses.length){

        document.querySelector(".valeursHistorique").textContent += gHistoriqueReponses[i];

        if(i != gHistoriqueReponses.length - 1){
            document.querySelector(".valeursHistorique").textContent += ", ";
        }

        i += 1;
    }

}