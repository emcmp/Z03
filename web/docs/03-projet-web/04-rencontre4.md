---
title: Étape 4 - Organiser les blocs et les espacements
description: Utiliser le modèle en boîte, les dimensions relatives et le centrage pour améliorer la lisibilité du site.
sidebar_position: 5
---

# Projet Web — Étape 4

<ProjectStepHero step={4} />

Votre site possède maintenant une feuille `css/styles.css` partagée par plusieurs pages. À cette étape, vous allez améliorer la **lisibilité, les dimensions et les espacements** sans changer de projet et sans recommencer votre design.

Avant de commencer :

- consultez le **[cours de la rencontre 4](../01-cours/04-rencontre4.md)**;
- faites l'**[exercice guidé — Comprendre le modèle en boîte](../01-cours/04-rencontre4-exercice-guide.md)**.

## 1. Reprendre le même site et la même feuille CSS

Votre structure ressemble toujours à ceci :

```text
mon-site/
├── index.html
├── css/
│   └── styles.css
├── images/
│   └── ...
└── pages/
    └── sujet.html
```

Si votre site contient une ou plusieurs pages secondaires supplémentaires, conservez-les. Le minimum exigé reste une page sous `pages/`.

Ne créez pas une deuxième feuille CSS pour cette rencontre.

Tout le travail se poursuit dans le même `styles.css`.

## 2. Choisir un bloc qui mérite plus d'espace intérieur

Repérez un élément important de votre page, par exemple :

- un `header`;
- une `section`;
- une information mise en valeur;
- un groupe de contenu qui forme une petite carte.

Ajoutez ou réutilisez une classe claire.

Par exemple :

```html
<section class="carte">
  <h2>Mon sujet</h2>
  <p>Une courte présentation de cette partie du site.</p>
</section>
```

Puis dans CSS :

```css
.carte {
  background-color: #eaf3ff;
  border: 2px solid #245a86;
  padding: 20px;
}
```

Le `padding` crée maintenant de l'espace **entre le contenu et la bordure**.

:::info À maîtriser
Vous devez pouvoir expliquer pourquoi vous utilisez `padding` plutôt que `margin` dans cette situation.
:::

## 3. Créer de l'espace entre les blocs

Si plusieurs éléments sont trop collés entre eux, ajoutez de l'espace extérieur.

Par exemple :

```css
.carte {
  background-color: #eaf3ff;
  border: 2px solid #245a86;
  padding: 20px;
  margin: 20px 0;
}
```

Ici :

```text
20px → haut et bas
0    → gauche et droite
```

Vous n'avez pas besoin d'utiliser cette valeur exacte. Choisissez un espacement cohérent avec votre site.

## 4. Réutiliser une classe au lieu de recopier les mêmes règles

Si plusieurs sections jouent le même rôle visuel, la même classe peut être utilisée :

```html
<section class="carte">...</section>
<section class="carte">...</section>
```

Les deux blocs reçoivent alors le même :

```text
background-color
border
padding
margin
```

:::tip Bonne pratique
Une classe doit représenter une intention ou un rôle réutilisable. Évitez de créer une nouvelle classe pour chaque élément simplement parce que vous le pouvez.
:::

## 5. Utiliser `<div>` seulement lorsqu'il est utile

Un élément comme `<section>`, `<header>`, `<nav>` ou `<main>` est préférable lorsqu'il décrit bien le rôle du contenu.

Si aucun élément plus précis ne convient, vous pouvez utiliser un conteneur général :

```html
<div class="carte">
  <h2>À retenir</h2>
  <p>Ce groupe n'a pas besoin d'une signification HTML plus précise.</p>
</div>
```

Le `<div>` ne possède pas d'apparence spéciale par lui-même. C'est votre CSS qui lui donne son style.

:::tip Bonne pratique
Ne remplacez pas tous vos éléments HTML par des `<div>`. Utilisez-les comme conteneurs généraux lorsqu'ils sont réellement nécessaires.
:::

## 6. Limiter et centrer le contenu principal

Certaines pages deviennent difficiles à lire lorsque le contenu s'étend beaucoup sur un grand écran.

Vous pouvez combiner une largeur relative, une limite et des marges automatiques :

```css
main {
  width: 80%;
  max-width: 900px;
  margin: 0 auto;
}
```

Dans cet exemple :

- `width: 80%` utilise 80 % de la largeur disponible dans le parent;
- `max-width: 900px` empêche le contenu de devenir trop large;
- `margin: 0 auto` laisse le navigateur partager l'espace restant à gauche et à droite pour centrer la boîte.

:::info Centrer le texte ou centrer la boîte?
Pour centrer le texte d'un titre, vous connaissez déjà :

```css
text-align: center;
```

Pour centrer la boîte `<main>` elle-même, c'est plutôt la combinaison d'une largeur appropriée et de marges horizontales `auto` qui est utilisée.
:::

Ce réglage n'a pas besoin d'être exactement `80%` ou `900px`. Choisissez des valeurs raisonnables pour votre site et soyez capable d'expliquer votre choix.

## 7. Donner aux images une largeur souple

Si une image risque de dépasser de son conteneur, une règle générale peut être utile :

```css
img {
  max-width: 100%;
  height: auto;
}
```

L'image peut rester plus petite que son conteneur, mais elle ne le dépassera pas. `height: auto` conserve ses proportions.

