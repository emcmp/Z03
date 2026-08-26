// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 1 : Ajouer 16 écouteurs d'événement à l'aide d'une boucle
//
// - À l'aide d'une boucle avec une variable i qui vaudra de 1 à 25 (inclus), 
//   ajoutez un écouteur d'événements qui appelle la fonction reserver() quand 
//   on clique sur les éléments .case1, .case2, .case3, ... etc. jusqu'à .case25.
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

function init(){

    document.querySelector(".boutonReserve").addEventListener("click", verifierReservation);
    document.querySelector(".boutonLibre").addEventListener("click", verifierLibre);

    // Ajouter du code ici

}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 2 : Compléter la fonction changerStyle()
//
// Le paramètre element contiendra l'élément HTML d'une trottinette. Ça veut
// dire qu'on pourrait faire des choses comme element.textContent..., 
// element.classList..., element.style..., etc.
//
// Cette fonction doit, pour l'élément reçu en paramètre, vérifier s'il avait
// la classe "reserve".
// -> Si oui : on retire la classe "reserve" et on vide (= "") l'attribut title.
// -> Sinon : on donne la classe "reserve" et on remplit l'attribut title avec "TOUCHE PAS 😠".
//
// Si vous avez bien fait les TODOs 1 et 2, cliquer sur une trottinette devrait
// bien la faire alterner entre réservée (fond rouge et message au survol) et
// libre. (Fond blanc, pas de message au survol)
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

function changerStyle(element){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 3 : Compléter la fonction compterTrottinettes()
//
// Le paramètre reçu par la fonction (reserveOuLibre) contiendra toujours
// true ou false.
//
// Si le paramètre contient true, on doit retourner le nombre de trottinettes
// réservées. Sinon, on doit retourner le nombre qui sont libres.
//
// Une seule boucle while et un seul if devraient suffire. N'oubliez pas que
// pour savoir si une trottinette est réservée ou non, on vérifie si elle
// possède la classe "reserve". (Ou encore, on vérifie si son attribut title
// vaut "TOUCHE PAS 😠". Vous avez le choix !)
//
// Si vous avez bien fait votre code, les deux boutons dans la page fonctionneront.
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

function compterTrottinettes(reserveOuLibre){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// ⛔ Ne pas modifier le code à partir d'ici
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

function verifierReservation(){

    alert(compterTrottinettes(true) + " sont réservées.");

}

function verifierLibre(){

    alert(compterTrottinettes(false) + " sont libres.");

}

function reserver(e){

    changerStyle(e.currentTarget);

}