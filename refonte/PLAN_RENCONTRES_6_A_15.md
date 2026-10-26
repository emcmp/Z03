# Plan de refonte — Rencontres 6 à 15

**Mise à jour : 2026-10-26**

**Séquence pédagogique révisée et approuvée :** R10 = paramètres et retours; R11 = boucles; R12 = tableaux et parcours. `do...while` facultatif; `push`, `pop`, `splice` conservés; `querySelectorAll` et les exercices associés mis en réserve **sans effacer les sources historiques**. R13–R14 sont consacrées au TP3, avec possibilité d'un court formatif.

Ce document est la **référence pédagogique canonique pour la planification des rencontres 6 à 15** pendant la refonte de Z03.

Il fixe la destination pédagogique des blocs historiques du 905. Le plan opérationnel correspondant se trouve dans `PLAN_IMPLEMENTATION_RENCONTRES_6_A_15.md`.

Lorsque ce document entre en conflit avec un ancien mapping R6–R15 dans `SUIVI_CONTENU.md`, `SOMMAIRE_COUVERTURE_RENCONTRES.md` ou `MIGRATION_LABORATOIRES_CODEX.md`, **le présent document prévaut pour la séquence R6–R15**.

## Contraintes structurantes

- HTML/CSS occupe les rencontres 1 à 5.
- JavaScript commence à la rencontre 6.
- Le mini-quiz supervisé de la rencontre 8 vaut **10 %** et porte uniquement sur de la matière enseignée avant le quiz, donc principalement R6 et R7.
- Toute nouvelle matière essentielle doit être terminée **au plus tard à la rencontre 12**.
- La rencontre 13 est réservée à un **TP, une activité d'intégration ou du travail supervisé**.
- La rencontre 14 demeure un **buffer** : TP, rattrapage, reprises, pratique ou révision; aucune nouvelle notion essentielle ne doit en dépendre.
- La rencontre 15 demeure réservée à l'**évaluation sommative finale de 30 %**.
- Les notions facultatives ne doivent pas devenir implicitement nécessaires à une évaluation.

## Principe de migration — placer avant d'améliorer

La première implantation doit partir du matériel historique déjà utilisé et testé.

> **On place d'abord la théorie et les exercices aux bonnes rencontres sans les réécrire. La révision qualitative vient ensuite.**

Conséquences :

- conserver la théorie historique telle quelle autant que possible;
- conserver les exercices historiques tels quels autant que possible;
- accepter qu'un exercice contienne du code d'infrastructure utilisant une notion pas encore enseignée en détail si l'étudiant n'a pas à produire cette partie;
- permettre les ajustements mécaniques nécessaires au nouvel emplacement : titres, numérotation, liens, chemins, navigation, assets ou petit branchement technique;
- ne pas modifier un exercice qui fonctionne déjà simplement parce que son code fourni comporte une construction plus avancée;
- noter les améliorations possibles, puis les traiter dans une passe ultérieure lorsque toute la séquence R6–R12 est en place.

La règle de migration minimale demeure valide : ne scinder un laboratoire que lorsque ses exercices forment réellement des blocs pédagogiques distincts.

## Matrice stabilisée R6–R15

| Rencontre | Objectif principal | Théorie historique | Exercices historiques | Remarque |
|---|---|---|---|---|
| **R6** | Entrer en programmation avec des valeurs et instructions simples | ancien cours 2 | labo 2 | déplacement direct |
| **R7** | Premier effet JavaScript visible : DOM + fonctions simples + portée des variables | ancien cours 3 + portée de l'ancien cours 4 | labo 3 + labo 4 ex. 1 | garder le bloc ensemble et y ajouter la portée |
| **R8** | Interactivité, événements, styles, classes et attributs | ancien cours 4 sans la portée + ancien cours 14 | labo 4 ex. 2–5 + portions pertinentes du labo 14 | mini-quiz 10 % au début; section `.style` conservée |
| **R9** | Faire prendre des décisions au programme | anciens cours 5 + 6 | labos 5 + 6 | placer les deux blocs ensemble sans les réécrire |
| **R10** | Déclarer et appeler des fonctions réutilisables avec paramètres et retours | ancien cours 13 | labo 13 exercices 1 et 2 | théorie intégrale, exercices 3 et 4 conservés en réserve |
| **R11** | Répéter des traitements dans le DOM | ancien cours 11 | labo 11 | `while` essentiel, `do...while` facultatif |
| **R12** | Tableaux, opérations et parcours | ancien cours 12 | labo 12 | `push`, `pop`, `splice` conservés; `querySelectorAll` en réserve; lancement TP3 |
| **R13** | TP / intégration / travail supervisé | aucune nouvelle théorie | candidats : labo 14 ex. 3–4 et autres exercices éprouvés au besoin | sélection finale après mise en place R6–R12 |
| **R14** | TP / rattrapage / reprises / révision | aucune nouvelle théorie | matériel de reprise au besoin | buffer |
| **R15** | Évaluation sommative finale | — | — | examen final 30 % |

## Décisions de placement confirmées

### Ancien 2 → R6

Variables, affectation, nombres, chaînes, opérations simples et console.

### Ancien 3 → R7

