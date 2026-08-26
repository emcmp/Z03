// Variables globales
let gVoituresX = [];
let gVoituresY = [];

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 1 : Compléter init()
//
// - Ajoutez un écouteur d'événements clavier qui appelle bougerMario().
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
function init(){

    // Ne pas toucher à cette boucle
    let i = 1;
    while(i < 8){
        gVoituresX.push(parseInt(document.querySelector(".voiture" + i).style.left));
        gVoituresY.push(parseInt(document.querySelector(".voiture" + i).style.top));
        i += 1;
    }

}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 2 : Compléter bougerMario()
//
// - On range la touche appuyée dans une variable locale nommée touche.
//
// - Le but est ensuite de déplacer l'élément .mario de 5 pixels.
//      - Si la touche est "ArrowUp" -> vers le haut.
//      - Sinon, si la touche est "ArrowDown" -> vers le bas.
//      - Sinon, si la touche est "ArrowLeft" -> vers la gauche.
//      - Sinon, si la touche est "ArrowRight" -> vers la droite.
//
// - Finalement, on appelle la fonction verifierCollision().
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
function bougerMario(evenement){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// Ne pas modifier le code à partir d'ici
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
function verifierCollision(){
    let element = document.querySelector(".mario");
    let x = parseInt(element.style.left);
    let y = parseInt(element.style.top);
    x = x < 0 ? 0 : (x > 720 ? 720 : x);
    y = y < 0 ? 0 : (y > 380 ? 380 : y);
    element.style.top = y + "px";
    element.style.left = x + "px";

    for(let index = 1 ; index < 8; index += 1){
        if(x < gVoituresX[index] + 90 && x + 64 > gVoituresX[index] &&
           y < gVoituresY[index] + 54 && y + 64 > gVoituresY[index]){
                document.querySelector(".perdu").style.display = "flex";
        }
    }

    if(x < 10 + 31 && x + 64  > 10 && y < 10 + 54 && y > 10){
        document.querySelector(".bravo").style.display = "flex";
    }
}

