---
title: Projet Web - Présentation
description: Comprendre le projet Web évolutif, ses quatre pages minimales, sa personnalisation et les grandes étapes à venir.
sidebar_position: 1
---

# Projet Web - Présentation

Pendant les rencontres 1 à 5, vous construirez **un seul site Web personnel** et vous le ferez évoluer à mesure que vous apprendrez HTML et CSS.

<TopicBadges topics={["html", "css", "validation"]} />

<KeyPoint type="method" title="Un thème, quatre pages minimum, cinq évolutions">
Votre site présente un thème principal, développe au moins deux sous-thèmes dans des pages distinctes et contient une page **À propos**. Chaque rencontre ajoute une nouvelle capacité au même projet.
</KeyPoint>

## Le mandat

Choisissez un thème qui peut être divisé naturellement en plusieurs parties.

| Icône | Thème principal | Deux pages de sujet possibles | Angle possible pour la page À propos |
| --- | --- | --- | --- |
| 🏒 | une équipe ou une ligue sportive | deux joueurs; deux équipes; deux saisons | présenter l'équipe fictive, l'organisation ou votre intérêt pour ce sport |
| 🎬 | une saga de films ou une série | deux films; deux personnages; deux saisons | expliquer pourquoi vous avez choisi cet univers |
| 🎮 | un univers de jeux vidéo | deux jeux; deux personnages; deux studios | présenter vos intérêts comme joueur ou créateur du site |
| 🎵 | un artiste ou un genre musical | deux albums; deux artistes; deux périodes | parler de vos goûts musicaux ou présenter un groupe fictif |
| 🍳 | une collection de recettes | deux recettes; deux catégories de plats | présenter le projet culinaire ou une entreprise fictive |
| 🐾 | les animaux ou la nature | deux espèces; deux habitats; deux phénomènes | expliquer votre intérêt pour le sujet ou présenter un organisme fictif |
| ✈️ | un lieu, une région ou le voyage | deux destinations; deux attractions; deux itinéraires | présenter votre expérience, vos intérêts ou une agence fictive |
| 💻 | une technologie | deux produits; deux concepts; deux applications | présenter votre parcours, vos études ou une entreprise technologique fictive |
| 📚 | des livres, bandes dessinées ou mangas | deux œuvres; deux personnages; deux auteurs | expliquer votre rapport à la lecture ou présenter une maison d'édition fictive |
| 🎨 | un portfolio créatif | deux projets; deux techniques; deux collections | vous présenter, parler de vos intérêts et de votre démarche |
| 🚗 | les véhicules ou le transport | deux modèles; deux marques; deux technologies | présenter votre intérêt ou un concessionnaire fictif |
| 🏢 | une entreprise ou un service fictif | deux produits; deux services; deux clientèles | décrire l'entreprise, sa mission, son équipe et ses coordonnées fictives |

Votre sujet peut être différent. Il doit simplement vous permettre de produire du **contenu réel, distinct et organisé**.

:::warning Le projet n'est pas une copie de l'exercice guidé
Les exercices guidés utilisent des thèmes et des fichiers communs pour apprendre une méthode.

Votre Projet Web doit utiliser votre propre thème, vos propres textes, vos propres noms de pages, vos propres images et vos propres décisions visuelles.
:::

## La page À propos

La page `pages/apropos.html` donne une dimension plus personnelle au site.

### Site personnel, culturel ou informatif

Vous pouvez notamment présenter :

- votre prénom ou un pseudonyme;
- votre programme ou domaine d'études;
- vos intérêts et vos passe-temps;
- ce qui vous a donné envie de choisir ce thème;
- ce que vous aimeriez faire découvrir aux visiteurs.

### Entreprise ou organisation fictive

Vous pouvez notamment présenter :

- le nom et la description de l'organisation;
- sa mission;
- ses services ou ses activités;
- son équipe fictive;
- une adresse, un courriel ou des coordonnées **fictives**.