DOM de base et fonctions simples restent ensemble. La portée locale/globale est déplacée de R8 vers R7, avec l'exercice 1 de l'ancien labo 4 comme pratique.

### Anciens 4 + 14 → R8, avec scission ciblée du labo 14

Le cours 14 complète naturellement le bloc DOM/interactivité du cours 4. La portée des variables et le premier exercice du labo 4 sont toutefois déplacés vers R7. La section `.style` de R8 demeure inchangée.

Le labo 14 est toutefois composé de deux blocs distincts :

- **exercices 1–2 → R8/R9 à répartir au besoin** : `classList`, attributs, manipulation d'un élément; `classList.contains()` appartient à R9 avec les conditions;
- **exercices 3–4 → réserve R12/R13** : ils dépendent déjà de boucles, paramètres, retours et intégration plus avancée.

Cette scission ne nécessite aucune réécriture des exercices.

### Anciens 5 + 6 → R9

Fusion de rencontre confirmée. Les deux cours et les deux laboratoires sont placés sous R9. Les répétitions pourront être évaluées seulement lors de la révision ultérieure.

### Ancien 13 → R10 : paramètres et retours

La théorie historique est conservée intégralement. Le laboratoire 13 accompagne R10 avec ses **exercices 1 et 2 obligatoires**; ses exercices 3 et 4 demeurent dans les ressources historiques, sans être exigés avant les boucles et les tableaux.

### Ancien 11 → R11 : DOM et boucles

Le cours et le laboratoire historiques sur les boucles sont repositionnés en R11. `while` reste à maîtriser; `do...while` devient facultatif, sans supprimer son contenu. La révision qualitative de R11 reste à faire.

### Ancien 12 → R12 : tableaux et parcours

Les tableaux, indices, `length`, parcours avec une boucle et `push()`, `pop()`, `splice()` restent au programme (méthodes utiles au TP3 historique). La révision détaillée des exercices R12 reste à faire.

### Ancien 15 → réserve : `querySelectorAll()`

La théorie et les exercices du laboratoire 15 sont conservés physiquement mais retirés de la navigation pédagogique obligatoire. Tant que cette notion n'est pas enseignée, elle n'est ni un préalable au TP3 ni une exigence pour l'examen.


## Notions à conserver dans le matériel initial

Pendant la première implantation, on ne retire pas des notions simplement pour compresser le cours. On conserve le matériel retenu et on observe la charge réelle.

Notamment :

- variables, nombres, chaînes, opérations;
- DOM : `querySelector`, `textContent`;
- fonctions simples;
- événements présents dans les exercices historiques;
- `classList` et attributs;
- conditions et opérateurs logiques présents dans les cours 5–6;
- boucles présentes dans le cours/labo 11;
- tableaux, index, `length`, `push`, `pop`, `splice`;
- paramètres et `return`;
- `querySelectorAll` (en réserve, hors programme obligatoire).

La présence d'une notion dans du **code fourni** n'implique pas automatiquement qu'elle devient une compétence à évaluer.

## Pistes de révision ultérieure — ne pas appliquer pendant la migration

Les analyses ont relevé plusieurs pistes qui pourront être examinées une fois la séquence fonctionnelle :

- privilégier éventuellement `for` comme forme principale de boucle;
- retirer ou rendre facultatif `do...while` si aucun besoin réel ne le justifie;
- réduire les répétitions dans les labos 5–6 et 12;
- revoir la quantité de `.style` et le catalogue d'événements dans le bloc R8;
- vérifier si certaines méthodes de tableaux méritent moins de poids;
- nettoyer certains morceaux de code fourni seulement s'ils causent réellement de la confusion;
- compresser certaines parties de théorie historique;
- sélectionner les meilleurs exercices avancés pour R13.

Ces points sont des **notes de révision**, pas des instructions d'implantation immédiate.

## `querySelectorAll` (en réserve)

La théorie et les exercices du laboratoire 15 demeurent conservés. Ils ne sont plus au programme obligatoire et ne doivent pas être exigés aux évaluations sans enseignement explicite.


## R13 et matériel historique plus avancé

R13 demeure volontairement sans nouvelle matière essentielle.

Les exercices 3–4 du labo 14 sont des candidats d'intégration. Les labos historiques 16 et 21–26 demeurent également disponibles comme **réservoir de matériel éprouvé**, sans être automatiquement ajoutés au noyau.

Ils pourront servir au TP, aux reprises ou à l'enrichissement seulement après validation de la charge réelle de R6–R12.

## Prochaine étape

Suivre `PLAN_IMPLEMENTATION_RENCONTRES_6_A_15.md`.

La prochaine phase consiste à :

1. placer la théorie historique aux nouvelles rencontres;
2. rattacher les exercices historiques correspondants;
3. effectuer seulement les ajustements mécaniques indispensables;
4. vérifier que tout fonctionne;
5. mettre à jour `SUIVI_CONTENU.md` avec les déplacements réellement réalisés;
6. **ensuite seulement**, entreprendre une révision qualitative rencontre par rencontre.


### Convention des pages de laboratoire

Les pages Docusaurus de laboratoire servent principalement à présenter et télécharger le matériel. Les consignes détaillées restent dans les fichiers téléchargeables, sauf décision pédagogique explicite.
