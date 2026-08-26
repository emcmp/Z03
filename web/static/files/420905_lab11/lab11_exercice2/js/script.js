
// Écouteurs d'événements
function init(){

    document.querySelector(".bouton1").addEventListener("click", bleuSiOreille);
    document.querySelector(".bouton2").addEventListener("click", rougeSiPasOreille);
    document.querySelector(".bouton3").addEventListener("click", euuh);

}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 1 : Compléter trois boucles
//
// Les trois fonctions qui suivent vont chacune contenir une boucle qui change
// la couleur de fond de certains éléments das la page.
//
// Astuce : Pour vérifier le texte d'un élément, on peut faire comme ceci :
//          document.querySelector(...).textContent == "..."
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

// Cette fonction parcourt les éléments .case1 à .case5 (première rangée) et
// donne un fond "cornflowerblue" à tous les éléments dont le texte est "👂".
function bleuSiOreille(){



}

// Cette fonction parcourt les éléments .case6 à .case10 (deuxième rangée) et
// donne un fond "crimson" à tous les éléments dont le texte N'EST PAS "👂".
function rougeSiPasOreille(){



}

// Cette fonction parcourt les éléments .case11 à .case25 (rangées 3, 4 et 5) et
// donne un fond :
//  -> "gold" pour les "👂".
//  -> "limegreen" pour les "💎".
//  -> "mediumslateblue" pour tout le reste.
function euuh(){



}
