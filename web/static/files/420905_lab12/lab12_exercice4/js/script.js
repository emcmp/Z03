// Variables globales
let gFruits = ["🍓", "🍋", "🍏", "🍇", "🍊"];
let gPrix = [4.99, 1.95, 2.49, 6.45, 1.45];
let gJoueurs = ["crewmate", "crewmate", "impostor", "impostor", "crewmate", "impostor"];

// Écouteurs d'événements (Rien à ajouter)
function init(){

    document.querySelector(".bouton1").addEventListener("click", fruitsConsole);
    document.querySelector(".bouton2").addEventListener("click", totalPrix);
    document.querySelector(".bouton3").addEventListener("click", faireAchats);
    document.querySelector(".bouton4").addEventListener("click", inflationSoudaine);
    document.querySelector(".bouton5").addEventListener("click", amogus);

}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 1 : Compléter fruitsConsole()
//
// - À l'aide d'une boucle qui parcourt les données du tableau gFruits,
//   on affiche chacune des données dans la console.
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

function fruitsConsole(){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 2 : Compléter totalPrix()
//
// - On déclare une variable nommée total avec la valeur 0.
// - À l'aide d'une boucle qui parcourt le tableau gPrix, on calcule la somme
//   de tous les prix en augmentant la valeur de la variable total.
// - Dans la console, on affiche le message "Le prix total est X dollars".
//   (Le total est censé être 17.33)
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

function totalPrix(){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 3 : Compléter faireAchats()
//
// - On déclare une variable nommée argent et on lui affecte la valeur 20.
// - Avec une boucle qui parcourt le tableau gPrix, on réduit la valeur de la 
//   variable argent avec chacun des prix dans gPrix. (Donc -4.99, -1.95, etc.)
// - Finalement, on alerte "Il vous reste X dollars". 
//   (Normalement ça devrait donner 2.67)
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

function faireAchats(){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 4 : Compléter inflationSoudaine()
//
// - Augmenter toutes les valeurs dans le tableau gPrix de 1.
//  (N'hésitez pas à vérifier l'exemple à la diapo 22 dans les notes de cours !)
//
// - Pour tester, vérifier simplement la valeur de gPrix dans la console après
//   avoir appuyé sur le bouton. Vous constaterez si les valeurs dans le tableau
//   ont changé ou non.
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

function inflationSoudaine(){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 5 : Compléter amogus() ඞ
//
// - À l'aide d'une boucle, parcourez le tableau gJoueurs. Le but est de
//   compter le nombre de "crewmate" et le nombre de "impostor". 
//   (Pour y arriver, avant la boucle, préparez deux variables : une nommée
//    nbImpostors et une nommée nbCrewmates. Dans la boucle, pour chaque
//    donnée qui contient "crewmate", augmenter nbCrewmates de 1 et pour 
//    chaque donnée qui contient "impostor", augmenter nbImpostors de 1)
// - Après la boucle, il faut lancer une alerte :
//      → Si le nombre d'imposteurs est plus grand ou égal au nombre de
//        crewmates : "aaaaaaaaa ! C'est peine perdue ! 💀"
//      → Sinon : "Il y a encore de l'espoir 🙏"
//
// (N'hésitez pas à allez modifier le nombre d'imposteurs et de crewmates 
// manuellement dans les variables globales pour tester les différents 
// résultats de votre fonction. Pour le moment, les deux quantités sont égales)
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

function amogus(){



}