# Plan d'implémentation — rencontres 6 à 15

**Statut du plan : actif**  
**Dernière mise à jour : 2026-08-26**

Ce document est le **plan opérationnel de travail** pour mettre en place la séquence JavaScript des rencontres 6 à 15.

Il complète `PLAN_RENCONTRES_6_A_15.md`, qui demeure la référence pédagogique canonique. Le présent document répond surtout à la question : **dans quel ordre placer la théorie et les exercices existants, avec quelles limites, avant de commencer leur révision qualitative?**

## Décision de méthode — placement avant révision

La première implantation doit privilégier le matériel historique déjà utilisé et testé.

### Règle principale

> **Dans cette première passe, on place la théorie et les exercices aux bonnes rencontres sans les réécrire.**

Conséquences :

- conserver les exercices historiques tels quels autant que possible;
- conserver les blocs de théorie historiques tels quels autant que possible;
- déplacer ou regrouper les sources pour construire la nouvelle séquence R6–R15;
- ne pas nettoyer maintenant le style, le ton, les répétitions ou les choix de code des exercices;
- ne pas réécrire la théorie simplement pour qu'elle corresponde déjà à la version pédagogique idéale envisagée pour plus tard;
- noter les irritants ou pistes d'amélioration rencontrés, mais les repousser à une phase de révision après que toute la séquence soit en place et fonctionnelle.

### Code fourni plus avancé que la notion pratiquée

Il est **acceptable** qu'un exercice contienne du code fourni utilisant une notion qui n'a pas encore été enseignée en détail, si cette notion sert seulement d'infrastructure pour permettre à l'étudiant de pratiquer la cible réelle de l'exercice.

Exemples possibles :

- une fonction `init()` déjà fournie;
- un écouteur d'événement déjà branché;
- `event.currentTarget` utilisé dans du code que l'étudiant n'a pas à écrire;
- une fonction auxiliaire, un ternaire ou un autre mécanisme présent dans une partie du code fournie comme infrastructure;
- un moteur de jeu ou une logique plus complexe fournie, alors que l'étudiant ne complète qu'une ou deux fonctions ciblées.

La présence d'une telle ligne **n'oblige pas à ajouter immédiatement cette notion à la théorie**. On distingue ce que l'étudiant doit produire et comprendre de ce qui sert de mécanisme technique fourni.

### Modifications minimales permises pendant la première implantation

On peut effectuer les ajustements mécaniques nécessaires pour que le matériel fonctionne à son nouvel emplacement :

- titre ou numéro de rencontre;
- métadonnées Docusaurus;
- chemins relatifs;
- liens vers les fichiers d'exercices;
- navigation;
- copie ou déplacement d'assets;
- très petit ajout technique nécessaire au déclenchement d'un exercice ou à son intégration dans la nouvelle structure.

Ces ajustements ne doivent pas changer la tâche pédagogique demandée à l'étudiant. Si un exercice fonctionne déjà tel quel, **on ne touche pas à son code dans cette passe**.

## Ce qui est explicitement hors portée de cette passe

- réécrire ou moderniser les exercices;
- remplacer systématiquement le code fourni jugé trop avancé;
- harmoniser tous les exemples selon une nouvelle convention;
- enlever les répétitions dans les laboratoires;
- simplifier la théorie;
- changer la forme de boucle utilisée dans les sources historiques;
- refaire les formulations ou l'humour des exercices;
- redessiner les interfaces des exercices;
- décider maintenant de la version finale du TP R13;
- finaliser la grille de l'examen R15.

Ces travaux appartiennent à une **phase de révision pédagogique ultérieure**, lorsque théorie et exercices auront d'abord été placés et validés dans la nouvelle séquence.

# Répartition stabilisée du matériel

## Vue d'ensemble

| Rencontre | Théorie historique à placer | Exercices historiques à placer | Remarque |
|---|---|---|---|
| **R6** | ancien cours 2 — variables et affectation | labo 2 | déplacement direct; fondation JavaScript |
| **R7** | ancien cours 3 — DOM et fonctions | labo 3 | conserver le bloc ensemble |
| **R8** | ancien cours 4 — portée/événements/styles + ancien cours 14 — classes/attributs | labo 4 + labo 14 exercices 1–2 | mini-quiz de 10 % au début; interactivité ensuite |
| **R9** | anciens cours 5 + 6 — conditions et opérateurs logiques | labos 5 + 6 | placer les deux blocs dans la même rencontre sans réécriture initiale |
| **R10** | ancien cours 11 — boucles | labo 11 | conserver initialement le matériel de boucle tel quel; choix/simplification reportés |
| **R11** | ancien cours 12 — tableaux + ancien cours 15 — tableaux d'éléments / `querySelectorAll` | labo 12 + labo 15 exercices 1–3 | progression tableaux → parcours → plusieurs éléments DOM |
| **R12** | ancien cours 13 — paramètres et retours | labo 13 + labo 15 exercice 4 | fonctions réutilisables et intégration des acquis précédents |
| **R13** | aucune nouvelle théorie essentielle | candidats d'intégration, notamment labo 14 exercices 3–4 au besoin | TP / intégration / travail supervisé; sélection finale à faire après R6–R12 |
| **R14** | aucune nouvelle théorie essentielle | exercices de reprise ou suite du TP | buffer, rattrapage, reprises, révision |
| **R15** | aucune nouvelle théorie | — | examen final de 30 % |

