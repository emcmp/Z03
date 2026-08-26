# Mandat Codex — Inventaire pilote des laboratoires historiques

**Mise à jour : 2026-08-26**

Ce document décrit la **prochaine tâche Codex** pour la refonte des rencontres 6 à 15.

Il doit être lu avec :

- `PLAN_RENCONTRES_6_A_15.md` — séquence pédagogique canonique et mapping de travail;
- `SUIVI_CONTENU.md` — registre historique de migration;
- `MIGRATION_LABORATOIRES_CODEX.md` — ancien plan de migration, utile comme source historique mais dont certains mappings R6–R13 sont maintenant dépassés.

## Portée actuelle : phase pilote seulement

La tâche actuelle est un **inventaire factuel pilote**.

L'objectif n'est pas encore d'inventorier tous les anciens laboratoires. Il faut d'abord valider que Codex :

- ouvre correctement les formats historiques;
- distingue bien les exercices, notions et prérequis;
- produit un niveau de détail utile au concepteur pédagogique;
- respecte le principe de migration minimale;
- ne transforme pas l'inventaire en décision de migration.

### Sources autorisées dans ce pilote

Inventorier **uniquement** :

1. `420905_lab2.docx`;
2. `420905_lab3.zip`.

Ne pas ouvrir les autres archives pendant ce pilote, même si elles sont présentes dans le même dossier.

### Pourquoi ces deux sources

Ce choix teste deux situations complémentaires :

- **labo 2** : format `.docx` et mapping relativement direct vers R6 — variables et premières instructions JavaScript;
- **labo 3** : format `.zip` et contenu potentiellement plus mixte autour du DOM et des fonctions, avec l'hypothèse actuelle de le garder autant que possible comme bloc en R7.

Si le rapport pilote est satisfaisant, les autres sources seront ouvertes dans une ou plusieurs phases ultérieures.

## Sources hors portée pour le pilote

Ne pas inventorier maintenant :

- `420905_lab4.zip`;
- `420905_lab5.zip`;
- `420905_lab6.zip`;
- `420905_lab11.zip`;
- `420905_lab12.zip`;
- `420905_lab13.zip`;
- `420905_lab14.zip`;
- `420905_lab15.zip`;
- `420905_lab16.zip`;
- `420905_lab21.zip`;
- `420905_lab22.zip`;
- `420905_lab23.zip`.

Leur présence dans le dépôt ne constitue pas une autorisation de les ouvrir dans cette phase.

## Mapping de travail à tester

| Source héritée | Destination de travail actuelle | Hypothèse à tester |
|---|---|---|
| labo 2 | **R6** | déplacement direct; variables, valeurs, opérations simples, chaînes, console |
| labo 3 | **R7** | conserver le bloc ensemble autant que possible; DOM de base + fonctions simples |

Le mapping est une **hypothèse à vérifier**, pas une décision à imposer aux exercices.

## Informations à relever pour chaque laboratoire

Pour chacun des deux documents :

1. nom exact de la source;
2. fichiers contenus dans l'archive, lorsqu'il s'agit d'un ZIP;
3. nombre d'exercices ou d'étapes distinctes;
4. titre ou courte description de chaque exercice;
5. objectif apparent de chaque exercice;
6. notions JavaScript / DOM réellement utilisées;
7. prérequis nécessaires;
8. présence de fichiers de départ, images, HTML, CSS ou JavaScript fournis;
9. dépendances entre exercices ou fichiers;
10. progression apparente de difficulté;
11. notions qui ne correspondent pas au noyau actuellement prévu de la rencontre cible;
12. éléments qui pourraient être retirés ou allégés sans détruire l'exercice;
13. estimation qualitative : `conserver presque tel quel`, `alléger`, `fusionner`, `extra`, `retirer à envisager`.

## Niveau de détail attendu par exercice

Le rapport ne doit pas se limiter à écrire, par exemple, « variables et fonctions » pour un laboratoire complet.

Pour chaque exercice ou étape significative, donner assez de détail pour que le concepteur puisse répondre à des questions comme :

- l'exercice fonctionne-t-il encore si une notion précise est retirée du cours?;
- faut-il enseigner une nouvelle syntaxe uniquement pour conserver cet exercice?;
- l'exercice réinvestit-il une notion déjà introduite ou en introduit-il une autre?;
- le labo 3 forme-t-il réellement un bloc cohérent DOM + fonctions ou contient-il deux ensembles indépendants?;
- quelle portion de l'exercice constitue la difficulté réelle pour un débutant?

Il n'est pas nécessaire de reproduire toutes les consignes mot pour mot. Résumer précisément la tâche et les mécanismes utilisés.

