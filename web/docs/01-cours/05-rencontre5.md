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
- utiliser `justify-content` dans un cas simple;
- reconnaître le rôle général de `align-items` sans mémoriser toutes ses valeurs;
- utiliser Flexbox notamment pour une navigation horizontale;
- réutiliser le modèle en boîte avec des éléments flex;
- utiliser une image locale comme arrière-plan CSS avec `background-image`;
- comprendre qu'un chemin dans `url(...)` est calculé à partir du fichier CSS;
- diagnostiquer une règle Flexbox appliquée au mauvais élément;
- consolider le site HTML/CSS avant JavaScript.

## 1. Le modèle mental et `display: flex`

Commençons avec deux cartes qui sont naturellement empilées :

```html
<div class="cartes">
  <div class="carte">
    <h2>Photo</h2>
    <p>Une activité extérieure.</p>
  </div>

  <div class="carte">
    <h2>Cuisine</h2>
    <p>Un atelier pratique.</p>
  </div>
</div>
```

On peut représenter leur structure ainsi :

```text
.cartes
├── .carte
└── .carte
```

Si nous voulons organiser les **deux cartes**, leur parent commun est `.cartes`. C'est donc ce parent qui reçoit Flexbox :

```css
.cartes {
  display: flex;
}
```

Les enfants directs du conteneur deviennent alors des **éléments flex**. Les deux cartes passent d'une disposition verticale à une rangée.

```text
avant                après

Photo                Photo   Cuisine
Cuisine
```

:::info À maîtriser
Avant d'écrire `display: flex`, posez-vous deux questions :

1. quels éléments est-ce que je veux organiser?
2. quel est leur parent commun?

C'est ce parent qui reçoit généralement `display: flex`.
:::

## 2. `gap` : espacer les enfants

Les cartes sont maintenant côte à côte, mais elles peuvent être trop rapprochées.

Ajoutons `gap` à la règle qui existe déjà :

```css
.cartes {
  display: flex;
  gap: 20px;
}
```

`gap` crée un espace cohérent **entre les enfants** du conteneur flex.

:::tip Bonne pratique
Quand vous voulez surtout séparer les éléments d'un même groupe flex, `gap` est souvent plus clair que d'ajouter une marge différente sur chaque enfant.
:::

## 3. L'erreur fréquente : rendre le mauvais élément flex

Supposons que vous voulez placer les cartes côte à côte, mais que vous écrivez :

```css
.carte {
  display: flex;
}
```

Vous avez alors rendu **chaque carte** flex. Flexbox essaie d'organiser le contenu à l'intérieur de chaque carte plutôt que d'organiser les cartes entre elles.

Le bon parent reste :

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

## 4. Utiliser Flexbox dans une navigation

Le même principe peut servir à organiser les liens d'une navigation :

```html
<nav class="navigation">
  <a href="index.html">Accueil</a>
  <a href="pages/sujet.html">Sujet</a>
  <a href="pages/apropos.html">À propos</a>
</nav>
```

On transforme la navigation en conteneur flex, on espace les liens avec `gap`, puis on peut placer le groupe avec `justify-content` :

```css
.navigation {
  display: flex;
  gap: 20px;
  justify-content: center;
}
```

`justify-content: center` place ici le groupe de liens au centre de l'axe principal.

Pour comparer, remplacez temporairement la dernière ligne par :

```css
justify-content: flex-start;
```

Le groupe revient alors au début du conteneur.

:::tip Pas de catalogue à mémoriser
Retenez surtout que `justify-content` déplace **le groupe d'enfants** sur l'axe principal. Vous n'avez pas à mémoriser toutes les valeurs possibles.
:::

### Et `align-items`?

`align-items` agit sur **l'autre axe** du conteneur flex. Dans une rangée horizontale, il sert donc à ajuster l'alignement vertical des enfants.

```css
.ligne {
  display: flex;
  align-items: center;
}
```

Vous n'avez pas à mémoriser toutes ses valeurs ni à l'utiliser obligatoirement dans votre projet. Retenez surtout son rôle général.

## 5. Flexbox ne remplace pas le modèle en boîte

Une carte peut toujours utiliser les notions de la rencontre 4 :

```css
.carte {
  background-color: #eaf3ff;
  border: 2px solid #245a86;
  padding: 20px;
}
```

Puis le parent gère la disposition du groupe :

```css
.cartes {
  display: flex;
  gap: 20px;
}
```

On combine donc les connaissances :

```text
.carte  → apparence et espace intérieur
.cartes → disposition du groupe et espace entre les enfants
```

## 6. Ajouter une image d'arrière-plan en CSS

Une image peut aussi servir de **fond visuel** à un élément. C'est une technique simple qui peut donner beaucoup de personnalité à une bannière ou à une section d'un site.

Supposons cette structure :

```text
mon-site/
├── index.html
├── css/
│   └── styles.css
└── images/
    └── sentier.svg
```

Dans `index.html` :

```html
<header class="banniere">
  <h1>Club découverte</h1>
</header>
```

Dans `css/styles.css` :

```css
.banniere {
  background-image: url("../images/sentier.svg");
  background-size: cover;
  background-position: center;
  padding: 48px 20px;
}
```

- `background-image` choisit l'image utilisée comme arrière-plan;
- `background-size: cover` agrandit l'image pour couvrir la zone disponible, quitte à en couper une partie;
- `background-position: center` garde le centre de l'image au centre de la zone.