## R6 — Variables et premières instructions JavaScript

**Sources :** ancien cours 2 + labo 2.

Objectif de la première implantation : déplacer le bloc existant vers R6 sans le réécrire.

À préserver pour l'instant :

- variables et affectation;
- nombres et chaînes;
- opérations simples;
- concaténation / interpolation présentes dans le matériel;
- console et essais rapides.

**État : À faire**

## R7 — DOM de base et fonctions simples

**Sources :** ancien cours 3 + labo 3.

Le bloc doit rester ensemble autant que possible. L'inventaire a montré que DOM et fonctions y sont suffisamment liés pour qu'une séparation ne procure pas de gain clair dans la première implantation.

**État : À faire**

## R8 — Interactivité, événements, classes et attributs

**Sources de théorie :** ancien cours 4 + ancien cours 14.  
**Sources d'exercices :** labo 4 + labo 14 exercices 1–2.

Le **mini-quiz de 10 %** a lieu au début de la rencontre et porte seulement sur la matière déjà enseignée, principalement R6 et R7.

Après le quiz, placer le matériel sur :

- portée locale/globale telle qu'elle existe dans la source;
- événements et `addEventListener`;
- manipulation du DOM;
- `classList`;
- attributs;
- stockage d'un élément HTML dans une variable.

### Décision sur le labo 14

Le labo 14 forme réellement deux blocs :

- **exercices 1–2** : classes, attributs et manipulation d'un élément — destination R8;
- **exercices 3–4** : boucles, paramètres, retours et intégration plus avancée — à conserver pour R12/R13 plutôt que de les forcer en R8.

Cette scission est une **décision de placement**, pas une réécriture des exercices.

**État : À faire**

## R9 — Conditions

**Sources :** anciens cours 5 + 6 et labos 5 + 6.

Les deux blocs sont complémentaires :

- booléens, comparaisons et `if`;
- `else` et `else if`;
- `&&` et `||`;
- exercices intégrateurs utilisant le DOM déjà rencontré.

Dans cette première passe, on ne cherche pas à fusionner physiquement ou réécrire les exercices pour éliminer les répétitions. On les place simplement tous sous R9 dans un ordre cohérent.

**État : À faire**

## R10 — Boucles

**Sources :** ancien cours 11 + labo 11.

L'analyse des exercices suggère qu'une boucle `for` pourrait éventuellement être une forme principale plus naturelle pour la version finale du cours. Cependant, la théorie historique du cours 11 enseigne explicitement `while` puis `do...while` et le principe actuel est de **ne pas réécrire la théorie dans la première implantation**.

Décision pour cette passe :

- placer le cours 11 et le labo 11 tels quels en R10;
- ne pas convertir maintenant les exercices vers `for`;
- conserver la préférence éventuelle pour `for` comme **piste de révision ultérieure**;
- réévaluer ensemble théorie + exercices de R10 seulement après que R6–R12 fonctionnent comme séquence complète.

Ainsi, le choix final de la forme principale de boucle n'est plus un blocage pour la migration structurelle.

**État : À faire**

## R11 — Tableaux, parcours et plusieurs éléments DOM

**Sources de théorie :** ancien cours 12 + ancien cours 15.  
**Sources d'exercices :** labo 12 + labo 15 exercices 1–3.

Ordre de placement recommandé :

1. tableaux;
2. index et `length`;
3. opérations sur les tableaux déjà présentes (`push`, `pop`, `splice`, etc.);
4. parcours d'un tableau;
5. `querySelectorAll`;
6. parcours d'une collection d'éléments HTML.

Le cours 15 est particulièrement naturel après le cours 12, puisqu'il présente `querySelectorAll` comme un prolongement direct de l'idée de tableau/collection et de parcours.

Dans cette passe, les exercices du labo 12 restent inchangés, même si une future révision décide éventuellement d'en réduire le nombre.

**État : À faire**

## R12 — Paramètres, retours et intégration

**Sources de théorie :** ancien cours 13.  
**Sources d'exercices :** labo 13 + labo 15 exercice 4.

Le labo 15 exercice 4 est déplacé ici parce qu'il combine :

- `querySelectorAll` déjà vu en R11;
- parcours;
- fonction avec paramètres;
- valeur retournée;
- réutilisation de la fonction dans plusieurs situations.

C'est une scission justifiée du labo 15 parce que cet exercice dépend clairement du bloc de fonctions réutilisables enseigné en R12.

Toute **nouvelle matière essentielle** doit être terminée à la fin de R12.

**État : À faire**

## R13 — Intégration / TP / travail supervisé

Aucune nouvelle notion essentielle.

Les exercices 3–4 du labo 14 sont des candidats intéressants à conserver comme matériel d'intégration parce qu'ils combinent plusieurs acquis sans exiger de réécriture immédiate. Ils ne sont toutefois pas encore déclarés obligatoires : la sélection finale de R13 doit se faire après validation de la charge réelle de R6–R12 et du futur TP.

