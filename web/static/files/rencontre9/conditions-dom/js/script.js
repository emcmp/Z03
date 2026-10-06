// Les écouteurs sont déjà en place.
function init(){
    document.querySelector(".bouton4").addEventListener("click", verifierClasse);
    document.querySelector(".bouton8").addEventListener("click", alternerImage);
}

// TODO 1 : Avec classList.contains() et if/else, vérifiez si .texte1
// possède la classe "brun". Affichez "Je suis brun 🍫" ou
// "Je ne suis pas brun 🚫🍫" dans son textContent.
// Pour tester les deux cas, ajoutez ou retirez la classe "brun"
// dans l'inspecteur du navigateur.
function verifierClasse(){

}

// TODO 2 : Avec if/else, vérifiez la valeur de l'attribut alt de
// .objetBrun. Si elle vaut "Poop", donnez à src la valeur
// "images/chocolate.png" et à alt la valeur "Chocolat".
// Sinon, redonnez "images/poop.png" à src et "Poop" à alt.
function alternerImage(){

}
