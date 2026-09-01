---
title: Rencontre 2 - HTML, fichiers et navigation
description: Organiser le projet, comprendre les chemins relatifs, ajouter des images locales et relier plusieurs pages HTML.
---

import r2MiniSiteHtml from '!!raw-loader!../../static/examples/rencontre2/exercice-final/source.html';

# Rencontre 2 - HTML, fichiers et navigation

À la rencontre 1, vous avez créé une première page HTML. Aujourd'hui, cette page va devenir un **petit site composé de plusieurs fichiers**.

La difficulté principale de la rencontre est de comprendre **où se trouvent les fichiers les uns par rapport aux autres**. Nous allons d'abord apprendre à lire cette organisation, puis nous utiliserons les chemins dans les images et dans les liens.

<TopicBadges topics={["html", "paths", "test"]} />

## Objectifs de la rencontre

À la fin de la rencontre, vous devriez être capable de :

- organiser les pages et les ressources dans des dossiers;
- lire une petite arborescence de fichiers;
- construire un chemin relatif vers un fichier du même dossier ou d'un sous-dossier;
- utiliser `../` pour remonter vers un dossier parent;
- ajouter une image locale avec `<img>`;
- utiliser `src`, `alt`, `width` et `height` dans une image;
- créer un lien avec `<a>` et `href`;
- relier plusieurs pages HTML entre elles;
- construire une navigation qui fonctionne depuis différentes pages;
- créer un lien vers une section de la même page avec `id` et `#`;
- diagnostiquer un lien ou une image qui ne fonctionne pas.

## 1. D'une page Web à un site Web

Une page Web est un fichier HTML. Un site Web contient généralement **plusieurs fichiers qui travaillent ensemble**.

Nous utiliserons la même structure dans les exemples de cette rencontre :

```text
mon-site/
├── index.html
├── images/
│   └── chat.jpg
└── pages/
    ├── infos.html
    └── apropos.html
```

Dans cet exemple :

- `mon-site` est le dossier racine du projet;
- `index.html` est la page d'accueil;
- `images` contient les images locales;
- `pages` contient les pages secondaires;
- `infos.html` et `apropos.html` se trouvent dans le même dossier.

Un dossier ne sert pas seulement à faire du rangement. Sa position influence aussi les **chemins** que nous devons écrire dans HTML.

:::info À maîtriser
Avant d'écrire un chemin, vous devez être capable de répondre à deux questions :

1. Dans quel fichier suis-je en train d'écrire le code?
2. Où se trouve le fichier que je veux atteindre?
:::

## 2. Une nouvelle page reste un document HTML complet

Lorsque vous ajoutez une page comme `infos.html` ou `apropos.html`, il ne suffit pas de copier quelques lignes de contenu. Chaque page reste un **document HTML complet**.

Par exemple :

```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>À propos</title>
  </head>
  <body>
    <h1>À propos</h1>
    <p>Voici le contenu principal de cette page.</p>
  </body>
</html>
```

Nous ajouterons la navigation un peu plus loin, après avoir vu comment fonctionnent les liens.

:::tip Bonne pratique
Des éléments comme `<header>`, `<nav>`, `<main>` et `<footer>` donnent du sens à la structure d'une page. Nous les utiliserons progressivement, mais ils ne sont pas évalués comme une simple liste de balises obligatoires.
:::

## 3. Comprendre les chemins relatifs

Un **chemin relatif** décrit la position d'un fichier par rapport au fichier actuel.

Reprenons notre structure :

```text
mon-site/
├── index.html
├── images/
│   └── chat.jpg
└── pages/
    ├── infos.html
    └── apropos.html
```

Pour l'instant, concentrons-nous sur les trajets entre les fichiers, sans nous préoccuper encore des balises HTML qui utiliseront ces chemins.

### Fichier dans le même dossier

`infos.html` et `apropos.html` se trouvent tous les deux dans `pages/`.

