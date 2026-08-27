# Révision pédagogique — Rencontre 6

**État : À faire**

Ce document accompagne la révision qualitative de la rencontre 6 après la phase de placement du matériel historique.

## Référence avant révision

La version complète du dépôt avant toute modification qualitative de R6 est figée sur la branche :

`archive/r6-before-revision-2026-08-26`

Commit de référence : `a98cdefe79c8caa7daf7cd6d7fe0c0520ea4d2a3`

Cette référence doit permettre de relire l'ancienne version et de produire un vrai diff GitHub après la révision.

## Principe de traçabilité

Après implantation, conserver dans ce document un tableau lisible indiquant au minimum :

- ce qui était présent avant;
- ce qui est présent après;
- ce qui a été retiré, fusionné, déplacé ou renforcé;
- la raison pédagogique;
- l'impact concret pour l'enseignant (notion à ne plus présenter, notion à présenter autrement, nouvelle insistance, etc.).

L'objectif est de rendre visibles les écarts avec le cours historiquement donné afin d'éviter que l'enseignant présente par habitude une notion qui ne fait plus partie de R6.

## Cible pédagogique R6

À la fin de R6, l'étudiant devrait pouvoir :

- utiliser la console pour exécuter une expression;
- déclarer une variable;
- affecter et réaffecter une valeur;
- utiliser une variable dans un calcul;
- modifier une valeur avec `+=` ou `-=`;
- distinguer un nombre d'une chaîne de caractères;
- concaténer du texte;
- construire une chaîne contenant des valeurs avec un littéral de gabarit.

## Point à renforcer — déclarer, affecter, réaffecter

L'expérience d'enseignement montre une confusion récurrente entre :

1. **déclarer une variable** — créer le nom avec `let`;
2. **affecter une valeur** — placer une valeur dans cette variable avec `=`;
3. **réaffecter une valeur** — remplacer plus tard la valeur avec `=`, sans réutiliser `let`.

Ce point ne doit pas être allégé pendant la révision. Au contraire, la nouvelle version devrait :

- employer explicitement les trois termes;
- montrer une progression du type `let score;`, puis `score = 10;`, puis `score = 20;`;
- montrer pourquoi `let score = 20;` ne doit pas être utilisé pour réaffecter une variable déjà déclarée;
- utiliser, si pertinent, une représentation visuelle simple d'une variable comme une case nommée afin de distinguer la création de la case du changement de son contenu;
- conserver suffisamment de pratique dans le laboratoire pour que cette distinction soit répétée.

La métaphore de la « case mémoire » doit être présentée comme un modèle pédagogique simplifié et non comme une description détaillée de l'implémentation interne de JavaScript.

## Théorie — décisions provisoires approuvées

| Élément historique | Décision cible | Impact enseignant |
| --- | --- | --- |
| Introduction générale à JavaScript | Alléger | Conserver rôle Web et fichiers `.js` |
| Gros exemple initial avec `if`, `else if`, `for`, `.remove()` | Retirer | Ne plus commenter cette syntaxe en R6 |
| Console du navigateur | Garder | Environnement principal de R6 |
| `+`, `-`, `*`, `/` | Garder | Réduire le nombre d'exemples |
| Décimaux et nombres négatifs | Garder brièvement | Mention courte |
| Déclaration avec `let` | Garder et renforcer | Bien distinguer de l'affectation |
| Affectation avec `=` | Garder et renforcer | Bien distinguer de la déclaration |
| Réaffectation sans nouveau `let` | Garder et renforcer | Point de vigilance majeur |
| `undefined` | Alléger | Expliquer seulement ce que l'étudiant verra dans la console |
| Déclarations multiples sur une ligne | Retirer | Ne plus les présenter en R6 |
| Règles de nommage | Alléger | Garder noms significatifs, règles essentielles et camelCase |
| Utiliser des variables dans un calcul | Garder | Notion centrale |
| `+=` et `-=` | Garder | Préparent aussi les boucles |
| `++` et `--` | Retirer de R6 | Ne plus les présenter par défaut |
| Priorité des opérateurs | Garder et simplifier | Parenthèses, `* /`, puis `+ -` |
| Chaînes de caractères | Garder | Notion centrale |
| Nombre vs chaîne | Garder | Important pour comprendre `+` |
| Concaténation avec `+` | Garder | Pratique simple |
| Littéraux de gabarits | Garder | Réinvestis dès R7 |
| `+=` avec du texte | Garder brièvement | Prépare `textContent +=` |

## Laboratoire 2 — décisions provisoires

La cible reste de réduire fortement le volume général du laboratoire, mais **la séquence déclaration / affectation / réaffectation ne doit pas être comprimée au même degré que les répétitions de calcul ou de template strings**.

| Questions historiques | Décision cible |
| --- | --- |
| 1 | Garder |
| 2 | Retirer ou pratique supplémentaire |
| 3 | Garder |
| 4 | Retirer |
| 5 | Pratique supplémentaire |
| 6–7 | Fusionner en une activité sur l'effet des parenthèses |
| 8 | Retirer |
| 9–13 | Conserver comme bloc important, à réécrire au besoin pour distinguer clairement déclaration, affectation et réaffectation |
| 14 | Garder |
| 15–16 | Fusionner / conserver surtout l'utilisation de variables dans un nouveau calcul |
| 17 | Garder comme défi facultatif possible |
| 18–19 | Fusionner en une activité avec `+=` et `-=` |
| 20–22 | Retirer si la réaffectation et `+=`/`-=` sont déjà suffisamment pratiqués ailleurs |
| 23–25 | N'en conserver qu'une variation après vérification du contenu exact |
| 26 | Garder |
| 27–30 | Fusionner en une activité comparant `+` et `+=` sur une chaîne |
| 31–33 | Fusionner en une activité de premier littéral de gabarit |
| 34–37 | Retirer |
| 38–40 | Fusionner en une activité nombre vs chaîne |
| 41 | Pratique supplémentaire |
| 42 | Garder comme activité finale d'intégration |

Ajouter au moins une occasion où l'étudiant choisit lui-même des noms de variables significatifs plutôt que de recevoir uniquement des noms comme `a`, `b`, `c`, `m` ou `n`.

## Tableau avant / après à compléter après implantation

| Notion ou élément | Avant | Après | Type de changement | Raison | Impact pour l'enseignement |
| --- | --- | --- | --- | --- | --- |
| Déclaration / affectation / réaffectation | Explications présentes mais dispersées | À compléter | Renforcement | Confusion récurrente observée | Insister explicitement sur les trois opérations |
| Déclarations multiples | Présentes | À compléter | Retrait prévu | Syntaxe non essentielle en introduction | Ne plus la présenter en R6 |
| `++` / `--` | Présentés comme facultatifs | À compléter | Retrait prévu | Peut attendre un besoin réel | Ne plus les présenter en R6 |
| Gros exemple JavaScript initial | Présent | À compléter | Retrait prévu | Trop de syntaxe inconnue | Ne plus l'utiliser comme ouverture |
| Labo 2 | 42 numéros historiques | À compléter | Condensation prévue | Réduire répétitions et dépendances | Plus de temps pour les notions difficiles |

Ce tableau doit être finalisé avec les changements réellement implantés, et non seulement les intentions de révision.
