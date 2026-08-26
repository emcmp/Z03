// Variables globales
let gChenillePresente = false;

// Écouteurs d'événements
function init(){

    let fruits = document.querySelectorAll(".fruit");
    let i = 0;

    while(i < fruits.length){
        fruits[i].addEventListener("click", ajouterAuPanier);
        i += 1;
    }

    document.querySelector(".bouton1").addEventListener("click", viderPanier)

}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 1 : Compléter ajouterAuPanier()
// (Gardez à l'esprit que cette fonction est appelée quand on clique sur
// un des fruits à cueillir. Les écouteurs d'événements sont déjà créés.)
//
// - S'il n'y a pas de chenille présente, on veut faire deux choses :
//       - Créer un élément HTML de type <div>, dont le contenu textuel est
//         le même que celui de l'élément cliqué. On veut donner la classe
//         "grosFruit" au nouvel élément et on veut l'ajouter dans l'élément
//         parent .fruitsPanier.
//       - De plus, dans 25% des cas (Utilisez Math.random() < 0.25), on veut
//         appeler la fonction ajouterChenille.
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
function ajouterAuPanier(e){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 2 : Compléter ajouterChenille()
// Une chenille s'invitera parfois dans le panier quand on cueille un fruit.
// La présence de la chenille nous empêche de cueillir de nouveaux fruits.
//
// - Mettre gChenillePresente à true.
// - Créer un nouvel élément de type <img>, avec la classe "chenille", avec la 
//   src "images/chenille.png" et avec le texte alt "Chenille". Cet élément doit 
//   être ajouté dans l'élément parent .fruitsPanier.
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
function ajouterChenille(){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 3 : Compléter viderPanier()
// 
// - Supprimez de la page Web tous les éléments avec la classe ".grosFruit".
// - Si l'élément .chenille existe, supprimez-le de la page Web.
// - Finalement, indiquez qu'il n'y a plus de chenille en mettant 
//   gChenillePresente à false.
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
function viderPanier(){



}