Depuis `pages/infos.html`, pour atteindre `pages/apropos.html`, le chemin peut simplement être :

```text
apropos.html
```

Il n'est pas nécessaire de répéter le nom du dossier `pages`, puisque le point de départ est déjà dans ce dossier.

### Entrer dans un sous-dossier

Depuis `index.html`, pour atteindre `images/chat.jpg` :

```text
images/chat.jpg
```

On peut lire le trajet comme ceci :

```text
à partir de index.html
→ entrer dans images
→ trouver chat.jpg
```

Depuis `index.html`, pour atteindre `pages/infos.html` :

```text
pages/infos.html
```

### Remonter d'un dossier avec `../`

Depuis `pages/apropos.html`, pour revenir vers `index.html` :

```text
../index.html
```

`../` signifie **remonter d'un dossier**.

Depuis cette même page, pour atteindre l'image :

```text
../images/chat.jpg
```

Le trajet est donc :

```text
pages/apropos.html
→ ../              revenir dans mon-site
→ images/          entrer dans images
→ chat.jpg         atteindre le fichier
```

<KeyPoint type="method" title="Toujours partir du fichier actuel">
Un chemin relatif se lit comme un trajet. Commencez à l'emplacement du fichier où le chemin sera écrit, puis suivez les dossiers jusqu'à la destination.
</KeyPoint>

### Le même fichier peut avoir plusieurs chemins

Le chemin dépend toujours du **point de départ**.

Pour atteindre la même image :

```text
Depuis index.html          → images/chat.jpg
Depuis pages/infos.html    → ../images/chat.jpg
```

La destination est la même. C'est le fichier de départ qui change.

## 4. Ajouter une image locale

Maintenant que nous savons lire un chemin, nous pouvons l'utiliser dans HTML.

L'élément `<img>` permet d'afficher une image dans une page.

```html
<img src="images/chat.jpg" alt="Un chat blanc assis devant une fenêtre">
```

### `src`

`src` indique **où trouver le fichier image**.

Depuis `index.html` :

```html
<img src="images/chat.jpg" alt="Un chat blanc assis devant une fenêtre">
```

Depuis `pages/infos.html`, la même image demande un autre chemin :

```html
<img src="../images/chat.jpg" alt="Un chat blanc assis devant une fenêtre">
```

C'est exactement la logique vue à la section précédente : le chemin est lu à partir du fichier HTML actuel.

### `alt`

`alt` fournit une solution textuelle lorsque l'image ne peut pas être vue ou lorsqu'une personne utilise un lecteur d'écran.

```html
alt="Un chat blanc assis devant une fenêtre"
```

:::tip Bonne pratique — texte alternatif
Un bon texte alternatif transmet l'information utile de l'image. Un texte comme `chat.jpg` ou `image123` ne décrit pas réellement le contenu.
:::

### `width` et `height`

Les attributs `width` et `height` permettent d'indiquer les dimensions affichées de l'image directement dans HTML.

```html
<img
  src="images/chat.jpg"
  alt="Un chat blanc assis devant une fenêtre"
  width="600"
  height="400"
>
```

Dans ces attributs HTML, les nombres correspondent à des **pixels**. On écrit donc `width="600"`, et non `width="600px"`.

```text
width  → largeur
height → hauteur
```

:::warning Respectez les proportions de l'image
Si vous indiquez à la fois `width` et `height`, les deux valeurs doivent respecter les proportions de l'image. Sinon, elle semblera étirée ou écrasée.

Si vous ne connaissez pas les bonnes proportions, vous pouvez commencer par indiquer seulement une dimension et laisser le navigateur conserver l'autre à partir de l'image originale.
:::

:::info HTML aujourd'hui, CSS plus tard
À cette rencontre, nous utilisons les attributs HTML `width` et `height` pour comprendre et contrôler simplement les dimensions d'une image. CSS offrira ensuite d'autres façons de contrôler la taille et la présentation des éléments.
:::

## 5. Créer un lien avec `<a>`

