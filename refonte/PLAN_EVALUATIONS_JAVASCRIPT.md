# Plan des évaluations JavaScript — Z03

**Statut : plan de travail, pas un examen finalisé**  
**Mise à jour : 2026-08-26**

Ce document conserve les décisions prises pour les évaluations JavaScript sans figer les questions avant que la matière et les exercices des rencontres 6 à 12 aient été révisés.

## Principe directeur

> **L’évaluation doit dépendre de ce qui a réellement été enseigné et pratiqué, et non l’inverse.**

Conséquences :

- ne pas finaliser maintenant les questions du quiz ni celles de l’examen final;
- terminer d’abord l’alignement théorie ↔ exercices des rencontres 6 à 12;
- ensuite construire les évaluations à partir du noyau réellement conservé;
- ne pas évaluer une syntaxe ou une manière de faire qui n’a pas été enseignée et pratiquée de cette façon.

## Quiz JavaScript — 10 %

**Moment prévu :** début de la rencontre 8.  
**Portée directe :** rencontres 6 et 7.

L’ancien examen 1 fourni en 2026 est retenu comme **référence de forme**, pas comme version définitive :

- environ 10 petites tâches;
- une tâche courte et concrète par notion;
- fonctions de questions indépendantes;
- code d’infrastructure fourni lorsque ce code n’est pas l’objet de l’évaluation.

Les anciennes questions sur l’ajout et le retrait de classes ne conviennent plus au quiz, puisque `classList` est maintenant enseigné après le quiz en R8.

### Principe d’indépendance des questions

Une faiblesse sur une notion ne doit pas provoquer une cascade de pertes dans plusieurs questions.

Exemple : si une question évalue un calcul, la sélection DOM et l’affichage peuvent être fournis. Si une autre question évalue `querySelector`, c’est dans cette question seulement que l’étudiant doit réellement écrire la sélection.

Objectif : **une notion principalement évaluée une fois**, avec le moins de dépendances possible entre les questions.

### Matrice provisoire du quiz

| Q | Notion principalement évaluée | Intention |
|---|---|---|
| **1** | `console.log()` | tâche très courte et indépendante |
| **2** | `alert()` | tâche très courte et indépendante |
| **3** | déclaration + affectation d’une variable | sans dépendance au DOM |
| **4** | opérateurs arithmétiques et parenthèses | une seule tâche plutôt que plusieurs calculs redondants |
| **5** | modification d’une variable avec `+=` ou `-=` | isoler l’affectation composée |
| **6** | chaînes de caractères et concaténation | sans dépendance au DOM |
| **7** | template string | notion enseignée en R6 et absente de l’ancien examen |
| **8** | `querySelector` + écriture de `textContent` | une vraie question de sélection/modification DOM |
| **9** | lecture de `textContent` | distinguer lecture et écriture |
| **10** | déclaration et appel d’une fonction simple | contenu volontairement simple pour évaluer la fonction elle-même |

Cette matrice est un **plan de couverture**, pas un engagement sur les formulations finales ni même sur le nombre exact de questions si la matière est ajustée.

### Points encore ouverts pour le quiz

- décider lors de la révision de R7 si `querySelector` est enseigné principalement avec `.classe`, avec `#id`, ou avec les deux comme sélecteurs CSS;
- adapter ensuite le quiz exactement à la manière enseignée;
- ne pas transformer en questions indépendantes toutes les bonnes pratiques ou notions secondaires (commentaires, règles détaillées de nommage, `++` / `--`, etc.) à moins qu’elles deviennent réellement essentielles.

## Examen final JavaScript — 30 %

**Moment prévu :** rencontre 15.

### Portée directe

L’examen final doit évaluer principalement le noyau enseigné **de R8 à R12**.

Les notions de R6–R7 restent nécessaires comme outils de base, mais elles ne doivent pas être réévaluées par des questions autonomes uniquement pour répéter le quiz.

Exemple : une question sur une boucle ou un événement peut naturellement nécessiter une variable, une fonction simple ou `querySelector`; leur utilisation est alors un prérequis intégré, pas un deuxième examen sur R6–R7.

### Grandes familles prévues pour le final

À confirmer après la révision pédagogique de R8–R12 :

- événements et interaction avec la page;
- portée locale/globale lorsque nécessaire;
- manipulation du DOM, notamment classes et attributs réellement conservés;
- booléens, comparaisons et structures conditionnelles;
- `&&` et `||`;
- boucles;
- tableaux, index, `length` et parcours;
- `querySelectorAll` et manipulation de plusieurs éléments;
- fonctions avec paramètres;
- fonctions avec valeur de retour;
- intégration de plusieurs notions dans quelques problèmes plus riches.

### Ne pas figer encore

Tant que la révision R8–R12 n’est pas terminée, ne pas décider définitivement si les éléments suivants doivent être évalués directement :

- `do...while`;
- opérateur `!`;
- `push`, `pop`, `splice` individuellement;
- liste précise des propriétés `.style`;
- autres syntaxes historiques susceptibles d’être allégées.

## TP2 et TP3

Aucune forme n’est encore arrêtée.

- TP2 pourrait rester conventionnel ou adopter une logique davantage fondée sur les compétences.
- TP3 pourrait également être conventionnel ou par compétences.
- Une intention existe pour TP3 : favoriser une réalisation **créative** utilisant les outils de programmation appris, mais la forme exacte reste volontairement ouverte.

Ne pas construire ou figer ces travaux pour l’instant.

## Prochaine étape recommandée

Avant de rédiger les évaluations :

> **Faire l’audit d’alignement théorie ↔ exercices, rencontre par rencontre, de R6 à R12.**

Ordre recommandé :

1. R6–R7 en premier, car elles déterminent directement le quiz de 10 %;
2. R8–R9 ensuite;
3. R10–R12 enfin;
4. seulement après cette passe, revenir au quiz et à l’examen final pour fixer les syntaxes et les tâches réellement évaluées.

Pour chaque rencontre, vérifier :

- quelles notions sont réellement enseignées;
- lesquelles sont pratiquées dans les exercices;
- les notions enseignées mais jamais pratiquées;
- les exercices qui demandent une notion avant son enseignement;
- les répétitions inutiles;
- les dépendances techniques qui peuvent être fournies plutôt qu’exigées;
- les irritants pédagogiques à corriger dans une seconde passe.
