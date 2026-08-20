# Plan d'harmonisation — évaluation et correctifs R1 à R5

**Date : 2026-08-20**  
**Statut : en cours**  
**Branche : `agent/harmonisation-evaluation-r1-r5`**

Ce lot part de `main` après le nettoyage des anciennes branches de travail. Il vise à harmoniser les décisions déjà prises autour de l'évaluation HTML/CSS et à terminer quelques correctifs bornés des rencontres 1 à 5 avant de reprendre les travaux visuels du Projet Web.

## Décisions de départ

- Le bloc HTML/CSS / Projet Web des rencontres 1 à 5 représente **30 % de la note finale**.
- Les huit compétences **WEB-01 à WEB-08** restent regroupées en quatre moments de validation A à D.
- La pondération exacte par compétence pourra être détaillée plus tard sans remettre en question le total de 30 % ni créer davantage de moments de validation.
- L'autodiagnostic informatique de l'ancien Atelier n'est pas retenu dans la nouvelle formule et doit être retiré des suivis actifs.
- Le correctif R5 doit supprimer le lien `#contact` sans cible sans introduire une nouvelle notion HTML dans l'exercice Flexbox.
- Ce lot ne doit pas reprendre ni étendre la migration `ExampleFrame` R3/R4.

## HARM-01 — Officialiser la pondération de 30 %

**État : En cours**

Harmoniser au minimum :

- `refonte/EVALUATION.md`;
- `refonte/COMPETENCES_HTML_CSS.md`;
- `refonte/SUIVI_CONTENU.md`;
- `refonte/PLAN_SITE_EVOLUTIF.md`;
- `web/docs/03-projet-web/00-presentation.md`;
- `web/docs/03-projet-web/00-evaluation.md`.

Résultat attendu : aucune de ces références ne présente encore le 30 % comme une hypothèse à confirmer.

## HARM-02 — Retirer l'autodiagnostic des suivis actifs

**État : À faire**

Retirer les mentions qui laissent croire que l'autodiagnostic informatique doit encore être décidé ou réintroduit. Conserver les sources historiques sans remettre l'activité dans le parcours étudiant.

## HARM-03 — Corriger l'exercice R5

**État : À faire**

Dans `web/docs/01-cours/05-rencontre5-exercice-guide.md`, corriger le lien `href="#contact"` sans cible. Ne pas ajouter une section Contact uniquement pour satisfaire l'ancien lien et ne pas transformer l'exercice Flexbox en leçon sur les ancres.

## HARM-04 — Revue de cohérence R1 à R5

**État : À faire**

Vérifier notamment :

- cohérence du minimum R2 avec les plans internes;
- calendrier A–D identique entre les documents internes et les pages étudiantes;
- distinction claire entre notion obligatoire, bonne pratique et contenu non évalué;
- absence de nouvelle exigence mécanique ajoutée implicitement aux compétences;
- cohérence entre la pondération de 30 % et le langage étudiant.

Corriger uniquement les incohérences non ambiguës déjà tranchées dans les plans existants.

## HARM-05 — Validation finale

**État : À faire**

- comparer la branche à `main`;
- rechercher les anciennes formulations (`hypothèse de travail`, pondération à confirmer, autodiagnostic à décider, `#contact` sans cible);
- exécuter `npm run build` et `git diff --check` dans un environnement local capable de cloner/exécuter le dépôt;
- signaler séparément toute décision pédagogique encore réellement ouverte;
- ne créer ni PR ni déploiement sans demande explicite.

# Point de reprise

> **HARM-01 — officialiser 30 % partout, puis HARM-02 et HARM-03 avant la revue transversale HARM-04.**
