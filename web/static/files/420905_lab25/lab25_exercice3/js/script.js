// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 1 : Simplifier les booléens et soigner les autres détails
//
// ⛔ Assurez-vous que la vague fonctionne encore bien par la suite.
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

// Variables globales
let abcPatateXyz = ["#ff4d4d", "#ff944d", "#fff64d", "#53ff4d", "#4df6ff", "#4d62ff", "#a34dff", "#fc4dff"];
let gColonnes = null; // Éléments HTML des colonnes
let gProgres = 0;     // Progrès de l'animation, de 0 à 15 

// Écouteurs d'événements
function init(){
gColonnes = document.querySelectorAll(".colonne");
for(let i = 0; i < gColonnes.length; i++){
gColonnes[i].style.width = "15px"
gColonnes[i].style.height = "60px"
gColonnes[i].style.backgroundColor = abcPatateXyz[i % abcPatateXyz.length]
}
setInterval(animerVague, 25);
}

function animerVague(){

    gProgres += 0.25;

    if(ProgresDoitReset() == true){
        gProgres = 0;
    }

    for(let i = 0; i < gColonnes.length; i++){

        let proximite=Math.pow(  (16-  Math.abs(i-gProgres) ) /16,8)  ;
        gColonnes[i].style.height=  60+120*proximite+  "px";

    }

}

function ProgresDoitReset(){

    if(gProgres >= 32){
        return true;
    }
    else{
        return false;
    }

}



