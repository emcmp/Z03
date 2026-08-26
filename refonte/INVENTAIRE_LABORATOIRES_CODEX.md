# Mandat Codex — Inventaire des laboratoires historiques

**Mise à jour : 2026-08-26**

Ce document décrit la **prochaine tâche Codex** pour la refonte des rencontres 6 à 15.

Il doit être lu avec :

- `PLAN_RENCONTRES_6_A_15.md` — séquence pédagogique canonique et mapping de travail;
- `SUIVI_CONTENU.md` — registre historique de migration;
- `MIGRATION_LABORATOIRES_CODEX.md` — ancien plan de migration, utile comme source historique mais dont certains mappings R6–R13 sont maintenant dépassés.

## Portée

La tâche actuelle est un **inventaire factuel seulement**.

Codex ne doit effectuer **aucune migration pédagogique** et ne doit modifier aucun contenu étudiant pendant cette étape.

## Sources prioritaires à inventorier

Inventorier au minimum les sources suivantes :

- `420905_lab2.docx`;
- `420905_lab3.zip`;
- `420905_lab4.zip`;
- `420905_lab5.zip`;
- `420905_lab6.zip`;
- `420905_lab11.zip`;
- `420905_lab12.zip`;
- `420905_lab13.zip`;
- `420905_lab14.zip`;
- `420905_lab15.zip`.

Inventorier ensuite, séparément, les sources encore non mappées si elles existent toujours :

- `420905_lab16.zip`;
- `420905_lab21.zip`;
- `420905_lab22.zip`;
- `420905_lab23.zip`.

## Informations à relever pour chaque laboratoire

Pour chaque archive ou document :

1. nom exact de la source;
2. fichiers contenus dans l'archive;
3. nombre d'exercices ou étapes distinctes;
4. titre ou courte description de chaque exercice;
5. notions JavaScript / DOM réellement utilisées;
6. prérequis nécessaires;
7. présence de fichiers de départ, images, HTML, CSS ou JavaScript fournis;
8. dépendances entre exercices;
9. progression apparente de difficulté;
10. éléments qui semblent redondants avec un autre laboratoire;
11. éléments qui utilisent des notions actuellement candidates au pruning;
12. estimation qualitative : `conserver presque tel quel`, `alléger`, `fusionner`, `extra`, `retirer à envisager`.

## Comparaison avec le mapping de travail

Utiliser le mapping suivant uniquement comme **hypothèse à tester**, pas comme décision à imposer :

| Source héritée | Destination de travail actuelle |
|---|---|
| labo 2 | R6 |
| labo 3 | R7 |
| labos 4 + 14 | R8 |
| labos 5 + 6 | R9 |
| labo 11 | R10 |
| labo 12 | R11 |
| labo 15 | R11, ou R12 si R11 devient trop chargée |
| labo 13 | R12 |

Pour chaque source, indiquer si l'inventaire :

- confirme ce mapping;
- suggère une fusion différente;
- suggère qu'une source devrait rester intacte plutôt qu'être scindée;
- révèle une dépendance qui rendrait le mapping actuel difficile;
- révèle une notion utile au futur TP ou à l'examen qui risque d'être supprimée par erreur.

## Questions pédagogiques à éclairer

L'inventaire doit fournir suffisamment d'information pour répondre ensuite à ces questions :

- Peut-on garder l'ancien labo 3 presque entièrement en R7?
- Les labos 4 et 14 se combinent-ils naturellement en R8?
- Les labos 5 et 6 peuvent-ils être fusionnés en un seul parcours R9 sans perte importante?
- Quelle forme de boucle est la plus naturelle en observant les labos 11, 12 et 15?
- Le labo 12 consacre-t-il surtout sa difficulté au parcours ou aux opérations `push` / `pop` / `splice`?
- Le labo 15 peut-il être déplacé comme bloc en R11 sans surcharge? Sinon, peut-il rester intact en R12?
- Quelles notions sont réellement nécessaires pour construire un TP Web intéressant à R13–R14?
- Quelles notions sont suffisamment fondamentales pour mériter une place possible dans l'examen final?

## Interdictions pendant cette étape

Codex ne doit pas :

- modifier les pages sous `web/docs/01-cours/`;
- modifier les pages sous `web/docs/02-labos/`;
- renommer ou déplacer les archives historiques;
- modifier `web/sidebars.js`;
- supprimer des fichiers;
- réécrire les exercices;
- créer les nouveaux laboratoires R6–R12;
- décider seul qu'une notion doit être retirée;
- appliquer automatiquement l'ancien mapping de `MIGRATION_LABORATOIRES_CODEX.md` lorsqu'il contredit `PLAN_RENCONTRES_6_A_15.md`.

## Livrable attendu

Produire un rapport Markdown d'inventaire dans `refonte/` contenant :

1. un tableau synthèse de toutes les sources;
2. une section détaillée par laboratoire;
3. un tableau des notions couvertes par source;
4. une liste des doublons ou chevauchements;
5. les dépendances importantes;
6. les risques liés au pruning;
7. les écarts avec le mapping de travail R6–R12;
8. les questions qui doivent revenir au concepteur pédagogique avant toute migration.

Le rapport doit rester descriptif. Les recommandations peuvent être formulées comme **observations ou options**, jamais comme décisions définitives.