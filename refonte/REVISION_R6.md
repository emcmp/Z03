# Révision pédagogique — Rencontre 6

**État : Implantée — passe visuelle effectuée; validation globale toujours bloquée par une erreur historique hors R6**

## Référence avant révision

Version complète avant révision :

- branche : `archive/r6-before-revision-2026-08-26`
- commit : `a98cdefe79c8caa7daf7cd6d7fe0c0520ea4d2a3`

Cette référence sert à comparer l'ancien cours et l'ancienne organisation du laboratoire avec la nouvelle version.

## Cible pédagogique

À la fin de R6, l'étudiant devrait pouvoir :

- utiliser la console pour exécuter une expression;
- déclarer une variable;
- affecter et réaffecter une valeur;
- utiliser une variable dans un calcul;
- modifier une valeur avec `+=` ou `-=`;
- distinguer un nombre d'une chaîne;
- concaténer du texte;
- construire une chaîne avec un littéral de gabarit.

## Point renforcé : déclarer, affecter, réaffecter

La nouvelle version traite explicitement ces trois opérations comme différentes :

```js
let score;   // déclaration
score = 10;  // affectation
score = 20;  // réaffectation
```

La page explique aussi que `let score = 10;` combine une déclaration et une première affectation. Une représentation simplifiée de la variable comme une case nommée est utilisée comme modèle mental.

Le laboratoire pratique séparément : déclaration seule, affectation, réaffectation, tentative de redéclaration, puis reconnaissance des deux opérations dans une instruction avec `let` et `=`.

## Passe de mise en scène visuelle

Après la première réécriture, la page était pédagogiquement plus structurée, mais visuellement plus plate que l'ancien cours. Une passe distincte a donc été effectuée **sans modifier le noyau de matière**.

Changements de présentation :

- réintroduction d'emojis comme repères dans les titres;
- ajout d'encadrés Docusaurus colorés (`tip`, `info`, `warning`, `danger`, `important`);
- réutilisation sélective de captures historiques déjà présentes dans le dépôt;
- mise en évidence visuelle du trio `déclarer / affecter / réaffecter`;
- ajout d'un tableau synthèse très court avant le détail des variables;
- ajout de séparateurs visuels entre les grands blocs;
- renforcement visuel des erreurs fréquentes, notamment la redéclaration avec un deuxième `let`;
- conservation d'un résumé final illustré par des pictogrammes.

Cette passe ne réintroduit ni les déclarations multiples, ni `++` / `--`, ni le gros exemple initial avec `if` / `for`.

## Théorie — avant / après

| Élément | Avant | Après | Impact pour l'enseignement |
| --- | --- | --- | --- |
| Introduction JavaScript | Longue introduction avec un programme contenant plusieurs syntaxes inconnues | Introduction courte centrée sur le Web, `.js` et la console | Ne plus commenter le gros programme d'ouverture |
| Présentation visuelle | Nombreuses captures, emojis et encadrés dans la version historique | Structure condensée, mais repères visuels réintroduits de façon sélective | Conserver un cours vivant sans remettre la surcharge de contenu |
| Opérateurs `+ - * /` | Plusieurs exemples visuels séparés | Tableau synthèse + rappel visuel de la priorité | Même matière, moins de temps |
| Priorité | Incluait aussi `=` dans la hiérarchie | Parenthèses, `* /`, puis `+ -` | Ne plus faire mémoriser la priorité de l'affectation |
| Déclaration `let` | Présente | Renforcée et mise en évidence visuellement | Insister sur « créer la variable » |
| Affectation `=` | Présente | Renforcée et mise en évidence visuellement | Insister sur « placer une valeur » |
| Réaffectation | Plus dispersée | Placée immédiatement après l'affectation, avec contraste visuel | Comparer directement avec une redéclaration |
| `let x = valeur` | Raccourci pratique | Deux opérations explicitement nommées | Éviter le réflexe de remettre `let` |
| `undefined` | Explication longue | Mention courte liée à une déclaration sans valeur | Ne pas en faire une notion autonome |
| Déclarations multiples | Présentes | Retirées | Ne plus les présenter en R6 |
| Nommage | Liste détaillée de règles | Règles essentielles, nom significatif, camelCase | Insister sur la lisibilité |
| `+=` / `-=` | Plusieurs exemples et variantes | Une explication directe avec une capture historique | Les enseigner sans multiplier les cas |
| `++` / `--` | Présentés comme facultatifs | Retirés | Ne plus les présenter en R6 |
| Nombre vs chaîne | Présent | Conservé avec captures historiques | Toujours important |
| Concaténation | Très illustrée | Exemple court + encadré explicatif | Même notion, plus rapide |
| Littéraux de gabarits | Plusieurs captures et étapes | Syntaxe directe + une capture + exemple | Toujours au programme |
| `+=` avec texte | Plusieurs exemples | Un exemple court | Prépare R7 |