Un **hyperlien** permet de cliquer sur un texte pour aller vers une autre destination.

En HTML, l'élément `<a>` crée ce lien. Son attribut `href` indique la destination.

```html
<a href="pages/apropos.html">À propos</a>
```

Dans cet exemple :

- `<a>` crée le lien;
- `href="pages/apropos.html"` indique où aller;
- `À propos` est le texte cliquable;
- `</a>` termine le lien.

Le chemin placé dans `href` suit **exactement les mêmes règles de chemin relatif** que celles que nous avons déjà vues.

### Depuis la page d'accueil

Depuis `index.html`, pour atteindre `pages/infos.html` :

```html
<a href="pages/infos.html">Informations</a>
```

### Depuis une page dans `pages/`

Depuis `pages/infos.html`, pour revenir vers `index.html` :

```html
<a href="../index.html">Accueil</a>
```

Depuis `pages/infos.html`, pour atteindre `pages/apropos.html` :

```html
<a href="apropos.html">À propos</a>
```

Le deuxième chemin est plus court parce que les deux fichiers se trouvent dans le même dossier.

## 6. Construire une navigation

Un site de plusieurs pages doit permettre à la personne de comprendre où elle peut aller et de revenir facilement vers les autres pages.

Nous utilisons toujours la même structure :

```text
mon-site/
├── index.html
├── images/
│   └── chat.jpg
└── pages/
    ├── infos.html
    └── apropos.html
```

Dans `index.html`, la navigation pourrait être :

```html
<nav>
  <a href="index.html">Accueil</a>
  <a href="pages/infos.html">Informations</a>
  <a href="pages/apropos.html">À propos</a>
</nav>
```

Dans `pages/infos.html`, les destinations sont les mêmes, mais les chemins changent :

```html
<nav>
  <a href="../index.html">Accueil</a>
  <a href="infos.html">Informations</a>
  <a href="apropos.html">À propos</a>
</nav>
```

Pourquoi?

- `../index.html` remonte vers le dossier parent;
- `infos.html` est dans le même dossier que la page actuelle;
- `apropos.html` est aussi dans le même dossier.

:::tip Bonne pratique
L'élément `<nav>` décrit un groupe de liens de navigation importants. Nous l'utiliserons dans les exemples du cours.

`<nav>` est une bonne pratique, mais son absence à elle seule ne fait pas échouer une compétence si la navigation est autrement correcte et comprise.
:::

Voici un petit site complet où vous pouvez cliquer sur **Informations**, observer l'image, puis revenir à l'accueil :

<ExampleFrame
  src="examples/rencontre2/exercice-final/preview.html"
  title="Mini-site de deux pages avec image et navigation"
  html={r2MiniSiteHtml}
  minHeight={260}
/>

## 7. Quelques autres types de liens

Une fois le principe de base compris, `href` peut aussi pointer vers d'autres types de destinations.

### Lien vers une section de la même page

On commence par donner un identifiant à l'élément de destination :

```html
<h2 id="contact">Contact</h2>
```

Puis on crée un lien dont le `href` contient `#` suivi du même identifiant :

```html
<a href="#contact">Aller à la section Contact</a>
```

On peut lire le lien ainsi :

```text
#contact → trouver dans cette page l'élément dont id="contact"
```

:::info À maîtriser
La valeur après `#` doit correspondre exactement à la valeur de `id`.

Un `id` sert à identifier un élément particulier dans une page et doit être unique dans cette page.
:::

### Lien vers un autre site

Un lien peut aussi utiliser une adresse complète :

```html
<a href="https://www.w3.org/">Site du W3C</a>
```

Dans ce cas, on utilise une adresse Web complète plutôt qu'un chemin vers un fichier local du projet.

## 8. Éviter les chemins qui ne fonctionneront pas en ligne

Le navigateur doit pouvoir retrouver les fichiers **à l'intérieur du projet**.

Évitez donc un chemin qui dépend de votre ordinateur, par exemple :

