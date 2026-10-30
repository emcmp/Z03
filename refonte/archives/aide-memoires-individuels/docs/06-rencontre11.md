---
id: rencontre11
title: Rencontre 11 — Boucles while
slug: /aide-memoire/rencontre11
---

Retrouvez les syntaxes essentielles de la boucle `while`, des compteurs et des répétitions sur le DOM. Les explications détaillées se trouvent dans la [rencontre 11](../01-cours/11-rencontre11.md).

**[Télécharger cette fiche HTML pour la consulter hors ligne](pathname:///files/rencontre11/aide-memoire-rencontre11.html)**

## 1 · Répéter avec while

| Je veux… | Exemple |
| --- | --- |
| Répéter tant que la condition est vraie | `while (condition) { /* instructions */ }` |
| Vérifier la condition avant chaque passage | `while (i < 4) { /* instructions */ }` |

~~~javascript
let i = 1;

while (i < 4) {
    console.log(i);
    i += 1;
}
// Affiche 1, 2, 3
~~~

:::tip À retenir
La boucle while vérifie sa condition avant chaque itération. Quand elle devient false, la boucle s'arrête. Si la condition est fausse dès le départ, les instructions ne s'exécutent pas.
:::

## 2 · Compteur et nombre d’itérations

| Je veux… | Exemple |
| --- | --- |
| Commencer à 1 | `let i = 1;` |
| Recommencer tant que i est plus petit que 4 | `while (i < 4) { /* instructions */ }` |
| Augmenter le compteur | `i += 1;` |
| Répéter 9 fois, de 1 à 9 | `while (i < 10) { /* instructions */ }` |

~~~javascript
let i = 1;
let texte = "";

while (i < 10) {
    texte += i;
    i += 1;
}
// 9 itérations : i vaut 1, 2, ..., 9
~~~

:::tip À retenir
Pour construire une boucle, repérer ce qui change à chaque répétition : valeur initiale du compteur, condition d'arrêt et modification du compteur. Ici, i augmente de 1 à chaque itération.
:::

## 3 · Accumuler une valeur

~~~javascript
let valeur = 10;
let i = 1;

while (i < 5) {
    valeur += i;
    i += 1;
}
// valeur vaut 20 : 10 + 1 + 2 + 3 + 4
~~~

:::tip À retenir
À chaque itération, += ajoute une valeur à celle qui est déjà conservée. Cette boucle effectue quatre itérations.
:::

## 4 · Répéter une opération sur le DOM

| Je veux… | Exemple |
| --- | --- |
| Construire un nom de classe avec le compteur | `".bob" + i` |
| Retrouver l’élément qui correspond | `document.querySelector(".bob" + i)` |
| Ajouter une classe à cet élément | `document.querySelector(".bob" + i).classList.add("image");` |

~~~javascript
let i = 1;

while (i < 4) {
    document.querySelector(".bob" + i).classList.add("image");
    i += 1;
}
~~~

:::tip À retenir
Le compteur sert à cibler successivement .bob1, .bob2 et .bob3. La classe image est ajoutée à chaque élément, sans recopier trois fois l'instruction.
:::

## 5 · Éviter une boucle infinie

~~~javascript
// Exemple à NE PAS exécuter tel quel :
let i = 1;

while (i < 4) {
    console.log("Oups ! Boucle infinie.");
    // Il manque : i += 1;
}
~~~

:::tip À retenir
Si i ne change jamais, la condition i < 4 reste toujours vraie : la boucle peut figer la page. Prévoir une condition qui pourra devenir fausse et mettre à jour les variables nécessaires.
:::

## 6 · Conditions dans une boucle

~~~javascript
let i = 1;

while (i < 4) {
    if (i == 2) {
        console.log("Deuxième passage");
    }
    i += 1;
}
~~~

:::tip À retenir
Un bloc if peut se trouver dans une boucle while. Sa condition est évaluée à chaque itération.
:::

## 7 · Plusieurs conditions avec &&

~~~javascript
let x = 1;
let y = 10;

while (x < 5 && y > 5) {
    x += 1;
    y -= 2;
}
// La boucle s'arrête avec x = 4 et y = 4.
~~~

:::tip À retenir
Avec && (ET), toutes les conditions doivent rester vraies. La boucle s'arrête dès que l'une devient fausse : ici, y atteint 4 alors que x est encore plus petit que 5.
:::

## 8 · Pour aller plus loin (facultatif)

~~~javascript
do {
    // Instructions
} while (condition);
~~~

:::tip À retenir
La boucle do...while vérifie sa condition APRÈS les instructions : elle s'exécute donc au moins une fois. Elle est facultative dans Z03 et n'est pas exigée aux évaluations. La section sur le débogueur est elle aussi entièrement optionnelle.
:::

## 9 · Récapitulatif

| Je veux… | Exemple |
| --- | --- |
| Créer un compteur | `let i = 1;` |
| Répéter avec une condition | `while (i < 4) { /* instructions */ }` |
| Faire évoluer le compteur | `i += 1;` |
| Ajouter une valeur | `valeur += i;` |
| Cibler des éléments numérotés | `document.querySelector(".bob" + i)` |
| Exiger deux conditions | `while (x < 5 && y > 5) { /* instructions */ }` |

:::tip À retenir
Initialiser le compteur → vérifier la condition → exécuter les instructions → faire évoluer le compteur. Éviter les boucles infinies. do...while et le débogueur sont facultatifs.
:::

Pour obtenir les autres fiches hors ligne, consultez la [page Téléchargements](./04-telechargements.md).
