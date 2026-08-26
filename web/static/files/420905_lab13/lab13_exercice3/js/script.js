let gFruits = ["pomme", "banane", "orange"];

// Écouteurs d'événements déjà complétés
function init(){

    document.querySelector(".bouton1").addEventListener("click", double1);
    document.querySelector(".bouton2").addEventListener("click", double2);
    document.querySelector(".bouton3").addEventListener("click", boutonMin1);
    document.querySelector(".bouton4").addEventListener("click", boutonMin2);
    document.querySelector(".bouton5").addEventListener("click", somme1);
    document.querySelector(".bouton6").addEventListener("click", somme2);
    document.querySelector(".bouton7").addEventListener("click", somme3);
    document.querySelector(".bouton8").addEventListener("click", nbEtoiles);
    document.querySelector(".bouton9").addEventListener("click", nbMoais);

}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 1 : Créer une fonction, compléter double1() et double2().
//
// Commencez par créer une fonction nommée doublerValeur() :
// - C'est une fonction qui reçoit un seul paramètre. (Un nombre)
// - La fonction retourne la valeur reçue, mais doublée.
//   (Donc par exemple, si la fonction reçoit 4, elle retourne 8)
//
// Pour la fonction double1() :
// - Cette fonction imprime dans la console le double de la valeur 5.
//   (Donc en gros, on affiche 10 dans la console, mais en appelant la 
//    doublerValeur() en lui passant la valeur 5)
//
// Pour la fonction double2() :
// - Cette fonction fait la même chose que double1(), mais elle affiche le
//   double de la valeur -3 plutôt que le double de 5.
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

// ↓ Créer la fonction doublerValeur() ici ↓



function double1(){



}

function double2(){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 2 : Créer une fonction, compléter boutonMin1() et boutonMin2()
//
// Commencez par créer la fonction minimum() :
// - Elle reçoit deux paramètres. (Deux nombres)
// - Elle retourne le plus petit des deux nombres.
// - Pour y arriver, vous pouvez utiliser un if ... else.
//
// Complétez la fonction boutonMin1() :
// - Cette fonction crée une alerte avec la valeur la plus petite parmi 
//   2 et 3. (Donc on va faire une alerte avec la valeur 2, mais en se 
//   servant de la fonction minimum())
//
// Complétez la fonction boutonMin2() :
// - Cette fonction crée une alerte avec la valeur la plus petite parmi
//   -1 et 4. (Encore en se servant de la fonction minimum())
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

// ↓ Créer la fonction minimum() ici ↓



function boutonMin1(){



}

function boutonMin2(){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 3 : Créer une fonction, compléter somme1(), somme2() et somme3()
//
// Commencez par créer la fonction somme() :
// - Elle reçoit deux paramètres. (Deux nombres)
// - Elle retourne la somme de tous les nombres entre le premier et le deuxième, inclus.
// - Pour y arriver, vous devez utiliser une boucle.
//
// Ex : appeler somme(3, 6) va retourner le total de 3 + 4 + 5 + 6, donc 18.
// Si le premier paramètre est plus grand que le deuxième... retournez 0 à la place.
//
// Complétez la fonction somme1() :
// - Remplacez le texte de .texte par la somme des nombres de 1 à 10 en utilisant
//   la fonction somme(). (Ça devrait donner 55)
//
// Complétez la fonction somme2() :
// - Même chose, mais avec la somme des nombres de 123 à 456. (Devrait donner 96693)
//
// Complétez la fonction somme3() :
// - Même chose, mais avec la somme des nombres de 7 à 2. (Ne fait pas de sens :
//   votre fonction somme() devrait donc retourner 0 cette fois-ci !) 
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

// ↓ Créer la fonction somme() ici ↓



function somme1(){



}

function somme2(){



}

function somme3(){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 4 : Créer une fonction, compléter nbEtoiles() et nbMoais()
//
// Commencez par créer la fonction compterElements() :
// - Elle reçoit deux paramètres. (Le 1er paramètre est un tableau rempli 
//   avec plusieurs chaînes de caractères et le 2e paramètre est une chaîne 
//   de caractères)
// - Elle retourne le nombre de fois où la chaîne dans le 2e paramètre apparait
//   dans le tableau reçu en 1er paramètre.
// - Ex : Appeler compterElements(["⭐", "💗","⭐"], "⭐") retourne 2, car
//   l'étoile (2e paramètre) est présente deux fois dans le tableau. (1er paramètre)
//
// Complétez la fonction nbEtoiles() :
// - Cette fonction remplace le texte de l'élément .texte par le nombre de "⭐"
//   présentes dans ce tableau : ["⭐", "💗","⭐", "💗", "💗", "⭐"]
//
// Complétez la fonction nbMoais() :
// - Même chose, mais on compte le nombre de "🗿" présents dans ce tableau :
//   ["💎", "🗿", "🗿", "🗿", "💎", "🗿"]
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

// ↓ Créer la fonction compterElements() ici ↓



function nbEtoiles(){



}

function nbMoais(){



}