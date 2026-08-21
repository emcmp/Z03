# Plan — relief visuel du contenu et personnalité du Projet Web

**Statut : prêt à réviser**  
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

**État : Terminé**

Système réutilisable ajouté :

- `TopicBadges` : pastilles compactes à sémantique stable (HTML, CSS, chemins, test, Flexbox, validation, optionnel, etc.);
- `KeyPoint` : micro-rappel plus léger qu'une admonition pour une idée à retenir ou une méthode;
- `ProjectStepHero` : bandeau spécifique au Projet Web avec numéro d'étape, progression 1 → 5, mission, résultat attendu et notions mobilisées;
- `ProjectJourney` : parcours visuel des cinq étapes sur la page Présentation.

Décision après audit : les admonitions existantes sont déjà suffisamment présentes et distinctes. Elles ne sont **pas** restylées ni multipliées dans cette passe afin de préserver leur valeur sémantique.

## Passe 2 — application mesurée aux cours R1–R2

**État : Terminé**

Application volontairement légère :

- R1 : repères `HTML`, `Structure`, `Contenu` au début du cours;
- R1 : micro-rappel sur la lecture d'un élément HTML complet;
- R2 : repères `HTML`, `Chemins`, `À tester` au début du cours;
- R2 : micro-rappel sur la lecture d'un chemin relatif depuis le fichier actuel.

Aucun badge n'a été ajouté à chaque section. Les admonitions et les 👁 existants restent les principaux repères locaux lorsque leur fonction est déjà claire.

## Passe 3 — personnalité du Projet Web R1–R5

**État : Prêt à réviser**

Implémentation réalisée :

- page Présentation enrichie avec un parcours visuel **Construire → Relier → Habiller → Faire respirer → Organiser**;
- ajout d'un `ProjectStepHero` au début de chacune des étapes 1 à 5;
- affichage clair de « Étape N sur 5 » et de la progression globale;
- mission courte pour chaque étape;
- résultat concret attendu à la fin de chaque étape;
- quelques badges de notions intégrés au bandeau;
- grands aperçus évolutifs R3–R5 conservés;
- aucune nouvelle compétence ou exigence évaluée ajoutée.

## Validation

**État : Bloqué dans l'environnement de l'agent — à vérifier localement**

À faire avant fusion :

- `npm run build`;
- contrôle visuel sur R1, R2 et Projet Web 00–05;
- contrôle clair/sombre;
- contrôle rapide des styles Campus, Transit et Studio;
- contrôle mobile / largeur étroite;
- vérifier que les admonitions, badges, 👁 et grands `ExampleFrame` ne se concurrencent pas visuellement.

L'environnement de l'agent ne peut actuellement pas résoudre `github.com`, ce qui empêche de cloner la branche et d'exécuter le build localement. Le workflow GitHub existant ne construit automatiquement que `main`, et son déclenchement manuel lancerait aussi le déploiement; il n'est donc pas utilisé pour cette validation de branche.

## Définition globale de terminé

Le chantier est terminé lorsque :

1. les nouveaux composants ont une fonction pédagogique stable et documentée;
2. R1–R2 sont plus faciles à balayer visuellement sans être plus bruyants;
3. le Projet Web ressemble à un parcours évolutif motivant plutôt qu'à une suite de consignes;
4. aucun nouveau contenu évalué n'a été ajouté implicitement;
5. le build Docusaurus réussit et la vérification visuelle est satisfaisante.
