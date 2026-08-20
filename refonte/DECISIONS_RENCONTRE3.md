# Décisions de conception — Rencontre 3

**Date : 2026-08-19**  
**Statut : R3-01 à R3-05 terminés; rencontre prête à réviser**

**Plan maître : `PLAN_IMPLEMENTATION_RENCONTRES_1_A_5.md`**

Ce document consigne le résultat de **R3-01 — Délimiter le contenu de cours** avant la rédaction de la rencontre 3. Il permet de reprendre le travail sans redécider la portée pédagogique si l'implémentation est interrompue.

## Intention de la rencontre

La rencontre 3 marque le passage de HTML à CSS. L'étudiant ne doit pas apprendre « tout CSS » : il doit comprendre comment **une feuille CSS externe agit sur plusieurs pages HTML**, comment la relier avec un chemin relatif et comment cibler volontairement des éléments avec des sélecteurs simples.

La rencontre doit laisser un temps réel pour :

1. une courte présentation et démonstration;
2. un exercice guidé distinct;
3. l'étape 3 du même Projet Web commencé aux rencontres 1 et 2;
4. le début de la Validation C lorsque l'étudiant est prêt.

## Noyau obligatoire de R3

### WEB-05 — Feuille CSS externe

À maîtriser :

- rôle de CSS par rapport à HTML;
- propriété, valeur, déclaration et règle CSS;
- création du dossier `css` et du fichier `css/styles.css`;
- élément `<link rel="stylesheet" ...>` dans `<head>`;
- chemin depuis `index.html` : `css/styles.css`;
- chemin depuis une page sous `pages/` : `../css/styles.css`;
- diagnostic simple d'une page non stylée en vérifiant le chemin, le nom du fichier et l'enregistrement.

### WEB-06 — Sélecteurs

À maîtriser :

- sélecteur d'élément (`body`, `h1`, `p`, etc.);
- classe CSS avec `.nom-classe` et attribut HTML `class="nom-classe"`;
- réutilisation d'une même classe lorsque plusieurs éléments ont le même rôle visuel;
- compréhension de `id` / `#id`, sans demander son utilisation comme exigence indépendante;
- cascade au niveau minimal nécessaire au débogage : une classe peut remplacer une règle plus générale visant le type d'élément; à précision comparable, l'ordre peut influencer le résultat.

La rencontre ne doit pas devenir un cours détaillé sur la spécificité CSS.

## Propriétés visuelles à montrer

Le cours présente un petit vocabulaire de propriétés permettant de voir immédiatement l'effet de CSS :

- `color`;
- `background-color`;
- `font-family`;
- `font-size`;
- `font-weight` ou `font-style` dans un exemple simple;
- `text-align`;
- `border`.

Les couleurs peuvent être montrées avec des noms et des codes hexadécimaux. `rem` peut être rencontré pour `font-size`, avec une explication d'une phrase seulement; aucune théorie détaillée des unités n'est nécessaire en R3.

La validation ne doit jamais devenir un décompte du nombre de couleurs, polices, classes ou bordures utilisées.

## Pourquoi une feuille CSS externe?

Cette question doit être explicitement répondue dans le cours :

- HTML conserve la structure et le contenu;
- CSS conserve la présentation;
- plusieurs pages peuvent charger la même feuille;
- une modification dans `styles.css` peut donc harmoniser plusieurs pages à la fois;
- le projet devient plus facile à maintenir que si les styles sont répétés dans chaque page.

Le CSS intraligne (`style="..."`) et l'élément `<style>` sont seulement présentés comme **formes que l'étudiant peut rencontrer**. Ils ne sont pas pratiqués dans le Projet Web et ne doivent pas occuper une longue section.

## Contenu volontairement reporté

### Vers R4

- modèle en boîte;
- `padding` et `margin`;
- dimensions simples (`width`, `height`) lorsqu'elles deviennent utiles;
- relation contenu / padding / border / margin;
- utilisation de conteneurs comme blocs à espacer;
- introduction formelle de `<div>` comme conteneur général si nécessaire.

Une bordure peut être utilisée visuellement en R3 sans expliquer encore tout le modèle en boîte.

