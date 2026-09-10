---
title: Exercice guidé - Flexbox simple
description: Faire évoluer le Club découverte avec un parent flex, gap et une navigation simple.
---

# Exercice guidé — Flexbox simple

Dans cet exercice, vous allez **faire évoluer le Club découverte de la rencontre 4**.

Les cartes possèdent déjà leur modèle en boîte. Cette fois, nous allons apprendre à organiser plusieurs éléments comme un groupe.

Le modèle mental principal est :

> On applique `display: flex` au **parent** pour organiser ses **enfants directs**.

Nous allons d'abord l'observer avec les trois cartes, parce que le changement de disposition est très visible. Ensuite, nous appliquerons la même idée à une navigation.

## 1. Repartir de l'état final de la rencontre 4

Copiez votre dossier `exercice-rencontre4` et renommez la copie :

```text
exercice-rencontre5/
├── index.html
├── css/
│   └── styles.css
└── images/
    └── chat.jpg
```

Vous repartez donc avec les mêmes cartes, la même image et le même modèle en boîte.

Dans `index.html`, ajoutez une navigation avant `<main>` et regroupez les trois cartes dans un conteneur `.cartes` :

```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Découvrir Flexbox</title>
    <link rel="stylesheet" href="css/styles.css">
  </head>
  <body>
    <nav class="navigation">
      <a href="#photo">Photo</a>
      <a href="#cuisine">Cuisine</a>
      <a href="#jeux">Jeux</a>
    </nav>

    <main>
      <h1>Club découverte</h1>

      <div class="zone-image">
        <img class="image-principale" src="images/chat.jpg" alt="Un chat">
      </div>

      <div class="cartes">
        <section class="carte" id="photo">
          <h2>Photo</h2>
          <p>Une sortie pour pratiquer la photographie extérieure.</p>
        </section>

        <section class="carte" id="cuisine">
          <h2>Cuisine</h2>
          <p>Un atelier simple pour découvrir une nouvelle recette.</p>
        </section>

        <section class="carte" id="jeux">
          <h2>Jeux</h2>
          <p>Une rencontre pour découvrir un nouveau jeu de société.</p>
        </section>
      </div>
    </main>
  </body>
</html>
```

Gardez d'abord le CSS de la fin de la rencontre 4 :

```css
body {
  font-family: Arial, sans-serif;
  color: #263238;
}

main {
  width: 80%;
  max-width: 900px;
  margin: 0 auto;
}

img {
  max-width: 100%;
  height: auto;
}

.image-principale {
  width: 80%;
}

.zone-image {
  text-align: center;
}

.carte {
  background-color: #eaf3ff;
  border: 2px solid #245a86;
  padding: 16px 24px;
  margin: 24px 0;
}
```

Ouvrez la page dans le navigateur.

Les trois cartes sont encore empilées. Le nouveau conteneur `.cartes` ne change rien par lui-même.

## 2. Identifier le parent et ses enfants

Avant d'écrire du CSS, observez cette partie du HTML :

```text
.cartes
├── section.carte
├── section.carte
└── section.carte
```

Si nous voulons organiser **les trois cartes**, le parent à modifier est donc `.cartes`.

:::info À maîtriser
Posez-vous toujours ces deux questions :

1. Quels éléments est-ce que je veux organiser?
2. Quel est leur parent commun?
:::

## 3. Rendre le parent flex

Ajoutez cette nouvelle règle :

```css
.cartes {
  display: flex;
}
```

Actualisez la page.

Les trois enfants directs de `.cartes` se placent maintenant sur une rangée.

Vous n'avez pas rendu les cartes flex individuellement. Vous avez rendu **leur parent commun** flex.

```text
parent flex     → .cartes
enfants directs → les trois .carte
```

## 4. Espacer les cartes avec `gap`

Ajoutez maintenant `gap` dans la même règle :

```css
.cartes {
  display: flex;
  gap: 20px;
}
```

Le `gap` crée l'espace **entre les enfants du conteneur flex**.

Pour que ce soit bien `gap` qui contrôle l'espace entre les cartes dans cet exercice, remplacez aussi la marge de `.carte` :

```css
.carte {
  background-color: #eaf3ff;
  border: 2px solid #245a86;
  padding: 16px 24px;
  margin: 0;
}
```

Essayez temporairement :

```css
gap: 5px;
```

puis :

```css
gap: 40px;
```

Remettez ensuite :

```css
gap: 20px;
```

:::info Différence utile
À la rencontre 4, `margin` permettait de créer de l'espace autour d'une boîte.

Ici, `gap` sert directement à créer l'espace **entre les enfants d'un même groupe flex**.
:::

## 5. Faire une erreur volontaire

Nous allons maintenant provoquer une erreur fréquente.

Retirez temporairement `display: flex` de `.cartes` et ajoutez-le plutôt à `.carte` :

```css
.carte {
  display: flex;
}
```

Actualisez.

Les trois cartes ne sont plus placées côte à côte comme prévu. À la place, Flexbox essaie d'organiser le contenu **à l'intérieur de chaque carte**.

