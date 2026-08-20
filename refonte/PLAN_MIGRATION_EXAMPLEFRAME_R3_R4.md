# Plan de migration ciblée — ExampleFrame R3/R4

**Date : 2026-08-20**  
**Statut : actif**  
**Branche : `agent/migration-exampleframe-r3-r4`**

Ce plan poursuit AJ-07 après la validation du POC `ExampleFrame`. Le but est de remplacer seulement les captures qui prétendent montrer le résultat exact d’un snippet HTML/CSS lorsque le rendu vivant est plus fiable et plus facile à maintenir.

## Principes

- Conserver les illustrations conceptuelles lorsqu’elles expliquent mieux une idée qu’un rendu vivant.
- Ne pas transformer les pages en galeries d’aperçus.
- Réutiliser une même source pour le code affiché et le rendu dans l’iframe.
- Ne pas supprimer physiquement une image tant qu’on n’a pas vérifié qu’elle n’est plus utilisée ailleurs.
- Travailler par petits lots et valider visuellement chaque lot avant d’étendre la migration.

## MIG-01 — Rencontre 3 : classe et couleurs

**État : En cours**

Fichiers visés :

- `web/docs/01-cours/03-rencontre3.md`;
- `web/static/examples/rencontre3/classe-mise-en-valeur/preview.html`;
- `web/static/examples/rencontre3/classe-mise-en-valeur/styles.css`;
- `web/static/examples/rencontre3/couleurs-r3/preview.html`;
- `web/static/examples/rencontre3/couleurs-r3/styles.css`.

Changements :

- remplacer le rendu historique `selecteur-classe-rendu.png` par un `ExampleFrame` basé sur la classe `.mise-en-valeur`;
- remplacer `couleurs-rendu.png` par un `ExampleFrame` correspondant exactement aux couleurs hexadécimales montrées dans R3;
- retirer de R3 la capture `lier-feuille-css.png`, devenue redondante avec le bloc `<link>` adjacent;
- conserver `fichier-css-externe.png` comme illustration générale;
- ne pas toucher encore à `selecteur-element.png` ni `bordure-rendu.png`.

Définition de terminé :

- les deux aperçus utilisent des sources autonomes sous `static/examples/rencontre3/`;
- les sources affichées et rendues sont identiques via `raw-loader`;
- les anciennes captures ciblées ne sont plus référencées dans R3;
- `npm run build` et `git diff --check` réussissent;
- le rendu visuel de R3 est vérifié en largeur normale et étroite.

## MIG-02 — Rencontre 3 : autres rendus exacts

**État : À faire après revue de MIG-01**

Évaluer `selecteur-element.png` et `bordure-rendu.png`. Ne les convertir que si le rendu vivant apporte une information pédagogique réelle sans alourdir la page.

## MIG-03 — Rencontre 4 : boîtes visibles

**État : À faire après R3**

Candidat prioritaire : `boites-rendues-visibles.png`.

Conserver pour l’instant les schémas conceptuels du modèle en boîte, notamment `modele-de-boite-css.png` et `dimensions-totales-boite.png`.

## MIG-04 — Nettoyage et suivi

**État : À faire après les migrations retenues**

- vérifier les références restantes aux anciennes images avant toute suppression physique;
- mettre à jour `RESSOURCES_A_FOURNIR.md` et le suivi de refonte si nécessaire;
- effectuer une validation finale R3/R4.
