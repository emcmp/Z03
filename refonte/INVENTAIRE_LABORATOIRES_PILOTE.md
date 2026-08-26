# Inventaire pilote des laboratoires historiques

**Date de l'inventaire : 2026-08-26**

## 1. Résumé exécutif

Les deux sources autorisées ont été inventoriées sans modifier les fichiers historiques ni le contenu étudiant. Le labo 2 est un parcours autonome dans la console du navigateur : il compte 42 questions regroupées en quatre blocs sur les expressions arithmétiques, les variables, les affectations composées et les chaînes. Il correspond directement au noyau prévu pour R6. Sa principale faiblesse est sa longueur : plusieurs séries répétitives peuvent être réduites sans ajouter de nouvelle notion ni détruire la progression.

Le labo 3 contient un document de consignes et trois dossiers de départ complets. Ses trois exercices forment une progression nette : manipuler le DOM dans la console, reconnaître et appeler des fonctions fournies, puis écrire six fonctions simples. DOM et fonctions sont réellement imbriqués dans les deux derniers exercices; cinq des six fonctions à créer manipulent le DOM. Le mapping du bloc presque entier vers R7 est donc soutenu par les sources. Aucune scission n'est nécessaire d'après l'inventaire, sous réserve d'une décision pédagogique du concepteur.

Les écarts les plus visibles ne concernent pas le mapping : le labo 2 contient beaucoup de répétition et quelques détails secondaires sur la console; le labo 3 contient des incohérences de noms (`script.js` contre `scripts.js`), deux captures héritées d'un ancien dossier `lab2_etape3`, ainsi qu'un `onload="init()"` qui fait apparaître un événement sans être nécessaire aux exercices.

## 2. Tableau synthèse

| Source | Format | Nombre d'exercices | Notions dominantes | Mapping R6/R7 confirmé? | Risque principal |
|---|---|---:|---|---|---|
| `420905_lab2.docx` | DOCX autonome, sans fichier de départ | 4 blocs, 42 questions numérotées | Console, expressions, `let`, affectation, nombres, chaînes, `+`, `-`, `*`, `/`, `=`, `+=`, `-=`, littéraux de gabarit | **R6 : oui**, presque entièrement; allègement souhaitable | Longueur et répétition; quelques détails de console et de redéclaration peuvent détourner l'attention du noyau |
| `420905_lab3.zip` | ZIP avec un DOCX et trois dossiers de départ | 3 exercices, 17 tâches substantielles | `querySelector`, `textContent`, fonctions déclarées et appelées, console, `alert`, `=`, `+=` | **R7 : oui**, bloc cohérent à conserver ensemble autant que possible | Incohérences de noms et traces historiques; charge cumulative DOM + lecture de code + fonctions pour un débutant |

## 3. Labo 2 — inventaire détaillé

### Source et organisation

- Nom exact : `420905_lab2.docx`.
- Le document compte 9 pages selon ses métadonnées internes.
- Aucun fichier HTML, CSS, JavaScript, image de départ ou archive complémentaire n'est fourni avec ce laboratoire.
- Le travail se fait directement dans la console de Firefox. Les réponses sont recopiées dans le document Word.
- Les questions d'un même bloc dépendent souvent de l'état laissé dans la console par les questions précédentes. Des consignes de réactualisation séparent certains sous-parcours.

### Exercices et étapes significatives

