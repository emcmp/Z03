
// Rien à changer dans init() !
function init(){

    document.addEventListener("keydown", toucheClavier);
    document.querySelector(".bouton1").addEventListener("click", alertePalindrome);

}

function alertePalindrome(){

    if(palindromeOuNon(document.querySelector(".texte").textContent) == true){
        alert("C'est un palindrome ! 🥳");
    }
    else{
        alert("Ce n'est pas un palindrome. 😭");
    }

}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 1 : Compléter palindromeOuNon()
//
// - C'est quoi un palindrome ? Pour cet exercice, nous dirons que c'est un 
//   mot qui est identique si on le lit à l'envers : laval, radar, kayak, été,
//   ici, ressasser, etc. Les lettres se miroitent au milieu du mot, en 
//   quelque sorte ...
//
// - Cette fonction doit simplement retourner true si oui, et false si non.
// - Le paramètre mot contient le texte à vérifier.
//
// 💡 Indices 💡
// - À l'aide d'une boucle, de la fonction pour chaînes de caractères charAt()
//   et de .length, vous devriez réussir à vérifier si le mot (dans .texte)
//   correspond à un palindrome.
// - Pas besoin de variables globales, pas besoin de fonction supplémentaires.
//   C'est une question plus complexe, mais ça prend moins de 10 lignes de code,
//   à priori. Le plus dur est de songer à comment parcourir le mot.
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

function palindromeOuNon(mot){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// Ne pas toucher au code à partir d'ici
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
function toucheClavier(e){
    if(e.key == " " || e.key == "'"){
        e.preventDefault();
    }
    if(e.key.length == 1 && e.key.match("[a-ù]")){
        document.querySelector(".texte").textContent += e.key;
    }
    if(e.key == "Backspace"){
        document.querySelector(".texte").textContent = 
        document.querySelector(".texte").textContent.substring(0, 
            document.querySelector(".texte").textContent.length - 1)
    }
}