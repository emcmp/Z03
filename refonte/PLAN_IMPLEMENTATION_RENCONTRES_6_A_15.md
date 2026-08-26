# Plan d'implémentation — rencontres 6 à 15

**Statut du plan : actif**  
**Dernière mise à jour : 2026-08-26**

Ce document est le plan opérationnel pour mettre en place la séquence JavaScript des rencontres 6 à 15. `PLAN_RENCONTRES_6_A_15.md` demeure la référence pédagogique canonique.

## Principe de cette première implantation

> **Placer d'abord la théorie et les exercices historiques aux bonnes rencontres sans les réécrire.**

Pendant cette passe :

- conserver les exercices historiques tels quels autant que possible;
- conserver les blocs de théorie historiques tels quels autant que possible;
- ne modifier que les titres, numéros, métadonnées, chemins, liens, navigation et autres éléments mécaniques nécessaires;
- accepter qu'un exercice contienne du code fourni utilisant une notion non encore enseignée si ce code sert seulement d'infrastructure;
- noter les irritants rencontrés sans les corriger immédiatement;
- reporter toute simplification, modernisation ou amélioration pédagogique à une phase ultérieure.

## État actuel

| Bloc | État | Résultat |
|---|---|---|
| **Documentation / mapping** | **Terminé** | Mapping R6–R15 stabilisé; principe « placement avant révision » documenté. |
| **R6** | **Implanté** | Ancien cours 2 copié dans `web/docs/01-cours/06-rencontre6.md`; ancien labo 2 présenté comme laboratoire de la rencontre 6. Aucun exercice réécrit. |
| **R7** | **Implanté** | Ancien cours 3 copié dans `web/docs/01-cours/07-rencontre7.md`; ancien labo 3 présenté comme laboratoire de la rencontre 7. Aucun exercice scindé ou réécrit. |
| **Navigation R6/R7** | **Implantée** | Libellés Cours alignés sur « Variables et affectation » et « DOM et fonctions »; titres de laboratoires alignés sur les nouvelles rencontres. |
| **Validation CI R6/R7** | **Bloquée par erreur historique hors portée** | Le workflow s'arrête au `typecheck` sur `web/static/files/420905_lab6/lab6_exercice3/js/script.js` : `TS1005: '}' expected` ligne 75. Ce fichier n'a pas été modifié dans l'implantation R6/R7. |
| **R8–R9** | À faire | Prochaine phase de placement. |
| **R10–R12** | À faire | À faire après R8–R9. |
| **R13–R15** | À faire après R6–R12 | Intégration / buffer / examen. |

## Répartition stabilisée

| Rencontre | Théorie historique | Exercices historiques | Intention |
|---|---|---|---|
| **R6** | ancien cours 2 — variables et affectation | labo 2 | déplacement direct |
| **R7** | ancien cours 3 — DOM et fonctions | labo 3 | conserver le bloc ensemble |
| **R8** | ancien cours 4 + ancien cours 14 | labo 4 + labo 14 exercices 1–2 | mini-quiz 10 % au début; interactivité ensuite |
| **R9** | anciens cours 5 + 6 | labos 5 + 6 | placer ensemble sans enlever les doublons dans la première passe |
| **R10** | ancien cours 11 — boucles | labo 11 | conserver d'abord `while` / `do...while` tels qu'enseignés historiquement; choix final reporté |
| **R11** | ancien cours 12 + ancien cours 15 | labo 12 + labo 15 exercices 1–3 | tableaux, parcours, puis `querySelectorAll` |
| **R12** | ancien cours 13 | labo 13 + labo 15 exercice 4 | paramètres, retours et intégration |
| **R13** | aucune nouvelle théorie essentielle | candidats d'intégration, notamment labo 14 exercices 3–4 au besoin | TP / intégration / travail supervisé |
| **R14** | aucune nouvelle théorie essentielle | reprises / suite du TP | buffer |
| **R15** | aucune nouvelle théorie | — | examen final 30 % |

## Détails R6 — Variables et affectation

**Sources :** ancien cours 2 + labo 2.

Première implantation réalisée :

- contenu théorique historique conservé;
- titre adapté à la rencontre 6;
- imports MDX `Tabs` / `TabItem` conservés;
- images historiques réutilisées à leurs emplacements existants;
- page `web/docs/02-labos/01-labo2.md` rattachée à R6;
- `420905_lab2.docx`, sa transcription Markdown et ses images conservés;
- consigne et exercice non réécrits.

