let gTexte = "Les ptits jus c'est pour les lunchs 🧃";

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// Les écouteurs d'événements sont déjà complétés
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

function init(){

    document.querySelector(".bouton1").addEventListener("click", bouton1);
    document.querySelector(".bouton2").addEventListener("click", bouton2);
    document.querySelector(".bouton3").addEventListener("click", bouton3);

}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 1 : Créer deux fonctions. Les instructions sont plus bas.
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

// Fonction #1 : alerteEtConsole(...)
// -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-
// - 1 seul paramètre, nommé texte 
//
// - La fonction prend le texte reçu en paramètre pour faire deux choses avec :
//          - L'imprimer dans la console.
//          - L'afficher dans une alerte.
// -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-

// ↓ Créez la fonction alerteEtConsole(...) ici ↓



// Fonction #2 : changerOpacite(...)
// -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-
// - 2 paramètres :
//      - classe : représente la classe d'un élément
//      - transparence : représente une valeur de transparence située entre 0 et 1
//
// - La fonction change l'opacité de l'élément qui possède la classe reçue en paramètre.
// - Le paramètre transparence est utilisé pour la valeur donnée à l'opacité.
// -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-

// ↓ Créez la fonction changerOpacite(...) ici ↓




// Cette fonction est DÉJÀ complétée. Analysez-la bien car vous devrez
// l'utiliser plus loin. 🔍
function changerCouleurFond(forme, couleur){
    document.querySelector(`.${forme}1`).style.backgroundColor = couleur;
    document.querySelector(`.${forme}2`).style.backgroundColor = couleur;
    document.querySelector(`.${forme}3`).style.backgroundColor = couleur;
}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 2 : Compléter les fonctions bouton1(), bouton2() et bouton3()
//          Il suffira d'appeler des fonctions que vous avez créées plus
//          haut.
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

// Appeler la fonction alerteEtConsole  en lui fournissant le texte qui est
// dans la variable globale gTexte. (Utilisez la variable, ne copiez-collez
// pas le texte !)
function bouton1(){

    

}

// Appeler trois fois la fonction changerOpacite. Le but est de donner une
// opacité de 0.1 à .cercle1, une opacité de 0.3 à .cercle2 et une opacité
// de 0.5 à .cercle3.
function bouton2(){

    

}

// Appeler SEULEMENT trois fois la fonction changerCouleurFond. Le but est 
// de rendre les cercles "red", les carrés "cornflowerblue" et les triangles "gold".
function bouton3(){

    
    
}