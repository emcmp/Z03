---
title: Rencontre 6 - Laboratoire sur les variables
sidebar_label: Rencontre 6 — Variables
---

# Rencontre 6 - Laboratoire sur les variables

Ce laboratoire permet de pratiquer les notions de la rencontre 6 directement dans la **console du navigateur**.

:::warning

Dès qu'une consigne n'est pas claire ou qu'un résultat vous surprend, demandez de l'aide. Les premières erreurs en JavaScript sont souvent de petites erreurs de syntaxe et elles font partie de l'apprentissage.

:::

## A — Calculer dans la console

### 1. Premières expressions

Entrez les expressions suivantes dans la console et observez le résultat :

```js
151 + 352
20 * 51
6 / 2 + 5
7.5 / (0.5 + 2)
```

Avant d'appuyer sur Entrée, essayez de prédire chaque résultat.

### 2. Effet des parenthèses

Comparez les résultats de ces deux expressions :

```js
151 * 80 / 4 - 2
151 * 80 / (4 - 2)
```

Les mêmes nombres et les mêmes opérateurs sont présents. Expliquez ce que les parenthèses ont changé.

<details>
<summary>Pratique supplémentaire</summary>

Prédisez puis vérifiez le résultat :

```js
1 + 2 - 3 * (4 + 5)
```

Modifiez ensuite les parenthèses pour obtenir un résultat différent.

</details>

## B — Déclarer, affecter et réaffecter

Cette section est importante : **déclarer une variable et lui affecter une valeur sont deux opérations différentes**.

### 3. Déclarer seulement

Déclarez une variable nommée `score`, sans lui affecter de valeur :

```js
let score;
```

Tapez ensuite :

```js
score
```

Qu'est-ce que la console affiche? Que signifie ce résultat?

### 4. Affecter une première valeur

Sans utiliser `let` une deuxième fois, affectez la valeur `10` à la variable `score`.

Vérifiez ensuite sa valeur dans la console.

:::tip

Vous ne créez pas une nouvelle variable : `score` existe déjà.

:::

### 5. Réaffecter

Changez maintenant la valeur de `score` pour `20`.

Votre instruction ne devrait contenir **aucun `let`**.

Après l'instruction, vérifiez que `score` contient bien `20`.

### 6. Observer une redéclaration

Essayez maintenant de déclarer `score` une deuxième fois :

```js
let score = 30;
```

Observez le message de la console.

Pourquoi cette instruction est-elle différente de :

```js
score = 30;
```

Une fois votre observation terminée, réactualisez la page avant de continuer afin de repartir avec une console propre.

### 7. Deux opérations sur une ligne

Entrez :

```js
let age = 17;
```

Cette ligne effectue deux opérations. Identifiez-les avec les mots **déclarer** et **affecter**.

Puis réaffectez `age` à `18` sans utiliser `let`.

### 8. Choisir de bons noms

Vous achetez plusieurs billets.

Dans la console :

1. créez une variable contenant le prix d'un billet;
2. créez une variable contenant le nombre de billets;
3. choisissez vous-mêmes des **noms significatifs** pour les deux variables;
4. créez une troisième variable contenant le prix total en multipliant les deux premières.

Vérifiez ensuite la valeur de votre troisième variable.

### 9. Utiliser des variables dans un calcul

Exécutez :

```js
let largeur = 8;
let hauteur = 5;
```

Créez une variable nommée `aire` dont la valeur est obtenue en multipliant `largeur` par `hauteur`.

Vérifiez ensuite que `largeur` et `hauteur` n'ont pas changé.

<details>
<summary>Défi facultatif — obtenir 42</summary>

Créez :

```js
let b = 5;
let c = 10;
let d = 50;
```

À l'aide de ces variables et des opérateurs `+`, `-`, `*` et `/`, trouvez une expression dont le résultat est `42`.

</details>

## C — Modifier la valeur d'une variable

### 10. `+=` et `-=`

Entrez :

```js
let points = 3;
```

Puis :

1. augmentez `points` de `5` avec `+=`;
2. vérifiez sa valeur;
3. diminuez ensuite `points` de `2` avec `-=`;
4. vérifiez sa nouvelle valeur.

Répondez mentalement : à chacune de ces étapes, avez-vous **déclaré une nouvelle variable** ou **modifié une variable existante**?

## D — Chaînes de caractères

Réactualisez la page avant de commencer cette section.

### 11. Une chaîne de caractères

Déclarez une variable `ville` et affectez-lui la chaîne :

```text
Paris
```

Vérifiez sa valeur dans la console.

### 12. `+` et `+=` avec du texte

Avec votre variable `ville`, exécutez une expression qui concatène :

```text
 est une ville.
```

avec l'opérateur `+` seulement.

Vérifiez ensuite la valeur de `ville`.

Puis utilisez `+=` pour ajouter réellement ce même texte à la valeur de `ville`, et vérifiez encore sa valeur.

Quelle différence observez-vous entre `+` et `+=` dans cet exemple?

### 13. Nombre ou chaîne?

Réactualisez la page, puis déclarez :

```js
let n = 6;
let m = "9";
```

Demandez ensuite à la console le résultat de :

```js
m + n
```

Quel résultat obtenez-vous? Est-ce un nombre ou une chaîne de caractères? Expliquez pourquoi.

## E — Littéraux de gabarits

### 14. Insérer des variables dans une phrase

Déclarez :

```js
let debutPhrase = "Never gonna";
let finPhrase = "give you up";
```

Construisez ensuite un **littéral de gabarit** qui produit exactement :

```text
Never gonna give you up
```

Les deux morceaux de texte doivent provenir des variables.

### 15. Activité finale d'intégration

Déclarez trois variables représentant :

- un animal de votre choix;
- une quantité de cet animal;
- le prix d'un animal.

Choisissez vous-mêmes des noms de variables significatifs.

Construisez ensuite un littéral de gabarit qui produit une phrase du genre :

```text
3 chats coûtent 75 $ au total.
```

Contraintes :

- la quantité doit provenir d'une variable;
- le nom de l'animal doit provenir d'une variable;
- le total doit être **calculé dans `${...}`** à partir de la quantité et du prix unitaire;
- ne tapez pas directement le total dans la phrase.

## Avant de terminer

Assurez-vous que vous pouvez expliquer la différence entre ces trois instructions :

```js
let score;
score = 10;
score = 20;
```

Vous devriez être capable de dire laquelle **déclare** la variable, laquelle lui **affecte** une première valeur, et laquelle **réaffecte** une nouvelle valeur.