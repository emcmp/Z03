
// Écouteurs d'événements
function init(){

    document.querySelector(".pkmn1").addEventListener("click",chose1);
    document.querySelector(".pkmn2").addEventListener("click",chose2);
    document.querySelector(".pkmn3").addEventListener("click",chose3);
    document.querySelector(".pkmn4").addEventListener("click",chose4);
    document.querySelector(".pkmn5").addEventListener("click",chose5);
    document.querySelector(".pkmn6").addEventListener("click",chose6);

    document.querySelector(".stardew1").addEventListener("click", stardew1);
    document.querySelector(".stardew2").addEventListener("click", stardew2);
    document.querySelector(".stardew3").addEventListener("click", stardew3);
    document.querySelector(".stardew4").addEventListener("click", stardew4);
    document.querySelector(".stardew5").addEventListener("click", stardew5);
    document.querySelector(".stardew6").addEventListener("click", stardew6);

}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 1 : Compléter messagePokemon()
// ⛔ Attention ! Interdit d'utiliser if / else
// 
// Cette fonction possède deux paramètres :
//      → EstUnPkmn : contient true si on vient de cliquer sur un Pokémon et
//                    contient false sinon.
//      → nom : contient le nom du Pokémon ou de la chose.
//
// - Cette fonction doit simplement RETOURNER une chaîne de caractères :
//      → Si c'est un pokémon : "Ce Pokémon s'appelle X", où X est le nom du
//        pokémon.
//      → Sinon : "Ce n'est pas un Pokémon. C'est X", où X est le nom de 
//        la chose.
//
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
function messagePokemon(EstUnPkmn, nom){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 2 : Compléter messageStardew()
// ⛔ Attention ! Vous avez 2 choix pour compléter la fonction :
// 1 - Utiliser seulement 1 if, 1 else et 2 conditions ternaires (choisissez ceci)
// 2 - (⭐Défi) Utiliser seulement 3 conditions ternaires
//
// Cette fonction possède 3 paramètres :
//      → genre : vaut "homme" ou "femme"
//      → dispoMariage : vaut true ou false
//      → nom : Nom du personnage
//
// - Cette fonction doit simplement RETOURNER une chaîne de caractères selon 
//   le genre et le nom du personnage cliqué :
//      → "homme" qui peut être marié : "X peut devenir ton husbando", où X
//        est remplacé par le nom du personnage.
//      → "femme" qui peut être mariée : "X peut devenir ta waifu", où X est
//        est remplacé par le nom du personnage.
//      → Sinon : "Tu ne peux pas marier X !", où X est le nom du personnage.
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
function messageStardew(genre, dispoMariage, nom){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// Ne pas modifier le code à partir d'ici
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
function chose1(){
    alert(messagePokemon(true, "Monorpale"));
}

function chose2(){
    alert(messagePokemon(true, "Tic")); 
}

function chose3(){
    alert(messagePokemon(false, "des souliers."));
}

function chose4(){
    alert(messagePokemon(false, "une sacoche."));
}

function chose5(){
    alert(messagePokemon(true, "Trépassable"));
}

function chose6(){
    alert(messagePokemon(false, "un poulet Minecraft."));
}

function stardew1(){
    alert(messageStardew("femme", true, "Maru"));
}

function stardew2(){
    alert(messageStardew("homme", true, "Alex"));
}

function stardew3(){
    alert(messageStardew("homme", false, "grand-papa"));
}

function stardew4(){
    alert(messageStardew("femme", true, "Abigail"));
}

function stardew5(){
    alert(messageStardew("homme", false, "Gus"));
}

function stardew6(){
    alert(messageStardew("femme", false, "Sandy"));
}