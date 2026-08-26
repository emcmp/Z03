// Variables globales
let gGauche = false;
let gDroite = false;

// Écouteurs d'événements
function init(){

    document.addEventListener("keydown", toucheClavier);
    document.addEventListener("keyup", pasToucheClavier);

    document.querySelector(".bouton1").addEventListener("click", function(){
        arrondir(obtenirNombre(".nombre1"), obtenirNombre(".nombre2"))
    });
    document.querySelector(".bouton2").addEventListener("click", function(){
        plafond(obtenirNombre(".nombre1"), obtenirNombre(".nombre2"))
    });
    document.querySelector(".bouton3").addEventListener("click", function(){
        plancher(obtenirNombre(".nombre1"), obtenirNombre(".nombre2"))
    });
    document.querySelector(".bouton4").addEventListener("click", function(){
        alerteMinimum(obtenirNombre(".nombre1"), obtenirNombre(".nombre2"))
    });
    document.querySelector(".bouton5").addEventListener("click", function(){
        alerteMaximum(obtenirNombre(".nombre1"), obtenirNombre(".nombre2"))
    });
    document.querySelector(".bouton6").addEventListener("click", aleatoire);

}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 1 : Compléter arrondir()
//
// Pour cette fonction (et toutes les suivantes), le paramètre nombre1 
// contient le nombre à gauche dans la page et le paramètre nombre2 contient
// le nombre à droite dans la page.
//
// - Arrondissez les deux nombres affichés dans la page.
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
function arrondir(nombre1, nombre2){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 2 : Compléter plafond()
//
// - Arrondissez VERS LE HAUT les deux nombres affichés dans la page.
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
function plafond(nombre1, nombre2){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 3 : Compléter plancher()
//
// - Arrondissez VERS LE BAS les deux nombres affichés dans la page.
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
function plancher(nombre1, nombre2){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 4 : Compléter alerteMinimum()
//
// - Dans une alerte, affichez le plus petit des deux nombres.
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
function alerteMinimum(nombre1, nombre2){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 5 : Compléter alerteMaximum()
//
// - Dans une alerte, affichez le plus grand des deux nombres.
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
function alerteMaximum(nombre1, nombre2){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 6 : Compléter aleatoire()
//
// - Remplacez le premier nombre par un nombre entier aléatoire entre 15 et 20.
// - Remplacez le deuxième nombre par un nombre entier aléatoire entre 6 et 7.
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
function aleatoire(){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// Ne pas modifier le code à partir d'ici
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
function obtenirNombre(id){
    return parseFloat(document.querySelector(id).textContent);
}

function toucheClavier(e){

    let nombre1 = document.querySelector(".nombre1").textContent;
    let nombre2 = document.querySelector(".nombre2").textContent;

    if(e.key == "ArrowLeft"){
        gGauche = true;
    }

    if(e.key == "ArrowRight"){
        gDroite = true;
    }

    if(e.key.length == 1 && e.key.match("[0-9|\.]")){
        if(gGauche){
            document.querySelector(".nombre1").textContent = nombre1 + "" + e.key;
        }
        if(gDroite){
            document.querySelector(".nombre2").textContent = nombre2 + "" + e.key;
        }
    }

    if(e.key == "Backspace"){
        if(gGauche){
            document.querySelector(".nombre1").textContent = nombre1.substring(0, nombre1.length - 1);
        }
        if(gDroite){
            document.querySelector(".nombre2").textContent = nombre2.substring(0, nombre2.length - 1);
        }
    }

}

function pasToucheClavier(e){

    if(e.key == "ArrowLeft"){
        gGauche = false;
    }

    if(e.key == "ArrowRight"){
        gDroite = false;
    }

}

