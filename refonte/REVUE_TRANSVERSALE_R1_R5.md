# Revue transversale — Rencontres 1 à 5

**Date : 2026-08-19**  
**Statut : première lecture pédagogique; validation technique R3–R5 encore à exécuter localement**  
**Objectif : juger le poids des rencontres avant de faire des coupes finales**

Ce document constitue une première exécution de **REV-01 / REV-02** du plan. Il ne déclenche pas encore les ajustements de portée de REV-03.

Le but est de pouvoir regarder le bloc HTML/CSS comme une progression complète plutôt que de perfectionner chaque rencontre séparément.

## Vue d'ensemble actuelle

| Rencontre | Théorie / démonstration | Exercice guidé | Projet Web | Validation | Lecture actuelle |
|---|---|---|---|---|---|
| **R1** | environnement + premiers HTML | première page HTML | Étape 1 : première page personnelle | aucune | **chargée au démarrage**, mais volontairement lente |
| **R2** | images, chemins, pages, navigation | chemins avec `../` | Étape 2 : site multipage | A + B | **rencontre la plus à risque de surcharge** |
| **R3** | feuille CSS externe, sélecteurs, classes, propriétés simples | deux pages + une feuille CSS | Étape 3 : identité visuelle | début C | **dense mais cohérente** si la présentation reste ciblée |
| **R4** | modèle en boîte, padding, border, margin | cartes / espaces | Étape 4 : blocs et espacements | fin C + début D | **poids raisonnable** |
| **R5** | Flexbox minimal | navigation + petit groupe flex | Étape 5 : intégration et correction | fin D + reprises | **doit rester la rencontre la plus aérée** |

## Estimation de déroulement sur une rencontre de 3 h

Ces durées sont des **repères d'enseignement**, pas des durées affichées aux étudiants.

### Rencontre 1

- fonctionnement / accès / démarrage du poste : 15 à 25 min selon le groupe;
- environnement de travail essentiel : 25 à 35 min;
- HTML : 40 à 50 min;
- exercice guidé : 30 à 40 min;
- Projet Web : 30 à 50 min;
- pause et transitions : 10 à 15 min.

**Constat :** R1 peut dépasser trois heures si tout le contenu de Bien débuter et du préambule est présenté comme une conférence complète. Plusieurs sections doivent plutôt servir de **référence / démonstration au moment utile**.

Le Projet Web peut être commencé sans devoir être entièrement enrichi avant la fin de la rencontre. Aucune validation n'impose de terminer vite.

### Rencontre 2

- rappel de l'arborescence et des chemins : 10 min;
- images et chemins relatifs : 20 à 25 min;
- liens et navigation multipage : 25 à 30 min;
- exercice guidé : 35 à 45 min;
- Projet Web : 55 à 75 min;
- validations A/B pendant le travail : 20 min et plus, distribuées dans la période;
- pause et transitions : 10 à 15 min.

**Constat :** c'est la rencontre la plus serrée. Le risque ne vient pas d'une seule notion, mais de l'accumulation : images + `../` + création de pages + navigation + contenu + deux moments de validation.

### Rencontre 3

- rôle de CSS / feuille externe / chemins : 25 à 30 min;
- syntaxe, sélecteurs et classes : 25 à 30 min;
- propriétés visuelles et cascade simple : 15 à 20 min;
- exercice guidé : 35 à 45 min;
- Projet Web : 50 à 65 min;
- Validation C pendant le travail : variable;
- pause et transitions : 10 à 15 min.

**Constat :** R3 est dense sur papier, mais plusieurs éléments du cours sont des **références** plutôt que des sujets qui exigent une longue explication. `id`, cascade et la liste de propriétés ne doivent pas recevoir chacun un long segment magistral.

### Rencontre 4

- modèle en boîte : 30 à 40 min;
- exercice guidé : 35 à 45 min;
- Projet Web : 60 à 75 min;
- Validation C/D pendant le travail : variable;
- pause et transitions : 10 à 15 min.

**Constat :** bonne répartition si `width`, `max-width`, `<div>` et `box-sizing` restent secondaires. Le coeur doit demeurer `padding` vs `margin`.

### Rencontre 5

- Flexbox minimal : 25 à 35 min;
- exercice guidé : 30 à 40 min;
- Projet Web / intégration / correction : 70 à 90 min;
- validations et reprises : temps restant, en parallèle du travail;
- pause et transitions : 10 à 15 min.

**Constat :** cette rencontre doit volontairement contenir peu de nouvelle matière. Il faut résister à l'envie d'ajouter Flexbox avancé, Grid ou positionnement.

# Analyse par rencontre

## R1 — Garder la lenteur volontaire

Le contenu est important parce que certains étudiants ne maîtrisent pas encore dossiers, extensions, ZIP, VS Code et cycle enregistrer/actualiser.

Le risque principal est de croire que chaque section du préambule doit être enseignée avec le même niveau de détail.

### Recommandation provisoire

Ne pas couper maintenant. Lors de l'enseignement :