| Exercice / étape | Tâche demandée | Notions utilisées | Prérequis | Fichiers fournis | Difficulté / point sensible | Observation de migration |
|---|---|---|---|---|---|---|
| Bloc 1 — Expressions et opérateurs, questions 1 à 8 | Évaluer huit expressions, des opérations simples jusqu'à une expression longue avec parenthèses imbriquées | Nombres entiers et décimaux; `+`, `-`, `*`, `/`; parenthèses; priorité des opérations; console | Ouvrir les outils de développement et saisir une expression | Aucun | La dernière expression mesure surtout l'attention et le calcul plutôt que la compréhension de JavaScript | **Alléger** : conserver quelques expressions progressives; retirer des calculs redondants ou trop longs |
| Bloc 2A — Première déclaration et état de la console, environ questions 9 à 13 | Déclarer `a`, déclarer `b` sans valeur, affecter ensuite `b`, tenter de redéclarer `b`, puis réactualiser la page et recommencer | `let`; déclaration; affectation avec `=`; valeur `undefined`; erreur de redéclaration dans le même contexte; réinitialisation de la console | Bloc 1 et usage de la console | Aucun | `undefined`, la redéclaration et le comportement du contexte de console ajoutent trois idées en peu de temps; l'obligation d'utiliser Firefox est liée à l'environnement historique | **Alléger** : conserver déclaration et affectation; présenter `undefined` et la redéclaration comme observation guidée plutôt que comme objectif central |
| Bloc 2B — Calculs avec variables, questions 14 à 17 | Créer `c` à partir d'un calcul, additionner `b + c`, créer `d = b * c`, puis combiner `b`, `c` et `d` pour obtenir 42 | Lecture et réutilisation de variables; expressions à droite de `=`; opérateurs arithmétiques | Valeurs de `b`, `c` et `d` conservées dans la console | Aucun | Le défi « obtenir 42 » est ouvert et peut mobiliser davantage le calcul que la programmation | **Conserver en grande partie**; rendre le défi 42 facultatif ou guidé si le temps est limité |
| Bloc 3A — Affectations composées, questions 18 à 22 | Modifier des nombres avec `+=` et `-=`; comparer `=` et les affectations composées | `=`, `+=`, `-=`; lecture de la valeur courante | Variables et affectation simple | Aucun | La répétition avec `bye` et `ilala` vérifie plusieurs fois le même mécanisme | **Alléger** : un exemple guidé et une courte pratique suffiraient probablement |
| Bloc 3B — Réaffectation à partir de la valeur courante, questions 23 à 25 | Déclarer `a`, `b`, `c`, puis exécuter `a = a + a`, `c = b * c` et `b = b + b - b + 1` | Réaffectation; variable utilisée dans sa propre nouvelle valeur; expressions | Bloc 2 et affectation simple | Aucun | La dernière expression est volontairement artificielle; elle peut masquer l'idée de mise à jour d'une variable | **Fusionner** avec le bloc 3A et conserver seulement les formes les plus explicites |
| Bloc 4A — Concaténation et mutation d'une chaîne, questions 26 à 30 | Déclarer `ville = "Paris"`; évaluer `ville + " est la capitale de l'Espagne"`; constater que `ville` ne change pas; puis exécuter `ville += "ien"` | Chaînes; concaténation avec `+`; affectation composée `+=`; différence entre produire une valeur et modifier la variable | Variables et affectation | Aucun | La fausse phrase sur Paris peut distraire; la distinction expression/réaffectation est la vraie difficulté | **Conserver en l'allégeant**; remplacer ou expliciter l'exemple trompeur lors d'une migration future |
| Bloc 4B — Premier littéral de gabarit, questions 31 à 33 | Combiner `debutPhrase` et `finPhrase` dans une chaîne interpolée | Accents graves; `${...}`; interpolation de deux variables; gestion de l'espace | Chaînes et variables | Aucun | La saisie des accents graves et de `${}` est nouvelle, mais l'objectif est très directement lié à R6 | **Conserver presque tel quel** |
| Bloc 4C — Interpolation de valeurs, questions 34 à 37 | Construire `phrase1` à partir de `vehicule`, puis `phrase2` à partir de `phrase1` et du nombre `5` | Littéraux de gabarit; interpolation de chaîne et de nombre; variables dérivées | Bloc 4B | Aucun | La consigne contient un renvoi erroné à « 9 et 10 », trace probable d'une ancienne numérotation | **Conserver**, après correction mécanique des renvois lors d'une migration autorisée |
| Bloc 4D — Nombre contre chaîne numérique, questions 38 à 40 | Comparer `n = 6` et `m = "9"`, puis observer le résultat de `m + n` | Types observables; chaîne numérique; surcharge de `+`; concaténation implicite | Nombres, chaînes et `+` | Aucun | La coercition implicite est un comportement utile à observer, mais peut ouvrir une discussion plus large sur les conversions | **Extra** ou courte observation guidée; aucune conversion explicite n'est exigée |
| Bloc 4E — Gabarits avec données et calcul, questions 41 et 42 | Produire une phrase avec `qteChats` et `qteChiens`, puis une autre avec `nbVideos = 17`, `duree = 25` et leur produit 425 | Interpolation; expression arithmétique dans `${...}`; réutilisation de plusieurs variables | Blocs 1 et 4B | Aucun | La dernière tâche combine correctement chaînes, variables et multiplication; elle est plus intégratrice sans dépendre d'une notion ultérieure | **Conserver presque tel quel** comme fin de R6 |

