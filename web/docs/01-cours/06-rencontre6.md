---
title: Rencontre 6 - Variables et affectation
description: Premiers pas en JavaScript, calculs, variables, affectation, chaînes et littéraux de gabarits.
---

# Rencontre 6 - Variables et affectation

:::tip 🎯 Objectif de la rencontre

Aujourd'hui, on fait nos **premiers pas en programmation avec JavaScript**. À la fin de la rencontre, vous devriez notamment être capables de créer une variable, de lui donner une valeur, de changer cette valeur et de construire du texte avec des variables.

:::

## 🤓 JavaScript

JavaScript est un langage de programmation très utilisé pour rendre les pages Web **interactives**.

- Les fichiers JavaScript utilisent l'extension `.js`.
- Dans cette première rencontre, nous allons surtout expérimenter directement dans la **console du navigateur**.
- Dès la prochaine rencontre, nous utiliserons JavaScript pour lire et modifier le contenu d'une page Web.

<center>![Fichier avec l'extension js](../../static/img/cours2/js.png)</center>

## 🌐 Utiliser la console du navigateur

Ouvrez la page Web demandée par l'enseignant, puis ouvrez les outils de développement avec `F12` ou avec **clic droit → Inspecter**. Accédez ensuite à l'onglet **Console**.

<center>![Ouvrir les outils de développement](../../static/img/cours2/inspect.png)</center>

<center>![Console du navigateur](../../static/img/cours2/console.png)</center>

:::info 🧪 Un petit laboratoire d'expérimentation

La console nous permet d'essayer rapidement des instructions JavaScript et d'observer leur résultat. On peut donc tester une idée immédiatement sans encore avoir à construire un programme complet.

:::

## 🧮 Opérateurs arithmétiques

JavaScript peut effectuer des calculs avec les opérateurs suivants :

| Opérateur | Opération | Exemple |
| --- | --- | --- |
| `+` | addition | `5 + 2` |
| `-` | soustraction | `5 - 2` |
| `*` | multiplication | `5 * 2` |
| `/` | division | `5 / 2` |

:::note 🔢 Nombres

Pour les nombres décimaux, on utilise un **point** : `4.5`.

Les nombres négatifs s'écrivent avec un `-` devant le nombre : `-12`.

:::

### 🥇 Priorité des opérations

Comme en mathématiques :

1. les parenthèses `()` sont calculées d'abord;
2. ensuite les multiplications `*` et divisions `/`;
3. ensuite les additions `+` et soustractions `-`.

Par exemple, ces deux expressions ne donnent pas le même résultat :

```js
10 + 5 * 2
(10 + 5) * 2
```

<center>![Effet des parenthèses](../../static/img/cours2/parenthesis.png)</center>

---

## 📦 Variables

Une **variable** permet de conserver une valeur afin de pouvoir la réutiliser ou la modifier plus tard.

Pour commencer, on peut imaginer une variable comme une **case portant un nom**. Cette image est un modèle simplifié pour nous aider à raisonner; JavaScript ne range pas littéralement toutes ses variables dans de petites cases.

### 🧠 Le trio à distinguer

| 📦 Déclarer | 💾 Affecter | 🔄 Réaffecter |
| --- | --- | --- |
| créer la variable | lui donner une valeur | remplacer sa valeur |
| `let score;` | `score = 10;` | `score = 20;` |

:::danger 🚨 Le piège classique

Ces trois opérations se ressemblent, mais **elles ne veulent pas dire la même chose**. C'est particulièrement important de savoir quand écrire `let` et quand **ne pas** l'écrire.

:::

### 📦 1. Déclarer une variable

**Déclarer** une variable signifie **créer la variable**.

```js
let score;
```

Le mot-clé `let` indique à JavaScript : « crée une variable qui s'appelle `score` ».

On peut se représenter le résultat ainsi :

```text
score
+-----------+
| undefined |
+-----------+
```

<center>![Déclarer une variable dans la console](../../static/img/cours2/let.png)</center>

:::tip 📦 Déclarer = créer

`let` sert à **déclarer** une variable, donc à la créer.

La variable existe maintenant, même si nous ne lui avons encore donné aucune valeur.

:::

:::info 🤔 Pourquoi `undefined`?

Dans la console, JavaScript peut afficher `undefined` après une déclaration sans valeur. Cela signifie simplement qu'aucune valeur n'a encore été affectée à cette variable.

:::

### 💾 2. Affecter une valeur

**Affecter** une valeur signifie placer une valeur dans une variable qui existe déjà.

```js
score = 10;
```

La même variable contient maintenant `10` :

```text
score
+----+
| 10 |
+----+
```

L'opérateur `=` sert ici à **affecter** la valeur située à droite dans la variable située à gauche.

:::info 💾 Affecter = remplir la variable

```js
let score;
score = 10;
```

- `let score;` → **déclaration** : création de la variable.
- `score = 10;` → **affectation** : une valeur est placée dans cette variable.

**Ce sont deux opérations différentes.**

:::

### 🔄 3. Réaffecter une valeur

Une variable peut recevoir une nouvelle valeur plus tard.

```js
score = 20;
```

La variable `score` existait déjà. Sa valeur `10` est simplement remplacée par `20` :

```text
score
+----+
| 20 |
+----+
```

On appelle cela une **réaffectation**.

<center>![Changer la valeur d'une variable](../../static/img/cours2/changeValue.png)</center>

:::warning 🔄 Réaffecter = changer le contenu

On ne remet pas `let`, parce qu'on ne veut pas créer une nouvelle variable.

```js
let score = 10;
score = 20;       // ✅ on change la valeur
```

:::

### 🛑 Attention à la redéclaration

À l'inverse, ceci tente de déclarer deux fois la même variable dans le même contexte :

```js
let score = 10;
let score = 20;   // ❌ on tente de redéclarer score
```

<center>![Redéclaration d'une variable](../../static/img/cours2/doubleLet.png)</center>

:::danger 🧠 Le réflexe à développer

Avant d'écrire `let`, demandez-vous :

**« Est-ce que je crée cette variable pour la première fois? »**

- ✅ Oui → utilisez `let`.
- 🔄 Non, elle existe déjà et je veux seulement changer sa valeur → utilisez son nom et `=`.

:::

### 🧩 Déclarer et affecter sur la même ligne

Très souvent, on connaît déjà la première valeur au moment où on crée la variable :

```js
let age = 17;
```

:::important Une ligne, deux opérations

Cette ligne réalise **deux opérations** :

1. `let age` **déclare** la variable;
2. `= 17` lui **affecte** sa première valeur.

C'est une écriture pratique que nous utiliserons souvent, mais il faut garder en tête les deux opérations qu'elle contient.

:::

### 🔍 Vérifier la valeur d'une variable

Dans la console, écrivez simplement le nom de la variable :

```js
score
```

La console affiche alors sa valeur actuelle.

<center>![Vérifier la valeur d'une variable](../../static/img/cours2/checkValue.png)</center>

### 📝 Bien nommer une variable

Un bon nom de variable aide à comprendre le programme.

Quelques règles et habitudes importantes :

- le nom ne contient pas d'espace;
- il ne commence pas par un chiffre;
- on choisit un nom qui décrit la valeur : `prixBillet`, `nomJoueur`, `pointsDeVie`;
- pour plusieurs mots, on utilise généralement le **camelCase** : `nombreEtudiants`.

```js
let prixBillet = 12;
let nombreBillets = 3;
```

:::tip ✅ Un nom qui raconte quelque chose

Des noms comme `a`, `x` ou `truc` peuvent fonctionner, mais ils deviennent rapidement difficiles à comprendre dans un vrai programme.

Préférez un nom qui vous rappelle **ce que la variable contient**.

:::

## 🧰 Utiliser des variables

Une fois qu'une variable contient une valeur, on peut l'utiliser dans une expression.

```js
let prixBillet = 12;
let nombreBillets = 3;
let total = prixBillet * nombreBillets;
```

Ici, `total` contient `36`.

:::info 🔎 À remarquer

Utiliser une variable dans un calcul **ne modifie pas automatiquement sa valeur**.

```js
let a = 3;
let b = 2;
a + b;
```

Après le calcul, `a` vaut encore `3` et `b` vaut encore `2`.

:::

## 📬 Modifier une valeur avec `+=` et `-=`

L'opérateur `=` peut remplacer la valeur d'une variable :

```js
let points = 10;
points = 25;
```

Lorsqu'on veut augmenter ou diminuer la valeur déjà présente, on peut aussi utiliser `+=` et `-=`.

```js
let points = 10;
points += 5;   // points vaut maintenant 15
points -= 2;   // points vaut maintenant 13
```

<center>![Augmenter une variable avec +=](../../static/img/cours2/plusEqual.png)</center>

:::tip ⚡ Un raccourci pratique

```js
points += 5;
```

équivaut ici à :

```js
points = points + 5;
```

Dans les deux cas, on **modifie une variable qui existe déjà**. On ne la redéclare pas.

:::

---

## 🔤 Chaînes de caractères

Une **chaîne de caractères** est une valeur textuelle.

```js
let nom = "Mia";
let message = "Bonjour!";
```

Une chaîne doit être entourée de guillemets.

:::warning 🔢 `55` n'est pas la même chose que `"55"`

```js
let ageNombre = 55;
let ageTexte = "55";
```

Même s'ils se ressemblent :

- `55` est un **nombre**;
- `"55"` est une **chaîne de caractères**.

:::

Cette différence devient particulièrement visible avec l'opérateur `+`.

```js
5 + 2       // 7
"5" + "2"   // "52"
"5" + 2     // "52"
```

<center>![Nombre et chaîne de caractères](../../static/img/cours3/stringNumber1.png) ![Addition avec une chaîne](../../static/img/cours3/stringNumber2.png)</center>

## 🧱 Concaténation

**Concaténer** signifie joindre des morceaux de texte.

```js
let prenom = "Mia";
let message = "Bonjour " + prenom;
```

La variable `message` contient alors `"Bonjour Mia"`.

:::info ➕ Avec du texte, `+` peut vouloir dire « coller »

Avec une chaîne de caractères, `+` ne fait pas nécessairement une addition mathématique : il peut **concaténer** les valeurs.

:::

Avec une chaîne de caractères, `+=` permet d'ajouter du texte à la fin de la valeur existante :

```js
let message = "Bonjour";
message += " Mia";
```

`message` contient maintenant `"Bonjour Mia"`.

## 🔩 Littéraux de gabarits

Les **littéraux de gabarits** (*template strings*) permettent d'insérer facilement des valeurs dans une chaîne.

On utilise des accents graves `` ` `` autour de la chaîne et `${...}` autour de la valeur à insérer.

```js
let prenom = "Mia";
let age = 17;
let phrase = `${prenom} a ${age} ans.`;
```

La variable `phrase` contient :

```text
Mia a 17 ans.
```

<center>![Exemple de littéral de gabarit](../../static/img/cours3/templateString1.png)</center>

:::tip ✨ Pourquoi c'est pratique?

On peut insérer plusieurs variables et même un calcul directement dans la chaîne :

```js
let prix = 5;
let quantite = 3;
let message = `Le total est de ${prix * quantite} $.`;
```

:::

---

## 🧠 Résumé

| Besoin | Exemple |
| --- | --- |
| 📦 Déclarer une variable | `let score;` |
| 📦💾 Déclarer et affecter | `let score = 10;` |
| 🔄 Réaffecter une valeur | `score = 20;` |
| ➕ Augmenter une valeur | `score += 5;` |
| ➖ Diminuer une valeur | `score -= 2;` |
| 🔤 Créer une chaîne | `let nom = "Mia";` |
| 🧱 Concaténer | `"Bonjour " + nom` |
| ✨ Insérer une valeur dans du texte | `` `Bonjour ${nom}` `` |

:::important ⭐ Le point à retenir avant de partir

```js
let score;   // 📦 je crée la variable
score = 10;  // 💾 je lui donne une valeur
score = 20;  // 🔄 je change cette valeur
```

**Déclarer une variable n'est pas la même chose qu'affecter ou réaffecter sa valeur.**

:::
