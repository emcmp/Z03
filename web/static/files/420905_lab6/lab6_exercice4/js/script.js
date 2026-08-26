// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 1 : Tout coder
//
// Il y a trois boutons à rendre fonctionnels :
//
// 1 - Un bouton permet d'ajouter une feuille de papier dans l'imprimante.
// 2 - Un bouton permet de changer les cartouches d'encre et de rétablir leur 
//   capacité à 100%.
//
// (Pour ces deux premiers boutons, n'oubliez pas de mettre à jour l'affichage
// dans la page Web. N'oubliez pas le symbole % pour l'encre)
//
// ⏳ Une fois que les deux premiers boutons fonctionnent, passez au troisième :
// 
// 3 - Un bouton pour imprimer. C'est le plus complexe, voici le comportement
//     de l'imprimante selon la situation :
//
// → Il reste 0 feuille : 
//      • Pas d'impression  
//      • Message dans la console "Veuillez ajouter du papier !! Et avec le bon format SVP ! 😠📃"
//
// → Il reste MOINS de 20% d'encre :
//      • Pas d'impression
//      • Message dans la console "Veuillez changer les cartouches !! Elles sont VIDES ! 😠🎨"
//
// → Au moins une feuille et au moins 40% d'encre :
//      • On imprime !
//
// → Au moins une feuille et au moins 20% (mais moins de 40%) d'encre :
//      • On imprime !
//      • Message dans la console : "Attention les cartouches sont faibles !! 😠🎨"
//
// ❌ Dans tous les cas, si l'impression n'a pas fonctionné :
//     • On crée l'alerte "Impression ANNULÉE 🚔🤬"
//
// ✅ Dans tous les cas, si l'impression fonctionne :
//     • On affiche dans la console "Page imprimée !"
//     • On diminue le % d'encre de 5 et on met à jour l'affichage.
//     • On diminue le nombre de feuilles de 1 et on met à jour l'affichage.
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

gNbFeuilles = 5;
gPourcentageEncre = 80;

function init(){



}
