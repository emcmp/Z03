---
title: Étape 5 - Intégrer Flexbox et finaliser le site
description: Utiliser Flexbox dans un besoin concret, réinvestir les chemins avec une image de fond et terminer les validations HTML/CSS.
sidebar_position: 6
---

# Projet Web — Étape 5

<ProjectStepHero step={5} />

Cette étape termine le noyau HTML/CSS du Projet Web avant le début de JavaScript.

L'objectif n'est pas d'ajouter beaucoup de nouvelles fonctionnalités. Vous allez surtout :

- utiliser **Flexbox simple** dans une situation utile;
- réinvestir les chemins relatifs avec une image d'arrière-plan CSS;
- harmoniser les pages;
- corriger les problèmes encore présents;
- terminer ou reprendre les validations HTML/CSS.

Avant de commencer :

- consultez le **[cours de la rencontre 5](../01-cours/05-rencontre5.md)**;
- faites l'**[exercice guidé — Flexbox simple](../01-cours/05-rencontre5-exercice-guide.md)**.

## 1. Reprendre le même site

Votre projet conserve la même structure générale :

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

Ne créez pas un nouveau site et ne créez pas une nouvelle feuille CSS pour Flexbox.

Tout continue dans votre projet actuel.

## 2. Utiliser Flexbox pour la navigation

Votre navigation possède déjà des liens.

Par exemple :

```html
<nav class="navigation">
  <a href="index.html">Accueil</a>
  <a href="pages/sujet.html">Mon sujet</a>
</nav>
```

Si vous avez ajouté une autre page facultative, conservez aussi son lien dans votre navigation.

Dans `styles.css`, vous pouvez organiser les liens ainsi :

```css
.navigation {
  display: flex;
  gap: 20px;
}
```

:::info À maîtriser
Ici :

```text
parent flex     → nav.navigation
enfants directs → les liens <a>
```

C'est le parent qui reçoit `display: flex`.
:::

## 3. Ajuster l'alignement seulement si nécessaire

Si vous voulez regrouper les liens au centre :

```css
.navigation {
  display: flex;
  gap: 20px;
  justify-content: center;
}
```

Ou, si la disposition actuelle fonctionne déjà bien, gardez-la simple.

Vous n'avez pas besoin d'utiliser toutes les propriétés Flexbox vues en classe.

:::tip Bonne pratique
Une règle CSS devrait répondre à un besoin. N'ajoutez pas `justify-content` ou `align-items` simplement pour montrer que vous connaissez leur nom.
:::

## 4. Utiliser Flexbox ailleurs seulement si cela aide

Votre site possède peut-être un groupe d'éléments qui gagnerait à être placé côte à côte.

Par exemple :

```html
<div class="cartes">
  <section class="carte">...</section>
  <section class="carte">...</section>
</div>
```

Vous pourriez utiliser :

```css
.cartes {
  display: flex;
  gap: 20px;
}
```

Mais ce deuxième usage n'est pas obligatoire.

Une seule utilisation de Flexbox bien comprise et utile vaut mieux que plusieurs conteneurs flex ajoutés artificiellement.

## 5. Garder le modèle en boîte

Flexbox organise les enfants d'un parent. Il ne remplace pas `padding`, `border` et `margin`.

Par exemple :

```css
.carte {
  background-color: #eaf3ff;
  border: 2px solid #245a86;
  padding: 20px;
}

.cartes {
  display: flex;
  gap: 20px;
}
```

Ici :

- `.carte` contrôle l'apparence et l'espace **dans chaque carte**;
- `.cartes` contrôle la **disposition du groupe**.

## 6. Réinvestir une image d'arrière-plan

Choisissez une image locale de votre dossier `images/` qui peut servir de **fond décoratif**, par exemple dans un en-tête ou une bannière.

Supposons :

```text
mon-site/
├── css/
│   └── styles.css
└── images/
    └── paysage.jpg
```

Si votre HTML contient :

```html
<header class="banniere">
  <h1>Mon sujet</h1>
</header>
```

vous pouvez essayer dans `css/styles.css` :

```css
.banniere {
  background-image: url("../images/paysage.jpg");
  background-size: cover;
  background-position: center;
  padding: 48px 20px;
}
```

:::info Le point important est le chemin
`styles.css` se trouve dans `css/`. Pour atteindre `images/paysage.jpg`, le chemin doit donc d'abord remonter avec `../`.

```text
css/styles.css
→ ../
→ images/
→ paysage.jpg
```
:::

Faites l'essai dans votre site et vérifiez que vous pouvez expliquer le chemin. Vous pouvez ensuite **conserver ou retirer** l'image de fond selon votre sujet et votre mise en page.

:::tip `<img>` reste utile
N'utilisez pas `background-image` pour remplacer toutes vos images HTML.

Une image qui fait partie du contenu et transmet une information importante devrait normalement rester un `<img>` avec un texte `alt`. L'image de fond sert surtout à la présentation.
:::

L'utilisation d'une image de fond n'est pas un nouveau critère obligatoire à cocher pour obtenir WEB-07. Elle sert à réinvestir CSS et les chemins relatifs dans un contexte différent.

