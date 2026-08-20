# Plan d'harmonisation — évaluation et correctifs R1 à R5

**Date : 2026-08-20**  
**Statut : prêt pour validation locale**  
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

**État : Bloqué uniquement par la validation locale**

Vérifications terminées :

- comparaison de `agent/harmonisation-evaluation-r1-r5` avec `main` : branche en avance, sans retard, changements limités au lot HARM;
- recherche ciblée des anciennes formulations actives : aucune hypothèse de 30 % ne subsiste dans les références harmonisées;
- l'autodiagnostic n'est plus présenté comme une décision ouverte dans les suivis actifs;
- `#contact` ne subsiste plus dans l'exercice R5 corrigé;
- aucun statut CI n'est publié pour le dernier commit de la branche;
- aucune PR ni aucun déploiement n'a été créé.

Vérifications restant à exécuter dans un checkout local fonctionnel :

```bash
npm run build
git diff --check
```

L'environnement d'exécution utilisé pour ce lot ne résout pas `github.com`; il ne peut donc pas cloner le dépôt ni exécuter ces deux commandes sur l'état actuel de la branche. Les réussites de build antérieures au lot HARM ne sont pas considérées comme une validation de ces changements.

Aucune décision pédagogique supplémentaire n'est ouverte dans le périmètre HARM. La répartition détaillée des 30 % entre WEB-01 et WEB-08 demeure volontairement un travail ultérieur.

## SUITE-01 — Créer un aide-mémoire HTML/CSS

**État : À faire après la fermeture du lot HARM**

Créer une page étudiante distincte qui regroupe de façon **très compacte** les principaux éléments HTML et CSS utiles pendant les rencontres 1 à 5.

Référence de format existante : `web/docs/01-cours/00-rencontre0.0.md`, l'ancien aide-mémoire surtout orienté JavaScript. Le nouveau document HTML/CSS doit reprendre l'idée d'un accès rapide à la syntaxe et aux exemples, sans devenir une nouvelle page de théorie complète.

Portée souhaitée :

- structure minimale d'un document HTML;
- balises de contenu réellement utilisées dans le cours : titres, paragraphes, listes, liens, images et conteneurs courants;
- attributs et chemins utiles, avec exemples courts;
- liaison d'une feuille CSS externe;
- syntaxe d'une règle CSS;
- sélecteurs d'élément, classes et rappel simple sur `id`;
- propriétés visuelles courantes vues dans le cours;
- modèle en boîte : `padding`, `border`, `margin` et dimensions simples;
- Flexbox minimal : parent, enfants directs, `display: flex`, `gap` et quelques alignements simples;
- quelques exemples CSS supplémentaires utiles peuvent être inclus comme référence, à condition de distinguer clairement ce qui dépasse le noyau évalué.

Principes :

- privilégier tableaux, blocs de code très courts et exemples immédiatement copiables;
- éviter les longues explications déjà présentes dans les pages de cours;
- couvrir au minimum tout le vocabulaire HTML/CSS réellement rencontré dans R1–R5;
- ne pas transformer les exemples supplémentaires en nouvelles exigences de validation;
- décider au moment de l'implémentation de son emplacement exact dans la navigation étudiante.

## Journal de reprise — 2026-08-20

- HARM-01 terminé : pondération de 30 % harmonisée dans les références internes; les deux pages étudiantes étaient déjà cohérentes.
- HARM-02 terminé : autodiagnostic retiré des décisions actives et conservé seulement comme élément historique.
- HARM-03 terminé : lien `#contact` sans cible retiré de l'exercice R5.
- HARM-04 terminé : calendrier A–D, minimum R2, niveaux d'attente et langage d'évaluation vérifiés de R1 à R5.
- HARM-05 terminé côté inspection distante; validation locale `npm run build` + `git diff --check` encore requise.
- SUITE-01 ajouté : prévoir un aide-mémoire HTML/CSS compact, distinct de l'aide-mémoire JavaScript existant.

# Point de reprise

> **Exécuter `npm run build` puis `git diff --check` dans un checkout local de `agent/harmonisation-evaluation-r1-r5`. Si les deux commandes réussissent, marquer HARM-05 `Fait`, fermer ce lot, puis conserver SUITE-01 dans la liste des prochains chantiers : aide-mémoire HTML/CSS compact pour les étudiants.**
