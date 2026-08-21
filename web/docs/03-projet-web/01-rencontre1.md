---
title: Étape 1 - Définir votre thème et vos quatre pages
description: Choisir un thème principal, planifier deux pages de sujet et une page À propos, puis construire l'accueil.
sidebar_position: 2
---

# Projet Web — Étape 1

<ProjectStepHero step={1} />

## Mission

Choisissez le thème principal de votre site, planifiez au moins **deux pages de sujet distinctes** et une page **À propos**, puis construisez une première page d'accueil qui présente clairement l'ensemble.

Avant de commencer :

- faites l'**[exercice guidé sur la première page HTML](../01-cours/01-rencontre1-exercice-guide.md)**;
- consultez la galerie d'idées dans la **[présentation du Projet Web](./00-presentation.md)**.

## 1. Choisir un thème qui peut devenir un site

Votre sujet doit pouvoir être développé dans plusieurs pages.

Le minimum final sera :

```text
Accueil
├── Sujet 1
├── Sujet 2
└── À propos
```

Choisissez maintenant :

- le thème principal;
- le nom provisoire du site;
- au moins deux sous-thèmes qui deviendront des pages de sujet;
- l'angle de votre page À propos.

Vous pourrez ajouter une troisième page de sujet ou davantage si votre thème s'y prête.

:::warning Contenu personnel
Le thème, les textes et les exemples de l'exercice guidé servent seulement à pratiquer. Votre projet doit présenter un autre sujet et un autre contenu.
:::

## 2. Planifier les quatre pages

Avant de coder, complétez mentalement ou sur papier ce plan :

| Page | Rôle | Contenu prévu |
| --- | --- | --- |
| `index.html` | présenter le thème général | introduction et aperçu des pages de sujet |
| page de sujet 1 | développer un premier aspect du thème | informations propres à ce sujet |
| page de sujet 2 | développer un deuxième aspect du thème | informations différentes du premier |
| `pages/apropos.html` | présenter la personne, l'entreprise ou l'organisation derrière le site | parcours, intérêts, mission ou coordonnées fictives |

Vous créerez les trois pages secondaires à la rencontre 2. Aujourd'hui, chacune doit déjà avoir un but clair.

## 3. Définir l'angle de la page À propos

### Pour un site personnel ou informatif

Planifiez quelques informations que vous êtes à l'aise de partager, par exemple :

- votre prénom ou un pseudonyme;
- votre domaine d'études;
- vos intérêts et vos passe-temps;
- la raison du choix du thème;
- ce que vous voulez faire découvrir.

### Pour une entreprise ou une organisation fictive

Planifiez par exemple :

- une description;
- une mission;
- des services ou activités;
- une équipe fictive;
- une adresse ou des coordonnées fictives.

:::danger Renseignements personnels
Ne prévoyez pas publier votre adresse personnelle, votre numéro de téléphone, votre horaire précis ou d'autres renseignements sensibles.
:::

## 4. Créer le projet

Créez un dossier pour votre site dans votre dossier Z03, ouvrez **le dossier complet** dans VS Code et créez `index.html`.

Utilisez la structure HTML complète vue dans le **[cours de la rencontre 1](../01-cours/01-rencontre1.md)** et dans l'exercice guidé. Ne recopiez pas ici les textes de l'exercice.

## Minimum attendu dans `index.html`

Votre page d'accueil doit contenir :

- un `<title>` adapté au thème;
- un `<h1>` qui nomme clairement le site;
- une introduction d'au moins deux courts paragraphes;
- une section avec un `<h2>` pour présenter le premier sujet;
- une autre section avec un `<h2>` pour présenter le deuxième sujet;
- au moins une liste utilisée dans un contexte pertinent;
- du contenu réel, et non du texte de remplissage.

Vous pouvez utiliser `<strong>` ou `<em>` lorsqu'ils apportent un sens au contenu.

## Décisions à prendre

- Quel est le nom du site?
- À qui s'adresse-t-il?
- Que doit comprendre une personne en lisant la page d'accueil?
- Pourquoi vos deux sujets méritent-ils chacun leur propre page?
- Que racontera la page À propos?
- Quels noms de fichiers seraient courts, descriptifs, sans espace et sans accent?

## Tests à effectuer

- [ ] Le bon dossier est ouvert dans VS Code.
- [ ] Le fichier se nomme réellement `index.html`.
- [ ] La page s'ouvre dans le navigateur.
- [ ] Le `<title>` et le `<h1>` correspondent au thème.
- [ ] Les deux sujets sont annoncés clairement.
- [ ] L'angle de la page À propos est planifié.
- [ ] Les balises sont correctement imbriquées.
- [ ] Le contenu est différent de celui de l'exercice guidé.
- [ ] Le document a été vérifié avec le validateur W3C avec de l'aide au besoin.

## Compétences préparées

Il n'y a aucune validation sommative à la rencontre 1. Cette étape prépare surtout :

- 🗂️ **WEB-01 — Organiser un projet Web et utiliser les chemins**;
- 🧱 **WEB-02 — Construire une page HTML correctement structurée**;
- ✍️ **WEB-03 — Structurer et enrichir le contenu HTML**.

Elle commence aussi la dimension **Personnalisation et appropriation du projet** par le choix du thème et la planification du contenu.

:::note Pour aller plus loin — non évalué séparément
Planifiez une troisième page de sujet ou une autre section originale qui pourrait enrichir le site plus tard.

Ne commencez pas encore CSS ou une mise en page complexe.
:::

## Prochaine étape

À la rencontre 2, vous créerez les deux pages de sujet et la page À propos, ajouterez des images locales et construirez une navigation entre les quatre pages.