## Laboratoire — avant / après

L'ancien laboratoire avait **42 numéros**. La nouvelle page comporte **15 activités principales** et deux pratiques facultatives. Le DOCX historique, sa transcription Markdown et ses captures restent intacts comme sources.

| Anciennes questions | Traitement dans la nouvelle version |
| --- | --- |
| 1–5 | Regroupées dans une première activité de calcul; répétitions retirées |
| 6–7 | Fusionnées pour comparer avec et sans parenthèses |
| 8 | Remplacée par une pratique supplémentaire plus courte |
| 9–13 | Réorganisées et renforcées autour de déclaration, affectation, réaffectation et redéclaration |
| 14–16 | Fusionnées autour de l'utilisation de variables dans un calcul |
| 17 | Conservée comme défi facultatif « obtenir 42 » |
| 18–19 | Fusionnées en une activité `+=` / `-=` |
| 20–25 | Retirées du noyau comme répétitions |
| 26–30 | Réorganisées en deux activités sur chaîne puis `+` versus `+=` |
| 31–33 | Fusionnées en une activité de littéral de gabarit |
| 34–37 | Retirées comme répétition |
| 38–40 | Fusionnées en une activité nombre versus chaîne |
| 41 | Retirée comme répétition |
| 42 | Principe conservé dans l'activité finale : variables + littéral + calcul |

### Nouveaux éléments

- Une activité demande à l'étudiant de choisir lui-même des noms de variables significatifs.
- La fin du laboratoire revient explicitement sur `let score;`, `score = 10;`, `score = 20;`.
- Les longues chaînes de dépendances entre questions ont été réduites.

## À ne plus prévoir en R6

- le gros programme d'introduction avec `if`, `else if`, `for` et `.remove()`;
- les déclarations multiples sur une ligne;
- `++` et `--`;
- les 42 questions du laboratoire historique;
- l'ancien DOCX comme consigne étudiante principale.

## À mettre davantage en évidence

- `let` déclare / crée une variable;
- `=` affecte une valeur;
- une variable déjà déclarée se réaffecte avec `=` sans nouveau `let`;
- `let score = 10;` combine déclaration et affectation initiale;
- les noms significatifs;
- les chaînes et littéraux de gabarits, qui restent au programme de R6.

## Fichiers actifs révisés

- `web/docs/01-cours/06-rencontre6.md`
- `web/docs/02-labos/01-labo2.md`

## Sources historiques conservées

- `web/static/files/420905_lab2/420905_lab2.docx`
- `web/static/files/420905_lab2/consignes.md`
- `web/static/files/420905_lab2/consignes-images/`

## Validation technique

Le workflow du dépôt a été exécuté sur le commit `98344fbf82baccc5fc826e90d029e2da84e7db61` après la révision pédagogique initiale.

- `npm ci` : réussi;
- `npm run typecheck` : échec sur un fichier historique hors R6;
- `npm run build` : non exécuté par le workflow, car celui-ci s'arrête après l'échec du typecheck.

Erreur confirmée :

```text
static/files/420905_lab6/lab6_exercice3/js/script.js(75,2)
TS1005: '}' expected.
```

Cette erreur était déjà connue avant la révision de R6. Elle n'est pas corrigée ici afin de ne pas modifier le labo 6 hors portée. La validation globale du workflow demeure donc bloquée par ce défaut historique.
