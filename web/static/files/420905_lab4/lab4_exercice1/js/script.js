
// RAPPEL ⛔ : Quand on vous demande de faire quelque chose « dans la console »,
//              ça veut dire qu'il faut ouvrir la page HTML de ce projet dans 
//              Firefox, puis ouvrir la console avec F12 / Inspecter pour pouvoir
//              écrire dedans.

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 1 : 
// - Déclarez une variable globale nommée gNombre ci-dessous, dans le code,  et 
//   affectez-lui la valeur 3
// - Ensuite, dans la console du navigateur, faites 2 choses :
//      - Tentez d'appeler la variable gNombre pour vérifier qu'elle existe bien.
//        (Appeler la variable gNombre veut juste dire écrire son nom dans la
//        console et appuyer sur Enter pour voir sa valeur)
//      - Toujours dans la console, tentez d'incrémenter la variable gNombre 
//        (gNombre += 1) pour vérifier que ça donne 4. (Incrémenter vaut dire
//        augmenter la valeur)
//
// Si les deux dernières étapes ont bien fonctionné, vous avez créé une variable
// GLOBALE avec succès ! Vous pouvez passer au TODO 2.
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

// ↓ Déclarer gNombre ici ! ↓




// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 2 : 
// - Déclarez une variable locale nommée « nombre » et affectez-lui la valeur 6 
//   à l'intérieur de la fonction nombreConsole() ci-dessous, dans le code.
// - Dans la console du navigateur, tentez ensuite d'appeler la variable nombre. 
//   Ce n'est pas censé fonctionner, car la variable n'est pas globale et existe 
//   juste dans la fonction nombreConsole().
//
// Si la console n'est pas capable de vous donner la valeur de la variable nombre,
// c'est que vous avez bien réussi à créer une variable LOCALE.
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

function nombreConsole(){

    // ↓ Déclarer nombre ici ! ↓
    

    

    console.log(nombre);

}

/* EN RÉSUMÉ :
- gNombre est une variable globale. On peut modifier sa valeur et l'utiliser
  dans la console et dans N'IMPORTE QUELLE fonction.
- nombre est une variable locale. On pourrait modifier sa valeur à l'intérieur de la
  fonction nombreConsole(), mais on ne peut pas l'utiliser dans la console du navigateur
  et on peut SEULEMENT l'utiliser dans la fonction où elle a été déclarée. (nombreConsole)
*/