### Vers R5

- `display: flex`;
- `gap`;
- navigation horizontale avec Flexbox;
- `justify-content` et `align-items` dans des cas simples.

### Hors noyau R3

- théorie détaillée de la spécificité;
- sélecteurs combinés ou avancés;
- pseudo-classes comme exigence;
- Grid;
- positionnement;
- transitions et animations;
- CSS variables;
- théorie détaillée `block` / `inline` / `inline-block`.

## Regroupement HTML dans R3

R3 réutilise principalement les éléments HTML déjà présents (`header`, `nav`, `main`, paragraphes, titres, etc.) et leur applique des classes. Il n'est pas nécessaire d'introduire en même temps une longue nouvelle section HTML sur `<div>` et `<span>`.

- `<div>` pourra être introduit plus naturellement en R4 lorsqu'on travaillera des blocs et le modèle en boîte;
- `<span>` reste un outil ponctuel / facultatif et n'est pas requis dans l'exercice guidé ni dans l'étape 3 du Projet Web.

## Exercice guidé

Implémenté dans `web/docs/01-cours/03-rencontre3-exercice-guide.md` autour de :

```text
exercice-rencontre3/
├── index.html
├── css/
│   └── styles.css
└── pages/
    └── infos.html
```

L'exercice fait pratiquer :

- deux chemins différents vers la même feuille CSS;
- un sélecteur d'élément;
- une classe réutilisable;
- quelques propriétés visuelles;
- un conflit simple règle générale / classe;
- un diagnostic volontaire d'une page non stylée à cause d'un mauvais chemin.

Le HTML de départ reste simple afin que l'effort cognitif porte sur CSS.

## Projet Web — Étape 3

Implémenté dans `web/docs/03-projet-web/03-rencontre3.md`.

Le site de l'étudiant devient :

```text
mon-site/
├── index.html
├── css/
│   └── styles.css
├── images/
│   └── ...
└── pages/
    ├── sujet.html
    └── apropos.html
```

L'étudiant :

- conserve exactement le même site;
- crée `css/styles.css`;
- relie toutes les pages avec le bon chemin;
- définit quelques styles généraux cohérents;
- choisit un rôle visuel qui mérite une classe réutilisable, sans imposer un nombre mécanique de classes;
- vérifie que la feuille agit sur la page racine et les pages sous `pages/`;
- garde les espacements avancés et la disposition pour R4 et R5.

La **Validation C** peut commencer ici :

- WEB-05 — Associer correctement une feuille CSS externe;
- WEB-06 — Cibler les éléments avec des sélecteurs appropriés.

WEB-07 est pratiquée visuellement, mais la Validation D reste prévue surtout pour R4–R5.

## Ressources

Aucune nouvelle ressource n'est bloquante pour R3. La page canonique réutilise quelques captures déjà présentes sous `web/static/img/cours-introduction-css/`.

## Implémentation réalisée

Les éléments suivants sont maintenant présents sur `main` :

- `web/docs/01-cours/03-rencontre3.md` — cours canonique complet;
- `web/docs/01-cours/03-rencontre3-exercice-guide.md` — exercice guidé;
- `web/docs/03-projet-web/03-rencontre3.md` — Projet Web, étape 3;
- `web/sidebars.js` — rencontre 3 structurée en Cours / Exercice guidé / Projet Web.

## Validation technique réalisée

Validation locale réussie le 2026-08-19 :

- `npm run build` réussit après nettoyage du cache généré Docusaurus;
- `git diff --check` réussit;
- les IDs de `web/sidebars.js` et les liens Cours → Exercice guidé → Projet Web sont résolus;
- les six images utilisées sous `web/static/img/cours-introduction-css/` existent, sont lisibles et répondent en HTTP 200;
- les blocs de code et admonitions sont présents dans le HTML généré;
- les trois routes R3 répondent en HTTP 200 sans marqueur de page 404.

## Point de reprise

La prochaine tâche pédagogique est :

> **REV-01 — Relecture ciblée de R2**, puis **REV-02 — Lecture transversale R1 → R5**.