:::info Le chemin part du fichier CSS
Le chemin :

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

## 7. Extras — enrichir votre site

Les propriétés suivantes sont **facultatives et non évaluées séparément**. Leur but est simplement de vous donner quelques effets visuels faciles à copier, essayer et adapter à votre goût.

:::tip Choisissez-en une ou deux
Vous n'avez pas à tout utiliser. Un ou deux effets bien choisis sont souvent plus efficaces qu'une accumulation d'effets.
:::

### Changer un lien au survol avec `:hover`

La pseudo-classe `:hover` applique un style pendant que la souris se trouve sur un élément.

```css
.navigation a {
  background-color: #eaf3ff;
  color: #245a86;
  padding: 10px 14px;
  text-decoration: none;
  border-radius: 8px;
  transition: background-color 0.2s, color 0.2s;
}

.navigation a:hover {
  background-color: #245a86;
  color: white;
}
```

Ici, `transition` rend le changement de couleur plus fluide. Vous pouvez modifier les couleurs et la durée pour obtenir un résultat qui correspond à votre site.

### Donner du relief à une carte

Quelques propriétés suffisent pour changer rapidement l'apparence d'une boîte :

```css
.carte {
  border-radius: 12px;
  box-shadow: 0 4px 12px rgb(0 0 0 / 20%);
  transition: transform 0.2s;
}

.carte:hover {
  transform: scale(1.03);
}
```

- `border-radius` arrondit les coins;
- `box-shadow` ajoute une ombre;
- `transform: scale(1.03)` agrandit légèrement la carte au survol;
- `transition` rend le mouvement plus doux.

:::warning Effet léger
Pour `scale()`, restez près de `1`, par exemple `1.02` ou `1.03`. Un gros zoom devient rapidement dérangeant.
:::

### Utiliser une couleur semi-transparente

Une couleur peut contenir une valeur **alpha**, c'est-à-dire un niveau de transparence.

Par exemple :

```css
background-color: rgb(0 0 0 / 55%);
```

Ici, le noir est opaque à 55 %. Une partie de ce qui se trouve derrière reste donc visible.

C'est particulièrement pratique pour placer du texte lisible par-dessus une image de fond :

```html
<div class="banniere">
  <div class="contenu-banniere">
    <h1>Club découverte</h1>
    <p>Explorez de nouvelles activités.</p>
  </div>
</div>
```

```css
.banniere {
  background-image: url("../images/sentier.svg");
  background-size: cover;
  background-position: center;
  padding: 48px 20px;
}

.contenu-banniere {
  background-color: rgb(0 0 0 / 55%);
  color: white;
  padding: 20px;
  border-radius: 12px;
}
```

Vous pouvez essayer `30%`, `55%` ou `80%` pour observer la différence :

```text
0%   → complètement transparent
100% → complètement opaque
```

### Deux autres effets rapides

Pour un gros titre sur une image :

```css
h1 {
  text-shadow: 0 2px 4px rgb(0 0 0 / 50%);
}
```

Et pour créer un fond en dégradé sans image :

```css
.banniere {
  background: linear-gradient(135deg, #245a86, #7a1f1f);
  color: white;
  padding: 48px 20px;
}
```

Ces effets sont là pour vous donner des idées. Copiez le code, changez les valeurs et gardez seulement ce qui améliore réellement votre site.

## 8. Intégrer les notions dans votre site

Après la pratique Flexbox, l'objectif principal devient de **consolider votre Projet Web**.

Vous allez ajouter un usage pertinent de Flexbox, puis revoir vos quatre pages, vos chemins, votre feuille CSS et vos espacements. L'image d'arrière-plan et les extras visuels peuvent aussi être utilisés s'ils améliorent réellement votre présentation.

:::warning
N'ajoutez pas des effets simplement pour remplir la page. Un petit site clair, cohérent et compris est préférable à un site contenant beaucoup de propriétés copiées sans comprendre leur rôle.
:::

:::tip Pour aller plus loin
Flexbox offre beaucoup d'autres possibilités, par exemple `flex-direction`, `flex-wrap`, `flex-grow`, `flex-shrink`, `flex-basis`, `order` et `align-self`. Vous n'avez pas à les maîtriser pour la Validation D, mais vous pouvez les expérimenter si elles répondent à un besoin de votre site.

Pour explorer ces propriétés avec des exemples interactifs, consultez la **[documentation CSS Flexbox de W3Schools](https://www.w3schools.com/css/css3_flexbox.asp)**.
:::

## À retenir

- `display: flex` s'applique au parent;
- les enfants directs de ce parent deviennent des éléments flex;
- `gap` crée l'espace entre eux;
- `justify-content` permet de placer le groupe sur l'axe principal;
- `align-items` permet d'ajuster l'alignement sur l'autre axe lorsqu'on en a besoin;
- le modèle en boîte continue de s'appliquer aux éléments flex;
- si Flexbox agit sur les mauvais éléments, vérifiez d'abord quel élément est le parent;
- `background-image` permet d'utiliser une image locale comme fond visuel;
- un chemin dans `url(...)` est calculé à partir du fichier CSS qui contient la règle;
- une image de contenu reste généralement un `<img>`, tandis qu'une image décorative peut devenir un arrière-plan CSS;
- une utilisation Flexbox pertinente et comprise est suffisante pour démontrer le concept;
- les extras visuels comme `:hover`, `transition`, `box-shadow`, `border-radius`, `transform` et les couleurs avec alpha sont facultatifs;
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
