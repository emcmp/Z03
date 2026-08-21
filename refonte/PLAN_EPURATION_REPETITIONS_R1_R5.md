# Plan d'épuration des répétitions — rencontres 1 à 5

**Date : 2026-08-21**  
**Statut : actif**  
**Branche : `agent/qa-finale-r1-r5`**

## Objectif

Réduire les répétitions entre les pages de cours, les exercices guidés, les étapes du Projet Web et l'aide-mémoire, sans retirer les repères nécessaires aux débutants.

Le Projet Web doit aussi devenir plus personnel, plus dirigé et suffisamment riche pour empêcher qu'une simple copie de l'exercice guidé constitue le travail final.

## Décisions

### Projet Web minimal à la fin de la rencontre 5

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

Le projet contient donc au minimum :

- une page d'accueil;
- deux pages de sujet distinctes, avec possibilité d'en ajouter davantage;
- une page À propos;
- une navigation présente sur les quatre pages;
- du contenu réel lié au thème choisi;
- au moins deux images locales avec un attribut `alt` sur chaque élément `<img>`;
- une feuille CSS externe partagée;
- des sélecteurs d'élément et des classes réutilisables;
- une application du modèle en boîte;
- une utilisation simple de Flexbox avec `gap`.

`background-image` demeure un enrichissement facultatif dans le Projet Web. Il reste montré dans la rencontre 5 pour réinvestir les chemins écrits dans CSS.

### Thème, pages de sujet et page À propos

Le site doit porter sur un thème principal qui se divise naturellement en au moins deux pages de sujet.

La présentation étudiante propose une galerie variée avec des icônes : sports, films, jeux, musique, cuisine, nature, voyage, technologie, livres, création, véhicules et entreprise fictive.

La page À propos sert à :

- présenter l'étudiant, ses études, ses intérêts et sa motivation dans un site personnel ou informatif;
- ou présenter la description, la mission, les services et des coordonnées fictives dans un site d'entreprise ou d'organisation.

Le thème de l'exercice guidé ne doit pas être repris tel quel et aucun renseignement personnel sensible ne doit être demandé.

### Personnalisation et appropriation

La personnalisation n'est pas ajoutée comme compétence WEB-09.

La pondération du bloc HTML/CSS devient :

```text
80 % → huit compétences techniques
20 % → personnalisation et appropriation du projet
```

La dimension transversale est appréciée sur 20 points :

- contenu original : 5;
- cohérence du thème : 5;
- décisions personnelles : 5;
- finition et initiative : 5.

L'appréciation porte sur des manifestations observables, pas sur le nombre d'heures supposé, le talent graphique ou l'utilisation de notions avancées.

## Matrice de répétition

| Rencontre | Répétitions principales | Correction retenue |
|---|---|---|
| R1 | structure HTML complète, ouverture du dossier, cycle enregistrer–actualiser | cours = explication et aperçu unique; exercice = saisie complète; projet = planification et contenu personnel |
| R2 | arborescence, `../`, images et navigation | exercice = structure imposée; projet = quatre pages avec deux sujets et À propos |
| R3 | chemins vers CSS, classes et mêmes couleurs | projet = choix d'une identité visuelle et de classes nommées selon leur rôle |
| R4 | mêmes cartes, mêmes valeurs et mêmes diagnostics | projet = audit des vrais blocs des quatre pages et justification des espacements |
| R5 | navigation flex, cartes et image de fond | projet = intégration, personnalisation, correction et une seule disposition flex utile |
| Aide-mémoire | reprise détaillée de l'ensemble du cours | réduire à la syntaxe, aux comparaisons et au dépannage |

## Modifications prévues

### Phase 1 — Publication et exactitude

- [x] Archiver les anciennes pages hors de `web/docs/`.
- [x] Retirer la section Refonte du build étudiant.
- [x] Prévoir un mode Docusaurus local pour consulter la refonte.
- [x] Remplacer l'exemple de paragraphe HTML incorrect.
- [x] Retirer le code HTML affiché deux fois dans la section 3 de la rencontre 1.

### Phase 2 — Projet Web

- [x] Définir un thème principal et deux pages de sujet minimum.
- [x] Ajouter une page À propos obligatoire.
- [x] Exiger quatre pages HTML minimum.
- [x] Définir les preuves minimales par compétence.
- [x] Réécrire les étapes 1 à 5 selon le modèle Mission → Minimum → Décisions → Tests.
- [x] Rendre `alt` obligatoire sur chaque élément `<img>`.
- [x] Rendre `background-image` facultatif dans le Projet Web.
- [x] Ajouter une galerie de thèmes plus variée avec des icônes.
- [x] Ajouter une appréciation distincte de la personnalisation.

### Phase 3 — Aide-mémoire

- [x] Retirer les explications longues.
- [x] Regrouper la syntaxe HTML et CSS essentielle.
- [x] Conserver les diagnostics rapides.
- [x] Identifier clairement les notions facultatives.

### Phase 4 — Vérifications locales

- [x] Créer une checklist pour `F5` sur les postes du cégep.
- [x] Ajouter la vérification de la disposition exacte du clavier.
- [ ] Effectuer les vérifications sur un poste réel avant la rencontre 1.

## Critères de réussite du chantier

- le build étudiant ne contient ni les anciennes pages ni la section Refonte;
- le Projet Web ne peut pas être complété par une simple copie de l'exercice guidé;
- chaque étape ajoute une transformation identifiable au même site;
- la page À propos ajoute une dimension personnelle sans demander d'information sensible;
- les exigences minimales sont visibles sans devenir une grille de points mécanique;
- les compétences techniques et l'appréciation de personnalisation sont clairement séparées;
- la page d'évaluation demeure la référence;
- l'aide-mémoire permet de retrouver une syntaxe sans relire un chapitre complet.
