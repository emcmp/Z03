# Refonte du cours Z03

Ce document conserve le contexte durable et les décisions de la refonte. Il sert de référence aux personnes qui travaillent sur le cours et aux agents Codex.

## Contexte

Z03 est le cours **Introduction à la programmation web**, offert comme cours optionnel. Les étudiants n'ont pas nécessairement de formation préalable en informatique ni d'expérience en programmation.

Le nouveau site Docusaurus est issu du matériel du cours 905 - Introduction à la programmation. Le 905 constitue une bonne base pour plusieurs notions de programmation JavaScript, mais il suppose que les étudiants connaissent déjà HTML et CSS.

Z03 doit donc adapter cette base plutôt que la reprendre telle quelle. Z03 est un cours autonome et ne doit pas être présenté comme étant lié à un programme de techniques multimédias.

## Objectifs de la refonte

- réduire la quantité de contenu lorsque celle-ci dépasse ce qui est utile à un cours d'introduction;
- rendre le cours accessible à des étudiants sans background informatique;
- introduire les fondations du Web, notamment HTML et CSS, avant de dépendre de ces acquis;
- conserver et adapter les parties pertinentes du 905 sur la programmation et JavaScript;
- faire du site Docusaurus la référence principale du cours plutôt que de dépendre surtout de présentations PowerPoint;
- favoriser des exemples concrets et une pratique régulière;
- maintenir une progression cohérente entre cours, laboratoires et futurs travaux pratiques.

## Principes pédagogiques

1. Partir de ce que l'étudiant peut observer dans le navigateur.
2. Introduire les notions progressivement, sans supposer de vocabulaire informatique préalable.
3. Préférer la compréhension et la pratique aux inventaires exhaustifs de fonctionnalités.
4. Une nouvelle notion devrait idéalement être accompagnée d'un exemple simple et d'une occasion de l'essayer.
5. Éviter d'enseigner une abstraction seulement parce qu'elle est courante en développement professionnel; elle doit servir l'objectif du cours.
6. Réutiliser le matériel du 905 lorsqu'il correspond au niveau visé, mais le simplifier ou le déplacer lorsque nécessaire.

## Architecture de contenu actuelle

Le matériel actif est organisé ainsi :

- `web/docs/01-cours/` : théorie, préambules et exercices guidés associés aux rencontres;
- `web/docs/02-labos/` : laboratoires de programmation;
- `web/docs/03-projet-web/` : Projet Web évolutif des rencontres 1 à 5;
- `refonte/` : plans, suivi, évaluation et documentation interne de la refonte;
- `sources/` : sources historiques ou éditoriales conservées pour la migration.

Les anciens travaux pratiques du 905 ont été retirés. Pour les rencontres 1 à 5, le **Projet Web évolutif** remplace le modèle d'exercices HTML/CSS séparés + ancien TP1 comme activité pratique continue.

Cette structure peut évoluer pendant la refonte. Les changements majeurs d'organisation devraient être décidés explicitement avant de renommer ou déplacer beaucoup de fichiers.

## Planification opérationnelle

Les décisions pédagogiques de haut niveau ne suffisent pas à suivre un chantier qui s'étend sur plusieurs sessions. Pour les travaux importants, un **plan d'implémentation versionné** doit être créé avant de commencer les modifications.

Plans de référence :

- `PLAN_IMPLEMENTATION_RENCONTRES_1_A_5.md` — état, ordre des tâches, points de reprise et tâches optionnelles pour le bloc HTML/CSS;
- `PLAN_RENCONTRES_6_A_15.md` — **référence pédagogique canonique pour la séquence JavaScript et la fin de session**;
- `PLAN_IMPLEMENTATION_RENCONTRES_6_A_15.md` — **plan opérationnel pour placer la théorie et les exercices historiques avant toute révision qualitative**.

Ces plans doivent être mis à jour après chaque lot cohérent de travail afin qu'une interruption ou un changement d'agent ne fasse pas perdre l'état réel du chantier.

## Déploiement et dépôts

### Dépôt de travail

`emcmp/Z03`

C'est le dépôt utilisé pour la refonte, les essais et la prévisualisation personnelle.

### Dépôt officiel

`departement-info-cem/z03`

Il demeure la cible de publication du cours lorsqu'une version est prête. La synchronisation vers ce dépôt doit être une action explicite.

La configuration Docusaurus doit rester portable afin que la même source puisse fonctionner dans les deux dépôts.

## Décisions prises

### 2026-08-18

