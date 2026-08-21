---
title: Étape 2 - Construire votre site de trois pages
description: Créer deux pages secondaires, ajouter des images locales et relier les trois pages avec des chemins relatifs.
sidebar_position: 3
---

# Projet Web — Étape 2

<ProjectStepHero step={2} />

## Mission

Transformez votre page d'accueil en un site composé de **trois pages minimum** : une page générale et deux pages consacrées à des sous-thèmes différents.

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
    └── sous-theme-2.html
```

Adaptez les noms des fichiers et des images à votre sujet.

:::info Pourquoi trois pages?
L'exercice guidé utilise seulement deux pages pour isoler le fonctionnement de `../`.

Votre projet doit aller plus loin : les deux pages secondaires doivent présenter deux sous-thèmes réels et différents.
:::

## 1. Créer les deux pages secondaires

Chaque page secondaire doit être un document HTML complet.

Chaque page doit au minimum contenir :

- un `<title>` propre à la page;
- un `<h1>` qui identifie son sous-thème;
- une courte introduction;
- au moins une section supplémentaire avec un titre;
- un paragraphe ou une liste qui apporte une information différente des autres pages.

Ne dupliquez pas exactement le même texte dans les deux pages.

## 2. Ajouter les images locales

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

## 3. Construire une navigation complète

Ajoutez la navigation principale dans **les trois pages**.

Depuis chaque page, une personne doit pouvoir atteindre :

- l'accueil;
- le premier sous-thème;
- le deuxième sous-thème.

Les textes des liens peuvent rester identiques, mais les chemins `href` doivent être adaptés à l'emplacement du fichier actuel.

:::warning Ne copiez pas les mêmes chemins partout
La navigation écrite dans `index.html` ne peut pas être copiée telle quelle dans une page sous `pages/`.

Avant d'écrire chaque chemin, demandez-vous : **dans quel fichier suis-je maintenant?**
:::

## Décisions à prendre

- Quels noms de fichiers décrivent clairement vos deux sous-thèmes?
- Quelle image apporte une information utile à chaque partie du site?
- Quel texte de lien sera clair pour une personne qui ne connaît pas votre projet?
- Le contenu des trois pages est-il suffisamment différent pour justifier leur existence?

## Tests à effectuer

Testez les trois pages comme un visiteur :

1. ouvrez `index.html`;
2. vérifiez son image;
3. ouvrez le premier sous-thème;
4. vérifiez son contenu et son image;
5. passez au deuxième sous-thème;
6. revenez à l'accueil;
7. recommencez le trajet depuis chacune des pages.

Avant la validation :

- [ ] `index.html` se trouve à la racine.
- [ ] Deux pages secondaires se trouvent dans `pages/`.
- [ ] Les trois pages possèdent une structure HTML complète.
- [ ] Les trois pages contiennent du contenu réel et différent.
- [ ] Au moins deux images locales se trouvent dans `images/`.
- [ ] Chaque `<img>` possède un attribut `alt`.
- [ ] Une image est chargée depuis la racine et une autre depuis `pages/`.
- [ ] La navigation possède trois destinations sur chaque page.
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

:::note Pour aller plus loin — non évalué
Vous pouvez :

- ajouter une troisième page secondaire;
- ajouter d'autres images locales;
- créer un lien vers un site externe pertinent;
- ajouter un lien vers une section avec `id` et `#`.

Ne commencez pas encore CSS : la feuille externe sera introduite à la rencontre 3.
:::

## Prochaine étape

À la rencontre 3, les trois pages partageront une seule feuille `css/styles.css`.
