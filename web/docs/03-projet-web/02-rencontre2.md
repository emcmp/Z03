---
title: Étape 2 - Construire votre site de quatre pages
description: Créer deux pages de sujet et une page À propos, ajouter des images locales et relier les quatre pages.
sidebar_position: 3
---

# Projet Web — Étape 2

<ProjectStepHero step={2} />

## Mission

Transformez votre page d'accueil en un site composé de **quatre pages minimum** : une page générale, deux pages consacrées à des sujets différents et une page À propos.

Avant de modifier votre projet :

- consultez le **[cours de la rencontre 2](../01-cours/02-rencontre2.md)**;
- faites l'**[exercice guidé sur les chemins et la navigation](../01-cours/02-rencontre2-exercice-guide.md)**.

## Structure minimale

Reprenez le même projet et construisez cette organisation :

```text
mon-site/
├── index.html
├── images/
│   ├── image-1.jpg
│   └── image-2.jpg
└── pages/
    ├── sous-theme-1.html
    ├── sous-theme-2.html
    └── apropos.html
```

Adaptez les noms des pages de sujet et des images à votre thème. Le fichier `apropos.html` conserve ce nom afin que son rôle soit facile à reconnaître.

:::info Pourquoi quatre pages?
L'exercice guidé utilise seulement deux pages pour isoler le fonctionnement de `../`.

Votre projet doit aller plus loin : deux pages développent réellement le thème et la page À propos personnalise le site ou présente l'organisation fictive qui se trouve derrière.
:::

## 1. Créer les deux pages de sujet

Chaque page de sujet doit être un document HTML complet.

Chaque page doit au minimum contenir :

- un `<title>` propre à la page;
- un `<h1>` qui identifie son sujet;
- une courte introduction;
- au moins une section supplémentaire avec un titre;
- un paragraphe ou une liste qui apporte une information différente des autres pages.

Ne dupliquez pas exactement le même texte dans les deux pages.

Vous pouvez créer plus de deux pages de sujet si votre thème possède davantage de catégories pertinentes.

## 2. Créer `pages/apropos.html`

La page À propos doit également être un document HTML complet.

Elle doit contenir au minimum :

- un `<title>` et un `<h1>` adaptés;
- au moins deux courts paragraphes;
- une section supplémentaire avec un `<h2>`;
- une liste ou un petit groupe d'informations pertinent.

### Site personnel ou informatif

Présentez, selon ce que vous êtes à l'aise de partager :

- votre prénom ou un pseudonyme;
- votre domaine ou programme d'études;
- vos intérêts et vos passe-temps;
- la raison du choix du thème;
- votre intention pour le site.

### Entreprise ou organisation fictive

Présentez par exemple :

- une description;
- une mission;
- des services ou des activités;
- une équipe fictive;
- une adresse, un courriel ou des coordonnées fictives.

:::danger Protégez vos renseignements personnels
Ne publiez pas votre adresse personnelle, votre numéro de téléphone, votre horaire précis ou d'autres renseignements sensibles. Utilisez des renseignements fictifs lorsqu'une adresse ou des coordonnées améliorent le réalisme du site.
:::

## 3. Ajouter les images locales

Placez au moins **deux images** dans le dossier `images`.

Votre site doit utiliser :

- au moins une image dans `index.html`;
- au moins une image dans une page située sous `pages/`.

Cette répartition vous oblige à utiliser les deux formes de chemin :

```text
images/...
../images/...
```

:::info Accessibilité — attribut `alt` obligatoire
Chaque élément `<img>` doit contenir un attribut `alt`.

- image informative : décrivez l'information utile;
- image purement décorative : utilisez `alt=""`.

Un nom de fichier comme `image-1.jpg` n'est pas une description utile.
:::

Vous pouvez utiliser `width` et `height` lorsque vous connaissez des dimensions qui respectent les proportions. Sinon, une seule dimension suffit pour cette rencontre.

## 4. Construire une navigation complète

Ajoutez la navigation principale dans **les quatre pages**.

Depuis chaque page, une personne doit pouvoir atteindre :

- l'accueil;
- le premier sujet;
- le deuxième sujet;
- la page À propos.

Si vous avez créé d'autres pages de sujet, ajoutez-les aussi à la navigation principale ou à une navigation secondaire claire.

Les textes des liens peuvent rester identiques, mais les chemins `href` doivent être adaptés à l'emplacement du fichier actuel.

:::warning Ne copiez pas les mêmes chemins partout
La navigation écrite dans `index.html` ne peut pas être copiée telle quelle dans une page sous `pages/`.

Avant d'écrire chaque chemin, demandez-vous : **dans quel fichier suis-je maintenant?**
:::

## Décisions à prendre

- Quels noms de fichiers décrivent clairement vos deux sujets?
- Quelle image apporte une information utile à chaque partie du site?
- Quel contenu rendra la page À propos réellement personnelle ou crédible?
- Quel texte de lien sera clair pour une personne qui ne connaît pas votre projet?
- Le contenu des quatre pages est-il suffisamment différent pour justifier leur existence?

## Tests à effectuer

Testez les quatre pages comme un visiteur :

1. ouvrez `index.html`;
2. vérifiez son image;
3. ouvrez le premier sujet;
4. passez au deuxième sujet;
5. ouvrez la page À propos;
6. revenez à l'accueil;
7. recommencez le trajet depuis chacune des pages.

Avant la validation :

- [ ] `index.html` se trouve à la racine.
- [ ] Deux pages de sujet et `apropos.html` se trouvent dans `pages/`.
- [ ] Les quatre pages possèdent une structure HTML complète.
- [ ] Les quatre pages contiennent du contenu réel et différent.
- [ ] La page À propos correspond au type de site choisi.
- [ ] Au moins deux images locales se trouvent dans `images/`.
- [ ] Chaque `<img>` possède un attribut `alt`.
- [ ] Une image est chargée depuis la racine et une autre depuis `pages/`.
- [ ] La navigation possède quatre destinations sur chaque page.
- [ ] Tous les liens fonctionnent dans les deux directions.
- [ ] Les noms de fichiers et les majuscules correspondent exactement.

## Validations disponibles

### Validation A — priorité de la rencontre 2

- 🗂️ **WEB-01 — Organiser un projet Web et utiliser les chemins**;
- 🧱 **WEB-02 — Construire une page HTML correctement structurée**.

### Validation B — peut commencer aujourd'hui

- ✍️ **WEB-03 — Structurer et enrichir le contenu HTML**;
- 🔗 **WEB-04 — Relier plusieurs pages dans une navigation fonctionnelle**.

La Validation B peut se poursuivre au début de la rencontre 3. Il n'est pas nécessaire que tout le groupe la termine aujourd'hui.

:::note Pour aller plus loin — non évalué séparément
Vous pouvez :

- ajouter une troisième page de sujet;
- ajouter d'autres images locales;
- enrichir davantage la page À propos;
- créer un lien vers un site externe pertinent;
- ajouter un lien vers une section avec `id` et `#`.

Ne commencez pas encore CSS : la feuille externe sera introduite à la rencontre 3.
:::

## Prochaine étape

À la rencontre 3, les quatre pages partageront une seule feuille `css/styles.css`.