- Utiliser le site du 905 comme base Docusaurus de la refonte.
- Effectuer le travail courant dans `emcmp/Z03`.
- Conserver `departement-info-cem/z03` comme cible de publication officielle.
- Utiliser partout l'identité **Z03 - Introduction à la programmation web**.
- Retirer toute référence à l'acronyme ou à l'identité du programme multimédia d'origine; Z03 est un cours à option autonome.
- Ajouter au cours les fondations HTML et CSS qui ne peuvent pas être supposées acquises.
- Conserver une partie du contenu JavaScript du 905, en l'adaptant au niveau du public Z03.
- Limiter pour l'instant la séquence héritée aux cours 0 à 15; retirer les cours 16 à 30, qui dépassent le temps disponible dans Z03.
- Retirer tous les travaux pratiques hérités du 905 ainsi que leur entrée de navigation; les futurs TP seront conçus spécifiquement pour Z03.
- Valider le site avec un build Docusaurus avant de considérer un changement terminé.
- Utiliser des fichiers `AGENTS.md` pour partager le contexte et les conventions avec Codex.

### 2026-08-19

- Finaliser d'abord la progression complète des rencontres 1 à 5 avant de poursuivre la refonte détaillée de JavaScript.
- Conserver le GPT-concepteur comme responsable principal des décisions pédagogiques et de la rédaction.
- Utiliser Codex surtout pour des tâches techniques, mécaniques ou de vérification dont la portée est explicitement documentée.
- Documenter les chantiers importants avec un plan d'implémentation à états explicites avant de commencer les modifications, afin de rendre le travail reprenable après interruption.
- Utiliser `PLAN_IMPLEMENTATION_RENCONTRES_1_A_5.md` comme plan opérationnel actif pour terminer le bloc HTML/CSS.

### 2026-08-26

- Adopter `PLAN_RENCONTRES_6_A_15.md` comme **référence canonique de planification** pour la suite JavaScript.
- Terminer toute nouvelle matière essentielle au plus tard à la **rencontre 12** afin de libérer la rencontre 13.
- Réserver **R13** à un TP, une activité d'intégration ou du travail supervisé; conserver **R14** comme buffer sans nouvelle matière essentielle; conserver **R15** pour l'examen final de 30 %.
- Adopter pour la première implantation JavaScript le principe **placement avant révision** : déplacer la théorie et les exercices historiques aux bonnes rencontres sans les réécrire, puis seulement ensuite entreprendre leur amélioration.
- Accepter qu'un exercice contienne du code d'infrastructure utilisant une notion non encore enseignée en détail si l'étudiant n'a pas à produire cette partie et si l'exercice fonctionne déjà.
- Mapping stabilisé : ancien 2 → R6; ancien 3 → R7; anciens 4 + 14 → R8 avec labo 14 ex. 1–2 en R8; anciens 5 + 6 → R9; ancien 11 → R10; anciens 12 + 15 → R11 avec labo 15 ex. 1–3; ancien 13 + labo 15 ex. 4 → R12.
- Les exercices 3–4 du labo 14 sont conservés comme candidats pour R12/R13 plutôt que d'être forcés en R8.
- `querySelectorAll` est placé en R11 avec les tableaux et le parcours; l'exercice 4 du labo 15 passe en R12 à cause de ses paramètres et retours.
- Le choix de `for` comme éventuelle boucle principale demeure une **piste de révision future**, mais la première implantation conserve le cours/labo 11 historiques tels quels (`while` / `do...while`) afin de ne pas réécrire prématurément le matériel.
- `push`, `pop` et `splice` sont conservés dans le matériel initial; leur importance finale sera réévaluée plus tard.
- Les labos 16 et 21–26 demeurent un réservoir de matériel éprouvé pour intégration, reprise ou enrichissement; ils ne sont pas automatiquement ajoutés au noyau.
- Créer et utiliser `PLAN_IMPLEMENTATION_RENCONTRES_6_A_15.md` pour guider l'ordre de migration structurelle avant toute révision pédagogique.

## Questions à trancher pendant la refonte

- Après implantation complète de R6–R12, quelles notions JavaScript peuvent réellement être retirées ou rendues facultatives sans affaiblir le TP ni l'examen final?
- La boucle principale finale doit-elle devenir `for`, ou le matériel `while` historique reste-t-il préférable une fois observé dans la nouvelle séquence?
- Quels exercices du matériel avancé sont les meilleurs candidats pour R13?
- Quel TP d'intégration exploite le mieux le noyau appris d'ici R12?
- Quelles notions du matériel Z03/905 sont réellement nécessaires à ce TP et à l'examen final?

Mettre à jour ce document lorsque des décisions structurantes sont prises.