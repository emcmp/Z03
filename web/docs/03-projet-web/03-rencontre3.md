---
title: Étape 3 - Créer une identité visuelle partagée
description: Relier les trois pages à une feuille CSS externe et créer des styles adaptés au thème du site.
sidebar_position: 4
---

# Projet Web — Étape 3

<ProjectStepHero step={3} />

## Mission

Ajoutez une seule feuille CSS externe à votre site de trois pages, puis créez une identité visuelle cohérente avec votre thème.

Avant de commencer :

- consultez le **[cours de la rencontre 3](../01-cours/03-rencontre3.md)**;
- faites l'**[exercice guidé — Première feuille CSS](../01-cours/03-rencontre3-exercice-guide.md)**.

## Structure minimale

Votre projet devient :

```text
mon-site/
├── index.html
├── css/
│   └── styles.css
├── images/
│   └── ...
└── pages/
    ├── sous-theme-1.html
    └── sous-theme-2.html
```

Créez `css/styles.css`. Les trois pages doivent charger ce même fichier.

## 1. Relier les trois pages

Ajoutez un `<link>` dans le `<head>` de chaque document.

Le cours explique les deux chemins nécessaires :

- depuis `index.html`;
- depuis une page située sous `pages/`.

Votre première vérification consiste à modifier une règle générale et à confirmer que **les trois pages** changent.

## 2. Définir les styles généraux

Votre feuille doit au minimum contenir des règles générales pour :

- la typographie du `body`;
- la couleur du texte ou de l'arrière-plan général;
- l'apparence des titres principaux;
- l'apparence des liens ou de la navigation.

Choisissez des valeurs adaptées à votre sujet plutôt que de conserver automatiquement les couleurs de l'exercice guidé.

## 3. Créer deux classes utiles

Créez au moins **deux classes nommées selon leur rôle**.

Exemples de rôles :

```text
introduction
mise-en-valeur
fiche
information-importante
citation
```

Au moins une de ces classes doit être réutilisée sur plusieurs éléments ou plusieurs pages.

:::warning Noms de classes
Évitez un nom qui décrit seulement une couleur, comme `texte-rouge`.

Un nom comme `information-importante` reste pertinent même si vous changez plus tard la couleur.
:::

## 4. Construire une identité visuelle simple

Votre site doit montrer au moins trois décisions visuelles que vous comprenez, par exemple :

- une famille de caractères générale;
- une couleur principale pour les titres;
- une couleur ou un arrière-plan pour un type de contenu;
- une bordure simple;
- un alignement de texte choisi volontairement;
- une apparence cohérente pour les liens.

Vous n'avez pas à utiliser toutes les propriétés du cours.

:::info L'objectif n'est pas de décorer au hasard
Vous devez pouvoir retrouver la règle qui produit chaque changement important et expliquer pourquoi vous l'avez choisie.
:::

## Décisions à prendre

- Quelle ambiance visuelle correspond au thème?
- Quelles règles doivent s'appliquer partout?
- Quel contenu joue un rôle spécial et mérite une classe?
- Une classe peut-elle être réutilisée au lieu de créer une règle différente pour chaque page?
- Les trois pages ressemblent-elles au même site?

## Tests à effectuer

- [ ] `styles.css` existe dans `css/`.
- [ ] `index.html` charge la feuille avec le bon chemin.
- [ ] Les deux pages sous `pages/` chargent la même feuille.
- [ ] Une modification générale apparaît sur les trois pages.
- [ ] La feuille utilise au moins un sélecteur d'élément.
- [ ] La feuille contient au moins deux classes utiles.
- [ ] Au moins une classe est réutilisée.
- [ ] Les noms des classes correspondent exactement dans HTML et CSS.
- [ ] Les couleurs et la typographie restent lisibles.
- [ ] Le contenu et la navigation fonctionnent toujours.

## Validations disponibles

Vous pouvez terminer la Validation B si nécessaire :

- ✍️ **WEB-03**;
- 🔗 **WEB-04**.

Vous pouvez aussi commencer la Validation C :

- 🔌 **WEB-05 — Associer correctement une feuille CSS externe**;
- 🎯 **WEB-06 — Cibler les éléments avec des sélecteurs appropriés**.

:::note Pour aller plus loin — non évalué
Vous pouvez créer une troisième classe utile ou expérimenter avec une autre combinaison de couleurs.

N'utilisez pas encore Flexbox, Grid ou le positionnement comme exigences de votre projet.
:::

## Prochaine étape

À la rencontre 4, vous conserverez cette feuille et analyserez les vrais blocs de votre site pour corriger les espaces intérieurs et extérieurs.