Les labos historiques plus tardifs (16, 21–26) peuvent demeurer un **réservoir d'exercices éprouvés**. Ils ne sont pas intégrés automatiquement au noyau; on les réévaluera seulement si R13, les reprises ou le TP ont besoin de matériel supplémentaire.

**État : À faire après R6–R12**

## R14 — Buffer

Aucune nouvelle matière essentielle.

Utilisations possibles :

- suite du TP;
- rattrapage;
- reprise;
- pratique;
- révision avant l'examen.

**État : À faire après R13**

## R15 — Évaluation finale

Rencontre réservée à l'évaluation sommative finale de **30 %**.

L'examen ne doit dépendre que de notions réellement enseignées et pratiquées dans le noyau final du cours.

**État : À faire plus tard**

# Ordre d'implémentation

## Phase 0 — Stabiliser la documentation

**État : En cours**

- consigner le mapping ci-dessus;
- mettre à jour `PLAN_RENCONTRES_6_A_15.md` pour distinguer clairement placement initial et révision ultérieure;
- ne modifier aucun contenu étudiant pendant cette phase.

## Phase 1 — Placer R6 et R7

**État : À faire**

- déplacer/copier la théorie historique 2 et 3 vers les pages R6 et R7;
- rattacher les labos 2 et 3;
- ne modifier le contenu que pour les ajustements mécaniques indispensables;
- vérifier que les fichiers, liens et exercices fonctionnent.

## Phase 2 — Placer R8 et R9

**État : À faire**

- placer cours 4 + 14 sous R8;
- placer labo 4 + labo 14 exercices 1–2 sous R8;
- préserver R8 début de rencontre pour le mini-quiz;
- placer cours 5 + 6 et labos 5 + 6 sous R9;
- ne pas encore simplifier les répétitions.

## Phase 3 — Placer R10 à R12

**État : À faire**

- R10 : cours/labo 11 tels quels;
- R11 : cours/labo 12, puis cours 15 + labo 15 exercices 1–3;
- R12 : cours/labo 13 + labo 15 exercice 4;
- conserver les exercices 3–4 du labo 14 disponibles pour la phase d'intégration.

## Phase 4 — Construire l'espace R13–R15

**État : À faire après validation de R6–R12**

- R13 : choisir le TP ou l'activité d'intégration;
- R14 : conserver un vrai buffer;
- R15 : réserver l'examen final.

## Phase 5 — Validation structurelle

**État : À faire**

Avant toute révision qualitative :

- vérifier navigation et liens;
- vérifier que chaque archive/fichier d'exercice est accessible;
- tester les exercices déplacés sans les modifier;
- vérifier les assets et chemins relatifs;
- exécuter le build Docusaurus;
- consigner dans `SUIVI_CONTENU.md` les destinations réellement implantées.

## Phase 6 — Révision pédagogique ultérieure

**État : Hors portée de la première implantation**

Seulement après que la séquence complète fonctionne :

- relire la théorie rencontre par rencontre;
- repérer les redondances;
- décider si la boucle principale doit devenir `for`;
- décider quoi faire de `do...while` et des boucles imbriquées;
- évaluer si certains événements, styles DOM, opérateurs ou méthodes de tableaux peuvent être allégés;
- nettoyer, si nécessaire, le code fourni qui crée réellement de la confusion;
- améliorer les exercices un à un **sans perdre leur comportement éprouvé**;
- aligner définitivement le TP R13 et l'examen R15 sur le noyau retenu.

# Notes de révision à conserver sans agir maintenant

Ces éléments ont été relevés pendant l'analyse, mais **ne doivent pas provoquer de modification dans la première implantation** :

- certains exercices utilisent des ternaires ou d'autres constructions dans du code fourni avant que ces notions soient enseignées;
- le labo 4 montre plusieurs types d'événements et plusieurs manipulations directes de `.style`;
- le cours/labo 11 présente plusieurs formes de boucle;
- certains exercices avancés contiennent beaucoup de code d'infrastructure fourni;
- la théorie historique comporte parfois davantage de détails que le noyau final probablement nécessaire.

Ils sont conservés comme éléments à examiner lors de la phase 6.

# Définition de « première implantation terminée »

La première implantation R6–R15 est terminée lorsque :

1. la théorie historique retenue est placée aux rencontres prévues;
2. les exercices historiques retenus sont accessibles aux bonnes rencontres;
3. aucun exercice n'a été réécrit sauf nécessité technique explicitement documentée;
4. aucune théorie n'a été réécrite au-delà des ajustements mécaniques nécessaires;
5. les liens et assets fonctionnent;
6. le build Docusaurus réussit;
7. `SUIVI_CONTENU.md` reflète les déplacements réellement effectués;
8. R13 et R14 ne contiennent aucune nouvelle notion essentielle;
9. R15 demeure réservé à l'évaluation finale;
10. les pistes d'amélioration sont conservées pour la phase de révision, sans être mélangées à la migration structurelle.
