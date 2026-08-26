// Écouteurs d'événements (Rien à ajouter)
function init(){

    document.querySelector(".bouton1").addEventListener("click", stylesRouges);
    document.querySelector(".bouton2").addEventListener("click", carreaux);
    document.querySelector(".bouton3").addEventListener("click", nombres);

}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 1 : Compléter stylesRouges()
//
// - On crée une variable locale nommée cartes. Elle contient un tableau
//   avec les éléments HTML qui représentent les cartes. (Toutes les cartes
//   possèdent la classe ".carte" !)
// - À l'aide d'une boucle, on ajoute la classe "rouge" aux cinq cartes.
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

function stylesRouges(){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 2 : Compléter carreaux()
//          Cette fonction va mettre toutes les cartes en carreau.
//
// - On crée une variable locale nommée symboles. Elle contient un tableau
//   avec les cinq éléments HTML <img> des cartes. (Trouvez la classe commune)
// - À l'aide d'une boucle, pour les cinq images, on donne la valeur 
//   "images/carreau.png" à l'attribut "src".
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

function carreaux(){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 3 : Compléter nombres()
//          Cette fonction va mettre les nombres 4, 5, 6, 7 et 8 sur les cartes.
//
// - On crée une variable locale nommée valeurs. Elle contient un tableau
//   tous les éléments ayant la classe ".valeur".
// - On crée une variable locale nommée nombre en lui affectant la valeur 4.
//
// - À l'aide d'une boucle, on remplace le contenu textuel de toutes les cartes
//   par la valeur de la variable nombre. À chaque itération de la boucle, on veut
//   également augmenter la valeur de nombre de 1.
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

function nombres(){



}


