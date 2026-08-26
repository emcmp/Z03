let gMots = [];         // Liste des mots à trouver pour la manche en cours
let gNbMots = 2;        // Nombre de mots à trouver pour la manche en cours
let gNbErreurs = 0;     // Nombre de mots erronés tapés pendant la manche
let gTempsRestant = 8;  // Temps restant en secondes pour mémoriser les mots
let gScore = 0;         // Score actuel du joueur
let gPlanifJeu;         // Planificateur pour le décompte durant la mémorisation

// Écouteurs d'événements
function init(){

    document.querySelector(".bouton1").addEventListener("click", jouer);
    document.querySelector(".langueChat").addEventListener("click", langueAuChat);
    document.addEventListener("keydown", toucheClavier);

}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 1 : Compléter validerReponse()
// Le but de cette fonction sera de valider la réponse tapée par le joueur.
// (Qui peut être trouvée dans le contenu textuel de .reponse)
//
// - Sachant que gMots contient tous les mots à trouver, si un mot dans ce
//   tableau correspond à celui tapé, on retire le mot du tableau, on vide
//   le contenu textuel de .reponse et on met le texte de .motsTrouves 
//   couleur "limegreen". (Boucle for qui parcourt gMots nécessaire !)
//
// - Si jamais AUCUN mot dans gMots ne correspond au mot tapé, on augmente
//   le nombre d'erreurs commises de 1 et on met le texte de .erreurs couleur
//   "crimson". Pour réussir à faire cela, préparez une variable qui contient
//   false AVANT la boucle. SI jamais vous croisez le mot dans le tableau,
//   changez sa valeur pour true !
//
// - Dans tous les cas, à la fin de la fonction, on appelle la fonction
//   actualiserAffichage().
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
function validerReponse(){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 2 : Compléter augmenterScore()
// Le but de cette fonction est d'augmenter le score du joueur. N'hésitez pas
// à vérifier les variables globales si les explications sont floues.
//
// - Selon le nombre de mots à trouver pour la manche en cours, on augmente 
//   le score du joueur (Utilisez un switch) :
//      → 3 mots : +1 point
//      → 4 ou 5 mots : +2 points
//      → dans les autres cas : on augmente le score de 5 moins le nombre
//        d'erreurs commises durant la manche.
//
// - Ensuite, on met à jour l'affichage du score dans la page. (Le texte doit
//   avoir le format "Score : X")
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
function augmenterScore(){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// Ne pas modifier le code à partir d'ici
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

function actualiserAffichage(){

    document.querySelector(".erreurs").textContent = gNbErreurs + " / 3";
    document.querySelector(".motsTrouves").textContent = gNbMots - gMots.length + " / " + gNbMots;

    if(gNbErreurs >= 3){
        alert("Perdu !");
        defaite();
    }

    else if(gMots.length == 0){

        augmenterScore();
        nouvelleManche();

    }

}


function jouer(){

    document.querySelector(".bouton1").style.display = "none";
    gScore = 0;
    document.querySelector(".score").textContent = "Score : " + gScore;
    gNbMots = 2;
    nouvelleManche();

}

function nouvelleManche(){

    document.querySelector(".ui").style.display = "none";
    document.querySelector(".erreurs").style.color = "white";
    document.querySelector(".motsTrouves").style.color = "white";
    document.querySelector(".temps").style.display = "block";
    gNbMots += 1;
    gNbErreurs = 0;
    remplirMots();
    afficherMots();
    gTempsRestant = 3 * gMots.length + Math.floor(Math.pow(Math.max(0, gMots.length - 5), 1.3));
    document.querySelector(".secondes").textContent = gTempsRestant;
    gPlanifJeu = setInterval(decompte, 1000);

}

function defaite(){

    document.querySelector(".ui").style.display = "none";
    document.querySelector(".bouton1").style.display = "block";

}

function decompte(){

    gTempsRestant -= 1;
    document.querySelector(".secondes").textContent = gTempsRestant;
    if(gTempsRestant <= 0){
        clearInterval(gPlanifJeu);
        document.querySelector(".ui").style.display = "block";
        actualiserAffichage();
        document.querySelector(".temps").style.display = "none";
        for(let em of zElemMots){
            em.remove();
        }
        zElemMots = [];
    }

}

function toucheClavier(e){

    document.querySelector(".erreurs").style.color = "white";
    document.querySelector(".motsTrouves").style.color = "white";

    if(gTempsRestant > 0){
        return;
    }

    if(e.key.length == 1 && e.key.match("[a-z|é|è]")){
        document.querySelector(".reponse").textContent += e.key;
    }
    if(e.key == "Backspace"){
        let reponse = document.querySelector(".reponse");
        reponse.textContent = reponse.textContent.substring(0, reponse.textContent.length -1);
    }
    if(e.key == "Enter"){
        validerReponse();
    }

}

function collisionElements(a, b){
    let x1_a = parseInt(a.style.left);
    let x2_a = x1_a + a.offsetWidth + 60;
    let y1_a = parseInt(a.style.top);
    let y2_a = y1_a + a.offsetHeight + 30;

    let x1_b = parseInt(b.style.left);
    let x2_b = x1_b + b.offsetWidth + 60;
    let y1_b = parseInt(b.style.top);
    let y2_b = y1_b + b.offsetHeight + 30;

    if(x1_a > x2_b || x2_a < x1_b || y2_a < y1_b || y2_b < y1_a){
        return false;
    }
    return true;
}

function langueAuChat(){

    document.querySelector(".reponse").textContent = gMots[0];
    gNbErreurs += 1;
    document.querySelector(".erreurs").style.color = "crimson";
    actualiserAffichage();

}

function remplirMots(){

    while(gMots.length < gNbMots){
        let mot = zMots[Math.floor(Math.random() * zMots.length)];
        if(!gMots.includes(mot)){
            gMots.push(mot);
        }
    }

}

function afficherMots(){

    for(let m of gMots){

        let elemMot = document.createElement("div");
        elemMot.textContent = m;
        elemMot.classList.add("mot");

        let x;
        let y;

        let placement = false;
        let nbEssais = 0;
        while(placement == false && nbEssais < 100){
            
            x = 5 + Math.floor(Math.random() * (795 - elemMot.offsetWidth - 70));
            elemMot.style.left = x + "px";
            y = 5 + Math.floor(Math.random() * (395 - elemMot.offsetHeight - 30));
            elemMot.style.top = y + "px";

            placement = true;
            nbEssais += 1;
            for(let em of zElemMots){
                if(collisionElements(em, elemMot)){
                    placement = false;
                    break;
                }
            }
        }

        document.querySelector(".jeu").appendChild(elemMot);
        zElemMots.push(elemMot);

    }

}

let zElemMots = [];
let zMots = 
    ["maison", "bateau", "soleil", "tomate", "tampon", "potage", "talent", "éponge",
     "rotule", "oiseau", "orange", "violet", "salade", "banane", "citron", "viande",
     "boulot", "carton", "amande", "patate", "crayon", "annexe", "expert", "jaloux",
     "exprès", "yakuza", "habile", "hélium", "crotte", "savane", "hélice", "kimono",
     "klaxon", "kraken", "armure", "agonie", "agneau", "abysse", "ballon", "bandit",
     "banque", "tennis", "beauté", "beigne", "beurre", "biceps", "bipède", "blague",
     "bistro", "bleuet", "bouffe", "bougie", "cabine", "cactus", "canapé", "castor",
     "cercle", "céleri", "cerise", "chèque", "chèvre", "chlore", "cinéma", "dessin",
     "déclin", "domino", "délice", "désolé", "diable", "dingue", "disque", "donjon",
     "dragon", "étoile", "empire", "emploi", "escroc", "ethnie", "facile", "farine",
     "festin", "fiesta", "fierté", "flamme", "foetus", "fourmi", "galère", "geyser",
     "ghetto", "glaçon", "grotte", "indice", "jumeau", "jungle", "langue", "larynx",
     "lavabo", "légume", "manège", "masque", "méduse", "minute", "nectar", "oeuvre",
     "ordure", "phobie", "pierre", "pioche", "phrase", "phoque", "poésie", "quartz",
     "quille", "rabais", "radeau", "remède", "rikiki", "samedi", "saumon", "douche",
     "sirène", "succès", "témoin", "thorax", "tympan", "ultime", "utopie", "vaccin",
     "vapeur", "valise", "viking", "voisin", "whisky", "yaourt", "zigzag", "zombie",
     "esprit", "chaise", "cadeau", "requin", "bambin", "comète", "topaze", "patron"];