## Questions spécifiques au labo 2

Le rapport doit notamment préciser :

- quelles formes de variables et d'affectation sont utilisées;
- quels opérateurs arithmétiques sont réellement nécessaires;
- comment les chaînes de caractères sont manipulées;
- si la concaténation est utilisée et si les chaînes interpolées pourraient la remplacer ou la compléter;
- si le labo dépend déjà du DOM, de fonctions, de conditions ou d'autres notions prévues plus tard;
- quelles étapes seraient de bons exercices R6 presque sans modification.

## Questions spécifiques au labo 3

Le rapport doit notamment préciser :

- quels exercices utilisent `querySelector`;
- quels exercices utilisent `textContent` ou une autre manipulation DOM;
- où les fonctions sont déclarées et appelées;
- si DOM et fonctions sont réellement imbriqués dans les mêmes exercices;
- si certains exercices exigent déjà des événements, des conditions, des paramètres ou des valeurs de retour;
- si le laboratoire peut raisonnablement rester presque entier en R7;
- s'il existe une raison pédagogique forte de le scinder malgré notre préférence pour la migration minimale.

## Format du livrable pilote

Créer un rapport Markdown sous :

`refonte/INVENTAIRE_LABORATOIRES_PILOTE.md`

Structure attendue :

### 1. Résumé exécutif

Quelques paragraphes seulement : ce qui a été trouvé, qualité générale des exercices, et principaux écarts avec le mapping de travail.

### 2. Tableau synthèse

| Source | Format | Nombre d'exercices | Notions dominantes | Mapping R6/R7 confirmé? | Risque principal |
|---|---|---:|---|---|---|

### 3. Labo 2 — inventaire détaillé

Un tableau où chaque ligne représente un exercice ou une étape significative :

| Exercice / étape | Tâche demandée | Notions utilisées | Prérequis | Fichiers fournis | Difficulté / point sensible | Observation de migration |
|---|---|---|---|---|---|---|

Puis une courte synthèse :

- ce qui peut être conservé;
- ce qui semble à alléger;
- notions hors R6 rencontrées;
- questions à retourner au concepteur.

### 4. Labo 3 — inventaire détaillé

Même format que pour le labo 2.

Ajouter explicitement une analyse :

- **cohésion du laboratoire** : faible / moyenne / forte;
- **scission nécessaire?** oui / non / incertain;
- justification factuelle.

### 5. Validation du format d'inventaire

Terminer le rapport par une courte section indiquant :

- ce qui a été facile ou difficile à inventorier;
- les informations qui n'étaient pas disponibles dans les sources;
- si ce format de rapport semble applicable aux phases suivantes sans changement majeur.

## Interdictions pendant cette étape

Codex ne doit pas :

- ouvrir d'autres laboratoires que 2 et 3;
- modifier les pages sous `web/docs/01-cours/`;
- modifier les pages sous `web/docs/02-labos/`;
- renommer ou déplacer les archives historiques;
- modifier `web/sidebars.js`;
- supprimer des fichiers;
- réécrire les exercices;
- créer de nouveaux laboratoires R6 ou R7;
- décider seul qu'une notion doit être retirée;
- appliquer automatiquement l'ancien mapping de `MIGRATION_LABORATOIRES_CODEX.md` lorsqu'il contredit `PLAN_RENCONTRES_6_A_15.md`;
- commencer la phase suivante après avoir terminé le rapport pilote.

## Critère de fin du pilote

La tâche est terminée lorsque :

- les deux sources autorisées ont été inventoriées;
- le rapport `refonte/INVENTAIRE_LABORATOIRES_PILOTE.md` a été créé;
- aucune autre archive n'a été ouverte;
- aucun contenu étudiant ni fichier historique n'a été modifié;
- le rapport permet au concepteur de décider si le niveau de détail et le format conviennent avant d'autoriser la suite.

## Phases ultérieures envisagées — ne pas exécuter maintenant

Si le pilote est satisfaisant, la suite pourra être découpée ainsi :

- **phase 2** : labos 4 + 14, puis 5 + 6 — tester les deux fusions prévues R8 et R9;
- **phase 3** : labos 11 + 12 + 15 — boucles, tableaux et `querySelectorAll`, notamment pour décider de la forme principale de boucle et de la charge de R11;
- **phase 4** : labo 13 — paramètres / retours et intégration R12;
- sources 16 / 21 / 22 / 23 : **hors scope tant qu'une décision explicite ne les rend pas pertinentes**.

Chaque phase doit être autorisée séparément après lecture de la précédente.