```text
C:\Users\VotreNom\Downloads\chat.jpg
```

Ce chemin pourrait fonctionner uniquement sur votre poste et devenir inutilisable lorsque le site est déplacé ou publié.

Placez plutôt le fichier dans votre projet :

```text
mon-site/
└── images/
    └── chat.jpg
```

puis utilisez un chemin relatif.

:::tip Bonne pratique
Pour les travaux du cours, gardez les ressources importantes dans le dossier du projet. Le site devient ainsi plus facile à déplacer, sauvegarder et publier.
:::

## 9. Diagnostiquer un chemin qui ne fonctionne pas

Lorsque vous voyez une image brisée ou qu'un lien mène au mauvais endroit, ne changez pas le chemin au hasard.

Procédez dans cet ordre :

1. regardez dans quel fichier HTML le chemin est écrit;
2. retrouvez ce fichier dans l'explorateur de VS Code;
3. retrouvez le fichier de destination;
4. tracez mentalement le trajet entre les deux;
5. vérifiez les noms de dossiers et de fichiers caractère par caractère;
6. corrigez le chemin puis testez de nouveau.

### Exemple d'erreur

Structure :

```text
mon-site/
├── index.html
└── pages/
    ├── infos.html
    └── apropos.html
```

Code écrit dans `pages/apropos.html` :

```html
<a href="index.html">Accueil</a>
```

Le navigateur cherche alors `pages/index.html`, qui n'existe pas.

La correction est :

```html
<a href="../index.html">Accueil</a>
```

:::warning Les majuscules comptent
Lorsqu'un site est publié, `Chat.jpg` et `chat.jpg` peuvent être considérés comme deux fichiers différents. Utilisez exactement le même nom dans le dossier et dans le code.
:::

## 10. Valider HTML et tester les chemins

Le validateur W3C reste utile pour vérifier la structure et la syntaxe HTML :

[Validateur HTML du W3C](https://validator.w3.org/)

Il peut vous aider à trouver une balise oubliée ou un attribut mal écrit.

Cependant, un document HTML peut être valide tout en contenant un chemin vers un fichier qui n'existe pas. Pour vérifier les chemins, vous devez aussi **ouvrir les pages, cliquer sur tous les liens et regarder si les images apparaissent**.

:::tip Bonne pratique
Avant une validation de compétence, faites un précontrôle : validez votre HTML, puis parcourez votre site comme si vous étiez un visiteur.
:::

## 11. Passer de la théorie à la pratique

Nous allons d'abord pratiquer les chemins avec un petit site commun :

**[Exercice guidé — Images, chemins et navigation](./02-rencontre2-exercice-guide.md)**

Vous appliquerez ensuite les mêmes principes à votre propre site :

**[Projet Web — Étape 2 : transformer votre page en petit site](../03-projet-web/02-rencontre2.md)**

## Validations disponibles

À cette rencontre, deux moments de validation deviennent disponibles.

### Validation A — Structure HTML

- **WEB-01 — Organiser un projet Web et utiliser les chemins**;
- **WEB-02 — Construire une page HTML correctement structurée**.

### Validation B — Contenu et navigation

- **WEB-03 — Structurer et enrichir le contenu HTML**;
- **WEB-04 — Relier plusieurs pages dans une navigation fonctionnelle**.

La validation B peut se poursuivre au début de la rencontre 3 au besoin.

:::info À maîtriser
La validation porte sur votre capacité à **comprendre, expliquer et modifier** votre code. Elle ne consiste pas à compter un nombre précis d'images, de liens, de listes, de dimensions ou de balises.
:::

:::note Pour aller plus loin — non évalué
Si vous avez terminé la matière principale, vous pouvez ajouter un lien externe pertinent, une page supplémentaire ou du contenu supplémentaire à votre site.

Ne commencez pas encore la mise en forme CSS : la rencontre 3 sera consacrée à la feuille de styles externe et aux premiers sélecteurs.
:::