:::danger Protégez vos renseignements personnels
Ne publiez pas votre adresse personnelle, votre numéro de téléphone, votre horaire précis ou d'autres renseignements sensibles. Utilisez des renseignements fictifs lorsque le contexte demande des coordonnées.
:::

## Minimum attendu à la fin de la rencontre 5

```text
mon-site/
├── index.html
├── css/
│   └── styles.css
├── images/
│   └── au moins deux images locales
└── pages/
    ├── sujet-1.html
    ├── sujet-2.html
    └── apropos.html
```

Les noms `sujet-1.html` et `sujet-2.html` sont des exemples. Utilisez des noms qui décrivent réellement vos sous-thèmes. Vous pouvez créer **plus de deux pages de sujet** si votre thème s'y prête.

Le site final doit posséder :

- **quatre pages HTML minimum** : une page d'accueil, deux pages de sujet et une page À propos;
- une navigation permettant d'atteindre les quatre pages depuis chaque page;
- du contenu différent et pertinent dans chaque page;
- au moins deux images locales;
- un attribut `alt` sur chaque élément `<img>`;
- une feuille CSS externe partagée par toutes les pages;
- des sélecteurs d'élément et des classes réutilisables;
- au moins un `id` unique ciblé par une règle `#id`;
- une utilisation comprise de `padding`, `border` et `margin`;
- au moins une disposition simple avec `display: flex` et `gap`.

:::info Minimum du projet et validation des compétences
Ces exigences rendent le projet suffisamment riche pour montrer vos apprentissages. Elles ne valident pas automatiquement une compétence : vous devrez aussi être capable d'expliquer votre code et d'effectuer une petite modification.
:::

## Votre parcours en cinq étapes

<ProjectJourney />

- **Rencontre 1** — choisir le thème, planifier deux pages de sujet et la page À propos, puis construire l'accueil;
- **Rencontre 2** — créer les trois pages secondaires, ajouter les images et construire la navigation;
- **Rencontre 3** — relier toutes les pages à une feuille CSS, utiliser les trois types de sélecteurs attendus et créer une identité visuelle;
- **Rencontre 4** — analyser les vrais blocs du site et corriger les espacements;
- **Rencontre 5** — utiliser Flexbox dans un besoin concret, personnaliser, corriger et finaliser.

## Évaluation

Le bloc HTML/CSS représente **30 % de la note finale du cours**.

- les **huit compétences techniques** représentent ensemble **80 % du bloc HTML/CSS**;
- la dimension **Personnalisation et appropriation du projet** représente **20 % du bloc HTML/CSS**.

Cela correspond à **24 % de la note finale** pour les compétences techniques et à **6 % de la note finale** pour la personnalisation.

La personnalisation n'est pas un neuvième badge technique. Elle permet de reconnaître la qualité du contenu original, la cohérence du thème, les décisions personnelles et l'attention portée à la finition.

**🗂️ 🧱 ✍️ 🔗 🔌 🎯 🎨 📐**

Consultez **[Projet Web — Évaluation](./00-evaluation.md)** pour voir les compétences, la grille de personnalisation, les minimums, le calendrier et les checklists.

## Comment travailler sur le projet

À chaque rencontre :

1. reprenez le même dossier;
2. lisez la mission de l'étape;
3. prenez les décisions demandées;
4. modifiez une petite chose à la fois;
5. enregistrez et testez dans le navigateur;
6. corrigez avant d'ajouter de la complexité;
7. préparez-vous à expliquer ce que vous avez fait.

<KeyPoint type="test" title="Le navigateur est votre tableau de bord">
Un site simple, personnel et compris vaut davantage qu'un site complexe composé de code copié.
</KeyPoint>

## Commencer

1. **[Exercice guidé — Construire une première page HTML](../01-cours/01-rencontre1-exercice-guide.md)**
2. **[Projet Web — Étape 1 : définir votre thème et votre page d'accueil](./01-rencontre1.md)**
