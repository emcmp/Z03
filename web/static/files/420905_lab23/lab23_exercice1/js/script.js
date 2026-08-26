let gDureeTheorie = 30;
let gDureeExercices = 90;
let gCoursInteressant = true;
let gImage = "bob";
let gBordure = "jaune";

// Écouteurs d'événements
function init(){

    document.querySelector(".bouton1").addEventListener("click", alternerCoursInteressant);
    document.querySelector(".bouton2").addEventListener("click", function(){changerDureeTheorie(-10)});
    document.querySelector(".bouton3").addEventListener("click", function(){changerDureeTheorie(10)});
    document.querySelector(".bouton4").addEventListener("click", function(){changerDureeExercices(-10)});
    document.querySelector(".bouton5").addEventListener("click", function(){changerDureeExercices(10)});
    document.querySelector(".bouton6").addEventListener("click", alternerImage);
    document.querySelector(".bouton7").addEventListener("click", alternerBordure);

    document.querySelector(".boutonA").addEventListener("click", messageExercices);
    document.querySelector(".boutonB").addEventListener("click", messageTheorie);
    document.querySelector(".boutonC").addEventListener("click", changerImage);

}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 1 : Compléter messageExercices()
//
// - À l'aide d'une condition ternaire, affichez le message "Le labo est bien 😌"
//   si la durée des exercices est inférieure à 90 minutes. Affichez le
//   message "Y'a trop d'exercices 😩" sinon.
//
// (Votre condition ternaire devra remplacer "texte temporaire", ce qui 
// donnera juste une longue ligne de code seule.)
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
function messageExercices(){

    document.querySelector(".texte").textContent = "texte temporaire"

}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 2 : Compléter messageTheorie()
//
// - À l'aide d'une condition ternaire, il faut mettre le message
//   "La théorie était endurable 🤔" si la durée de la théorie est inférieure
//   à 30 minutes OU si le cours était intéressant. Sinon, le message sera
//   "😴😴😴".
//
// (Votre condition ternaire devra remplacer "texte temporaire")
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
function messageTheorie(){

    document.querySelector(".texte").textContent = "texte temporaire";

}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 3 : Compléter changerImage()
//
// - À l'aide d'une condition ternaire, selon la valeur de gBordure, ajoutez
//   à l'élément .spongebobImage la classe "yellow" si gBordure vaut "jaune" 
//   ou la classe "pink" sinon.
//
// - À l'aide d'une condition ternaire, selon la valeur de gImage, remplacez
//   la source de l'image de l'élément .spongebobImage par "images/bob.png" si
//   gImage vaut "bob" et par "images/patrick.png" sinon.
//
// (Vos conditions ternaires devront remplacer "yellow" et "images/bob.png")
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
function changerImage(){

    // Il faut seulement modifier le code à l'intérieur des parenthèses de .add(...ici...)
    document.querySelector(".spongebobImage").classList.add("yellow");

    // Il faut seulement modifier le code après le .src = ...ici...
    document.querySelector(".spongebobImage").src = "images/bob.png";

}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// Ne pas modifier le code à partir d'ici
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
function alternerCoursInteressant(){
    gCoursInteressant = !gCoursInteressant;
    document.querySelector(".coursInteressant").textContent = gCoursInteressant;
}

function changerDureeTheorie(variation){
    gDureeTheorie = Math.max(0, gDureeTheorie + variation);
    document.querySelector(".dureeTheorie").textContent = gDureeTheorie;
}

function changerDureeExercices(variation){
    gDureeExercices = Math.max(0, gDureeExercices + variation);
    document.querySelector(".dureeExercices").textContent = gDureeExercices;
}

function alternerImage(){
    gImage = gImage == "bob" ? "patrick" : "bob";
    document.querySelector(".image").textContent = gImage;
    resetImage();
}

function alternerBordure(){
    gBordure = gBordure == "jaune" ? "rose" : "jaune";
    document.querySelector(".bordure").textContent = gBordure;
    resetImage();
}

function resetImage(){
    document.querySelector(".spongebobImage").src = "images/sablier.png";
    document.querySelector(".spongebobImage").classList.remove("yellow");
    document.querySelector(".spongebobImage").classList.remove("pink");
}