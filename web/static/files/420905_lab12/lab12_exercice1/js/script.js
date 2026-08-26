// Variables globales
let gNbEntiers = [5, 2, 9, 1, 4, 7];
let gCouleurs = ["bleu", "rouge", "jaune", "vert"];
let gBooleens = [true, false, false, true, true];
let gNbDecimaux = [4.44, 3.33, 1.11, 5.55, 2.22];

// Écouteurs d'événements (Rien à ajouter)
function init(){

    document.querySelector(".bouton1").addEventListener("click", alerte1);
    document.querySelector(".bouton2").addEventListener("click", alerte2);
    document.querySelector(".bouton3").addEventListener("click", modification1);
    document.querySelector(".bouton4").addEventListener("click", modification2);
    document.querySelector(".bouton5").addEventListener("click", ajout1);
    document.querySelector(".bouton6").addEventListener("click", ajout2);
    document.querySelector(".bouton7").addEventListener("click", retrait1);
    document.querySelector(".bouton8").addEventListener("click", retrait2);
    document.querySelector(".bouton9").addEventListener("click", epissure1);
    document.querySelector(".bouton10").addEventListener("click", epissure2);

}

// ▄♦▀♦▄♦▀♦▄♦▀♦▄♦▀♦▄♦▀♦▄♦▀♦▄♦▀♦▄♦▀♦▄♦▀♦▄♦▀♦▄♦▀♦▄♦▀♦▄♦▀♦▄
//⛔ RAFRAÎCHIR LA PAGE  ENTRE CHAQUE TEST DE BOUTONS ⛔
// ▀♦▄♦▀♦▄♦▀♦▄♦▀♦▄♦▀♦▄♦▀♦▄♦▀♦▄♦▀♦▄♦▀♦▄♦▀♦▄♦▀♦▄♦▀♦▄♦▀♦▄♦▀

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 1 : Compléter alerte1() et alerte2()
//
// - Ces deux fonctions produisent simplement une alerte avec une donnée
//   située dans un tableau :
//
// - alerte1() : "La première donnée dans gCouleurs est : X", 
//               où X est remplacé par la première donnée du tableau gCouleurs. 
//               (Donc "bleu", mais il ne faut pas l'écrire soi-même, il faut
//               aller chercher cette donnée dans le tableau)
//
// - alerte2() : "La dernière donnée dans gNbEntiers est : X", 
//               où X est remplacé par la dernière donnée du tableau gNbEntiers.
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

function alerte1(){



}

function alerte2(){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 2 : Compléter modification1() et modification2()
//
// - Pour modification1(), dans le tableau gNbDecimaux, on remplace
//   la valeur 1.11 par 7.77 et on remplace le contenu textuel de
//   l'élément .tableau4 par gNbDecimaux. (Pour mettre l'affichage à jour)
//   ( On peut simplement écrire ...textContent = gNbDecimaux; )
//
// - Pour modification2(), dans le tableau gBooleens, on remplace
//   le premier true par false et on met à jour l'affichage également.
//   (Mais dans .tableau3 cette fois)
//
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

function modification1(){



}

function modification2(){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 3 : Compléter ajout1() et ajout2()
//
// - ajout1() : On ajoute 8 à la fin de gNbEntiers et on met à jour l'affichage.
//
// - ajout2() : On ajoute "cramoisi" à la fin de gCouleurs et on met à jour
//              l'affichage.
// 
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

function ajout1(){



}

function ajout2(){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 4 : Compléter retrait1() et retrait2()
//
// - retrait1() : On retire la dernière donnée dans gNbDecimaux et 
//                on met à jour l'affichage.
//
// - retrait2() : On retire la dernière donnée dans gBoolens et on
//                on met à jour l'affichage. 
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

function retrait1(){



}

function retrait2(){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 5 : Compléter epissure1() et epissure2()
//
// - epissure1() : Dans gNbEntiers, on retire 3 données à partir de l'index 0.
//                 C'est-à-dire les valeurs 5, 2 et 9. Puis on met à jour l'affichage.
//
// - epissure2() : Dans gCouleurs, on retire la donnée au début du tableau.
//                 C'est-à-dire la valeur "bleu". Puis on met à jour l'affichage.
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

function epissure1(){



}

function epissure2(){


    
}