**État : Implanté.**

## Détails R7 — DOM et fonctions

**Sources :** ancien cours 3 + labo 3.

Première implantation réalisée :

- contenu théorique historique conservé;
- DOM, `querySelector`, `textContent`, VS Code et fonctions maintenus dans le même bloc;
- titre adapté à la rencontre 7;
- images historiques `cours3` et `cours4` réutilisées;
- page `web/docs/02-labos/02-labo3.md` rattachée à R7;
- ZIP et dossier décompressé du labo 3 conservés;
- aucun exercice séparé ou réécrit.

**État : Implanté.**

## R8 — Interactivité, événements, classes et attributs

**Sources prévues :** ancien cours 4 + ancien cours 14; labo 4 + labo 14 exercices 1–2.

- mini-quiz de 10 % au début, portant principalement sur R6 et R7;
- après le quiz : portée, événements, `addEventListener`, DOM, `classList`, attributs et élément HTML en variable;
- ne pas améliorer les exercices pendant leur placement.

**État : À faire.**

## R9 — Conditions

**Sources prévues :** anciens cours 5 + 6 et labos 5 + 6.

- booléens et comparaisons;
- `if`, `else`, `else if`;
- `&&`, `||`;
- placer les deux blocs historiques dans la même rencontre sans supprimer immédiatement les répétitions.

**État : À faire.**

## R10 — Boucles

**Sources prévues :** ancien cours 11 + labo 11.

L'analyse suggère qu'une autre forme de boucle, notamment `for`, pourrait éventuellement mieux convenir à la version finale. Toutefois, la première implantation doit garder le matériel historique tel quel.

- ne pas convertir maintenant les exercices;
- ne pas réécrire la théorie;
- réévaluer le choix de la boucle principale seulement lors de la phase de révision pédagogique.

**État : À faire.**

## R11 — Tableaux et plusieurs éléments DOM

**Sources prévues :** ancien cours/labo 12 + ancien cours 15 + labo 15 exercices 1–3.

Ordre visé :

1. tableaux;
2. index et `length`;
3. opérations déjà présentes, dont `push`, `pop`, `splice`;
4. parcours;
5. `querySelectorAll`;
6. parcours de plusieurs éléments DOM.

**État : À faire.**

## R12 — Paramètres, retours et intégration

**Sources prévues :** ancien cours/labo 13 + labo 15 exercice 4.

Toute nouvelle matière essentielle doit être terminée à la fin de cette rencontre.

**État : À faire.**

## R13–R15

- **R13** : TP / intégration / travail supervisé; aucune nouvelle notion essentielle.
- **R14** : buffer, reprises, pratique, suite du TP ou révision.
- **R15** : examen final de 30 %.

## Validation technique

Après chaque lot sous `web/`, le dépôt exige un build Docusaurus. Pour l'implantation R6/R7, le workflow a atteint le `typecheck`, mais celui-ci échoue avant le build sur une erreur déjà présente dans un fichier historique du **labo 6** :

```text
web/static/files/420905_lab6/lab6_exercice3/js/script.js(75,2)
TS1005: '}' expected.
```

Décision de portée :

- **ne pas corriger cette erreur pendant la passe R6/R7**, puisque l'exercice du labo 6 n'est ni déplacé ni révisé à cette étape;
- conserver ce blocage explicitement documenté;
- au moment d'implanter R9, décider si la correction de syntaxe est un ajustement technique indispensable pour rendre le matériel historique exécutable, sans autre réécriture pédagogique.

## Prochain point de reprise

La prochaine phase, une fois R6/R7 révisées visuellement au besoin, est :

> **Implanter R8 et R9 en plaçant le matériel historique prévu, sans réécriture pédagogique.**

Pour R8, respecter la scission déjà décidée du labo 14 : exercices 1–2 avec R8; exercices 3–4 conservés pour l'intégration ultérieure.

## Phase de révision pédagogique ultérieure

Seulement après que R6–R12 sont toutes implantées et fonctionnelles :

- relire théorie et exercices rencontre par rencontre;
- repérer les répétitions;
- décider définitivement de la forme principale de boucle;
- décider des notions réellement à alléger;
- nettoyer le code fourni seulement lorsqu'il crée une confusion réelle;
- améliorer les exercices sans perdre leur comportement éprouvé;
- aligner définitivement le TP de R13 et l'examen de R15.
