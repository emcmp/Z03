// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 1 : Ajouter 2 variables globales
//
// - gAnimaux2 : Tableau de chaînes de caractères avec les données
//               "chat", "chien", "perroquet".
// - gPrix : Tableaux de nombres entiers avec les données 
//           5, 2, 3, 5, 5.
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

// Variables globales
let gAnimaux1 = ["poule", "vache", "cochon"];




// Écouteurs d'événements (Rien à ajouter)
function init(){

    document.querySelector(".bouton1").addEventListener("click", calculTotal);
    document.querySelector(".bouton2").addEventListener("click", bordureRose1);
    document.querySelector(".bouton3").addEventListener("click", bordureRose2);

}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 2 : Compléter calculTotal()
// - Le but est de calculer la somme des valeurs dans le tableaux gPrix et
//   d'afficher le total dans une alerte.
//
// - Déclarez une variable locale nommée total et affectez-lui la somme des
//   cinq données dans le tableau gPrix.
// - Dans une alerte, affichez le message "Total : X". (X doit être le total)
//
// 💡 Pour le moment, pas obligé d'utiliser une boucle. (Mais vous pouvez)
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

function calculTotal(){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 3 : Compléter bordureRose1() et bordureRose2()
//
// - bordureRose1() : Si la première, la deuxième OU la troisième donnée dans 
//                    le tableau gAnimaux1 est identique à "cochon", changer 
//                    la couleur de la bordure de l'image dans la page en "pink".
//                    Sinon, on change la couleur de la bordure en "green".
//
// - bordureRose2() : Exactement la même chose, mais avec le tableau gAnimaux2.
//   
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

function bordureRose1(){


    
}

function bordureRose2(){


    
}






