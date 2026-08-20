---
title: Étape 4 - Organiser les blocs et les espacements
description: Utiliser le modèle en boîte, padding, margin et bordures pour améliorer la lisibilité du site.
sidebar_position: 5
---

# Projet Web — Étape 4

Votre site possède maintenant une feuille `css/styles.css` partagée par plusieurs pages. À cette étape, vous allez améliorer la **lisibilité et les espacements** sans changer de projet et sans recommencer votre design.

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
    ├── sujet.html
    └── apropos.html
```

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

## 6. Ajuster une dimension seulement si elle résout un problème

Certaines pages deviennent difficiles à lire lorsque le contenu s'étend beaucoup sur un grand écran.

Vous pouvez expérimenter avec une limite simple :

```css
main {
  max-width: 900px;
}
```

Cette propriété indique une largeur maximale, sans obliger le contenu à toujours avoir cette largeur.

Ce réglage n'est pas obligatoire si votre site n'en a pas besoin.

:::warning Ne forcez pas les dimensions partout
Évitez d'ajouter des `width` ou `height` fixes à tous les éléments simplement pour montrer que vous connaissez les propriétés.

Une dimension devrait répondre à un besoin concret.
:::

## 7. Faire une passe de cohérence

Parcourez toutes vos pages.

Posez-vous ces questions :

- le texte est-il collé aux bordures ou aux arrière-plans?
- certains blocs sont-ils trop près les uns des autres?
- les mêmes types de contenu utilisent-ils des espacements cohérents?
- une bordure aide-t-elle réellement à distinguer un groupe?
- une classe pourrait-elle éviter de répéter le même style?

Corrigez seulement les problèmes qui vous semblent utiles.

Le but n'est pas de rendre tous les sites identiques.

## 8. Diagnostic rapide

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

## 9. Précontrôle avant validation

Avant de demander une validation, vérifiez que :

- [ ] toutes vos pages chargent encore la même feuille CSS;
- [ ] vous pouvez expliquer où se trouve `styles.css`;
- [ ] vos classes ont un rôle compréhensible;
- [ ] vous avez utilisé `padding` là où un espace intérieur était nécessaire;
- [ ] vous avez utilisé `margin` là où un espace extérieur était nécessaire;
- [ ] vous pouvez montrer une bordure et expliquer où elle se situe dans le modèle en boîte;
- [ ] vous savez nommer contenu, padding, border et margin;
- [ ] vous êtes capable de modifier un espacement sans essayer plusieurs propriétés au hasard.

Cette checklist sert à vous préparer. La validation porte sur votre compréhension, pas sur un nombre précis de cartes, de marges ou de bordures.

## Validations disponibles

### Validation C — CSS de base

Si elle n'est pas encore terminée, vous pouvez présenter :

- **WEB-05 — Associer correctement une feuille CSS externe**;
- **WEB-06 — Cibler les éléments avec des sélecteurs appropriés**.

### Validation D — Mise en forme et disposition

Vous pouvez aussi commencer à démontrer :

- **WEB-07 — Mettre en forme une interface avec CSS**;
- **WEB-08 — Organiser l'espace et la disposition des éléments**.

À cette rencontre, WEB-08 est surtout observée à travers le modèle en boîte et les espacements. Flexbox simple sera ajouté à la rencontre 5.

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

## Prochaine étape

À la rencontre 5, vous utiliserez **Flexbox simple** pour organiser certains éléments côte à côte, notamment la navigation, puis vous consacrerez du temps à l'intégration et aux corrections.
