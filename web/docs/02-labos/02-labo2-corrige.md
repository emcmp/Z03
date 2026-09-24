---
title: Rencontre 6 - Corrigé du laboratoire sur les variables
sidebar_label: Corrigé — Variables
---

# Rencontre 6 - Corrigé du laboratoire sur les variables

:::warning Avant de consulter le corrigé

Essayez d'abord les activités du laboratoire. Utilisez ce corrigé pour **vérifier votre raisonnement**, comprendre une erreur ou comparer votre solution.

:::

## A — Calculer dans la console

### 1. Premières expressions

```js
151 + 352
// 503

20 * 51
// 1020

6 / 2 + 5
// 8

7.5 / (0.5 + 2)
// 3
```

JavaScript respecte la priorité habituelle des opérations : les parenthèses d'abord, puis les multiplications et divisions, puis les additions et soustractions.

### 2. Effet des parenthèses

```js
151 * 80 / 4 - 2
// 3018

151 * 80 / (4 - 2)
// 6040
```

Dans la deuxième expression, les parenthèses obligent JavaScript à calculer `4 - 2` avant la division.

<details>
<summary>Pratique supplémentaire</summary>

```js
1 + 2 - 3 * (4 + 5)
// -24
```

Une modification possible des parenthèses :

```js
(1 + 2 - 3) * (4 + 5)
// 0
```

</details>

## B — Déclarer, affecter et réaffecter

### 3. Déclarer seulement

```js
let score;
score
// undefined
```

`score` existe, mais aucune valeur ne lui a encore été affectée. Sa valeur est donc `undefined`.

### 4. Affecter une première valeur

```js
score = 10;
score
// 10
```

On n'utilise pas `let` une deuxième fois, puisque la variable a déjà été déclarée.

### 5. Réaffecter

```js
score = 20;
score
// 20
```

La variable existe déjà : on **remplace sa valeur**.

### 6. Observer une redéclaration

Si `score` a déjà été déclarée avec `let` :

```js
let score = 30;
// Uncaught SyntaxError: Identifier 'score' has already been declared
```

Par contre :

```js
score = 30;
```

est une **réaffectation**. On modifie la valeur de la variable existante.

### 7. Deux opérations sur une ligne

```js
let age = 17;
```

Cette ligne :

1. **déclare** la variable `age`;
2. lui **affecte** la valeur `17`.

Pour la réaffecter :

```js
age = 18;
```

### 8. Choisir de bons noms

Une solution possible :

```js
let prixBillet = 12;
let nombreBillets = 3;
let prixTotal = prixBillet * nombreBillets;

prixTotal
// 36
```

Vos noms peuvent être différents, pourvu qu'ils décrivent clairement ce que contient chaque variable.

### 9. Utiliser des variables dans un calcul

```js
let largeur = 8;
let hauteur = 5;
let aire = largeur * hauteur;

aire
// 40
```

`largeur` contient toujours `8` et `hauteur` contient toujours `5`. Le calcul ne modifie pas ces variables.

<details>
<summary>Défi facultatif — obtenir 42</summary>

Avec :

```js
let b = 5;
let c = 10;
let d = 50;
```

une solution possible est :

```js
d - c + c / b
// 42
```

</details>

## C — Modifier la valeur d'une variable

### 10. `+=` et `-=`

```js
let points = 3;

points += 5;
points
// 8

points -= 2;
points
// 6
```

`+=` et `-=` modifient une variable existante. Ils ne déclarent pas une nouvelle variable.

## D — Chaînes de caractères

### 11. Une chaîne de caractères

```js
let ville = "Paris";

ville
// "Paris"
```

Les guillemets indiquent qu'il s'agit d'une chaîne de caractères.

### 12. `+` et `+=` avec du texte

Avec :

```js
let ville = "Paris";
```

l'expression :

```js
ville + " est une ville."
// "Paris est une ville."
```

produit une nouvelle chaîne, mais **ne modifie pas** `ville`.

```js
ville
// "Paris"
```

Avec `+=` :

```js
ville += " est une ville.";

ville
// "Paris est une ville."
```

la nouvelle chaîne est réaffectée à `ville`.

### 13. Nombre ou chaîne?

```js
let n = 6;
let m = "9";

m + n
// "96"
```

Le résultat est une **chaîne de caractères**. Comme `m` est une chaîne, l'opérateur `+` effectue ici une concaténation.

## E — Littéraux de gabarits

### 14. Insérer des variables dans une phrase

```js
let debutPhrase = "Never gonna";
let finPhrase = "give you up";

`${debutPhrase} ${finPhrase}`
// "Never gonna give you up"
```

Le caractère utilisé autour de la phrase est l'**accent grave** : `\``.

### 15. Activité finale d'intégration

Une solution possible :

```js
let animal = "chats";
let quantite = 3;
let prix = 25;

`${quantite} ${animal} coûtent ${quantite * prix} $ au total.`
// "3 chats coûtent 75 $ au total."
```

Le total n'est pas écrit directement : il est calculé dans `${...}`.

## Avant de terminer

Vous devriez pouvoir expliquer la différence entre :

```js
let score;   // déclaration
score = 10;  // affectation d'une première valeur
score = 20;  // réaffectation
```

Le point essentiel est de reconnaître qu'une variable est **déclarée une fois**, puis que sa valeur peut être modifiée par des affectations successives.