Pour donner une largeur relative particulière à une image, vous pouvez plutôt utiliser une classe :

```css
.image-principale {
  width: 80%;
  height: auto;
}
```

Ici, `80%` est une valeur **CSS** calculée à partir de la largeur disponible dans le parent. Ce n'est pas la même chose que l'attribut HTML `width="400"` vu à la rencontre 2.

### Centrer une image dans son conteneur

Une image est du contenu placé dans une boîte. Vous pouvez donc centrer le contenu du parent :

```css
.zone-image {
  text-align: center;
}
```

Vous n'avez pas besoin d'ajouter cette structure partout. Utilisez-la seulement lorsqu'un centrage de l'image répond à votre design.

## 8. Ajuster les dimensions seulement si elles résolvent un problème

Évitez d'ajouter des `width` ou `height` fixes à tous les éléments simplement pour montrer que vous connaissez les propriétés.

Une dimension devrait répondre à un besoin concret :

- une largeur en `px` pour une dimension volontairement fixe;
- une largeur en `%` pour suivre l'espace disponible dans le parent;
- une `max-width` pour imposer une limite sans forcer une largeur constante.

:::warning Ne déformez pas les images
Si vous modifiez la largeur d'une image avec CSS, `height: auto` permet généralement de conserver ses proportions.
:::

## 9. Faire une passe de cohérence

Parcourez toutes vos pages.

Posez-vous ces questions :

- le texte est-il collé aux bordures ou aux arrière-plans?
- certains blocs sont-ils trop près les uns des autres?
- le contenu devient-il inutilement large sur une grande fenêtre?
- certaines images dépassent-elles de leur conteneur?
- si un élément est centré, ai-je centré son contenu ou sa boîte volontairement?
- les mêmes types de contenu utilisent-ils des espacements cohérents?
- une bordure aide-t-elle réellement à distinguer un groupe?
- une classe pourrait-elle éviter de répéter le même style?

Corrigez seulement les problèmes qui vous semblent utiles.

Le but n'est pas de rendre tous les sites identiques.

## 10. Diagnostic rapide

Pour chacune de ces situations, choisissez la propriété avant de modifier le code.

### Le texte est trop près de sa bordure

Pensez à :

```css
padding
```

### Deux blocs sont trop près l'un de l'autre

Pensez à :

```css
margin
```

### La ligne autour d'un bloc doit changer

Pensez à :

```css
border
```

### Un bloc devient beaucoup trop large

Une limite comme celle-ci peut être utile :

```css
max-width
```

### Le contenu principal doit être centré

Une fois sa largeur contrôlée, pensez à :

```css
margin: 0 auto;
```

### Une image dépasse son conteneur

Pensez à :

```css
max-width: 100%;
height: auto;
```

## 11. Précontrôle avant validation

Avant de demander une validation, vérifiez que :

- [ ] toutes vos pages chargent encore la même feuille CSS;
- [ ] vous pouvez expliquer où se trouve `styles.css`;
- [ ] vos classes ont un rôle compréhensible;
- [ ] vous avez utilisé `padding` là où un espace intérieur était nécessaire;
- [ ] vous avez utilisé `margin` là où un espace extérieur était nécessaire;
- [ ] vous pouvez montrer une bordure et expliquer où elle se situe dans le modèle en boîte;
- [ ] vous savez nommer contenu, padding, border et margin;
- [ ] vous pouvez expliquer la différence entre une largeur en `px` et une largeur en `%` si vous les utilisez;
- [ ] vous pouvez expliquer la différence entre centrer du contenu avec `text-align` et centrer une boîte avec des marges automatiques;
- [ ] si votre site contient de grandes images, vous avez vérifié qu'elles restent dans leur conteneur;
- [ ] vous êtes capable de modifier un espacement ou une dimension sans essayer plusieurs propriétés au hasard.

Cette checklist sert à vous préparer. La validation porte sur votre compréhension, pas sur un nombre précis de cartes, de marges, de dimensions ou de bordures.

## Badges disponibles pour validation

Consultez **[Projet Web — Évaluation](./00-evaluation.md)** pour les checklists détaillées et l'état de votre collection de badges.

### Validation C — CSS de base

Si elle n'est pas encore terminée, vous pouvez présenter :

- 🔌 **WEB-05 — Associer correctement une feuille CSS externe**;
- 🎯 **WEB-06 — Cibler les éléments avec des sélecteurs appropriés**.

### Validation D — Mise en forme et disposition

Vous pouvez aussi commencer à démontrer :

- 🎨 **WEB-07 — Mettre en forme une interface avec CSS**;
- 📐 **WEB-08 — Organiser l'espace et la disposition des éléments**.

À cette rencontre, 📐 WEB-08 est surtout observée à travers le modèle en boîte, les dimensions et les espacements. Flexbox simple sera ajouté à la rencontre 5.

:::tip Collection de badges
Il n'est pas nécessaire d'acquérir tous les badges le même jour. Les compétences **À revoir** peuvent être présentées de nouveau lorsque vous êtes prêt.
:::

:::note Pour aller plus loin — non évalué
Si votre site est déjà clair et que vous avez du temps, vous pouvez expérimenter avec :

```css
border-radius
```

ou lire à propos de :

```css
box-sizing: border-box
```

Ces éléments ne sont pas nécessaires pour réussir la validation.
:::