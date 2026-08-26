// Variables globales du projet
let gNouveauTexte = "La hippopotomonstrosesquippedaliophobie est la phobie des longs mots. 😨";
let gTexteAlerte = "COMMENT OSEZ-VOUS SURVOLER CE BOUTON ? 😡";

// N'OUBLIEZ PAS DE TESTER DANS LE NAVIGATEUR WEB LES FONCTIONNALITÉS QUE VOUS CODEZ ! 😨

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 1 : Fonction init(). 
//
// - Déclarez la fonction init() ci-dessous. Elle restera vide pour le moment,
//   mais nous allons y revenir pour créer des écouteurs d'événements.
//
// - Les écouteurs d'événement à ajouter dans cette fonction sont décrits 
//   dans les TODO 2, 3 et 4.
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

// ↓ Déclarez la fonction init() ici ↓




// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 2 : Complétez la fonction changerTexte()
//
// - Ajoutez, dans la fonction init(), qui est plus haut, un écouteur 
//   d'événements de type "click" qui appelle la fonction changerTexte() pour 
//   l'élément avec la classe .bouton1.
//
// - Dans la fonction changerTexte(), ajoutez une ligne de code qui remplace 
//   le contenu textuel de l'élément avec la classe .texte par le texte de la 
//   variable globale gNouveauTexte.
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
function changerTexte(){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 3 : Complétez la fonction lancerAlerte()
//
// - Ajoutez, dans la fonction init(), un écouteur d'événements de type 
//   "mouseover" qui appelle la fonction lancerAlerte pour l'élément avec 
//   la classe .bouton2.
//
// - Lorsque la fonction lancerAlerte() sera appelée, une alerte (un pop-up) 
//   avec le texte de la variable globale gTexteAlerte est lancée.
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

function lancerAlerte(){



}
// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 4 : Complétez la fonction imprimerDansConsole()
//
// - Ajoutez, dans la fonction init(), un écouteur d'événements de type 
//   "mouseout" qui appelle la fonction imprimerDansConsole() pour l'élément 
//   avec la classe .bouton3.
//
// - Lorsque la fonction imprimerDansConsole() sera appelée, on imprime le texte
//   "Tu as arrêté de survoler le 3e bouton 😠 !" dans la console.
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

function imprimerDansConsole(){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 5 : Si ce n'est pas déjà fait, assurez-vous que vos 3 boutons 
//          fonctionnent bien.
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
