---
title: Rencontre 5 - Flexbox simple et intégration
description: Utiliser Flexbox à un niveau simple et consolider le site HTML/CSS avant JavaScript.
---

# Rencontre 5 - Flexbox simple et intégration

Cette rencontre termine le noyau HTML/CSS avant le début de JavaScript.

Nous allons introduire **Flexbox à un niveau simple**, puis consacrer une partie importante du temps à l'intégration, aux corrections et aux validations.

Le but n'est pas de devenir spécialiste de Flexbox aujourd'hui.

## Objectifs de la rencontre

À la fin de la rencontre, vous devriez être capable de :

- expliquer la relation parent flex → enfants directs;
- utiliser `display: flex` dans une situation simple;
- utiliser `gap` pour espacer les enfants flex;
- utiliser `justify-content` dans quelques cas concrets;
- comprendre le rôle général de `align-items`;
- utiliser Flexbox notamment pour une navigation horizontale;
- réutiliser le modèle en boîte avec des éléments flex;
- utiliser une image locale comme arrière-plan CSS avec `background-image`;
- comprendre qu'un chemin dans `url(...)` est calculé à partir du fichier CSS;
- diagnostiquer une règle Flexbox appliquée au mauvais élément;
- consolider le site HTML/CSS avant JavaScript.

## 1. Le modèle mental : parent et enfants

Prenons une navigation :

```html
<nav class="navigation">
  <a href="index.html">Accueil</a>
  <a href="pages/sujet.html">Sujet</a>
  <a href="pages/apropos.html">À propos</a>
</nav>
```

On peut représenter sa structure ainsi :

```text
nav.navigation
├── a
├── a
└── a
```

Le `<nav>` est le **parent** des trois liens.

Pour demander à Flexbox d'organiser ces enfants, on applique la propriété au parent :

```css
.navigation {
  display: flex;
}
```

:::info À maîtriser
Flexbox commence par cette question :

> Quel parent contient les éléments que je veux organiser?

C'est généralement ce parent qui reçoit `display: flex`.
:::

## 2. `display: flex`

Ajoutons :

```css
.navigation {
  display: flex;
}
```

Les enfants directs du conteneur deviennent des **éléments flex**.

Dans notre exemple, les trois liens sont organisés sur une rangée.

```text
Accueil    Sujet    À propos
```

Le navigateur possède beaucoup d'autres possibilités avec Flexbox, mais cette disposition horizontale suffit pour notre premier besoin.

## 3. `gap` : espacer les enfants

Les liens peuvent être trop rapprochés.

Ajoutons :

```css
.navigation {
  display: flex;
  gap: 20px;
}
```

`gap` crée un espace cohérent **entre les enfants** du conteneur flex.

:::tip Bonne pratique
Quand vous voulez surtout séparer les éléments d'un groupe flex, `gap` est souvent plus clair que d'ajouter des marges différentes sur chaque enfant.
:::

## 4. `justify-content` : placer le groupe sur l'axe principal

Dans notre exemple horizontal, `justify-content` permet de choisir comment le groupe d'enfants utilise l'espace horizontal disponible.

### Au début

```css
.navigation {
  display: flex;
  gap: 20px;
  justify-content: flex-start;
}
```

### Au centre

```css
.navigation {
  display: flex;
  gap: 20px;
  justify-content: center;
}
```

### Avec de l'espace entre les éléments

```css
.navigation {
  display: flex;
  justify-content: space-between;
}
```

:::tip Pas de catalogue à mémoriser
Pour cette rencontre, retenez surtout que `justify-content` contrôle la disposition du groupe sur l'axe principal.

Nous utilisons quelques valeurs courantes seulement.
:::

## 5. `align-items` : l'autre axe

Flexbox possède aussi un autre axe.

Dans notre exemple en rangée :

```text
axe principal → horizontal
autre axe     → vertical
```

On peut utiliser :

```css
.ligne {
  display: flex;
  align-items: center;
}
```

