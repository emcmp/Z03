# Refonte du cours Z03

Ce document conserve le contexte durable et les décisions de la refonte. Il sert de référence aux personnes qui travaillent sur le cours et aux agents Codex.

## Contexte

Z03 est une introduction à la programmation Web offerte comme cours optionnel. Les étudiants n'ont pas nécessairement de formation préalable en informatique ni d'expérience en programmation.

Le nouveau site Docusaurus est issu du matériel du cours 905 - Introduction à la programmation (TIM). Le 905 constitue une bonne base pour plusieurs notions de programmation JavaScript, mais il suppose que les étudiants connaissent déjà HTML et CSS.

Z03 doit donc adapter cette base plutôt que la reprendre telle quelle.

## Objectifs de la refonte

- réduire la quantité de contenu lorsque celle-ci dépasse ce qui est utile à un cours d'introduction;
- rendre le cours accessible à des étudiants sans background informatique;
- introduire les fondations du Web, notamment HTML et CSS, avant de dépendre de ces acquis;
- conserver et adapter les parties pertinentes du 905 sur la programmation et JavaScript;
- faire du site Docusaurus la référence principale du cours plutôt que de dépendre surtout de présentations PowerPoint;
- favoriser des exemples concrets et une pratique régulière;
- maintenir une progression cohérente entre cours, laboratoires et travaux pratiques.

## Principes pédagogiques

1. Partir de ce que l'étudiant peut observer dans le navigateur.
2. Introduire les notions progressivement, sans supposer de vocabulaire informatique préalable.
3. Préférer la compréhension et la pratique aux inventaires exhaustifs de fonctionnalités.
4. Une nouvelle notion devrait idéalement être accompagnée d'un exemple simple et d'une occasion de l'essayer.
5. Éviter d'enseigner une abstraction seulement parce qu'elle est courante en développement professionnel; elle doit servir l'objectif du cours.
6. Réutiliser le matériel du 905 lorsqu'il correspond au niveau visé, mais le simplifier ou le déplacer lorsque nécessaire.

## Architecture de contenu actuelle

Le matériel hérité est organisé ainsi :

- `web/docs/01-cours/` : rencontres de cours;
- `web/docs/02-labos/` : laboratoires;
- `web/docs/03-tp/` : travaux pratiques.

Cette structure peut évoluer pendant la refonte. Les changements majeurs d'organisation devraient être décidés explicitement avant de renommer ou déplacer beaucoup de fichiers.

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
- Ajouter au cours les fondations HTML et CSS qui ne peuvent pas être supposées acquises.
- Conserver une partie du contenu JavaScript du 905, en l'adaptant au niveau du public Z03.
- Limiter pour l'instant la séquence héritée aux cours 0 à 15; retirer les cours 16 à 30, qui dépassent le temps disponible dans Z03.
- Valider le site avec un build Docusaurus avant de considérer un changement terminé.
- Utiliser des fichiers `AGENTS.md` pour partager le contexte et les conventions avec Codex.

## Questions à trancher pendant la refonte

- Quelle quantité de HTML est nécessaire avant de commencer CSS et JavaScript?
- Quelles notions CSS sont essentielles pour soutenir les exercices de programmation sans transformer Z03 en cours de design Web?
- Quelles rencontres JavaScript du 905 peuvent être reprises presque telles quelles?
- Quelles notions du cours Z03 actuel peuvent être supprimées ou déplacées pour réduire la surcharge?
- Quelle progression hebdomadaire donne suffisamment de temps de pratique aux débutants?

Mettre à jour ce document lorsque des décisions structurantes sont prises.