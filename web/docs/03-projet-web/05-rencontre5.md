---
title: Étape 5 - Intégrer Flexbox et finaliser le site
description: Utiliser Flexbox dans un besoin concret, corriger les trois pages et terminer les validations HTML/CSS.
sidebar_position: 6
---

# Projet Web — Étape 5

<ProjectStepHero step={5} />

## Mission

Utilisez Flexbox dans **un besoin réel** de votre site, puis faites une passe finale de correction sur les trois pages avant le début de JavaScript.

Avant de commencer :

- consultez le **[cours de la rencontre 5](../01-cours/05-rencontre5.md)**;
- faites l'**[exercice guidé — Flexbox simple](../01-cours/05-rencontre5-exercice-guide.md)**.

## 1. Choisir le bon groupe à organiser

La navigation principale est le choix le plus simple :

```text
parent flex     → nav.navigation
enfants directs → les trois liens
```

Vous pouvez aussi utiliser Flexbox pour un autre groupe pertinent, par exemple deux fiches ou deux résumés comparables.

Une seule utilisation utile et comprise est suffisante.

## Minimum Flexbox

Votre projet doit contenir au moins un parent avec :

```css
display: flex;
gap: ...;
```

Vous devez pouvoir :

- identifier le parent;
- nommer ses enfants directs;
- expliquer pourquoi `display: flex` est appliqué au parent;
- modifier le `gap` et prévoir son effet.

`justify-content` ou `align-items` peuvent être ajoutés lorsqu'ils résolvent un besoin. Ils ne sont pas obligatoires simplement pour remplir la feuille CSS.

## 2. Vérifier le modèle en boîte autour du groupe

Flexbox ne remplace pas `padding`, `border` ou `margin`.

Par exemple :

- le parent peut utiliser `padding` pour créer de l'espace intérieur;
- `gap` sépare les enfants flex;
- les cartes peuvent conserver leur propre bordure et leur propre `padding`.

Assurez-vous de savoir quelle règle contrôle le groupe et quelle règle contrôle chaque élément.

## 3. Faire une passe complète de correction

### HTML et contenu

- les trois pages possèdent-elles une structure complète?
- les titres décrivent-ils réellement chaque page?
- les contenus des deux sous-thèmes sont-ils différents?
- chaque `<img>` possède-t-il un attribut `alt`?

### Chemins et navigation

- les trois destinations sont-elles accessibles depuis chaque page?
- les images apparaissent-elles depuis la racine et depuis `pages/`?
- les noms de fichiers correspondent-ils exactement?

### CSS

- les trois pages chargent-elles la même feuille?
- les classes sont-elles nommées selon leur rôle?
- une classe peut-elle remplacer deux règles dupliquées?
- les choix de typographie et de couleurs sont-ils cohérents?

### Espacements

- le `padding` est-il utilisé pour l'espace intérieur?
- le `margin` est-il utilisé pour l'espace extérieur?
- les blocs comparables ont-ils des espacements cohérents?

### Flexbox

- `display: flex` est-il appliqué au bon parent?
- les enfants directs sont-ils ceux que vous vouliez organiser?
- `gap` produit-il l'espacement désiré?

## Minimum final du Projet Web

Avant de considérer le bloc HTML/CSS terminé :

- [ ] Le site possède au moins trois pages : accueil et deux sous-thèmes.
- [ ] Le contenu est personnel et différent de l'exercice guidé.
- [ ] Les trois pages sont reliées par une navigation complète.
- [ ] Au moins deux images locales sont utilisées.
- [ ] Chaque `<img>` possède un attribut `alt`.
- [ ] Les chemins relatifs fonctionnent depuis la racine et depuis `pages/`.
- [ ] Les trois pages chargent `css/styles.css`.
- [ ] La feuille contient des sélecteurs d'élément et au moins deux classes utiles.
- [ ] Au moins une classe est réutilisée.
- [ ] Je peux expliquer une utilisation de `padding`, `border` et `margin`.
- [ ] Au moins un parent utilise `display: flex` et `gap`.
- [ ] Je peux expliquer mes principales décisions HTML et CSS.

Cette liste décrit le minimum du projet. La validation vérifie aussi votre capacité à expliquer et à modifier le code.

## Image d'arrière-plan — enrichissement facultatif

Le cours et l'exercice montrent `background-image` afin de réinvestir un chemin écrit dans CSS.

Dans votre Projet Web, vous pouvez essayer une image de fond décorative, puis la conserver ou la retirer selon votre design.

:::info Statut clair
`background-image` est **facultatif dans le Projet Web** et n'ajoute pas un critère mécanique à la Validation D.

Une image informative doit normalement rester un élément `<img>` avec un attribut `alt`.
:::

## Validation D

Cette rencontre permet de finaliser :

- 🎨 **WEB-07 — Mettre en forme une interface avec CSS**;
- 📐 **WEB-08 — Organiser l'espace et la disposition des éléments**.

Les reprises des validations précédentes restent possibles lorsque la logistique le permet.

:::note Pour aller plus loin — non évalué
Vous pouvez :

- ajouter une quatrième page;
- enrichir un sous-thème;
- expérimenter avec `flex-wrap: wrap`;
- explorer une amélioration visuelle facultative.

Grid, le positionnement et les transitions ne font pas partie du noyau évalué des rencontres 1 à 5.
:::

## Après cette étape

Le noyau HTML/CSS est terminé. À la rencontre 6, le cours commence JavaScript. Votre site pourra continuer à servir de contexte, mais aucune nouvelle notion HTML/CSS essentielle ne devrait être nécessaire.
