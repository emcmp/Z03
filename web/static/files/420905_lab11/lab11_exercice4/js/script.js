// Écouteurs d'événements déjà complétés
function init(){

    document.querySelector(".bouton1").addEventListener("click", boucleDoWhile);
    document.querySelector(".bouton2").addEventListener("click", doubleWhile);

}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 1 : Compléter boucleDoWhile()
//
// - Videz la boîte .texte, puis, à l'aide d'une boucle do while, (PAS while !)
//   affichez les nombres impairs de 1 à 33 (espacés) dans .texte.
// - Pour seulement afficher les nombres impairs, n'hésitez pas à faire des
//   bonds de 2 avec votre variable i plutôt que des bonds de 1.
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
function boucleDoWhile(){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// (⭐ Défi) TODO 2 : Compléter doubleWhile()
//
// - Videz la boîte .texte, puis, à l'aide de deux boucles while imbriquées
//   l'une dans l'autre, affichez le texte suivant : 
//   "1-1, 1-2, 1-3, 2-1, 2-2, 2-3, 3-1, 3-2, 3-3,".
// - Une boucle s'occupera du nombre devant les tirets, l'autre boucle s'occupera
//   du nombre après les tirets.
// - La ligne de code qui écrit le texte vous est fournie :
//      document.querySelector(".texte").textContent += `${i}-${j}, `;
// - Il vous reste à faire une boucle while avec un index i qui va de 1 à 3
//   qui contient une autre boucle while avec un index j qui va de 1 à 3.
//   La ligne de code fournie ira à l'intérieur de la 2e boucle while.
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
function doubleWhile(){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// (⭐ Méga-défi) TODO 3 : Améliorer le TODO 2
//
// - Dans le TODO 2, le message affiché était 
//   "1-1, 1-2, 1-3, 2-1, 2-2, 2-3, 3-1, 3-2, 3-3,".
// - Faites les modifications nécessaires dans le TODO 2 pour que la 
//   toute dernière virgule ne soit pas affichée.
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