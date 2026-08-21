---
title: Étape 5 - Intégrer Flexbox et finaliser le site
description: Utiliser Flexbox dans un besoin concret, corriger les quatre pages et préparer l'appréciation de personnalisation.
sidebar_position: 6
---

# Projet Web — Étape 5

<ProjectStepHero step={5} />

## Mission

Utilisez Flexbox dans **un besoin réel** de votre site, puis faites une passe finale de correction et de personnalisation sur les quatre pages avant le début de JavaScript.

Avant de commencer :

- consultez le **[cours de la rencontre 5](../01-cours/05-rencontre5.md)**;
- faites l'**[exercice guidé — Flexbox simple](../01-cours/05-rencontre5-exercice-guide.md)**.

## 1. Choisir le bon groupe à organiser

La navigation principale est le choix le plus simple :

```text
parent flex     → nav.navigation
enfants directs → les quatre liens minimum
```

Vous pouvez aussi utiliser Flexbox pour un autre groupe pertinent, par exemple deux fiches, deux résumés comparables ou un groupe d'informations dans la page À propos.

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

- les quatre pages possèdent-elles une structure complète?
- les titres décrivent-ils réellement chaque page?
- les contenus des deux sujets sont-ils différents?
- la page À propos contient-elle une présentation adaptée au type de site?
- chaque `<img>` possède-t-il un attribut `alt`?

### Chemins et navigation

- les quatre destinations sont-elles accessibles depuis chaque page?
- les images apparaissent-elles depuis la racine et depuis `pages/`?
- les noms de fichiers correspondent-ils exactement?

### CSS

- les quatre pages chargent-elles la même feuille?
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

## 4. Faire une passe de personnalisation

Relisez votre site comme si vous le voyiez pour la première fois.

Vérifiez :

- que les textes sont personnels et ne reprennent pas ceux de l'exercice;
- que les deux pages de sujet apportent réellement des informations différentes;
- que la page À propos vous présente ou présente l'organisation fictive de façon crédible;
- que les images ont été choisies pour votre thème;
- que les noms de fichiers, les classes et les textes des liens sont adaptés;
- que les couleurs et la présentation forment un ensemble cohérent;
- que les détails visibles ont été relus et corrigés.

:::info Personnaliser ne signifie pas ajouter des effets avancés
Un site simple peut recevoir une excellente appréciation s'il contient des choix personnels, du contenu original et une finition soignée.
:::

## Minimum final du Projet Web

Avant de considérer le bloc HTML/CSS terminé :

- [ ] Le site possède au moins quatre pages : accueil, deux pages de sujet et À propos.
- [ ] Les deux pages de sujet développent des aspects distincts du thème.
- [ ] La page À propos correspond au type de site choisi.
- [ ] Le contenu est personnel et différent de l'exercice guidé.
- [ ] Les quatre pages sont reliées par une navigation complète.
- [ ] Au moins deux images locales sont utilisées.
- [ ] Chaque `<img>` possède un attribut `alt`.
- [ ] Les chemins relatifs fonctionnent depuis la racine et depuis `pages/`.
- [ ] Les quatre pages chargent `css/styles.css`.
- [ ] La feuille contient des sélecteurs d'élément et au moins deux classes utiles.
- [ ] Au moins une classe est réutilisée.
- [ ] Je peux expliquer une utilisation de `padding`, `border` et `margin`.
- [ ] Au moins un parent utilise `display: flex` et `gap`.
- [ ] Je peux expliquer mes principales décisions HTML et CSS.
- [ ] J'ai relu la grille **Personnalisation et appropriation du projet**.

Cette liste décrit le minimum du projet. La validation technique vérifie aussi votre capacité à expliquer et à modifier le code.

## Image d'arrière-plan — enrichissement facultatif

Le cours et l'exercice montrent `background-image` afin de réinvestir un chemin écrit dans CSS.

Dans votre Projet Web, vous pouvez essayer une image de fond décorative, puis la conserver ou la retirer selon votre design.

:::info Statut clair
`background-image` est **facultatif dans le Projet Web** et n'ajoute pas un critère mécanique à la Validation D.

Une image informative doit normalement rester un élément `<img>` avec un attribut `alt`.
:::

## Validation D et appréciation finale

Cette rencontre permet de finaliser :

- 🎨 **WEB-07 — Mettre en forme une interface avec CSS**;
- 📐 **WEB-08 — Organiser l'espace et la disposition des éléments**.

Les reprises des validations précédentes restent possibles lorsque la logistique le permet.

La dimension **Personnalisation et appropriation du projet** est ensuite appréciée séparément sur 20 points. Elle représente 20 % du bloc HTML/CSS et ne constitue pas un neuvième badge technique.

:::note Pour aller plus loin — non évalué séparément
Vous pouvez :

- ajouter une troisième page de sujet ou davantage;
- enrichir la page À propos;
- approfondir le contenu d'un sujet;
- explorer une amélioration visuelle facultative.

Grid, le positionnement, les transitions et Flexbox avancé ne font pas partie du noyau évalué des rencontres 1 à 5.
:::

## Après cette étape

Le noyau HTML/CSS est terminé. À la rencontre 6, le cours commence JavaScript. Votre site pourra continuer à servir de contexte, mais aucune nouvelle notion HTML/CSS essentielle ne devrait être nécessaire.