Cela peut être utile lorsque les enfants n'ont pas tous la même hauteur ou lorsqu'on veut les aligner verticalement dans leur parent.

Essayez aussi :

```css
align-items: flex-start;
```

pour comparer.

:::info À retenir
`justify-content` et `align-items` ne sont pas deux listes de valeurs à mémoriser.

Commencez par identifier le parent flex et observez quel axe vous voulez ajuster.
:::

## 6. Un deuxième exemple : un groupe de cartes

HTML :

```html
<div class="cartes">
  <section class="carte">
    <h2>Photo</h2>
    <p>Une activité extérieure.</p>
  </section>

  <section class="carte">
    <h2>Cuisine</h2>
    <p>Un atelier pratique.</p>
  </section>
</div>
```

CSS :

```css
.cartes {
  display: flex;
  gap: 20px;
}
```

Le parent est `.cartes`.

Ses enfants directs sont les deux sections `.carte`.

```text
.cartes
├── .carte
└── .carte
```

:::info À maîtriser
La classe `.cartes` gère la **disposition du groupe**.

La classe `.carte` peut continuer à gérer l'apparence de chaque carte.
:::

## 7. Flexbox ne remplace pas le modèle en boîte

Une carte peut toujours utiliser les notions de la rencontre 4 :

```css
.carte {
  background-color: #eaf3ff;
  border: 2px solid #245a86;
  padding: 20px;
}
```

Puis le parent gère leur disposition :

```css
.cartes {
  display: flex;
  gap: 20px;
}
```

On combine donc les connaissances :

```text
.carte  → apparence et espace intérieur
.cartes → disposition du groupe
```

## 8. Ajouter une image d'arrière-plan en CSS

Une image peut aussi servir de **fond visuel** à un élément. Dans ce cas, on utilise CSS plutôt que l'élément HTML `<img>`.

Supposons cette structure :

```text
mon-site/
├── index.html
├── css/
│   └── styles.css
└── images/
    └── sentier.svg
```

Dans `index.html`, on peut avoir :

```html
<header class="banniere">
  <h1>Club découverte</h1>
</header>
```

Puis, dans `css/styles.css` :

```css
.banniere {
  background-image: url("../images/sentier.svg");
  background-size: cover;
  background-position: center;
  padding: 48px 20px;
}
```

`background-image` choisit l'image utilisée comme arrière-plan.

`background-size: cover` agrandit l'image pour couvrir la zone disponible, quitte à en couper une partie.

`background-position: center` garde le centre de l'image au centre de la zone.

:::info Le chemin part du fichier CSS
Le chemin suivant :

```css
url("../images/sentier.svg")
```

est écrit dans `css/styles.css`. Le navigateur part donc du dossier `css/` :

```text
css/styles.css
→ ../        remonter dans mon-site
→ images/    entrer dans images
→ sentier.svg
```

Le chemin **ne part pas de `index.html`**.
:::

### `<img>` ou `background-image`?

Utilisez généralement `<img>` lorsque l'image fait partie du **contenu** et transmet une information importante.

Utilisez `background-image` lorsqu'elle sert surtout de **fond décoratif** ou d'ambiance visuelle derrière un élément.

Une image de fond CSS n'a pas d'attribut `alt`. Une image importante pour comprendre la page devrait donc normalement rester une vraie image HTML.

:::tip Au besoin
Vous pouvez aussi rencontrer :

```css
background-repeat: no-repeat;
```

Cette propriété empêche une petite image de se répéter. Avec `background-size: cover`, elle est souvent moins importante dans nos exemples.
:::

## 9. L'erreur fréquente : rendre le mauvais élément flex

Supposons que vous voulez placer les cartes côte à côte.

Vous écrivez par erreur :

```css
.carte {
  display: flex;
}
```

Vous avez alors rendu **chaque carte** flex.

Ce ne sont pourtant pas les enfants de chaque carte que vous vouliez organiser côte à côte.

Le bon parent est :

```css
.cartes {
  display: flex;
}
```

:::tip Réflexe de débogage
Si Flexbox agit sur les mauvais éléments :