Le mauvais parent a reçu `display: flex`.

Corrigez maintenant l'erreur :

- retirez `display: flex` de `.carte`;
- remettez `display: flex` dans `.cartes`;
- gardez `gap: 20px` dans `.cartes`.

Votre règle doit revenir à :

```css
.cartes {
  display: flex;
  gap: 20px;
}
```

:::tip Réflexe de débogage
Si Flexbox agit sur les mauvais éléments, retrouvez d'abord le parent commun des éléments que vous voulez organiser.
:::

## 6. Appliquer la même idée à la navigation

La navigation possède la même relation parent → enfants :

```text
nav.navigation
├── a
├── a
└── a
```

Ajoutez :

```css
.navigation {
  display: flex;
  gap: 20px;
}
```

Les liens étaient déjà capables d'apparaître sur une même ligne, mais ils font maintenant partie d'un **conteneur flex** que vous pouvez contrôler comme un groupe.

Ajoutez ensuite :

```css
.navigation {
  display: flex;
  gap: 20px;
  justify-content: center;
}
```

Le groupe de liens se place maintenant au centre de l'espace disponible.

Essayez temporairement :

```css
justify-content: flex-start;
```

Observez le déplacement du groupe, puis remettez :

```css
justify-content: center;
```

:::tip Pas de catalogue à mémoriser
Pour aujourd'hui, retenez surtout que `justify-content` permet de placer le groupe sur l'axe principal. Vous n'avez pas à mémoriser toutes les valeurs possibles.
:::

## 7. Réutiliser le modèle en boîte sur la navigation

Flexbox organise les enfants, mais le parent reste lui aussi une boîte.

Ajoutez donc à `.navigation` :

```css
.navigation {
  display: flex;
  gap: 20px;
  justify-content: center;
  background-color: #f3f6f8;
  padding: 16px;
  margin-bottom: 24px;
}
```

Vous combinez maintenant les deux rencontres :

```text
padding → espace à l'intérieur de la navigation
gap     → espace entre les liens
Flexbox → disposition du groupe de liens
```

## 8. Stabiliser l'état final

Avant de terminer, votre fichier `css/styles.css` doit être dans cet état :

```css
body {
  font-family: Arial, sans-serif;
  color: #263238;
}

main {
  width: 80%;
  max-width: 900px;
  margin: 0 auto;
}

img {
  max-width: 100%;
  height: auto;
}

.image-principale {
  width: 80%;
}

.zone-image {
  text-align: center;
}

.navigation {
  display: flex;
  gap: 20px;
  justify-content: center;
  background-color: #f3f6f8;
  padding: 16px;
  margin-bottom: 24px;
}

.cartes {
  display: flex;
  gap: 20px;
}

.carte {
  background-color: #eaf3ff;
  border: 2px solid #245a86;
  padding: 16px 24px;
  margin: 0;
}
```

Les valeurs temporaires `gap: 5px`, `gap: 40px` et `justify-content: flex-start` ne doivent plus être présentes.

<ExampleFrame
  src="examples/exercices/rencontre5/preview.html"
  title="Résultat final de l'exercice guidé — Rencontre 5"
  showCode={false}
  minHeight={520}
  maxHeight={680}
/>

## 9. Diagnostic rapide

Pour chaque situation, dites d'abord **quel élément vous inspecteriez**.

### A. Les trois cartes restent empilées

Vérifiez si le parent `.cartes` possède bien :

```css
display: flex;
```

### B. Le texte d'une carte se place bizarrement sur une rangée

Vérifiez si `display: flex` a été ajouté par erreur à `.carte` au lieu de `.cartes`.

### C. Les cartes sont côte à côte, mais trop rapprochées

Vérifiez la valeur de :

```css
gap
```

sur `.cartes`.

### D. La navigation est flex, mais les liens ne sont pas centrés

Vérifiez la règle `.navigation` et la valeur de :

```css
justify-content
```

## Vérification avant de terminer

- [ ] je sais identifier le parent flex;
- [ ] je sais identifier ses enfants directs;
- [ ] je sais appliquer `display: flex` au bon parent;
- [ ] je sais utiliser `gap` pour espacer les enfants d'un groupe flex;
- [ ] je peux expliquer pourquoi `.cartes` et `.carte` n'ont pas le même rôle;
- [ ] je peux diagnostiquer `display: flex` appliqué au mauvais élément;
- [ ] je comprends l'effet général de `justify-content`;
- [ ] je comprends que Flexbox ne remplace pas `padding`, `border` ou `margin`;
- [ ] mon CSS final ne contient plus les valeurs temporaires utilisées pendant les essais.

## Continuer avec votre Projet Web

Dans votre propre site, vous n'avez pas besoin de reproduire les cartes de cet exercice. Cherchez plutôt **un vrai groupe d'éléments** à organiser, par exemple votre navigation principale.

**[Continuer vers Projet Web — Étape 5](../03-projet-web/05-rencontre5.md)**
