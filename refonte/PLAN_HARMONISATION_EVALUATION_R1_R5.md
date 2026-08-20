# Plan d'harmonisation — évaluation et correctifs R1 à R5

**Date : 2026-08-20**  
**Statut : lot HARM fusionné; SUITE-01 implémenté, validation locale requise**  
**Branche active : `agent/aide-memoire-html-css`**

Ce document a d'abord servi à harmoniser les décisions autour de l'évaluation HTML/CSS et à terminer quelques correctifs bornés des rencontres 1 à 5. Le lot HARM est maintenant fusionné dans `main`; la suite documentée ici porte sur les petits chantiers complémentaires du bloc HTML/CSS.

## Décisions de départ

- Le bloc HTML/CSS / Projet Web des rencontres 1 à 5 représente **30 % de la note finale**.
- Les huit compétences **WEB-01 à WEB-08** restent regroupées en quatre moments de validation A à D.
- La pondération exacte par compétence pourra être détaillée plus tard sans remettre en question le total de 30 % ni créer davantage de moments de validation.
- L'autodiagnostic informatique de l'ancien Atelier n'est pas retenu dans la nouvelle formule et doit être retiré des suivis actifs.
- Le correctif R5 doit supprimer le lien `#contact` sans cible sans introduire une nouvelle notion HTML dans l'exercice Flexbox.
- Ce lot ne doit pas reprendre ni étendre la migration `ExampleFrame` R3/R4.

## HARM-01 — Officialiser la pondération de 30 %

**État : Fait**

Références harmonisées :

- `refonte/EVALUATION.md`;
- `refonte/COMPETENCES_HTML_CSS.md`;
- `refonte/SUIVI_CONTENU.md`;
- `refonte/PLAN_SITE_EVOLUTIF.md`;
- `web/docs/03-projet-web/00-presentation.md` — déjà cohérent;
- `web/docs/03-projet-web/00-evaluation.md` — déjà cohérent.

Résultat : le bloc HTML/CSS R1–R5 est présenté comme représentant **30 % de la note finale**. Seule la répartition exacte entre WEB-01 et WEB-08 reste à détailler ultérieurement; elle ne remet pas en question le total de 30 % ni les quatre moments de validation.

## HARM-02 — Retirer l'autodiagnostic des suivis actifs

**État : Fait**

L'autodiagnostic informatique est maintenant explicitement **non retenu** dans :

- `refonte/RESSOURCES_A_FOURNIR.md`;
- `refonte/PLAN_IMPLEMENTATION_RENCONTRES_1_A_5.md`;
- `refonte/TACHES_CODEX_PREMIER_COURS.md`.

La source historique `web/docs/01-cours/01-rencontre1.1.md` est conservée sans remettre l'activité dans le parcours étudiant.

## HARM-03 — Corriger l'exercice R5

**État : Fait**

Dans `web/docs/01-cours/05-rencontre5-exercice-guide.md`, le lien `href="#contact"` sans cible a été retiré sans ajouter de section Contact ni transformer l'exercice Flexbox en leçon sur les ancres.

## HARM-04 — Revue de cohérence R1 à R5

**État : Fait**

Constats de la revue :

- R1 prépare WEB-01/02 sans validation sommative;
- R2 garde comme minimum une seule page secondaire sous `pages/`; la page supplémentaire reste facultative;
- la Validation A est prioritaire en R2 et la Validation B peut se poursuivre au début de R3;
- la Validation C reste disponible en R3–R4 et la Validation D en R4–R5;
- les pages étudiantes distinguent les notions à maîtriser, les bonnes pratiques et les contenus `Pour aller plus loin — non évalué`;
- les contraintes de pratique ne sont pas transformées en décomptes mécaniques pour la validation;
- les pages étudiantes d'évaluation et de présentation annoncent bien le total de 30 %;
- aucun autre correctif étudiant non ambigu n'a été nécessaire dans cette passe.

## HARM-05 — Validation finale

**État : Fait**

Vérifications et fermeture :

