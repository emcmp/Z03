---
title: Exercice guidé - Comprendre le modèle en boîte
description: Manipuler padding, border et margin pour comprendre l'espace intérieur et extérieur d'un bloc.
---

# Exercice guidé — Comprendre le modèle en boîte

Dans cet exercice, vous allez construire quelques **cartes simples** afin de voir clairement la différence entre :

```text
contenu → padding → border → margin
```

L'objectif n'est pas de produire un design final. Vous allez plutôt modifier une propriété à la fois et observer son effet.

## 1. Créer la structure

Créez :

```text
exercice-rencontre4/
├── index.html
└── css/
    └── styles.css
```

Dans `index.html`, utilisez :

```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Découvrir le modèle en boîte</title>
    <link rel="stylesheet" href="css/styles.css">
  </head>
  <body>
    <main>
      <h1>Activités de la semaine</h1>

      <section class="carte">
        <h2>Photo</h2>
        <p>Une sortie pour pratiquer la photographie extérieure.</p>
      </section>

      <section class="carte">
        <h2>Cuisine</h2>
        <p>Un atelier simple pour découvrir une nouvelle recette.</p>
      </section>
    </main>
  </body>
</html>
```

Dans `css/styles.css`, commencez avec :

```css
body {
  font-family: Arial, sans-serif;
  color: #263238;
}

.carte {
  background-color: #eaf3ff;
  border: 3px solid #245a86;
}
```

Ouvrez la page dans le navigateur.

## 2. Voir la boîte

L'arrière-plan et la bordure permettent de voir les limites de chaque `.carte`.

Pour le moment, le texte est assez près de la bordure.

La boîte peut être imaginée ainsi :

```text
margin
┌──────────────────────────────┐
│ border                       │
│  ┌────────────────────────┐  │
│  │ padding                │  │
│  │   contenu              │  │
│  └────────────────────────┘  │
└──────────────────────────────┘
```

:::info À maîtriser
Le `padding` est à **l'intérieur** de la bordure. La `margin` est à **l'extérieur** de la bordure.
:::

## 3. Ajouter de l'espace intérieur avec `padding`

Modifiez `.carte` :

```css
.carte {
  background-color: #eaf3ff;
  border: 3px solid #245a86;
  padding: 20px;
}
```

Actualisez la page.

Observez que :

- le texte s'éloigne de la bordure;
- la couleur d'arrière-plan continue dans cet espace;
- les deux cartes utilisent le même `padding` parce qu'elles partagent la même classe.

Changez temporairement `20px` pour `5px`, puis pour `40px` afin de bien voir la différence.

Remettez ensuite une valeur raisonnable.

## 4. Ajouter de l'espace extérieur avec `margin`

Ajoutez maintenant :

```css
.carte {
  background-color: #eaf3ff;
  border: 3px solid #245a86;
  padding: 20px;
  margin: 20px;
}
```

Actualisez.

Cette fois, l'espace apparaît **autour de la carte**, entre sa bordure et les autres éléments.

:::warning Ne pas confondre
Si votre contenu est collé à la bordure, pensez d'abord à `padding`.

Si deux boîtes sont trop collées entre elles, pensez d'abord à `margin`.
:::

## 5. Comparer `padding` et `margin`

Faites deux essais rapides.

### Essai A

```css
.carte {
  background-color: #eaf3ff;
  border: 3px solid #245a86;
  padding: 40px;
  margin: 5px;
}
```

### Essai B

```css
.carte {
  background-color: #eaf3ff;
  border: 3px solid #245a86;
  padding: 5px;
  margin: 40px;
}
```

Comparez le résultat.

Vous devriez maintenant pouvoir répondre à cette question :

> Si je veux éloigner le texte de la bordure, est-ce que je change `padding` ou `margin`?

## 6. Utiliser deux valeurs

Une propriété comme `padding` ou `margin` peut recevoir deux valeurs :

```css
.carte {
  padding: 16px 24px;
}
```

Elles se lisent ainsi :

```text
16px → haut et bas
24px → gauche et droite
```

Essayez :

```css
.carte {
  margin: 24px 12px;
}
```

:::tip Bonne pratique
Pour commencer, une valeur ou deux valeurs suffisent dans la majorité de nos exemples. Vous n'avez pas à mémoriser toutes les variantes possibles aujourd'hui.
:::

## 7. Expérimenter une largeur simple

Ajoutez temporairement :

```css
.carte {
  width: 320px;
}
```

Observez que la zone de contenu possède maintenant une largeur définie.

Le `padding` et la bordure occupent eux aussi de l'espace autour du contenu.

Retirez ensuite cette largeur si elle rend la page inutilement étroite.

:::note Pour aller plus loin — non évalué
Vous pourriez rencontrer :

```css
box-sizing: border-box;
```

Cette propriété rend certaines dimensions plus faciles à prévoir parce que le `padding` et la bordure sont inclus dans la largeur déclarée. Nous n'en faisons pas une exigence de la rencontre.
:::

## 8. Ajouter un troisième bloc

Ajoutez dans `<main>` :

```html
<section class="carte">
  <h2>Jeux</h2>
  <p>Une rencontre pour découvrir un nouveau jeu de société.</p>
</section>
```

Vous n'avez rien à ajouter dans CSS : la classe `.carte` existe déjà.

Les trois blocs reçoivent donc le même modèle de boîte.

## 9. Faire un diagnostic

Pour chacun des problèmes suivants, choisissez d'abord la propriété que vous modifieriez.

### Problème A

Le texte d'une carte touche presque la bordure.

```text
padding ou margin?
```

### Problème B

Deux cartes sont trop près l'une de l'autre.

```text
padding ou margin?
```

### Problème C

Vous voulez rendre la ligne qui entoure la carte plus visible.

```text
padding, border ou margin?
```

Expliquez votre choix avant de modifier le CSS.

## Vérification avant de terminer

- [ ] je peux nommer les quatre zones du modèle en boîte;
- [ ] je sais que `padding` crée de l'espace à l'intérieur de la bordure;
- [ ] je sais que `margin` crée de l'espace à l'extérieur;
- [ ] je peux utiliser une valeur simple de `padding` et de `margin`;
- [ ] je comprends la forme à deux valeurs;
- [ ] je sais que la bordure se situe entre padding et margin;
- [ ] je peux choisir la bonne propriété pour corriger un problème d'espacement simple.

## Continuer avec votre Projet Web

**[Continuer vers Projet Web — Étape 4](../03-projet-web/04-rencontre4.md)**
