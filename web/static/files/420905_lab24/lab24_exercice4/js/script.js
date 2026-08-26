// Variables globales

let gCodeSecret = []; // Contiendra le code secret (ex : 2,7,0)
let gCode = [0,0,0];  // Contient les nombres affichés à l'écran, contrôlés par l'utilisateur

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 1 : Tout coder
//
// Il y a déjà le code pour le bouton « Vérifier », il reste deux morceaux
// à coder :
//
// - Rendre tous les boutons 🔽🔼 fonctionnels. (Attention ! Chaque chiffre
//   doit toujours rester entre 0 et 9)
// - Générer un code aléatoire une fois, lorsque la page ouvre, et mettre
//   les trois chiffres aléatoires de 0 à 9 obtenus dans le tableau gCode.
//
// Niveaux de réussite pour cet exercice (optionnel) :
// 
// 🥉 Bronze : Tout fonctionne comme demandé. Bravo !
// 
// 🥈 Argent : Vous avez utilisé Math.min() et Math.max() pour empêcher les
//             trois compteurs de dépasser 0 et 9. (Aucun if dans votre solution)
//
// 🥇 Or : Vous n'avez pas eu besoin d'utiliser les classes .up1, .up2, .up3,
//          .down1, .down2, .down3, .code1, .code2 et .code3, car vous avez
//         seulement utilisé .up, .down et .code avec querySelectorAll pour
//         créer les écouteurs d'événements et réaliser les fonctions.
//
// 💎 Diamant : Vous avez utilisé un paramètre dans vos écouteurs d'événements
// (Cours 23) pour facilement limiter votre nombre de fonctions à 2 ou 3. 
// (reduire(), augmenter() et possiblement genererCodeSecret())
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

function init(){

    // Cet écouteur d'événements est déjà créé pour vous.
    document.querySelector(".btnVerifier").addEventListener("click", verifierCode);

    // ↓ Vous pouvez rajouter des choses ici ↓

}

// ↓ Vos fonctions (vous risquez d'en créer 2 à 7, selon votre solution) ↓ 





// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// Cette fonction vous est déjà fournie ! Elle est appelée quand on appuie
// sur le bouton « Vérifier » 
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

// Vérifie si le code rentré par l'utilisateur est identique au code secret et crée une alerte.
function verifierCode(){

    for(let i = 0; i < gCode.length; i += 1){

        if(gCodeSecret[i] != gCode[i]){

            alert("Code erroné ! ❌");
            return;

        }

    }

    alert("Code valide ! ✅");

}