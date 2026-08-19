# Évaluation progressive des compétences — Z03

Ce document décrit la stratégie d'évaluation envisagée pour Z03. Il doit évoluer avec la séquence de cours et rester cohérent avec `SUIVI_CONTENU.md`.

## Intention

Éviter de concentrer l'évaluation dans quelques gros travaux pratiques remis à une date fixe. Les compétences sont plutôt validées progressivement pendant les rencontres, sur des réalisations concrètes et observables.

Le modèle visé est :

- une seule évaluation sommative finale à la rencontre 15;
- des validations de compétences tout au long de la session;
- au moins 15 % de la note déjà évaluée au plus tard à la rencontre 6;
- la rencontre 14 conservée comme buffer, rattrapage, travail ou révision;
- aucune notion essentielle introduite à la rencontre 14;
- possibilité pour un étudiant de représenter une compétence qui n'était pas encore maîtrisée lors d'une première tentative.

## Principe de validation

Une compétence doit être suffisamment petite pour être vérifiée rapidement en classe, idéalement en 1 à 3 minutes.

Exemple : plutôt que « réaliser un site Web », utiliser des compétences telles que :

- organiser correctement les fichiers d'un projet;
- créer une structure HTML valide;
- créer une navigation fonctionnelle entre plusieurs pages;
- utiliser correctement des chemins relatifs;
- associer une feuille de style CSS;
- appliquer une classe CSS à plusieurs éléments;
- écrire une condition qui produit le comportement demandé;
- écrire une fonction et l'appeler;
- modifier un élément de la page avec le DOM;
- connecter un clic à une fonction avec `addEventListener`;
- parcourir plusieurs valeurs ou éléments avec une boucle lorsque cette notion est retenue dans le cours.

La validation devrait porter sur ce que l'étudiant sait faire et expliquer, et non seulement sur la présence du résultat final dans un projet.

## Déroulement suggéré en classe

1. Une partie de la rencontre sert à l'enseignement et à la pratique guidée.
2. Une plage de travail autonome permet aux étudiants d'avancer leurs exercices ou leur projet fil rouge.
3. Lorsqu'un étudiant estime maîtriser une compétence disponible, il demande une validation.
4. L'enseignant vérifie rapidement la réalisation et peut poser une courte question pour distinguer compréhension et simple copie.
5. La compétence reçoit un statut : `À faire`, `À revoir` ou `Validée`.
6. Une compétence `À revoir` peut être représentée plus tard sans attendre une grosse remise.

Ce fonctionnement doit éviter une file d'attente permanente. Les validations peuvent être réparties dans le temps et certaines compétences proches peuvent être observées simultanément lorsque cela reste fiable.

## Pondération — cadre de travail

La pondération finale doit respecter les règles institutionnelles applicables. Pour la conception du cours, on réserve cependant dès maintenant au moins 15 % aux compétences des premières rencontres afin que ce seuil soit atteint avant ou pendant la rencontre 6.

Exemple provisoire pour les premières validations :

| Bloc | Compétences possibles | Pondération cible cumulative |
|---|---|---:|
| Environnement | fichiers/dossiers, OneDrive, ZIP, ouvrir un projet dans VS Code | 3 % |
| HTML de base | structure, contenu, liens et chemins | 8 % |
| Navigation HTML | plusieurs pages reliées correctement | 11 % |
| CSS essentiel | feuille CSS, sélecteurs/classes, quelques propriétés simples | 15 % |

Cette répartition est un exemple de conception et pourra être ajustée. L'objectif structurel est que les compétences évaluées avant JavaScript représentent au moins 15 %.

## Projet fil rouge

Une option intéressante est de conserver un petit site Web évolutif pendant plusieurs rencontres sans en faire un gros TP remis d'un seul bloc.

Le même projet peut servir de support aux validations successives :

- environnement et structure de fichiers;
- HTML;
- navigation;
- CSS;
- ajout de JavaScript;
- DOM et interactions;
- puis, si retenus, boucles/tableaux et manipulation de plusieurs éléments.

L'étudiant accumule ainsi des validations sur un produit qu'il améliore, mais la note n'attend pas la remise finale du produit complet.

## CSS — noyau évalué et contenu facultatif

Le CSS évalué doit rester volontairement minimal. Z03 est un cours d'introduction à la programmation Web, pas un cours complet de design ou d'intégration Web.

### Noyau évalué

- associer une feuille CSS à une page HTML;
- sélecteurs d'éléments et de classes;
- couleur, arrière-plan, police/taille de texte au besoin;
- bordure simple;
- `margin` et `padding` à un niveau de base;
- largeur/hauteur seulement lorsque nécessaires;
- `display` seulement dans les cas simples nécessaires aux exercices;
- comprendre qu'une classe CSS peut être ajoutée ou retirée plus tard par JavaScript.

### Facultatif / pour aller plus loin

- nuances détaillées de `inline`, `inline-block` et autres modes d'affichage;
- positionnement (`position`, `top`, `left`, etc.);
- mises en page complexes;
- détails avancés de Flexbox ou Grid;
- animations et transitions;
- propriétés de design qui ne servent pas directement les objectifs de programmation.

Les blocs facultatifs peuvent rester sur le site dans une section clairement marquée « Pour aller plus loin » et ne doivent pas apparaître dans les critères évalués ni dans l'examen final.

## Application de suivi — besoin fonctionnel

Une petite application locale pour l'enseignant serait suffisante pour une première version. Elle n'a pas besoin d'un système complexe de remise de travaux.

### Vue principale

- lignes : étudiants;
- colonnes : compétences;
- cellule cliquable avec les états `À faire`, `À revoir`, `Validée`;
- total des points/pondération déjà validés par étudiant;
- filtre par compétence pour voir rapidement qui doit encore être évalué;
- horodatage de la dernière validation;
- courte note facultative.

### Flux minimal

L'étudiant lève la main ou demande verbalement une validation. L'enseignant ouvre sa ligne, vérifie la compétence et clique sur l'état approprié.

Cette version ne nécessite donc aucun compte étudiant, aucun serveur et aucune donnée exposée publiquement.

### Persistance recommandée pour une première version

- données enregistrées localement sur l'ordinateur de l'enseignant;
- export CSV/JSON pour sauvegarde;
- import CSV/JSON pour restauration;
- aucune donnée nominale dans le site public Docusaurus.

Une version ultérieure pourrait ajouter une file de demandes de validation, mais ce n'est pas nécessaire pour valider le modèle pédagogique.

## Règles pour les compétences

Une compétence évaluée doit :

1. être observable;
2. être formulée avec un verbe d'action;
3. être assez petite pour être vérifiée rapidement;
4. correspondre à de la matière réellement enseignée;
5. ne pas dépendre d'un contenu déclaré facultatif;
6. pouvoir être rattachée à un ou plusieurs exercices identifiés dans `SUIVI_CONTENU.md`;
7. être incluse explicitement dans la portée de l'examen final seulement si elle est considérée essentielle.

## Décisions actuelles

- Une seule évaluation sommative formelle est prévue, à la rencontre 15.
- L'évaluation progressive par compétences remplace l'idée de dépendre d'un gros TP unique pour obtenir les premières notes.
- Au moins 15 % doit être évalué au plus tard à la rencontre 6.
- Le CSS évalué restera minimal; les notions de mise en page complexes seront facultatives ou retirées.
- La rencontre 14 demeure un buffer sans nouvelle matière essentielle.
- Une petite application de suivi pour l'enseignant est souhaitée; une version locale simple est privilégiée avant d'envisager une architecture avec comptes étudiants ou serveur.