- traiter Compte réseau / 2FA seulement si nécessaire au démarrage;
- démontrer les fichiers/dossiers/ZIP de façon concrète;
- utiliser les captures comme soutien, pas comme une présentation à réciter;
- protéger le temps de la première page HTML et de l'exercice guidé;
- accepter que l'Étape 1 du Projet Web soit une première version très simple.

## R2 — Principal candidat à l'allègement

Le cours et l'exercice guidé sont cohérents : l'exercice utilise une page à la racine, une page sous `pages/` et une image, ce qui suffit pour pratiquer `../`.

Le Projet Web demande actuellement davantage de production et peut faire de R2 une rencontre trop ambitieuse, surtout si l'enseignant doit aussi réaliser les Validations A/B avec plusieurs étudiants.

### Ajustement à considérer, mais pas encore appliqué

Réduire éventuellement le minimum obligatoire du Projet Web à :

```text
mon-site/
├── index.html
├── images/
│   └── ...
└── pages/
    └── sujet.html
```

Une **deuxième page secondaire** pourrait devenir une extension naturelle / Pour aller plus loin au lieu d'une attente de départ.

Une seule page dans `pages/` suffit pédagogiquement pour pratiquer :

- entrer dans un sous-dossier;
- remonter avec `../`;
- charger une image depuis deux niveaux;
- créer une navigation aller-retour;
- charger plus tard `../css/styles.css` à R3.

Cette coupe est probablement celle qui libérerait le plus de temps sans diminuer la compétence visée.

## R3 — Enseigner moins que ce que la page permet de consulter

La page étudiante contient volontairement une référence complète pour la rencontre, mais le déroulement oral doit rester plus étroit.

### Priorité en classe

1. HTML vs CSS;
2. pourquoi une feuille externe;
3. `<link>` et chemins `css/...` / `../css/...`;
4. syntaxe d'une règle;
5. sélecteur d'élément;
6. classe;
7. quelques propriétés visibles;
8. diagnostic.

`id` et cascade simple peuvent être montrés rapidement. Ils ne doivent pas devenir un cours sur la spécificité.

Aucun ajustement structurel n'est recommandé avant d'avoir essayé la rencontre ou vu le rendu complet.

## R4 — Noyau bien circonscrit

La séparation avec l'ancien chapitre est maintenant nette.

À maîtriser :

```text
contenu → padding → border → margin
```

Le reste sert de contexte.

### À surveiller

- ne pas passer trop de temps sur les dimensions;
- ne pas enseigner `box-sizing` comme nouvelle compétence;
- ne pas réintroduire `inline-block`, `overflow` ou positionnement sous prétexte qu'ils existent dans l'ancienne source.

Aucune coupe immédiate recommandée.

## R5 — Protéger le temps d'intégration

Flexbox est volontairement réduit à :

```text
parent → enfants directs
display: flex
gap
justify-content simple
align-items simple
```

Le principal danger serait d'ajouter ensuite `flex-direction`, `wrap`, `grow`, `basis`, Grid, etc.

La rencontre doit servir à finir le site et les validations, pas à ouvrir un nouveau gros chapitre.

Aucune coupe immédiate recommandée.

# Progression du Projet Web

La progression forme maintenant une chaîne claire :

```text
R1  une page HTML
 ↓
R2  fichiers, image(s), page(s), navigation
 ↓
R3  une feuille CSS partagée
 ↓
R4  espaces et modèle en boîte
 ↓
R5  disposition simple + intégration
```

Cette progression respecte le principe d'un **même site évolutif** et évite de recommencer cinq petits projets indépendants.

## Point de tension

Le saut le plus important est entre R1 et R2. R2 transforme très rapidement une page simple en site multipage avec ressources et évaluations.

La réduction possible à **une seule page secondaire obligatoire** est donc le premier ajustement à tester si le poids paraît trop élevé.

# Validations

La logique reste cohérente :

- R2 : Validation A + B;
- R3–R4 : Validation C;
- R4–R5 : Validation D;
- R5 : reprises.

Cependant, les validations doivent être réalisées **pendant le temps de travail**, pas comme quatre mini-examens qui s'ajoutent aux trois heures.

En particulier, Validation B peut déborder au début de R3 et Validation C peut déborder à R4.

# Décisions non appliquées avant révision de l'enseignant

Cette première lecture ne modifie pas encore :

- le nombre de pages obligatoires à R2;
- la durée ou la pondération des validations;
- la quantité exacte de contenu affichée dans les pages de cours;
- la structure R3–R5 nouvellement créée.

Le but est maintenant que l'enseignant puisse **voir le bloc complet**, puis confirmer les coupes qui semblent nécessaires.

# Validation technique en parallèle

Avant de considérer R3–R5 prêts en production, faire exécuter :

`refonte/TACHES_CODEX_VALIDATION_R3_R5.md`

Cette validation doit être technique seulement. Elle peut se faire pendant que la revue pédagogique du poids des rencontres se poursuit.

# Point de reprise pédagogique

Après examen de cette revue, la décision la plus importante à prendre est :

> **R2 doit-elle conserver deux pages secondaires obligatoires ou passer à une seule page secondaire obligatoire, avec une deuxième page en enrichissement?**

Les autres rencontres semblent suffisamment équilibrées pour être testées dans leur forme actuelle avant de faire des coupes supplémentaires.
