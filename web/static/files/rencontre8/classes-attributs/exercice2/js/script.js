// Écouteurs d'événements (rien à ajouter)
function init(){

    document.querySelector(".sobre").addEventListener("click", styleSobre);
    document.querySelector(".flashy").addEventListener("click", styleFlashy);

}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 1 : Modifier styleFlashy() et styleSobre()
//
// - Pour le moment, le code « document.querySelector(".image") » est répété
//   cinq fois dans chacune de ces deux fonctions. Rangez l'élément .image dans
//   une variable pour remplacer le code répétitif.
//
// - Pour tous les futurs exercices, n'hésitez jamais à faire cela DÈS qu'un
//   élément HTML est manipulé plus d'une fois ! 📈🏆
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

function styleFlashy(){

    document.querySelector(".image").classList.add("flashy");
    document.querySelector(".image").classList.remove("sobre");
    document.querySelector(".image").title = "Mario flashy 🌈";
    document.querySelector(".image").src = "images/flashy.png";
    document.querySelector(".image").alt = "Mario flashy";

}

function styleSobre(){

    document.querySelector(".image").classList.remove("flashy");
    document.querySelector(".image").classList.add("sobre");
    document.querySelector(".image").title = "Mario sobre 🤵";
    document.querySelector(".image").src = "images/sobre.png";
    document.querySelector(".image").alt = "Mario sobre";

}


