let gFruits = ["🍒", "🍎", "🍊", "🍋", "🍐", "🍇", "🍑"];
let gNombres = [5, 15, 25, 35, 45, 55];
let gPrix = [20, 40, 35, 10, 5, 15, 30];
let gCreatures = ["chat", "araignée", "araignée", "chien", "chat", "mouche", "oiseau", "araignée"];

function init(){

    document.querySelector(".bouton1").addEventListener("click", afficherFruits);
    document.querySelector(".bouton2").addEventListener("click", diminuerValeurs);
    document.querySelector(".bouton3").addEventListener("click", retirerPrix);
    document.querySelector(".bouton4").addEventListener("click", retirerBebites);

}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 1 : Compléter afficherFruits()
//
// - Videz le contenu textuel de .fruits.
// - À l'aide d'une boucle for, ajoutez tous les fruits du
//   tableau gFruits dans le contenu textuel de .fruits. Pas besoin de les
//   séparer par des espaces.
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
function afficherFruits(){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 2 : Compléter diminuerValeurs()
//
// - À l'aide d'une boucle for, réduisez toutes les valeurs dans gNombres de
//   5.
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
function diminuerValeurs(){



    rafraichirAffichageTableaux(); // Ceci met à jour les tableaux dans la page
}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 3 : Compléter retirerPrix()
//
// - À l'aide d'une boucle for, retirez tous les prix dans le tableau gPrix
//   qui sont supérieurs ou égaux à 30.
//
// (Attention ! Comme la boucle va supprimer des éléments, il faut qu'elle
// parcourt le tableau À L'ENVERS)
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
function retirerPrix(){



    rafraichirAffichageTableaux(); // Ceci met à jour les tableaux dans la page
}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 4 : Compléter retirerBebites()
//
// - À l'aide d'une boucle for, retirez, dans le tableau gCreatures, tous les
//   éléments qui correspondent à "araignée" OU "mouche". Vous devrez aussi,
//   à l'aide d'une variable, compter le nombre d'éléments retirés.
// - Finalement, faites une alerte avec le texte "X bébites retirées !", où
//   X correspond au nombre d'éléments retirés que vous avez comptés plus haut.
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
function retirerBebites(){



    rafraichirAffichageTableaux(); // Ceci met à jour les tableaux dans la page
}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// Ne pas modifier le code ci-dessous
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

function rafraichirAffichageTableaux(){
    document.querySelector("#nombres").textContent = gNombres;
    document.querySelector("#prix").textContent = gPrix;
    document.querySelector("#creatures").textContent = gCreatures;
}