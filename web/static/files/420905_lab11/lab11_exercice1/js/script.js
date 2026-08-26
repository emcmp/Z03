// Écouteurs d'événements (Rien à ajouter)
function init(){

    document.querySelector(".bouton1").addEventListener("click", dixBananes);
    document.querySelector(".bouton2").addEventListener("click", centTexte);
    document.querySelector(".bouton3").addEventListener("click", sommeUnMille);
    document.querySelector(".bouton4").addEventListener("click", bordureAliments)

}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 1 : Compléter dixBananes()
//
// - D'abord, on vide le contenu textuel de l'élément .texte. (On remplace son
//   contenu textuel par "")
//
// - Ensuite, à  l'aide d'une boucle, on va ajouter au contenu textuel de
//   l'élément .texte la chaîne "banane 🍌 " dix fois.
// - La boucle doit faire 10 itérations en tout. Donc on pourrait démarrer
//   une variable nommée i avec la valeur 1 et s'assurer qu'elle soit toujours 
//   plus petite que 11.
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

function dixBananes(){

    
    
}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 2 : Compléter centTexte()
//
// - On veut écrire les nombres de 1 à 100 dans l'élément .texte.
//
// - Commencez par vider le contenu textuel de .texte. (= "")
// - À l'aide d'une boucle, ajoutez le texte "X " 100 fois. (X doit être les
//   nombres de 1 à 100) Le texte doit donc ressembler à "1 2 3 4 5 6 ..."
//   N'oubliez pas de mettre des espaces entre les nombres pour ne pas avoir
//   quelque chose comme 123456789101112... 😵
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

function centTexte(){

    

}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 3 : Compléter sommeUnMille()
//
// - Le but sera de faire une boucle qui additionne les nombres de 1 à 1000
//   et affiche le total dans une alerte.
//
// - Déclarez une variable locale nommée total et affectez-lui la valeur 0.
// - Faites une boucle avec une variable i qui commence à 1 et se rendra 
//   jusqu'à 1000, inclus. (Donc dès que i vaut 1001, on s'arrête)
// - À l'intérieur de la boucle, on ajoute la valeur de i dans la 
//   variable total. On va donc ajouter +1, +2, +3, +4, etc. jusqu'à
//   +1000.
// - À la fin de la fonction (et non DANS la boucle sinon ça fait 1000 alertes 😨) 
//   on fait une alerte avec le message "La variable total vaut X". (Remplacez
//   X par le total)
//
// - (Le résultat est censé être 500500)
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

function sommeUnMille(){

    

}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 4 : Compléter classeAliments()
//
// - À l'aide d'une boucle qui contient pas plus de deux instructions, donnez
//   une couleur de bordure "crimson" aux éléments .food1, .food2, ..., .food7.
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

function bordureAliments(){

    

}