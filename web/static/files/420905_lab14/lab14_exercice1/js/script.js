
// Écouteurs d'événements (Rien à ajouter)
function init(){

    document.querySelector(".bouton1").addEventListener("click", ajouterClasse);
    document.querySelector(".bouton2").addEventListener("click", retirerClasse);
    document.querySelector(".bouton3").addEventListener("click", basculerClasse);
    document.querySelector(".bouton4").addEventListener("click", verifierClasse);

    document.querySelector(".bouton5").addEventListener("click", ajouterAttribut);
    document.querySelector(".bouton6").addEventListener("click", retirerAttribut);
    document.querySelector(".bouton7").addEventListener("click", modifierAttribut);
    document.querySelector(".bouton8").addEventListener("click", alternerImage);

}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 1 : Compléter les fonctions ajouterClasse(), retirerClasse()
//          et basculerClasse().
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

// ajouterClasse() ajoute la classe "brun" à l'élément .texte1
function ajouterClasse(){



}

// retirerClasse() retire la classe "brun" à l'élément .texte1
function retirerClasse(){



}

// basculerClasse() bascule la présence de la classe "brun" à l'élément .texte1
// Donc si on spam le bouton... la classe va alterner entre présente et absente.
function basculerClasse(){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 2 : Compléter la fonction verifierClasse().
//
// - Si l'élément .texte1 possède la classe "brun", son contenu
//   textuel devient "Je suis brun 🍫". Sinon, son contenu textuel
//   devient "Je ne suis pas brun 🚫🍫".
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

function verifierClasse(){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 3 : Compléter les fonctions ajouterAttribut(), retirerAttribut()
//          et modifierAttribut().
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

// Ajoutez l'attribut title avec la valeur "Trop mignon ! 💩" pour l'élément .objetBrun
// Pour vérifier que ça marche, survolez l'image et immobilisez la souris.
function ajouterAttribut(){



}

// Videz / retirez l'attribut title pour l'élément .objetBrun
function retirerAttribut(){



}

// Remplacez la valeur de l'attribut src par "images/chocolate.png" pour l'élément .objetBrun
function modifierAttribut(){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 4 : Compléter la fonction alternerImage().
//
// - Si la valeur de l'attribut alt de l'élément .objetBrun est "Poop", 
//  remplacez la valeur de l'attribut src par "images/chocolate.png" et
//  remplacez la valeur de son attribut alt par "Chocolat". 
// - Sinon, donnez la valeur "images/poop.png" à l'attribut src et la valeur 
//  "Poop" à l'attribut alt.
//
// - Lors du test, l'image devrait alterner entre 🍫 et 💩.
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

function alternerImage(){


}