
// Écouteurs d'événements déjà complétés
function init(){

    document.querySelector(".bouton1").addEventListener("click", texteBouton);
    document.querySelector(".bouton2").addEventListener("click", tailleAnimaux);
    document.querySelector(".bouton3").addEventListener("click", calculPrix);
    document.querySelector(".bouton4").addEventListener("click", animalPrefere);

}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 1 : Examiner les fonctions suivantes (⛔ Aucun code à ajouter !!)
//
// - Elles sont déjà complètes. Il NE faut PAS les modifier. Toutefois, dans
//   dans le TODO 2, vous allez ajouter du code et vous allez devoir appeler
//   les fonctions du TODO 1 en leur fournissant des paramètres.
//
// - Donc prenez le temps de bien analyser les deux fonctions ci-dessous pour
//   comprendre à quoi elles servent.
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

function changerTexteBouton1(texte){

    document.querySelector(".bouton1").textContent = texte;

}

function changerTailleElement(classe, tailleEnPixels){

    //                             style.fontSize change la taille du texte (et donc des émojis)
    document.querySelector(classe).style.fontSize = tailleEnPixels + "px";

}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 2 : Compléter les deux fonctions suivantes
//
// - Dans texteBouton(), il y a une seule ligne de code à mettre. Il faut
//   appeler une fonction qui changera le texte de l'élément .bouton1. Le
//   nouveau texte doit être "aaaaaaaa 😩". Vous devez absolument appeler une 
//   fonction pour le faire. (Plutôt que d'écrire document.querySelector... 
//   vous-mêmes)
//
// - Dans actionBouton2(), il y a quatre ligne de code à mettre. Il faut 
//   appeler quatre fois la même fonction. Le but est de modifier la taille
//   du texte pour les éléments suivants :
//      • Taille de 20 pixels pour .poisson
//      • Taille de 40 pixels pour .dauphin
//      • Taille de 80 pixels pour .requin
//      • Taille de 160 pixels pour .baleine
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

function texteBouton(){



}

function tailleAnimaux(){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 3 : Compléter obtenirPrix(), obtenirQuantite() et calculPrix()
//
// - Avec obtenirPrix(), retournez la valeur 3.5
// - Avec obtenirQuantite(), retournez la valeur 2
// 
// Pour calculPrix() : (Tout ça ↓ c'est juste 2 lignes de code)
// - Créez une variable locale nommée prixTotal, et stockez la multiplication
//   des valeurs retournées par obtenirPrix() et obtenirQuantite() dedans.
//   (Donc en gros prixTotal doit contenir 3.5 * 2, mais vous appelez les
//    deux fonctions en les multipliant au lieu d'écrire les nombres vous-mêmes)
// - Finalement, remplacez le contenu textuel de l'élément .texte par
//   "X pommes coûtent Y dollars.". Remplacez X par la valeur retournée par
//   obtenirQuantite() et remplacez Y par le prixTotal calculé au-dessus.
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
function obtenirPrix(){



}

function obtenirQuantite(){



}

function calculPrix(){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 4 : Compléter obtenirAnimal() et animalPrefere()
//
// Pour obtenirAnimal() :
// - À l'aide de Math.random(), retournez une des deux valeurs suivantes :
//      • Dans 50% des cas, "chien".
//      • Dans 50% des cas, "chat".
//
// Pour animalPrefere() :
// - Remplacez simplement le texte de l'élément .texte par la phrase :
//   "Je préfère les X.", où X est "chat" ou "chien", aléatoirement.
// 
// Il faudra appeler obtenirAnimal() quelque part dans la fonction animalPrefere() !
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
function obtenirAnimal(){



}

function animalPrefere(){



}

