---
id: rencontre12
title: Rencontre 12 — Tableaux et parcours
slug: /aide-memoire/rencontre12
---

Retrouvez les syntaxes essentielles des tableaux JavaScript et de leur parcours avec une boucle `while`. Les explications complètes et les illustrations sont dans la [rencontre 12](../01-cours/12-rencontre12.md).

**[Télécharger cette fiche HTML pour la consulter hors ligne](pathname:///files/rencontre12/aide-memoire-rencontre12.html)**

## 1 · Créer un tableau

| Je veux… | Exemple |
| --- | --- |
| Créer un tableau de chaînes | `let couleurs = ["Bleu", "Rouge", "Jaune"];` |
| Créer un tableau de nombres | `let ages = [17, 19, 20, 104, 21, 18, 22];` |

~~~javascript
let nomsEtudiants = ["Madeleine", "Omar", "Conrad",
                     "Marie-Gisèle", "Jean-Jérémie",
                     "Sandra", "Bartolomé"];
let ages = [17, 19, 20, 104, 21, 18, 22];
~~~

:::tip À retenir
Un tableau rassemble plusieurs valeurs semblables dans une seule variable. On utilise des crochets [ ] et des virgules entre les éléments.
:::

## 2 · Accéder aux données avec un index

| Je veux… | Exemple |
| --- | --- |
| Lire la première valeur | `couleurs[0]` |
| Lire la cinquième valeur | `couleurs[4]` |
| Conserver un élément dans une variable | `let a = couleurs[0];` |

~~~javascript
let couleurs = ["Bleu", "Rouge", "Jaune", "Vert", "Violet"];

let premiere = couleurs[0]; // "Bleu"
let cinquieme = couleurs[4]; // "Violet"
~~~

:::tip À retenir
L'index du premier élément est 0, pas 1. Dans un tableau de 5 éléments, les index sont 0, 1, 2, 3 et 4.
:::

## 3 · Modifier une valeur

| Je veux… | Exemple |
| --- | --- |
| Remplacer un élément à l'index 3 | `personnages[3] = "Yoshi";` |
| Lire ensuite cette valeur | `personnages[3]` |

~~~javascript
let personnages = ["Mario", "Luigi", "Peach", "Bernard"];

personnages[3] = "Yoshi";
// "Bernard" est remplacé par "Yoshi".
~~~

:::tip À retenir
On modifie une case existante avec nomTableau[index] = nouvelleValeur. Le reste du tableau ne change pas.
:::

## 4 · Taille du tableau : length

| Je veux… | Exemple |
| --- | --- |
| Connaître le nombre d'éléments | `ages.length` |
| Conserver la taille | `let longueur = ages.length;` |
| Lire la dernière valeur | `ages[ages.length - 1]` |

~~~javascript
let ages = [17, 19, 20, 104, 21, 18, 22];

let longueur = ages.length;          // 7
let derniereValeur = ages[ages.length - 1]; // 22
~~~

:::tip À retenir
length donne le nombre d'éléments. Comme les index commencent à 0, le dernier index est length - 1.
:::

## 5 · Utiliser les valeurs d'un tableau

| Je veux… | Exemple |
| --- | --- |
| Multiplier deux éléments de tableaux | `prix[0] * quantites[0]` |
| Insérer une valeur dans un message | `couleurs[0]` |
| Lire une valeur pour un calcul | `let totalArticle1 = prix[0] * quantites[0];` |

~~~javascript
let prix = [4.5, 3.99, 7.2, 8.4];
let quantites = [2, 3, 4, 3];
let valeurTotaleArticle1 = prix[0] * quantites[0]; // 9

let couleurs = ["Bleu", "Rouge", "Violet", "Rose"];
document.querySelector(".message").textContent =
    "Mes couleurs préférées sont " + couleurs[0] + " et " + couleurs[2];
~~~

:::tip À retenir
Un élément du tableau peut être utilisé comme une variable : dans un calcul, une chaîne de caractères ou une modification du DOM.
:::

## 6 · Ajouter et retirer des éléments

| Je veux… | Exemple |
| --- | --- |
| Ajouter un élément à la fin | `couleurs.push("Violet");` |
| Retirer le dernier élément | `notes.pop();` |
| Retirer 2 éléments à partir de l'index 0 | `couleurs.splice(0, 2);` |
| Retirer 1 élément à partir de l'index 2 | `couleurs.splice(2, 1);` |

~~~javascript
let couleurs = ["Bleu", "Rouge", "Jaune", "Vert"];
couleurs.push("Violet");
// ["Bleu", "Rouge", "Jaune", "Vert", "Violet"]

let notes = [68, 71, 93, 78];
notes.pop();
// [68, 71, 93]
~~~

~~~javascript
let couleurs = ["Bleu", "Rouge", "Jaune",
                "Vert", "Orange", "Violet"];
couleurs.splice(0, 2);
// ["Jaune", "Vert", "Orange", "Violet"]
~~~

~~~javascript
let couleurs = ["Bleu", "Rouge", "Jaune",
                "Vert", "Orange", "Violet"];
couleurs.splice(2, 1);
// ["Bleu", "Rouge", "Vert", "Orange", "Violet"]
~~~

:::tip À retenir
push ajoute à la fin; pop retire le dernier élément. splice(indexDépart, nombreÀRetirer) supprime des éléments consécutifs, en commençant à l'index indiqué.
:::

## 7 · Parcourir un tableau avec while

| Je veux… | Exemple |
| --- | --- |
| Commencer au premier index | `let i = 0;` |
| Continuer tant qu'il reste des éléments | `while (i < lettres.length) { /* instructions */ }` |
| Accéder à l'élément courant | `lettres[i]` |
| Avancer à l'index suivant | `i += 1;` |

~~~javascript
let lettres = ["a", "b", "c"];
let i = 0;

while (i < lettres.length) {
    console.log(lettres[i]);
    i += 1;
}
// Affiche a, puis b, puis c.
~~~

:::tip À retenir
Une boucle de parcours commence à i = 0, s'arrête lorsque i atteint length et utilise tableau[i]. La condition i < tableau.length évite d'écrire une limite fixe.
:::

## 8 · Calculer la somme d'un tableau

~~~javascript
let nombres = [10, 20, 30, 40];
let total = 0;
let i = 0;

while (i < nombres.length) {
    total += nombres[i];
    i += 1;
}
// total vaut 100.
~~~

:::tip À retenir
Initialiser la somme à 0, puis ajouter chaque élément avec total += tableau[i]. Cette boucle effectue quatre itérations.
:::

## 9 · Rechercher une valeur

~~~javascript
let animaux = ["chien", "chat", "oiseau"];
let i = 0;

while (i < animaux.length) {
    if (animaux[i] == "chat") {
        console.log("Chat trouvé !");
    }
    i += 1;
}
~~~

:::tip À retenir
On peut utiliser if dans une boucle pour examiner chaque valeur du tableau et réagir si une condition est vraie.
:::

## 10 · Modifier tous les éléments

~~~javascript
let valeurs = [10, 20, 30];
let i = 0;

while (i < valeurs.length) {
    valeurs[i] += 5;
    i += 1;
}
// valeurs contient [15, 25, 35].
~~~

:::tip À retenir
Pour modifier les éléments du tableau, on utilise le même index i à gauche de l'affectation : tableau[i] += 5.
:::

## 11 · Récapitulatif

| Je veux… | Exemple |
| --- | --- |
| Créer un tableau | `let valeurs = [10, 20, 30];` |
| Lire la première case | `valeurs[0]` |
| Modifier une case | `valeurs[1] = 25;` |
| Obtenir le nombre d'éléments | `valeurs.length` |
| Lire le dernier élément | `valeurs[valeurs.length - 1]` |
| Ajouter à la fin | `valeurs.push(40);` |
| Retirer le dernier | `valeurs.pop();` |
| Retirer depuis un index | `valeurs.splice(1, 2);` |
| Parcourir tous les éléments | `while (i < valeurs.length) { /* ... */ }` |

:::tip À retenir
Indices à partir de 0. length donne la taille. push, pop et splice modifient le tableau. Avec while, i commence à 0, augmente à chaque passage, et tableau[i] donne l'élément courant.
:::

Pour obtenir les autres fiches hors ligne, consultez la [page Téléchargements](./04-telechargements.md).
