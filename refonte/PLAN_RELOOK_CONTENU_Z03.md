# Plan — relief visuel du contenu et personnalité du Projet Web

**Statut : actif**  
**Branche : `agent/visual-polish-project-web`**  
**Date : 2026-08-20**

## Intention

Donner davantage de relief au contenu étudiant sans transformer Z03 en interface décorative ou surchargée.

Principe directeur : **un élément visuel doit aider à repérer, comprendre, mémoriser ou agir**. S'il ne fait qu'ajouter de la couleur, il n'est pas retenu.

## Règles visuelles

- conserver les admonitions Docusaurus pour leurs fonctions actuelles (`info`, `tip`, `warning`, `danger`, `note`);
- ne pas ajouter une admonition seulement pour créer de la couleur;
- utiliser une petite famille stable de repères visuels et d'icônes;
- garder les titres principaux sobres;
- privilégier des micro-repères compacts entre les gros blocs de contenu;
- ne jamais faire porter une information uniquement par la couleur;
- viser au plus 2 ou 3 éléments visuels forts visibles simultanément dans une même zone de lecture;
- conserver les `ExampleFrame` pour les démonstrations structurantes et les 👁 `ExamplePeek` pour les micro-rendus;
- le Projet Web peut être plus expressif que la théorie afin de renforcer la progression et l'appropriation personnelle.

## Passe 1 — vocabulaire visuel commun

**État : En cours**

Créer un petit système réutilisable :

- `TopicBadges` : pastilles compactes à sémantique stable (HTML, CSS, chemins, test, Flexbox, validation, optionnel, etc.);
- `KeyPoint` : micro-rappel plus léger qu'une admonition pour une idée à retenir ou une méthode;
- `ProjectStepHero` : bandeau spécifique au Projet Web avec numéro d'étape, progression 1 → 5, mission, résultat attendu et notions mobilisées;
- légère finition des admonitions existantes afin de mieux les distinguer sans augmenter leur fréquence.

## Passe 2 — application mesurée aux cours R1–R2

**État : À faire**

Ajouter les nouveaux repères seulement aux endroits où ils accélèrent la lecture :

- structure HTML et contenu en R1;
- images, chemins relatifs et navigation en R2;
- quelques rappels « à tester » / « réflexe »;
- éviter d'ajouter des badges à chaque section ou chaque bloc de code.

Définition de terminé : la page gagne en rythme visuel sans que les nouveaux éléments deviennent le contenu dominant.

## Passe 3 — personnalité du Projet Web R1–R5

**État : À faire**

Donner au Projet Web une identité propre et une vraie sensation de progression :

- enrichir la page Présentation;
- ajouter un `ProjectStepHero` au début de chacune des étapes 1 à 5;
- afficher clairement « Étape N sur 5 » et la progression globale;
- formuler une petite mission pour chaque étape;
- montrer ce que le site possédera à la fin de l'étape;
- afficher quelques badges de notions sans faire une liste exhaustive;
- conserver les grands aperçus évolutifs déjà présents en R3–R5;
- rendre la transition vers l'étape suivante plus motivante et plus lisible.

## Validation

**État : À faire**

Avant fusion :

- `npm run build`;
- contrôle visuel sur R1, R2 et Projet Web 00–05;
- contrôle clair/sombre;
- contrôle rapide des styles Campus, Transit et Studio;
- contrôle mobile / largeur étroite;
- vérifier que les admonitions, badges, 👁 et grands `ExampleFrame` ne se concurrencent pas visuellement.

## Définition globale de terminé

Le chantier est terminé lorsque :

1. les nouveaux composants ont une fonction pédagogique stable et documentée;
2. R1–R2 sont plus faciles à balayer visuellement sans être plus bruyants;
3. le Projet Web ressemble à un parcours évolutif motivant plutôt qu'à une suite de consignes;
4. aucun nouveau contenu évalué n'a été ajouté implicitement;
5. le build Docusaurus réussit et la vérification visuelle est satisfaisante.