### Synthèse du labo 2

#### Ce qui peut être conservé

- la progression expression → variable → réaffectation → chaîne;
- la déclaration avec `let` et l'affectation avec `=`;
- les quatre opérateurs réellement utilisés : `+`, `-`, `*` et `/`;
- un petit nombre d'exercices de mise à jour avec `+=` et `-=`;
- la comparaison entre concaténation avec `+` et modification avec `+=`;
- les littéraux de gabarit, d'abord avec deux variables, puis avec une expression arithmétique;
- la dernière tâche intégratrice sur le nombre de vidéos et leur durée.

#### Ce qui semble à alléger

- les huit calculs initiaux, surtout l'expression très longue;
- les répétitions de déclarations et d'affectations qui vérifient le même mécanisme;
- le défi arithmétique pour obtenir 42 s'il prend trop de temps;
- les détails propres à Firefox, aux réactualisations et à la saisie dans Word;
- les renvois de questions périmés et les consignes de validation auprès de l'enseignant;
- plusieurs captures de console qui pourraient devenir du code texte dans une future page étudiante.

#### Notions hors du noyau R6 rencontrées

Le laboratoire ne dépend ni du DOM, ni de fonctions, ni de conditions, ni d'événements. Les seules notions périphériques sont `undefined`, l'erreur provoquée par une redéclaration avec `let` dans le même contexte de console, la priorité détaillée des opérateurs et la coercition observée avec `"9" + 6`. Elles peuvent être présentées comme observations ou extras sans compromettre les meilleurs exercices.

#### Questions à retourner au concepteur

- Combien de calculs purs veut-on conserver avant la première variable?
- `undefined` et l'erreur de redéclaration doivent-ils faire partie du noyau de R6 ou seulement d'une démonstration?
- Veut-on garder `-=` en plus de `+=`, ou un seul opérateur composé suffit-il à ce stade?
- L'observation de `"9" + 6` doit-elle mener à une explication de la coercition, ou rester un court piège à reconnaître?

## 4. Labo 3 — inventaire détaillé

### Source et fichiers contenus dans l'archive

Nom exact : `420905_lab3.zip`.

L'archive contient 13 fichiers utiles sous un dossier racine `420905_lab3/` :

```text
420905_lab3/
├── 420905_lab3.docx
├── lab3_exercice1/
│   ├── index.html
│   ├── css/styles.css
│   ├── js/script.js
│   └── images/
│       ├── bokoblin.png
│       ├── peppaPig.png
│       └── pig.png
├── lab3_exercice2/
│   ├── index.html
│   ├── css/styles.css
│   └── js/script.js
└── lab3_exercice3/
    ├── index.html
    ├── css/styles.css
    └── js/script.js
```

Les dossiers `images/` des exercices 2 et 3 existent aussi dans l'archive, mais sont vides. Le document de consignes compte 5 pages selon ses métadonnées internes.

### Exercices et étapes significatives

