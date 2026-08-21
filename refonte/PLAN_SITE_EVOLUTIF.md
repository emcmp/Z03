# Plan directeur — Projet Web évolutif des rencontres 1 à 5

**Mise à jour : 2026-08-21**  
**Statut : référence courante**

Ce document définit le plan haut niveau du Projet Web construit pendant les cinq premières rencontres de Z03.

Il doit rester cohérent avec :

- `COMPETENCES_HTML_CSS.md`;
- `EVALUATION.md`;
- `MODELE_EDITORIAL_CONTENU.md`;
- `PLAN_EPURATION_REPETITIONS_R1_R5.md`;
- les pages étudiantes sous `web/docs/03-projet-web/`.

# Intention pédagogique

L'étudiant ne réalise pas cinq exercices indépendants. Il construit un seul site et le transforme progressivement :

```text
R1  planifier et créer l'accueil
 ↓
R2  ajouter les pages, les images et la navigation
 ↓
R3  créer une identité visuelle avec une feuille CSS partagée
 ↓
R4  corriger les blocs et les espacements
 ↓
R5  intégrer Flexbox, personnaliser et finaliser
```

Le Projet Web sert de :

- terrain de pratique;
- fil conducteur;
- support aux validations techniques;
- occasion de produire un travail personnel;
- contexte pour apprendre les fichiers, les chemins, HTML et CSS.

# Mandat final

Le site porte sur un thème principal qui se divise naturellement en au moins deux pages de sujet.

## Structure minimale

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

Le projet possède donc au minimum :

- une page d'accueil;
- deux pages de sujet distinctes;
- une page À propos;
- quatre documents HTML complets;
- une navigation vers les quatre pages depuis chacune d'elles;
- une feuille CSS externe partagée;
- du contenu original;
- au moins deux images locales avec `alt`;
- une application du modèle en boîte;
- un usage simple de Flexbox.

L'étudiant peut ajouter plus de deux pages de sujet.

# Galerie de thèmes

Les pages étudiantes montrent plusieurs possibilités avec des icônes afin d'éviter de donner l'impression qu'un seul type de projet est attendu :

- 🏒 sports;
- 🎬 films et séries;
- 🎮 jeux vidéo;
- 🎵 musique;
- 🍳 cuisine;
- 🐾 animaux et nature;
- ✈️ voyage et lieux;
- 💻 technologie;
- 📚 livres, bandes dessinées et mangas;
- 🎨 portfolio créatif;
- 🚗 véhicules;
- 🏢 entreprise ou service fictif.

La qualité intrinsèque du sujet ne détermine pas la note. Ce qui compte est la façon dont il permet de construire un contenu personnel, cohérent et suffisamment riche.

# Page À propos

La page `pages/apropos.html` est obligatoire.

## Site personnel ou informatif

Elle peut présenter :

- un prénom ou un pseudonyme;
- un programme ou domaine d'études;
- des intérêts et passe-temps;
- la raison du choix du thème;
- l'intention du site.

## Entreprise ou organisation fictive

Elle peut présenter :

- une description;
- une mission;
- des services ou activités;
- une équipe fictive;
- une adresse et des coordonnées fictives.

Aucun renseignement personnel sensible ne doit être demandé ou publié.

# Progression par rencontre

## Rencontre 1 — Planifier et créer l'accueil

L'étudiant :

1. choisit un thème;
2. planifie deux pages de sujet minimum;
3. planifie la page À propos;
4. crée le dossier du projet et `index.html`;
5. construit un accueil avec une introduction, deux sections de sujet et une liste pertinente.

Aucune validation principale n'est prévue, mais WEB-01 à WEB-03 sont préparées.

## Rencontre 2 — Construire le site de quatre pages

L'étudiant :

1. crée les deux pages de sujet;
2. crée `pages/apropos.html`;
3. ajoute au moins deux images locales;
4. ajoute `alt` à chaque `<img>`;
5. construit une navigation complète vers les quatre pages;
6. teste les chemins depuis la racine et depuis `pages/`.

Validation A prioritaire; Validation B peut commencer.

## Rencontre 3 — Créer l'identité visuelle

L'étudiant :

1. crée `css/styles.css`;
2. relie les quatre pages à cette feuille;
3. définit des styles généraux;
4. crée au moins deux classes utiles;
5. réutilise au moins une classe;
6. adapte les choix visuels à son thème et à sa page À propos.

Fin possible de B; début de C.

## Rencontre 4 — Auditer les blocs et les espacements

L'étudiant :

1. parcourt les quatre pages;
2. repère des blocs comparables;
3. réutilise une classe;
4. utilise `padding`, `border` et `margin` volontairement;
5. améliore la cohérence sans recopier la carte de l'exercice guidé.

Poursuite de C; début de D.

## Rencontre 5 — Intégrer Flexbox et finaliser

L'étudiant :

1. applique `display: flex` et `gap` à un parent pertinent;
2. identifie le parent et ses enfants directs;
3. vérifie HTML, chemins, navigation, images, CSS et espacements;
4. relit les quatre pages;
5. améliore le contenu, la cohérence et la finition;
6. prépare l'appréciation de personnalisation.

Finalisation de D, reprises et appréciation de la personnalisation.

# Modèle d'évaluation

Le bloc HTML/CSS vaut **30 % de la note finale**.

```text
80 % du bloc → huit compétences techniques WEB-01 à WEB-08
20 % du bloc → personnalisation et appropriation du projet
```

La personnalisation n'est pas une neuvième compétence technique.

Elle est appréciée sur 20 points :

- contenu original : 5;
- cohérence du thème : 5;
- décisions personnelles : 5;
- finition et initiative : 5.

L'appréciation porte sur le résultat observable et non sur le nombre d'heures supposé, le talent graphique ou l'utilisation de CSS avancé.

# Règles éditoriales

- Le cours explique la notion.
- L'exercice guidé fait pratiquer une structure imposée.
- Le Projet Web demande d'adapter, de décider et d'expliquer.
- L'aide-mémoire fournit seulement la syntaxe et le dépannage.

Le Projet Web ne doit pas répéter intégralement le cours ou l'exercice guidé.

# Notions facultatives

Les éléments suivants ne sont pas nécessaires pour obtenir la pleine maîtrise technique :

- `background-image` dans le Projet Web;
- `border-radius`;
- `box-sizing`;
- `flex-wrap`;
- Flexbox avancé;
- Grid;
- positionnement;
- transitions et animations.

Ils peuvent enrichir un projet lorsqu'ils sont compris, mais leur absence ne réduit pas automatiquement la note de personnalisation.