- comparaison de `agent/harmonisation-evaluation-r1-r5` avec `main` effectuée avant fusion : branche en avance, sans retard, changements limités au lot HARM;
- recherche ciblée des anciennes formulations actives terminée;
- l'autodiagnostic n'est plus présenté comme une décision ouverte dans les suivis actifs;
- `#contact` ne subsiste plus dans l'exercice R5 corrigé;
- la validation locale du lot a été confirmée par l'utilisateur;
- `agent/harmonisation-evaluation-r1-r5` a été fusionnée dans `main` en fast-forward le 2026-08-20;
- aucune PR ni aucun déploiement n'a été créé pour cette fusion.

Aucune décision pédagogique supplémentaire n'est ouverte dans le périmètre HARM. La répartition détaillée des 30 % entre WEB-01 et WEB-08 demeure volontairement un travail ultérieur.

## SUITE-01 — Créer un aide-mémoire HTML/CSS

**État : Implémenté — validation locale à faire**

Créer une page étudiante distincte qui regroupe de façon **très compacte** les principaux éléments HTML et CSS utiles pendant les rencontres 1 à 5.

Référence de format existante : `web/docs/01-cours/00-rencontre0.0.md`, l'ancien aide-mémoire surtout orienté JavaScript. Le nouveau document HTML/CSS reprend l'idée d'un accès rapide à la syntaxe et aux exemples, sans devenir une nouvelle page de théorie complète.

Implémentation :

- nouvelle page `web/docs/01-cours/00-aide-memoire-html-css.md`;
- premier élément du menu **Cours**, avant la rencontre 1, avec le libellé **Aide-mémoire — HTML/CSS**;
- structure minimale HTML et principales balises utilisées dans R1–R5;
- attributs courants et chemins relatifs, avec un rappel visuel de `../`;
- liaison d'une feuille CSS externe depuis la racine et depuis un sous-dossier;
- syntaxe d'une règle CSS, sélecteurs d'élément, classes et rappel sur `id`;
- propriétés visuelles courantes;
- modèle en boîte et Flexbox minimal;
- exemple fréquent de `background-image` depuis `css/styles.css` vers `images/`, incluant `url("../images/...")`, `background-size: cover`, `background-position: center` et `background-repeat: no-repeat`;
- petits ajouts utiles clairement séparés du noyau évalué;
- aucun changement apporté au contenu ou à la navigation **Dans l'autobus**, afin de laisser ce chantier évoluer en parallèle.

Principes conservés :

- privilégier tableaux, blocs de code très courts et exemples immédiatement copiables;
- éviter les longues explications déjà présentes dans les pages de cours;
- couvrir au minimum tout le vocabulaire HTML/CSS réellement rencontré dans R1–R5;
- ne pas transformer les exemples supplémentaires en nouvelles exigences de validation.

Validation restante sur `agent/aide-memoire-html-css` :

```bash
npm run build
git diff --check
```

Vérifier aussi visuellement que l'aide-mémoire est bien le premier item du menu Cours et que les blocs de code/tableaux restent lisibles sur la page.

## Journal de reprise — 2026-08-20

- HARM-01 terminé : pondération de 30 % harmonisée dans les références internes; les deux pages étudiantes étaient déjà cohérentes.
- HARM-02 terminé : autodiagnostic retiré des décisions actives et conservé seulement comme élément historique.
- HARM-03 terminé : lien `#contact` sans cible retiré de l'exercice R5.
- HARM-04 terminé : calendrier A–D, minimum R2, niveaux d'attente et langage d'évaluation vérifiés de R1 à R5.
- HARM-05 fermé après confirmation de la validation locale et fusion fast-forward dans `main`.
- SUITE-01 ajouté puis implémenté sur `agent/aide-memoire-html-css` : page compacte, navigation en premier item, chemins CSS/images et arrière-plan inclus.

# Point de reprise

> **Sur `agent/aide-memoire-html-css`, exécuter `npm run build` puis `git diff --check`, vérifier rapidement le rendu de l'aide-mémoire et sa position en premier dans le menu Cours. Si tout est vert, SUITE-01 est prêt à fusionner sans toucher au chantier parallèle des capsules Dans l'autobus.**
