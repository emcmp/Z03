let gDirection = "bas";      // Direction de mouvement de Madame Pac
let gPlanifJeu;              // Planificateur qui met à jour le jeu chaque 25 ms
let gFruits = [];            // Liste de tous les fruits actuellement présents
let gFruitsObtenus = [];     // Liste des fruits obtenus
let gJeuActif = false;       // Le jeu est-il présentement actif ?
let gVitessePac = 3;         // Vitesse actuelle de Madame Pac
let gPac = null;             // Élément HTML qui représente Madame Pac
let gFantomes = [];          // Liste des éléments HTML des fantômes
let gVitesseFantomes = [];   // Liste de la vitesse de chaque fantôme
let gDirectionFantomes = []; // Liste de la direction de mouvement de chaque fantôme
let gScore = 0;              // Score du joueur pour la partie en cours

// Écouteurs d'événements
function init(){

    document.addEventListener("keydown", changerDirection);
    document.querySelector(".bouton1").addEventListener("click", jouer);

}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 1 : Compléter jouer()
// Lorsqu'on lance la partie, on doit ajouter un élément qui représentera 
// madame Pac.
// 
// À l'endroit indiqué dans la fonction, ajoutez du code pour créer un
// nouvel élément HTML. Vous devez stocker ce nouvel élément HTML dans la 
// variable globale gPac plutôt que dans une nouvelle variable locale.
// - C'est un <img>
// - Il possède la classe "pac".
// - Sa src est "images/pac_down.gif".
// - Son attribut alt vaut "Madame pac".
// - Cet élément aura le style left avec la valeur "384px" et le style top
//   avec la valeur "0px".
// - Dans la page Web, on met ce nouvel élément dans le parent .jeu.
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
function jouer(){

    if(gJeuActif == false){
        gJeuActif = true;
        gPlanifJeu = setInterval(updateJeu, 25);
        gScore = 0;
        document.querySelector(".score").textContent = `Score : ${gScore}`;

        // À compléter

    }

}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 2 : Compléter retirerMadamePac()
// Cette fonction va simplement retirer l'image de madame pac du jeu quand
// la partie se termine.
//
// - Au lieu d'accéder à l'élément HTML de madame Pac via sa classe, utilisez
//   plutôt la variable gPac, qui contient déjà l'élément HTML. Cela dit, 
//   commencez par vérifier que gPac n'est pas null.
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
function retirerMadamePac(){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 3 : Compléter ajouterFantome()
// Cette fonction permettra de faire apparaître des fantômes durant la partie.
//
// Il faut créer un nouvel élément de type <img> :
// - Sa src doit être aléatoire :
//      → Dans 25% des cas : "images/fantome_bleu.png"
//      → Dans 25% des cas : "images/fantome_rouge.png"
//      → Dans 25% des cas : "images/fantome_orange.png"
//      → Dans 25% des cas : "images/fantome_violet.png"
// - Son texte alt est "Fantôme".
// - Il possède la classe "fantome".
// - On doit l'ajouter dans la page Web, dans le parent .jeu.
// - On doit ajouter le nouvel élément créé à la fin du tableau gFantomes.
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
function ajouterFantome(){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 4 : Compléter nettoyerFantomes()
// Cette fonction permettra de retirer tous les fantômes du jeu une fois la
// partie terminée.
//
// - D'abord, retirez de la page Web tous les éléments avec la classe ".fantome".
// - Ensuite, remplacez le contenu de la variable gFantomes par un tableau vide.
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
function nettoyerFantomes(){

    

}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// Ne pas modifier le code à partir d'ici
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

let zDelaiFruit = 0;
let zDelaiFantome = 200;

function changerDirection(e){

    if(gPac == null){
        return;
    }

    let touche = e.key;
    if(touche == "a"){
        gDirection = "gauche";
        gPac.src = "images/pac_left.gif";
    }
    if(touche == "w"){
        gDirection = "haut";
        gPac.src = "images/pac_up.gif";
    }
    if(touche == "s"){
        gDirection = "bas";
        gPac.src = "images/pac_down.gif";
    }
    if(touche == "d"){
        gDirection = "droite";
        gPac.src = "images/pac_right.gif";
    }

}

function collision(elem1, elem2){

    let x1 = parseInt(elem1.style.left);
    let x2 = parseInt(elem2.style.left);
    let y1 = parseInt(elem1.style.top);
    let y2 = parseInt(elem2.style.top);
    if(x1 + 4 > x2 + elem2.width || x2 + 4 > x1 + elem1.width || y1 + 4 > y2 + elem2.height || y2 + 4 > y1 + elem1.height){
        return false;
    }
    return true;

}

function updateFruits(){

    if(zDelaiFruit <= 0 && gFruits.length < 3){
        ajouterFruit();
        zDelaiFruit = 80;
    }
    for(let f of gFruits){
        if(collision(gPac, f) == true){
            gFruitsObtenus.push(f.getAttribute("alt"));
            f.remove();
            gVitessePac += 0.2;
            gScore += 1;
            f.style.display = "none";
            document.querySelector(".score").textContent = "Score : " + gScore;
            supprimerFruitsObtenus();
        }
    }

}

function deplacerPac(){

    if(gDirection == "gauche"){
        gPac.style.left = parseFloat(gPac.style.left) - gVitessePac + "px";
    }
    if(gDirection == "droite"){
        gPac.style.left = parseFloat(gPac.style.left) + gVitessePac + "px";
    }
    if(gDirection == "haut"){
        gPac.style.top = parseFloat(gPac.style.top) - gVitessePac + "px";
    }
    if(gDirection == "bas"){
        gPac.style.top = parseFloat(gPac.style.top) + gVitessePac + "px";
    }

}

function supprimerFruitsObtenus(){

    for(let i = gFruits.length - 1; i >= 0; i--){
        if(gFruits[i].style.display == "none"){
            gFruits.splice(i, 1);
        }
    }

}

function updateJeu(){

    deplacerPac();
    zDelaiFruit -= 1;
    zDelaiFantome -= 1;
    updateFruits();
    updateFantomes();

}

function finJeu(){
    alert("Perdu !");
    for(let f of gFruits){
        f.remove();
    }
    gFruits = [];
    nettoyerFantomes();
    clearInterval(gPlanifJeu);
    retirerMadamePac();
    gDirection = "bas";
    gJeuActif = false;
    zDelaiFruit = 0;
    zDelaiFantome = 200;
    gVitessePac = 3;
    gVitesseFantomes = [];
    gDirectionFantomes = [];
}

function updateFantomes(){

    if(zDelaiFantome <= 0){
        ajouterFantome();

        if(gFantomes.length > 0){
            gVitesseFantomes.push(1);
            gDirectionFantomes.push("");
            gFantomes[gFantomes.length - 1].style.left = Math.floor(Math.random() * 768) + "px";
            gFantomes[gFantomes.length - 1].style.top = "0px";
        }
        
        zDelaiFantome = 300;
    }
    for(let i = 0; i < gFantomes.length; i++){
        if(collision(gPac, gFantomes[i]) == true){
            finJeu();
            return;
        }
        gVitesseFantomes[i] += 0.002;
        deplacerFantome(gFantomes[i], i);
    }

}

function deplacerFantome(fantome, i){
    let x1 = parseInt(gPac.style.left);
    let x2 = parseInt(fantome.style.left);
    let y1 = parseInt(gPac.style.top);
    let y2 = parseInt(fantome.style.top);
    if(Math.random() < 0.03 || gDirectionFantomes[i] == "" || (gDirectionFantomes[i] == "x" && Math.abs(x2 - x1) < 10)
    || (gDirectionFantomes[i] == "y" && Math.abs(y2 - y1) < 10)){
        gDirectionFantomes[i] = Math.abs(x2 - x1) > Math.abs(y2 - y1) ? "x" : "y";
    }

    if(gDirectionFantomes[i] == "x"){
        if(x1 < x2){
            fantome.style.left = parseFloat(fantome.style.left) - gVitesseFantomes[i] + "px";
        }
        else{
            fantome.style.left = parseFloat(fantome.style.left) + gVitesseFantomes[i] + "px";
        }
    }
    else{
        if(y1 < y2){
            fantome.style.top = parseFloat(fantome.style.top) - gVitesseFantomes[i] + "px";
        }
        else{
            fantome.style.top = parseFloat(fantome.style.top) + gVitesseFantomes[i] + "px";
        }
    }
}

function ajouterFruit(){
    let fruit = document.createElement("img");
    let random = Math.random();
    let type = random > 0.67 ? "cerise" : 
        (random > 0.33 ? "pomme" : "melon");
    fruit.setAttribute("src", "images/"+type+".png");
    fruit.setAttribute("alt", (type == "pomme" ? "🍎" : (type == "cerise" ? "🍒" : "🍉")));
    fruit.classList.add("fruit");
    document.querySelector(".jeu").appendChild(fruit);
    fruit.style.left = Math.floor(Math.random() * 800) + "px";
    fruit.style.top = Math.floor(50 + Math.random() * 350) + "px";;
    gFruits.push(fruit);
}