| Exercice / étape | Tâche demandée | Notions utilisées | Prérequis | Fichiers fournis | Difficulté / point sensible | Observation de migration |
|---|---|---|---|---|---|---|
| Exercice 1A — Lire puis remplacer du texte | Lire `.titre1` avec `document.querySelector(...).textContent`; remplacer `.texteMC`; trouver dans le HTML la classe du titre « Bokoblin » puis le remplacer par « Goomba » | `querySelector`; sélecteur de classe; `textContent`; lecture; affectation `=`; inspection HTML | Classes HTML; console; affectation de R6 | `lab3_exercice1/index.html`, CSS, JS vide et trois images | Il faut relier une classe vue dans le HTML à un sélecteur JavaScript; la syntaxe DOM est nouvelle | **Conserver presque tel quel** : première manipulation visible et graduelle du DOM |
| Exercice 1B — Transférer le texte par une variable | Lire `.titre3` dans `let titre`, puis affecter cette valeur à `.textePeppa` | Variable; `querySelector`; `textContent`; `=` | Exercice 1A et variables R6 | Même dossier | L'étudiant doit distinguer l'élément, son `textContent` et la valeur stockée | **Conserver**; bon pont entre R6 et DOM |
| Exercice 1C — Ajouter du texte à la fin | Ajouter « Yikes. », « Cringe. » ou « Ouash. » à `.textePeppa` avec `textContent += ...` | DOM; chaîne; concaténation; `+=` | Exercice 1A et chaînes R6 | Même dossier | L'effet dépend de l'état courant; une réactualisation est demandée avant l'étape | **Conserver**, possiblement fusionner avec 1D pour réduire la répétition |
| Exercice 1D — Ajouter du texte au début | Faire passer le paragraphe de « a deux yeux... » à « Peppa pig a deux yeux... »; une variable est suggérée | Lecture puis reconstruction d'une chaîne; variable facultative; `querySelector`; `textContent`; concaténation ou littéral de gabarit | Exercices 1A à 1C; chaînes R6 | Même dossier | Ajouter au début oblige à conserver l'ancienne valeur; c'est la tâche la plus difficile de l'exercice 1 | **Conserver ou alléger** avec un indice plus direct; bonne intégration R6 + DOM |
| Exercice 2A — Lire le HTML et les fonctions fournies | Identifier la classe de « Pomme », puis examiner `index.html` et `script.js` pour choisir les bonnes fonctions mystères | Lecture de HTML et JavaScript; correspondance classe/sélecteur; structure d'une fonction | Exercice 1; navigation dans VS Code | `lab3_exercice2/index.html`, CSS et JS | Le document nomme parfois `scripts.js`, mais le fichier réel est `script.js` | **Conserver**, après correction future du nom de fichier |
| Exercice 2B — Appeler trois fonctions dans la console | Trouver et appeler la fonction qui change « Pomme » en « Poire », celle qui écrit « Poire » dans la console et celle qui ajoute « Raisin » après « Pêche » | Appel de fonction sans paramètre; `mystere2()` avec DOM; `mystere1()` avec `console.log`; `mystere5()` avec DOM et `+=` | Exercice 2A; appel de fonction | Même dossier; cinq fonctions mystères sont fournies, dont deux distracteurs (`mystere3`, `mystere4`) | Il faut lire les corps de fonction plutôt que deviner par le nom; c'est une bonne activité de compréhension, mais les distracteurs augmentent la charge | **Conserver presque tel quel**; un distracteur pourrait être retiré si un allègement est nécessaire |
| Exercice 3A — Modifier plusieurs éléments dans une fonction | Écrire `quatreEtCinq()` pour remplacer le texte de `.quatre` et `.cinq` avec deux instructions DOM | Déclaration de fonction; appel manuel; deux `querySelector`; deux `textContent =` | Exercices 1 et 2 | `lab3_exercice3/index.html`, CSS et JS à compléter | Première fonction écrite; deux effets semblables permettent de vérifier la structure | **Conserver presque tel quel** |
| Exercice 3B — Effacer un texte et afficher une alerte | Écrire `byeLicornes()` pour mettre `.trois` à `""` puis appeler `alert("Bye 😭")` | Fonction; DOM; chaîne vide; `alert` | Exercice 3A | Même dossier | Deux effets différents dans une fonction; `alert` est une nouvelle sortie, mais reste simple | **Conserver** si `alert` demeure utile en R7; sinon alléger l'effet secondaire |
| Exercice 3C — Fonction de console | Écrire `test()` qui affiche « Test réussi! » avec `console.log` | Fonction simple; `console.log`; appel | Structure d'une fonction | Même dossier | C'est la fonction la plus simple, mais elle arrive après deux tâches plus complexes dans le fichier | **Déplacer plus tôt à l'intérieur du labo** serait une amélioration possible, sans nécessiter une scission du laboratoire |
| Exercice 3D — Ajouter du texte dans une fonction | Écrire `texteDeux()` pour concaténer « et génies » à `.deux` avec `+=` | Fonction; DOM; `textContent +=`; chaîne | Exercice 1C et fonction simple | Même dossier | Réinvestissement direct; faible nouveauté | **Conserver** ou fusionner avec une autre tâche si le labo doit être raccourci |
| Exercice 3E — Lire le DOM puis écrire dans la console | Écrire `dragonDansConsole()` qui récupère `.un` et affiche son texte avec `console.log`; une variable est facultative | Fonction; lecture de `textContent`; variable facultative; `console.log` | Exercice 1B; fonctions | Même dossier | Il faut transporter une valeur du DOM vers une autre sortie sans modifier la page | **Conserver**; bon exercice de circulation d'une valeur |
| Exercice 3F — Lire, concaténer et afficher | Écrire `alerteLicorneMage()` qui récupère `.trois`, ajoute « et mages », puis affiche le résultat dans une alerte | Fonction; DOM; variable; concaténation avec `+=` ou littéral de gabarit; `alert` | Ensemble des étapes précédentes | Même dossier | C'est la tâche la plus intégratrice : plusieurs instructions et conservation de la valeur lue | **Conserver comme défi final**, avec allègement possible de l'indice très long |

