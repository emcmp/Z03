---
id: rencontres6-7
title: Rencontres 6 et 7 — Variables, DOM et fonctions
slug: /aide-memoire/rencontres6-7
---

Retrouvez les syntaxes essentielles de cette rencontre. Les explications détaillées restent dans les pages du cours.

**[Télécharger cette fiche HTML pour la consulter hors ligne](pathname:///files/rencontre6/aide-memoire-rencontres6-7.html)**

## 1 · Variables

| Je veux… | Exemple |
| --- | --- |
| Créer une variable | `let score;` |
| Créer et donner une valeur | `let score = 10;` |
| Remplacer la valeur | `score = 20;` |
| Ajouter à la valeur | `score += 5;` |
| Soustraire à la valeur | `score -= 2;` |

:::tip À retenir
`let` crée une variable; `=` attribue ou remplace sa valeur.
:::

## 2 · Calculs

| Je veux… | Exemple |
| --- | --- |
| Calculer avec des parenthèses | `let total = (5 + 3) * 2;` |

:::tip À retenir
Priorités : parenthèses > multiplications/divisions > additions/soustractions. Ici, `total` vaut 16.
:::

## 3 · Chaînes

| Je veux… | Exemple |
| --- | --- |
| Créer une chaîne de caractères | `let nom = "Mia";` |
| Assembler avec + | `"Bonjour " + nom` |
| Insérer une variable | `` `Bonjour ${nom}` `` |

:::tip À retenir
Les deux expressions donnent `Bonjour Mia`. La dernière utilise des accents graves `` ` ``.
:::

## 4 · DOM

| Je veux… | Exemple |
| --- | --- |
| Retrouver un élément | `document.querySelector(".titre")` |
| Lire son texte | `document.querySelector(".titre").textContent` |
| Remplacer son texte | `document.querySelector(".titre").textContent = "Nouveau";` |
| Ajouter du texte à la fin | `document.querySelector(".titre").textContent += "!";` |
| Conserver le texte dans une variable | `let texte = document.querySelector(".titre").textContent;` |

:::tip À retenir
`querySelector` retrouve un élément; `textContent` lit ou modifie son texte. Le point dans `".titre"` désigne une classe HTML.
:::

## 5 · Fonctions

| Je veux… | Exemple |
| --- | --- |
| Définir une fonction | `function maFonction() { /* instructions */ }` |
| Appeler une fonction | `maFonction();` |

:::tip À retenir
Définir une fonction ne lance pas ses instructions. Une fonction nécessite un appel avec `()`.
:::

## 6 · Messages

| Je veux… | Exemple |
| --- | --- |
| Écrire dans la console | `console.log("Bonjour");` |
| Afficher une boîte de dialogue | `alert("Bonjour");` |

## 7 · Récapitulatif

:::tip À retenir
Créer avec `let` → calculer ou assembler du texte → cibler avec `document.querySelector(".titre")` → lire ou modifier avec `textContent`. Regrouper les instructions dans une fonction, puis l’appeler avec `()`.
:::

Pour télécharger les autres fiches, consultez la [page Téléchargements](./04-telechargements.md).
