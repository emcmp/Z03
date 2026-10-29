---
id: rencontre9
title: Rencontre 9 — Conditions et logique
slug: /aide-memoire/rencontre9
---

Retrouvez les syntaxes essentielles de cette rencontre. Les explications détaillées restent dans les pages du cours.

**[Télécharger cette fiche HTML pour la consulter hors ligne](pathname:///files/rencontre9/aide-memoire-rencontre9.html)**

## 1 · Booléens

| Je veux… | Exemple |
| --- | --- |
| Conserver vrai | `let estContent = true;` |
| Conserver faux | `let estAttentif = false;` |
| Conserver le résultat d’une comparaison | `let estMajeur = 19 >= 18;` |

:::tip À retenir
`true` et `false` sont des booléens, sans guillemets. `"true"` est une chaîne de caractères.
:::

## 2 · Comparaisons

| Je veux… | Exemple |
| --- | --- |
| Vérifier l’égalité | `5 == 5 // true` |
| Vérifier la différence | `5 != 7 // true` |
| Vérifier « plus petit » | `5 < 7 // true` |
| Vérifier « plus grand » | `5 > 7 // false` |
| Vérifier « plus petit ou égal » | `5 <= 5 // true` |
| Vérifier « plus grand ou égal » | `5 >= 7 // false` |
| Comparer deux chaînes | `"salut" == "Salut" // false` |

:::tip À retenir
`=` et `<=` incluent l’égalité. `=` affecte une valeur; `==` compare. Les majuscules et les espaces comptent dans les chaînes.
:::

## 3 · if, else et else if

```javascript
let score = 75;

if (score >= 90) {
    document.querySelector(".message").textContent = "Excellent !";
}
else if (score >= 60) {
    document.querySelector(".message").textContent = "Réussi !";
}
else {
    document.querySelector(".message").textContent = "À reprendre";
}
```

:::tip À retenir
Une seule branche de cette chaîne s’exécute : la première dont la condition est vraie. `else` n’a pas de condition; il est facultatif. On peut avoir plusieurs `else if`. Les conditions sont entre parenthèses, les instructions entre accolades.
:::

```javascript
let temps = 21;

if (temps > 15) {
    console.log("J’attends.");
}
if (temps > 20) {
    console.log("C’est long !");
}
```

:::tip À retenir
Plusieurs `if` indépendants sont tous vérifiés. Ici, les deux messages s’affichent.
:::

## 4 · Vérifier une classe

```javascript
if (document.querySelector(".texte").classList.contains("sobre")) {
    document.querySelector(".texte").textContent = "Classe sobre présente";
}
else {
    document.querySelector(".texte").textContent = "Classe sobre absente";
}
```

:::tip À retenir
`contains("sobre")` donne `true` ou `false`. Le nom de classe s’écrit sans point.
:::

## 5 · Opérateurs logiques

| Je veux… | Exemple |
| --- | --- |
| Exiger les deux conditions : ET | `age >= 18 && age < 30` |
| Accepter au moins une condition : OU | `age < 4 \|\| age > 99` |
| Inverser un booléen : NON (complément) | `!(age < 4 \|\| age > 99)` |
| Comparer trois couleurs | `couleur1 == couleur2 && couleur2 == couleur3` |

:::tip À retenir
Écrire chaque comparaison au complet : `age >= 18 && age < 30`. `||` contient deux barres verticales. `!` inverse vrai et faux; il est plutôt en complément.
:::

```javascript
let age = 21;
if (age >= 18 && age < 30) {
    console.log("Jeune adulte");
}
```

## 6 · Priorités

:::tip À retenir
Du premier au dernier : parenthèses `()` → inverse `!` → `* /` → `+ -` → comparaisons → `&&` → `||` → affectation `=`. Utiliser des parenthèses pour rendre une condition claire.
:::

```javascript
let resultat = (5 + 3) * 2 >= 10 && 4 < 9; // true
```

## 7 · Débogage

| Je veux… | Exemple |
| --- | --- |
| Afficher une valeur dans la console | `console.log(score);` |
| Tester une comparaison | `console.log(score >= 60);` |
| Tester une fonction dans la console | `maFonction();` |
| Vérifier le sélecteur | `document.querySelector(".message")` |
| Vérifier la casse du nom | `document.querySelector(".message").textContent = "Test";` |

:::tip À retenir
Si `querySelector` donne `null`, vérifier le point devant la classe, son orthographe et la présence de l’élément au moment de l’appel. Écrire `querySelector` avec un S majuscule et `textContent` avec un C majuscule. Une mauvaise casse de `textContent` peut ne produire aucun message d’erreur.
:::

Lire le message et la ligne indiquée dans la console, corriger, puis tester à nouveau. Vérifier aussi le résultat visible dans la page.

## 8 · Récapitulatif

:::tip À retenir
Comparer → obtenir un booléen → choisir avec `if / else if / else`. Combiner avec `&&` ou `||`. Vérifier une classe avec `classList.contains`. Contrôler les valeurs dans la console et tester chaque cas.
:::

Pour télécharger les autres fiches, consultez la [page Téléchargements](./04-telechargements.md).
