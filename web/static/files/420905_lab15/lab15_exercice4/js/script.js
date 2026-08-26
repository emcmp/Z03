let gFruits = ["pomme", "banane", "orange"];

// Écouteurs d'événements déjà complétés
function init(){

    document.querySelector(".bouton1").addEventListener("click", eau);
    document.querySelector(".bouton2").addEventListener("click", feu);
    document.querySelector(".bouton5").addEventListener("click", banane);
    document.querySelector(".bouton6").addEventListener("click", aubergine);

}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO  : Créer une fonction, compléter eau() et feu()
//
// Commencez par créer la fonction couleurBordure() : 
// - Cette fonction reçoit 2 paramètres : classe et couleur. (Exemple : 
// classe pourrait contenir ".maClasse" et couleur pourrait contenir "red")
//
// couleurBordure() fait deux choses :
// - Pour tous les éléments avec la classe reçue en paramètre, elle modifie
//   la couleur de la bordure par celle reçue en paramètre.
// - Elle remplace le contenu textuel de .texte par "X élément(s) modifié(s) !",
//   où X devra être remplacé par le nombre d'éléments possédant la classe.
//
// Compléter eau() :
// - Appelez simplement couleurBordure() pour donner une bordure "cornflowerblue"
//   à tous les éléments avec la classe .eau
//
// Compléter feu() :
// - Appelez simplement couleurBordure() pour donner une bordure "crimson" à
//   tous les éléments avec la classe .feu
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

// ↓ Créer la fonction couleurBordure() ici ↓




function eau(){



}

function feu(){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 2 : Créer une fonction, compléter banane() et aubergine()
//
// Commencez par créer la fonction chercherTableau() : 
// - Cette fonction reçoit 2 paramètres : un tableau et une chaîne de caractères.
// - Cette fonction retourne true si un des éléments du tableau est égal à
//   la chaîne de caractères reçue en paramètre. 
//   (Par exemples, si les paramètres sont ["a", "b", "c"] et "b", on
//    retourne true car "b" a bel et bien été trouvé dans le tableau !)
//   Pour réussir à faire cela, utilisez une boucle pour parcourir le tableau
//   reçu en paramètre ainsi qu'un if dans la boucle pour vérifier s'il y a
//   un élément égal à la chaîne de caractères reçue en paramètre.
//
// Compléter banane() :
// - Cette fonction remplace le texte de .texte par la valeur retournée par
//   la fonction chercherTableau() à laquelle on fournit les paramètres
//   gFruits et "banane".
//
// Compléter aubergine() :
// - Même chose que pour banane(), mais avec les paramètres gFruits et 
//   "aubergine".
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

// ↓ Créer la fonction chercherTableau() ici ↓



function banane(){



}

function aubergine(){



}