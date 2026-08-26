
// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 0 : Comprendre les variables globales
//
// Dans le jeu, il y a trois types de poisson dont on doit garder le compte.
// Il y a les 🐟, les 🐠 et les 🐡.
//
// - gComptesJoueur : Ce tableau contient le nombre de poissons de chaque
//   type comptés par le joueur. Par exemple, si le tableau est [0, 2, 3],
//   ça veut dire que le joueur a compté 0 🐟, 2 🐠 et 3 🐡.
// - gReponse : Ce tableau contient la bonne réponse pour chaque type de
//   poisson. Par exemple, si gReponse vaut [1, 2, 3], quand on va comparer 
//   avec les nombres du joueurs, on doit vérifier que le joueur a compté 
//   1 🐟, 2 🐠 et 3 🐡.
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

// Variables globales
let gComptesJoueur = [0, 0, 0];
let gReponse = [0, 0, 0];

// Écouteurs d'événements déjà créés
function init(){

    document.addEventListener("keydown", compter);
    document.querySelector(".bouton").addEventListener("click", jouer);
    document.querySelector(".niveau").addEventListener("click", changerNiveau);

}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 1 : Compléter compter()
//
// (Gardez à l'esprit que cette fonction est appelée suite à un événement
// clavier)
//
// - Selon la touche appuyée, on fait une action différente :
//      → "1" : On augmente le nombre de 🐟 comptés par le joueur de 1 et 
//              on appelle clignoterMorue().
//      → "2" : On augmente le nombre de 🐠 comptés par le joueur de 1 et
//              on appelle clignoterClown().
//      → "3" : On augmente le nombre de 🐡 comptés par le joueur de 1 et
//              on appelle clignoterBlob().
//
// (Les trois fonctions clignoter...() servent juste à faire flasher les 
// encadrés des poissons pour offrir un feedback visuel au joueur)
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
function compter(e){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 2 : Compléter validerReponses()
//
// - On alerte "Bravo !" si la réponse du joueur est parfaite et "Perdu !"
//   sinon. Attention ! Quand on compare des valeurs de tableaux, on ne peut
//   pas juste faire tab1 == tab2, on doit tout comparer manuellement :
//  tab1[0] == tab2[0] && tab1[1] == tab2[1] && ...
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
function validerReponses(){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 3 : Compléter avancerPoissons()
//
// - Pour tous les éléments HTML possédant la classe « poisson », on les 
// déplace de 12 pixels à gauche. (En réduisant la valeur de leur style left)
//
// (Par exemple, si un élément HTML avait le style left "22px", cela deviendra
// "10px")
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
function avancerPoissons(){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// Ne pas modifier à partir d'ici
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

// Autres variables globales
let gTempsRestant = 0;
let gNiveau = "facile";
let gPlanificateur;
let gPoissons = [];

function clignoterMorue(){
    document.querySelector("#morue").style.backgroundColor = "#6d85d4";
    setTimeout(function(){
        document.querySelector("#morue").style.backgroundColor = "#a0c0fb";
    }, 50);
}

function clignoterClown(){
    document.querySelector("#clown").style.backgroundColor = "#6d85d4";
    setTimeout(function(){
        document.querySelector("#clown").style.backgroundColor = "#a0c0fb";
    }, 50);
}

function clignoterBlob(){
    document.querySelector("#blob").style.backgroundColor = "#6d85d4";
    setTimeout(function(){
        document.querySelector("#blob").style.backgroundColor = "#a0c0fb";
    }, 50);
}

function afficherReponses(){
    clearInterval(gPlanificateur);

    document.querySelector("#resultats").style.display = "block";

    document.querySelector("#cpMorue").textContent = gComptesJoueur[0];
    document.querySelector("#cpClown").textContent = gComptesJoueur[1];
    document.querySelector("#cpBlob").textContent = gComptesJoueur[2];
    document.querySelector("#nbMorue").textContent = gReponse[0];
    document.querySelector("#nbClown").textContent = gReponse[1];
    document.querySelector("#nbBlob").textContent = gReponse[2];
    validerReponses();
}

function updateJeu(){

    if(gTempsRestant > 0){
        gTempsRestant -= 0.025;
        document.querySelector("#temps").textContent = "Temps restant : " + Math.round(gTempsRestant);
    }

    let bonus = gNiveau == "facile" ? 0 : (gNiveau == "moyen" ? 1 : 2);

    if(gTempsRestant > 5 && gPoissons.length < (0.3 + 0.2 * bonus) * (10 - Math.abs(10 - gTempsRestant))){
            
        ajouterPoisson();
    }

    avancerPoissons();
    retirerPoissons();

    if(gTempsRestant <= 0 && gPoissons.length == 0){
        afficherReponses();
    }

}

function jouer(){

    if(gTempsRestant <= 0){
        gPlanificateur = setInterval(updateJeu, 25);
        gTempsRestant = 20;
        gReponse = [0, 0, 0];
        gComptesJoueur = [0, 0, 0];
        gPoissons = [];
        document.querySelector("#resultats").style.display = "none";
    }

}

function ajouterPoisson(){

    let p = document.createElement("div");
    let type = Math.floor(Math.random() * 3);
    p.textContent = type == 0 ? "🐟" : (type == 1 ? "🐠" : "🐡");
    p.style.top = Math.floor(10 + Math.random() * 380) + "px";
    p.style.left = "800px";
    p.classList.add("poisson");
    document.querySelector("#jeu").appendChild(p);

    gReponse[type] += 1;
    gPoissons.push(p);

}

function retirerPoissons(){

    for(let i = gPoissons.length - 1; i >= 0; i -= 1){
        if(parseInt(gPoissons[i].style.left) < -50){
            gPoissons[i].remove();
            gPoissons.splice(i, 1);
        }
    }

}

function changerNiveau(){
    if(gTempsRestant <= 0){
        gNiveau = gNiveau == "facile" ? "moyen" : (gNiveau == "moyen" ? "difficile" : "facile");
        document.querySelector(".niveau").textContent = "Niveau : " + gNiveau;
    }
}