## 7. Faire une passe complète sur toutes les pages

Ouvrez chaque page dans le navigateur.

Vérifiez :

### HTML et chemins

- la navigation fonctionne-t-elle partout?
- les images s'affichent-elles?
- les chemins sont-ils corrects depuis la racine et depuis `pages/`?
- si vous utilisez `background-image`, son chemin est-il correct depuis `styles.css`?
- les pages ont-elles une structure HTML complète?

### Feuille CSS

- toutes les pages chargent-elles `styles.css`?
- les classes sont-elles écrites de la même façon dans HTML et CSS?
- les styles généraux sont-ils cohérents?

### Modèle en boîte

- le texte est-il collé aux bordures?
- les blocs ont-ils assez d'espace entre eux?
- utilisez-vous `padding` et `margin` au bon endroit?

### Flexbox

- `display: flex` est-il appliqué au bon parent?
- les enfants directs sont-ils ceux que vous vouliez organiser?
- `gap` produit-il l'espacement désiré?

## 8. Corriger plutôt qu'ajouter

À cette étape, consacrez une partie importante du temps à la correction.

Quelques bons objectifs :

- réparer un lien qui ne fonctionne pas;
- corriger un chemin CSS ou un chemin dans `url(...)`;
- enlever une classe devenue inutile;
- réutiliser une classe au lieu de dupliquer une règle;
- ajuster un `padding` ou une `margin`;
- simplifier une mise en forme devenue trop compliquée;
- vérifier une page que vous aviez moins testée.

:::warning Le site n'a pas besoin d'être spectaculaire
Un petit site simple, cohérent et compris vaut beaucoup plus qu'un site rempli d'effets copiés sans comprendre leur fonctionnement.
:::

## 9. Précontrôle final HTML/CSS

Avant de considérer cette étape terminée :

- [ ] `index.html` est à la racine;
- [ ] les pages secondaires sont organisées de façon cohérente;
- [ ] les images et les liens utilisent des chemins relatifs corrects;
- [ ] toutes les pages chargent la même feuille CSS;
- [ ] je peux expliquer un sélecteur d'élément et une classe;
- [ ] je peux diagnostiquer un `<link>` CSS incorrect;
- [ ] je comprends contenu → padding → border → margin;
- [ ] je peux choisir entre `padding` et `margin`;
- [ ] j'utilise Flexbox dans au moins une situation utile;
- [ ] je sais identifier le parent flex et ses enfants directs;
- [ ] j'utilise `gap` pour espacer des enfants flex;
- [ ] si j'utilise une image de fond, je peux expliquer son `url(...)` et son chemin depuis le fichier CSS;
- [ ] je peux expliquer mes principales décisions CSS.

Cette liste sert à préparer les validations. Elle ne représente pas un décompte automatique de points.

## Badge final du bloc HTML/CSS — Validation D

La Validation D porte sur les deux derniers badges du bloc :

- 🎨 **WEB-07 — Mettre en forme une interface avec CSS**;
- 📐 **WEB-08 — Organiser l'espace et la disposition des éléments**.

Consultez **[Projet Web — Évaluation](./00-evaluation.md)** pour revoir les checklists détaillées avant d'appeler votre enseignant.

L'enseignant peut vous demander, par exemple :

- de modifier un `padding` ou une `margin` et d'expliquer votre choix;
- d'identifier les parties du modèle en boîte;
- de rendre un parent flex;
- d'ajouter ou de modifier un `gap`;
- d'expliquer quels éléments sont les enfants directs d'un conteneur flex;
- de corriger une disposition simple devant lui.

L'image d'arrière-plan ne devient pas une propriété obligatoire à réciter ou à utiliser pour réussir la Validation D.

## Reprises possibles

Si une compétence précédente est encore `À revoir`, cette rencontre laisse du temps pour la représenter lorsque la logistique le permet.

Votre collection complète est :

- 🗂️ WEB-01 / 🧱 WEB-02;
- ✍️ WEB-03 / 🔗 WEB-04;
- 🔌 WEB-05 / 🎯 WEB-06;
- 🎨 WEB-07 / 📐 WEB-08.

Une reprise ne doit pas empêcher le groupe de commencer JavaScript à la rencontre 6.

:::tip Collection complète
Quand les huit compétences sont **Validées**, vos huit badges HTML/CSS sont acquis. L'objectif n'est pas d'avoir le site le plus complexe, mais de pouvoir expliquer et modifier ce que vous avez construit.
:::

:::note Pour aller plus loin — non évalué
Si votre site fonctionne bien et que vos validations sont prêtes, vous pouvez explorer une amélioration facultative, par exemple :

```css
flex-wrap: wrap;
```

Vous pouvez aussi lire sur Grid, le positionnement ou les transitions, mais ces notions ne font pas partie du noyau évalué des rencontres 1 à 5.
:::

## Après cette étape

Le noyau HTML/CSS des rencontres 1 à 5 est terminé.

À la rencontre 6, le cours commence **JavaScript**. Vous continuerez à utiliser HTML et CSS, mais aucune nouvelle notion HTML/CSS essentielle ne devrait être nécessaire pour suivre la progression.