### Usage précis des notions demandées

- **`querySelector`** : utilisé dans toutes les étapes de l'exercice 1 sauf l'identification manuelle de classe; présent dans `mystere2`, `mystere3` et `mystere5` de l'exercice 2; requis dans cinq des six fonctions à créer à l'exercice 3.
- **`textContent`** : lu ou modifié dans toutes les manipulations DOM. Les seules fonctions qui n'en ont pas besoin sont `mystere1()` et `mystere4()` parmi les fonctions fournies, puis `test()` parmi les fonctions à créer.
- **Déclaration et appel de fonctions** : les cinq fonctions `mystere1()` à `mystere5()` sont déclarées dans `lab3_exercice2/js/script.js` et appelées manuellement dans la console; les six fonctions de l'exercice 3 sont déclarées par l'étudiant dans `lab3_exercice3/js/script.js`, puis testées de la même manière.
- **DOM et fonctions imbriqués** : oui. Deux des trois fonctions explicitement recherchées à l'exercice 2 manipulent le DOM; cinq des six fonctions à écrire à l'exercice 3 lisent ou modifient le DOM.
- **Événements** : aucun événement n'est nécessaire pour réussir les tâches. Le fichier de l'exercice 1 contient toutefois `body onload="init()"` et une fonction `init()` vide; ce mécanisme est incident et peut être retiré sans effet sur l'exercice.
- **Conditions, paramètres et valeurs de retour** : absents. Toutes les fonctions ont des parenthèses vides et sont appelées sans argument; aucune n'utilise `return`.
- **Autres sorties** : `console.log` et `alert` sont utilisés. `alert` apparaît dans un distracteur de l'exercice 2 et dans deux tâches de l'exercice 3.

### Dépendances et progression

Les trois dossiers peuvent s'ouvrir séparément, mais la progression pédagogique est cumulative. L'exercice 1 introduit le DOM en console et réinvestit les variables et chaînes de R6. L'exercice 2 ajoute la lecture de fonctions déjà écrites et leur appel. L'exercice 3 demande ensuite d'écrire des fonctions qui réutilisent presque toutes les manipulations DOM précédentes.