1. trouvez les éléments que vous voulez placer;
2. trouvez leur parent commun;
3. vérifiez que `display: flex` est appliqué à ce parent.
:::

## 10. Ce que nous ne couvrons pas en profondeur

Flexbox contient beaucoup d'autres propriétés :

```text
flex-direction
flex-wrap
flex-grow
flex-shrink
flex-basis
order
align-self
```

Elles ne font pas partie du noyau obligatoire de la rencontre.

Nous voulons d'abord maîtriser :

```text
parent flex
display: flex
gap
justify-content simple
align-items simple
```

:::note Pour aller plus loin — non évalué
Si une navigation déborde sur un petit écran, vous pourriez rencontrer :

```css
flex-wrap: wrap;
```

Cette propriété autorise les enfants à passer sur une autre ligne lorsque l'espace manque. Elle n'est pas requise dans la Validation D.
:::

## 11. La rencontre 5 est aussi une rencontre d'intégration

Après la démonstration Flexbox, l'objectif principal devient de **consolider votre site**.

Vous devrez revoir :

- structure HTML;
- images et chemins relatifs;
- navigation entre les pages;
- feuille CSS externe;
- sélecteurs et classes;
- couleurs et typographie;
- modèle en boîte;
- `padding`, `border`, `margin`;
- une utilisation simple de Flexbox;
- une image d'arrière-plan CSS et le chemin écrit dans `url(...)`.

:::warning N'ajoutez pas des effets simplement pour remplir la page
Un petit site clair, cohérent et compris est préférable à un site contenant beaucoup de propriétés copiées sans comprendre leur rôle.
:::

## 12. Exemple complet de navigation

HTML dans `index.html` :

```html
<nav class="navigation">
  <a href="index.html">Accueil</a>
  <a href="pages/sujet.html">Mon sujet</a>
  <a href="pages/apropos.html">À propos</a>
</nav>
```

CSS :

```css
.navigation {
  display: flex;
  gap: 20px;
  justify-content: center;
  background-color: #eaf3ff;
  padding: 16px;
}
```

Dans une page située sous `pages/`, les chemins HTML changent toujours :

```html
<nav class="navigation">
  <a href="../index.html">Accueil</a>
  <a href="sujet.html">Mon sujet</a>
  <a href="apropos.html">À propos</a>
</nav>
```

Le CSS reste le même parce que les pages partagent toujours `styles.css`.

## À retenir

- `display: flex` s'applique au parent;
- les enfants directs de ce parent deviennent des éléments flex;
- `gap` crée l'espace entre eux;
- `justify-content` agit sur l'axe principal;
- `align-items` agit sur l'autre axe;
- le modèle en boîte continue de s'appliquer aux éléments flex;
- `background-image` permet d'utiliser une image locale comme fond visuel;
- un chemin dans `url(...)` est calculé à partir du fichier CSS qui contient la règle;
- une image de contenu reste généralement un `<img>`, tandis qu'une image décorative peut devenir un arrière-plan CSS;
- une seule utilisation Flexbox pertinente et comprise est suffisante pour démontrer le concept;
- cette rencontre sert aussi à corriger et intégrer tout le bloc HTML/CSS.

## Pratique guidée

**[Exercice guidé — Flexbox simple](./05-rencontre5-exercice-guide.md)**

## Projet Web

**[Projet Web — Étape 5](../03-projet-web/05-rencontre5.md)**

## Validation disponible

Cette rencontre permet de finaliser la **Validation D** :

- **WEB-07 — Mettre en forme une interface avec CSS**;
- **WEB-08 — Organiser l'espace et la disposition des éléments**.

Les reprises des validations précédentes restent possibles lorsque la logistique le permet.

L'image d'arrière-plan est un outil de mise en forme à comprendre et à réutiliser lorsqu'elle est pertinente. Elle n'ajoute pas un nouveau critère mécanique à la Validation D.

Après cette rencontre, aucune nouvelle notion HTML/CSS essentielle n'est prévue. La rencontre 6 commence JavaScript.
