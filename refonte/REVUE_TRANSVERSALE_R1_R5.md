# Revue transversale — Rencontres 1 à 5

**Date : 2026-08-19**  
**Statut : REV-01 / REV-02 terminés; décisions pédagogiques approuvées; implémentation suivie dans `PLAN_AJUSTEMENTS_R1_R5_APRES_REVUE.md`**  
**Objectif : juger le poids des rencontres avant de faire des coupes finales**

Ce document conserve l'analyse de **REV-01 / REV-02**. Les décisions qui étaient provisoires lors de la première lecture ont maintenant été tranchées avec l'enseignant. Leur implémentation opérationnelle est décrite dans `PLAN_AJUSTEMENTS_R1_R5_APRES_REVUE.md`.

Le but est de regarder le bloc HTML/CSS comme une progression complète plutôt que de perfectionner chaque rencontre séparément.

## Vue d'ensemble actuelle

| Rencontre | Théorie / démonstration | Exercice guidé | Projet Web | Validation | Lecture actuelle |
|---|---|---|---|---|---|
| **R1** | environnement + premiers HTML | première page HTML | Étape 1 : première page personnelle | aucune | **chargée au démarrage**, mais volontairement lente |
| **R2** | images, chemins, pages, navigation | chemins avec `../` | Étape 2 : site multipage | A prioritaire; B peut débuter | **rencontre la plus à risque de surcharge** |
| **R3** | feuille CSS externe, sélecteurs, classes, propriétés simples | deux pages + une feuille CSS | Étape 3 : identité visuelle | fin possible de B + début C | **dense mais cohérente** si la présentation reste ciblée |
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
- Validation A puis début possible de B pendant le travail : temps distribué dans la période;
- pause et transitions : 10 à 15 min.

**Constat :** c'est la rencontre la plus serrée. Le risque ne vient pas d'une seule notion, mais de l'accumulation : images + `../` + création de pages + navigation + contenu + validations.

### Rencontre 3

- rôle de CSS / trois formes reconnues / feuille externe / chemins : 25 à 30 min;
- syntaxe, sélecteurs et classes : 25 à 30 min;
- propriétés visuelles et cascade simple : 15 à 20 min;
- exercice guidé : 35 à 45 min;
- Projet Web : 50 à 65 min;
- fin possible de Validation B et début de C pendant le travail : variable;
- pause et transitions : 10 à 15 min.

**Constat :** R3 est dense sur papier, mais plusieurs éléments du cours sont des **références** plutôt que des sujets qui exigent une longue explication. `id`, cascade et la liste de propriétés ne doivent pas recevoir chacun un long segment magistral. La reconnaissance du CSS intraligne/interne doit rester brève et servir à justifier la feuille externe.

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

### Décision

Ne pas couper R1 dans cette passe. Lors de l'enseignement :

- traiter Compte réseau / 2FA seulement si nécessaire au démarrage;
- démontrer les fichiers/dossiers/ZIP de façon concrète;
- utiliser les captures comme soutien, pas comme une présentation à réciter;
- protéger le temps de la première page HTML et de l'exercice guidé;
- accepter que l'Étape 1 du Projet Web soit une première version très simple.

## R2 — Principal ajustement de poids

Le cours et l'exercice guidé sont cohérents : l'exercice utilise une page à la racine, une page sous `pages/` et une image, ce qui suffit pour pratiquer `../`.

Le Projet Web demandait davantage de production et risquait de faire de R2 une rencontre trop ambitieuse, surtout avec les validations individuelles.

### Décision approuvée

Réduire le minimum obligatoire du Projet Web à :

```text
mon-site/
├── index.html
├── images/
│   └── ...
└── pages/
    └── sujet.html
```

Une **deuxième page secondaire** devient une extension naturelle **Pour aller plus loin — non évalué**.

Une seule page dans `pages/` suffit pédagogiquement pour pratiquer :

- entrer dans un sous-dossier;
- remonter avec `../`;
- charger une image depuis deux niveaux;
- créer une navigation aller-retour;
- charger plus tard `../css/styles.css` à R3.

Cette coupe libère du temps sans diminuer les compétences visées.

