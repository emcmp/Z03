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
    └── sujet-2.html
```

Le projet contient donc au minimum :

- une page d'accueil;
- deux pages secondaires sur des sous-thèmes distincts;
- une navigation présente sur toutes les pages;
- du contenu réel lié au thème choisi;
- au moins deux images locales avec un attribut `alt` sur chaque élément `<img>`;
- une feuille CSS externe partagée;
- des sélecteurs d'élément et des classes réutilisables;
- une application du modèle en boîte;
- une utilisation simple de Flexbox avec `gap`.

`background-image` devient un enrichissement facultatif dans le Projet Web. Il reste montré dans la rencontre 5 pour réinvestir les chemins écrits dans CSS.

### Thème et sous-thèmes

Le site doit porter sur un thème principal qui se divise naturellement en au moins deux sous-thèmes.

Exemples :

| Thème principal | Page d'accueil | Pages secondaires possibles |
|---|---|---|
| Équipe de hockey | présentation de l'équipe | fiche d'un joueur; fiche d'un autre joueur |
| Ligue sportive | présentation de la ligue | une équipe; une autre équipe |
| Univers Harry Potter | présentation de l'univers | un film ou livre; un autre film ou livre |
| Collection de recettes | présentation de la collection | une recette; une autre recette |
| Groupe musical | présentation du groupe | un album; un autre album |

Le thème de l'exercice guidé ne doit pas être repris tel quel.

## Matrice de répétition

| Rencontre | Répétitions principales | Correction retenue |
|---|---|---|
| R1 | structure HTML complète, ouverture du dossier, cycle enregistrer–actualiser | cours = explication; exercice = saisie complète; projet = planification et contenu personnel |
| R2 | arborescence, `../`, images et navigation | exercice = structure imposée; projet = trois pages sur deux sous-thèmes distincts |
| R3 | chemins vers CSS, classes et mêmes couleurs | projet = choix d'une identité visuelle et de classes nommées selon leur rôle |
| R4 | mêmes cartes, mêmes valeurs et mêmes diagnostics | projet = audit des vrais blocs du site et justification des espacements |
| R5 | navigation flex, cartes et image de fond | projet = intégration, correction et une seule disposition flex utile |
| Aide-mémoire | reprise détaillée de l'ensemble du cours | réduire à la syntaxe, aux comparaisons et au dépannage |

## Modifications prévues

### Phase 1 — Publication et exactitude

- [x] Archiver les anciennes pages hors de `web/docs/`.
- [x] Retirer la section Refonte du build étudiant.
- [x] Prévoir un mode Docusaurus local pour consulter la refonte.
- [x] Remplacer l'exemple de paragraphe HTML incorrect.

### Phase 2 — Projet Web

- [x] Définir un thème principal et deux sous-thèmes minimum.
- [x] Exiger trois pages HTML minimum.
- [x] Définir les preuves minimales par compétence.
- [x] Réécrire les étapes 1 à 5 selon le modèle Mission → Minimum → Décisions → Tests.
- [x] Rendre `alt` obligatoire sur chaque élément `<img>`.
- [x] Rendre `background-image` facultatif dans le Projet Web.

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
- les exigences minimales sont visibles sans devenir une grille de points mécanique;
- la page d'évaluation demeure la référence pour les compétences;
- l'aide-mémoire permet de retrouver une syntaxe sans relire un chapitre complet.
