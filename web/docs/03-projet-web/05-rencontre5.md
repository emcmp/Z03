---
title: Étape 5 - Intégrer Flexbox et finaliser le site
description: Utiliser Flexbox dans un besoin concret, harmoniser les pages et terminer les validations HTML/CSS.
sidebar_position: 6
---

# Projet Web — Étape 5

Cette étape termine le noyau HTML/CSS du Projet Web avant le début de JavaScript.

L'objectif n'est pas d'ajouter beaucoup de nouvelles fonctionnalités. Vous allez surtout :

- utiliser **Flexbox simple** dans une situation utile;
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

## 6. Faire une passe complète sur toutes les pages

Ouvrez chaque page dans le navigateur.

Vérifiez :

### HTML et chemins

- la navigation fonctionne-t-elle partout?
- les images s'affichent-elles?
- les chemins sont-ils corrects depuis la racine et depuis `pages/`?
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

## 7. Corriger plutôt qu'ajouter

À cette étape, consacrez une partie importante du temps à la correction.

Quelques bons objectifs :

- réparer un lien qui ne fonctionne pas;
- corriger un chemin CSS;
- enlever une classe devenue inutile;
- réutiliser une classe au lieu de dupliquer une règle;
- ajuster un `padding` ou une `margin`;
- simplifier une mise en forme devenue trop compliquée;
- vérifier une page que vous aviez moins testée.

:::warning Le site n'a pas besoin d'être spectaculaire
Un petit site simple, cohérent et compris vaut beaucoup plus qu'un site rempli d'effets copiés sans comprendre leur fonctionnement.
:::

## 8. Précontrôle final HTML/CSS

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
- [ ] je peux expliquer mes principales décisions CSS.

Cette liste sert à préparer les validations. Elle ne représente pas un décompte automatique de points.

## Validation D — Mise en forme et disposition

La Validation D porte sur :

- **WEB-07 — Mettre en forme une interface avec CSS**;
- **WEB-08 — Organiser l'espace et la disposition des éléments**.

L'enseignant peut vous demander, par exemple :

- de modifier un `padding` ou une `margin` et d'expliquer votre choix;
- d'identifier les parties du modèle en boîte;
- de rendre un parent flex;
- d'ajouter ou de modifier un `gap`;
- d'expliquer quels éléments sont les enfants directs d'un conteneur flex;
- de corriger une disposition simple devant lui.

## Reprises possibles

Si une compétence précédente est encore `À revoir`, cette rencontre laisse du temps pour la représenter lorsque la logistique le permet.

Cela peut inclure :

- Validation A — WEB-01 / WEB-02;
- Validation B — WEB-03 / WEB-04;
- Validation C — WEB-05 / WEB-06;
- Validation D — WEB-07 / WEB-08.

Une reprise ne doit pas empêcher le groupe de commencer JavaScript à la rencontre 6.

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
