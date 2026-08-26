// Variables globales
let gAmis = ["Simone", "Walid", "Inès", "Jean-Jérémie", "Marie-Coquelicot", "Stephano"];

// Écouteurs d'événements (Rien à ajouter)
function init(){

    document.querySelector(".bouton1").addEventListener("click", retirerAmiDebut);
    document.querySelector(".bouton2").addEventListener("click", retirerAmiFin);
    document.querySelector(".bouton3").addEventListener("click", ajouterAmiFin);
    document.querySelector(".bouton4").addEventListener("click", viderAmis);
    document.querySelector(".bouton5").addEventListener("click", verifierNombreAmis);

}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 1 : Compléter affichageAmis()
//
// - affichageAmis() met à jour l'affichage de la liste d'amis dans la page Web.
// - Le format du contenu textuel sera : "Amis : X" (Remplacez X par le tableau
//   en entier à l'aide d'un template string)
// 
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

function affichageAmis(){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 2 : Compléter retirerAmiDebut(), retirerAmisFin() et ajouterAmiFin()
//
// - retirerAmiDebut() : Retire la première donnée dans la liste d'amis et 
//                       appelle ensuite affichageAmis().
//
// - retirerAmiFin() : Retire la dernière donnée dans la liste d'amis et
//                     appelle ensuite affichageAmis().
//
// - ajouterAmiFin() : Ajoute un ami nommé "Ami imaginaire" à la fin de la
//                     liste d'amis et appelle ensuite affichageAmis().
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

function retirerAmiDebut(){



}

function retirerAmiFin(){



}

function ajouterAmiFin(){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 3 : Compléter viderAmis()
//
// - On vide complètement la liste d'amis en affectant [] (un tableau vide) à la
//   variable gAmis (ex : monTableau = []; ), puis on appelle affichageAmis().
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

function viderAmis(){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 4 : Compléter verifierNombreAmis()
//
// - Si la taille de la liste d'amis est 0, on lance une alerte avec le texte
//   "Ahem... vous n'avez pas d'ami. 😥". Sinon, on lance une alerte avec le texte
//   "Vous avez [METTRE NOMBRE D'AMIS ICI] ami(s) !".
// - ⭐ Indice : on a vu un mot-clé qui permet d'obtenir le nombre d'éléments
//   dans un tableau ...
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

function verifierNombreAmis(){



}