Les fichiers HTML et CSS sont fournis et n'ont pas à être modifiés. Les étudiants doivent néanmoins savoir reconnaître une classe dans le HTML. Le CSS fourni utilise entre autres Flexbox, des sélecteurs combinés et un dégradé, mais ces notions servent seulement à l'apparence du fichier de départ; elles ne sont pas requises pour résoudre les tâches JavaScript.

### Éléments à conserver ou à alléger

À conserver :

- les trois exercices comme parcours commun;
- l'effet visible immédiat de `textContent`;
- le passage de manipulations en console à la lecture, puis à l'écriture de fonctions;
- l'absence d'événements, de conditions, de paramètres et de retours obligatoires;
- la dernière fonction intégratrice.

À alléger ou corriger lors d'une migration ultérieure autorisée :

- harmoniser toutes les mentions sur le nom réel `script.js`;
- remplacer les captures qui montrent encore `lab2_etape3`, `420905_lab2.docx` et `scripts.js`;
- corriger le bandeau capturé « Étape 2 - Oink! » alors que le dossier et le document parlent d'exercice 1;
- retirer `onload="init()"` et la fonction vide si l'on veut éviter de montrer implicitement un événement avant R8;
- réduire un distracteur ou une répétition DOM si la durée réelle dépasse la rencontre;
- raccourcir certains indices très détaillés de l'exercice 3 une fois la fonction simple bien comprise.

### Cohésion et scission

- **Cohésion du laboratoire : forte.** Les mêmes trois mécanismes (`querySelector`, `textContent`, fonction sans paramètre) sont repris avec une autonomie croissante. Le seul exercice sans DOM, `test()`, est une très courte vérification de `console.log` à l'intérieur du bloc de fonctions.
- **Scission nécessaire? non.** Les exercices ne forment pas deux ensembles indépendants : l'exercice 3 suppose les manipulations DOM de l'exercice 1 et la lecture/appel de fonctions de l'exercice 2. Une scission ferait perdre cette progression et exigerait de dupliquer ou de déplacer des prérequis.
- **Réserve factuelle :** la quantité est substantielle pour une première rencontre DOM + fonctions. Un allègement interne est possible, mais l'inventaire ne révèle pas de raison pédagogique forte de déplacer un exercice complet hors de R7.

### Questions à retourner au concepteur

- Faut-il conserver `alert` comme seconde sortie visible en R7, ou limiter le noyau à la console et au DOM?
- La fonction très simple `test()` devrait-elle précéder les premières fonctions DOM écrites par l'étudiant?
- Combien de répétitions DOM veut-on garder dans l'exercice 3 pour soutenir les débutants sans surcharger la rencontre?
- Veut-on conserver les fonctions mystères comme activité de lecture de code avant l'écriture, malgré les deux distracteurs?

## 5. Validation du format d'inventaire

L'ouverture du ZIP, l'inventaire des fichiers texte et l'analyse des dépendances ont été directs. Le niveau par exercice permet de distinguer les notions réellement combinées, les répétitions et les mécanismes seulement présents dans le fichier de départ.

Le rendu DOCX en images n'a pas pu être produit, car LibreOffice n'est pas installé dans l'environnement. Le contrôle de repli a couvert le texte OOXML, les listes, les en-têtes, les sauts de page, les relations d'images et chacune des images intégrées aux deux DOCX. Les métadonnées internes donnent 9 pages pour le labo 2 et 5 pages pour le document du labo 3. La mise en page page par page n'a donc pas été validée visuellement, mais les consignes, exemples illustrés et extraits de console utiles à l'inventaire ont été consultés.

Certaines informations ne sont pas disponibles dans les sources : durée prévue, réponses réellement données par les étudiants, difficultés observées en classe et temps moyen par exercice. Le document du labo 2 ne fournit pas de corrigé. Le fichier de l'exercice 3 affirme que les solutions sont dans `script.js`, mais le fichier archivé contient seulement les consignes et des espaces à compléter.

Le format semble applicable aux phases suivantes sans changement majeur. Pour les fusions de plusieurs laboratoires, il faudra ajouter une comparaison explicite des doublons entre sources; pour le présent pilote, les deux laboratoires n'enseignent pas des blocs voisins redondants.