## R3 — Enseigner moins que ce que la page permet de consulter

La page étudiante contient volontairement une référence complète pour la rencontre, mais le déroulement oral doit rester plus étroit.

### Priorité en classe

1. HTML vs CSS;
2. montrer brièvement intraligne → interne → externe avec un même besoin;
3. expliquer pourquoi la feuille externe devient la méthode du cours : maintenance, répétition et cohérence entre plusieurs pages;
4. `<link>` et chemins `css/...` / `../css/...`;
5. syntaxe d'une règle;
6. sélecteur d'élément;
7. classe;
8. quelques propriétés visibles;
9. diagnostic.

`id` et cascade simple peuvent être montrés rapidement. Ils ne doivent pas devenir un cours sur la spécificité.

### Décision visuelle

Lorsque le cours montre une image comme **résultat d'un snippet précis**, la capture doit correspondre au code réellement montré. Les anciennes captures qui ne correspondent plus doivent être régénérées ou reclassées comme illustrations générales.

## R4 — Noyau bien circonscrit

La séparation avec l'ancien chapitre est maintenant nette.

À maîtriser :

```text
contenu → padding → border → margin
```

Le reste sert de contexte.

### Décision

- ne pas passer trop de temps sur les dimensions;
- ne pas enseigner `box-sizing` comme nouvelle compétence;
- ne pas réintroduire `inline-block`, `overflow` ou positionnement sous prétexte qu'ils existent dans l'ancienne source;
- vérifier la concordance entre les rendus visuels conservés et le code canonique.

Aucune coupe structurelle supplémentaire n'est recommandée.

## R5 — Protéger le temps d'intégration

Flexbox est volontairement réduit à :

```text
parent → enfants directs
display: flex
gap
justify-content simple
align-items simple
```

La rencontre doit servir à finir le site et les validations, pas à ouvrir un nouveau gros chapitre.

### Décision

- navigation + `display: flex` + `gap` = noyau pratique;
- cartes, `justify-content` et `align-items` = expérimentations utiles, sans catalogue à mémoriser;
- corriger le lien `#contact` sans cible de l'exercice actuel afin de ne pas introduire les ancres HTML par accident.

# Progression du Projet Web

La progression forme une chaîne claire :

```text
R1  une page HTML
 ↓
R2  fichiers, image(s), une page secondaire obligatoire, navigation
 ↓
R3  une feuille CSS partagée
 ↓
R4  espaces et modèle en boîte
 ↓
R5  disposition simple + intégration
```

Cette progression respecte le principe d'un **même site évolutif** et évite de recommencer cinq petits projets indépendants.

# Validations

La logique opérationnelle retenue est :

- **R2 : Validation A prioritaire; Validation B peut commencer avec les étudiants prêts**;
- **début R3 : poursuite de Validation B au besoin; début de C avec les étudiants prêts**;
- **R3–R4 : Validation C**;
- **R4–R5 : Validation D**;
- **R5 et après : reprises sans retarder le début de JavaScript pour le groupe**.

Les validations doivent être réalisées **pendant le temps de travail**, pas comme quatre mini-examens qui s'ajoutent aux trois heures. Les périodes cibles sont des fenêtres et non des échéances rigides.

# Décisions approuvées après révision de l'enseignant

La revue conduit aux ajustements suivants :

- une seule page secondaire obligatoire à R2;
- Validation A prioritaire en R2 et Validation B explicitement étalée sur R2/début R3;
- R3 montre brièvement CSS intraligne, interne et externe, mais continue à privilégier et évaluer la feuille externe;
- les exemples CSS illustrés doivent respecter une règle de concordance code ↔ rendu;
- R4 reste essentiellement inchangée;
- R5 est légèrement nettoyée sans élargir Flexbox.

Le détail de l'implémentation, y compris le recours possible à Codex pour produire les captures ou à un petit outil batch si nécessaire, se trouve dans `PLAN_AJUSTEMENTS_R1_R5_APRES_REVUE.md`.

# Point de reprise pédagogique

> **Exécuter le plan d'ajustements en commençant par R2, puis R3; ne générer les nouveaux rendus visuels qu'après stabilisation des snippets canoniques.**
