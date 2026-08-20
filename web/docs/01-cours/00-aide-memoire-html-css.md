---
title: Aide-mémoire — HTML/CSS
description: Référence rapide pour retrouver les principales syntaxes HTML et CSS utilisées dans les rencontres 1 à 5.
---

# Aide-mémoire — HTML/CSS

Cette page sert de **référence rapide**. Elle regroupe les syntaxes HTML et CSS les plus utiles des rencontres 1 à 5, avec de petits exemples à retrouver rapidement pendant un exercice ou le Projet Web.

:::info À garder en tête
Le but n'est pas de tout mémoriser. Utilisez cette page pour retrouver une syntaxe, puis assurez-vous de comprendre ce que vous modifiez.
:::

## Structure minimale d'une page HTML

```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Titre de la page</title>
    <link rel="stylesheet" href="css/styles.css">
  </head>
  <body>
    <h1>Titre principal</h1>
    <p>Contenu de la page.</p>
  </body>
</html>
```

| Élément | Rôle |
|---|---|
| `<!doctype html>` | Indique un document HTML moderne. |
| `<html lang="fr">` | Contient tout le document et indique sa langue. |
| `<head>` | Contient les informations sur la page. |
| `<title>` | Texte affiché dans l'onglet du navigateur. |
| `<body>` | Contient ce qui est visible dans la page. |
| `<link>` | Relie la page à une feuille CSS externe. |

## Deux raccourcis VS Code très pratiques

### Générer la structure HTML avec Emmet

Dans un fichier `.html` vide, tapez :

```text
html:5
```

Choisissez ensuite la suggestion **Emmet Abbreviation** et appuyez sur `Entrée` (ou `Tab` selon votre configuration). VS Code génère automatiquement la structure de base d'un document HTML.

:::warning Vérifiez la langue et le titre
Emmet peut générer `lang="en"` par défaut. Pour une page en français, remplacez-le par :

```html
<html lang="fr">
```

Pensez aussi à remplacer le `<title>` généré par un titre qui décrit réellement votre page.
:::

### Réindenter et reformater le document

Si votre code fonctionne, mais que l'indentation est devenue difficile à lire, utilisez **Format Document** :

```text
Shift + Alt + F
```

Sur Windows, ce raccourci reformate le document et remet généralement l'indentation en ordre.

Avant :

```html
<main>
<section>
<h2>Mon sujet</h2>
<p>Un paragraphe.</p>
</section>
</main>
```

Après `Shift + Alt + F` :

```html
<main>
  <section>
    <h2>Mon sujet</h2>
    <p>Un paragraphe.</p>
  </section>
</main>
```

:::tip Réflexe utile
Une indentation claire aide à voir quels éléments sont à l'intérieur des autres et à repérer plus rapidement une balise mal fermée.

Sur macOS, le raccourci équivalent est généralement `Shift + Option + F`.
:::

## Balises HTML courantes

| Besoin | Exemple |
|---|---|
| Titre principal | `<h1>Mon titre</h1>` |
| Sous-titre | `<h2>Ma section</h2>` |
| Paragraphe | `<p>Mon texte.</p>` |
| Liste non ordonnée | `<ul><li>Élément</li></ul>` |
| Liste ordonnée | `<ol><li>Étape</li></ol>` |
| Texte important | `<strong>Important</strong>` |
| Emphase | `<em>Mot</em>` |
| Lien | `<a href="pages/sujet.html">Sujet</a>` |
| Image | `<img src="images/chat.jpg" alt="Un chat blanc">` |
| Navigation | `<nav>...</nav>` |
| Contenu principal | `<main>...</main>` |
| En-tête | `<header>...</header>` |
| Pied de page | `<footer>...</footer>` |
| Section | `<section>...</section>` |
| Conteneur général | `<div>...</div>` |
| Saut de ligne | `<br>` |
| Ligne de séparation | `<hr>` |

:::tip Bonne pratique
`<header>`, `<nav>`, `<main>`, `<section>` et `<footer>` donnent du sens à la structure. `<div>` est utile lorsqu'aucun élément plus précis n'est nécessaire.
:::

## Attributs à reconnaître

| Attribut | Exemple | Utilité |
|---|---|---|
| `href` | `<a href="pages/sujet.html">` | Destination d'un lien. |
| `src` | `<img src="images/chat.jpg">` | Emplacement d'une image. |
| `alt` | `alt="Un chat blanc"` | Description textuelle d'une image. |
| `class` | `class="carte"` | Permet de réutiliser un style CSS. |
| `id` | `id="intro"` | Identifie un élément unique dans la page. |

## Chemins relatifs : `/` et surtout `../`

Supposons cette structure :

```text
mon-site/
├── index.html
├── images/
│   └── paysage.jpg
├── css/
│   └── styles.css
└── pages/
    └── sujet.html
```

Le chemin dépend toujours du **fichier dans lequel vous écrivez le chemin**.

### Entrer dans un dossier

Depuis `index.html` vers l'image :

```html
<img src="images/paysage.jpg" alt="Un paysage">
```

`images/paysage.jpg` signifie : entrer dans le dossier `images`, puis trouver `paysage.jpg`.

### Remonter d'un dossier avec `../`

Depuis `pages/sujet.html` vers `index.html` :

```html
<a href="../index.html">Accueil</a>
```

`../` signifie **remonter d'un dossier**.

Depuis `pages/sujet.html` vers l'image :

```html
<img src="../images/paysage.jpg" alt="Un paysage">
```

On peut lire ce chemin comme ceci :

```text
pages/sujet.html
→ ../        remonter dans mon-site
→ images/    entrer dans images
→ paysage.jpg
```

:::warning Réflexe important
Ne demandez pas seulement « où est l'image? ». Demandez d'abord : **dans quel fichier suis-je en train d'écrire le chemin?**
:::

## Relier une feuille CSS externe

Avec cette structure :

```text
mon-site/
├── index.html
├── css/
│   └── styles.css
└── pages/
    └── sujet.html
```

Dans `index.html` :

```html
<link rel="stylesheet" href="css/styles.css">
```

Dans `pages/sujet.html` :

```html
<link rel="stylesheet" href="../css/styles.css">
```

Le même fichier CSS est utilisé; seul le point de départ du chemin change.

## Syntaxe d'une règle CSS

```css
p {
  color: navy;
}
```

```text
p              → sélecteur
color          → propriété
navy           → valeur
color: navy;   → déclaration
```

Forme générale :

```css
selecteur {
  propriete: valeur;
}
```

## Sélecteurs utiles

### Sélecteur d'élément

```css
p {
  color: #37474f;
}
```

Vise tous les `<p>`.

### Classe

HTML :

```html
<p class="mise-en-valeur">Important</p>
```

CSS :

```css
.mise-en-valeur {
  font-weight: bold;
}
```

Le point `.` appartient au sélecteur CSS.

### Identifiant

HTML :

```html
<p id="intro">Bienvenue</p>
```

CSS :

```css
#intro {
  color: darkgreen;
}
```

Un `id` doit être unique dans une page. Pour un style réutilisable, préférez généralement une classe.

## Propriétés CSS courantes

| Propriété | Exemple | Effet |
|---|---|---|
| `color` | `color: darkblue;` | Couleur du texte. |
| `background-color` | `background-color: #eaf3ff;` | Couleur de fond. |
| `font-family` | `font-family: Arial, sans-serif;` | Police du texte. |
| `font-size` | `font-size: 1.2rem;` | Taille du texte. |
| `font-weight` | `font-weight: bold;` | Graisse du texte. |
| `font-style` | `font-style: italic;` | Style du texte. |
| `text-align` | `text-align: center;` | Alignement du texte. |
| `text-decoration` | `text-decoration: none;` | Décoration du texte. |
| `border` | `border: 2px solid #245a86;` | Bordure. |
| `width` | `width: 320px;` | Largeur simple. |
| `max-width` | `max-width: 900px;` | Largeur maximale. |

## Image de fond avec `background-image`

Voici un cas fréquent : le fichier CSS est dans `css/` et l'image est dans `images/`.

```text
mon-site/
├── index.html
├── css/
│   └── styles.css
└── images/
    └── paysage.jpg
```

Dans `css/styles.css` :

```css
body {
  background-image: url("../images/paysage.jpg");
}
```

Pourquoi `../`?

```text
css/styles.css
→ ../        remonter dans mon-site
→ images/    entrer dans images
→ paysage.jpg
```

:::warning Le chemin de `url(...)` part du fichier CSS
Dans une règle écrite dans `css/styles.css`, le chemin vers une image est calculé **à partir du dossier `css`**, pas à partir de `index.html`.
:::

### Couvrir le fond de la page et centrer l'image

```css
body {
  min-height: 100vh;
  background-color: #dbeafe;
  background-image: url("../images/paysage.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
```

| Propriété | Effet |
|---|---|
| `background-color` | Donne une couleur de fond. |
| `background-image` | Utilise une image comme arrière-plan. |
| `background-size: cover` | Agrandit l'image pour couvrir toute la zone. |
| `background-position: center` | Garde le centre de l'image au centre. |
| `background-repeat: no-repeat` | Empêche l'image de se répéter. |
| `min-height: 100vh` | Permet au `body` d'occuper au moins toute la hauteur de l'écran. |

:::note Référence pratique
Une image de fond peut être utile dans un projet, mais l'objectif reste de comprendre le chemin et les propriétés utilisées. Elle ne constitue pas à elle seule une exigence de validation.
:::

## Modèle en boîte

Ordre à retenir :

```text
contenu → padding → border → margin
```

```css
.carte {
  padding: 20px;
  border: 2px solid #245a86;
  margin: 24px 0;
}
```

- `padding` : espace **à l'intérieur**, entre le contenu et la bordure;
- `border` : ligne autour de la boîte;
- `margin` : espace **à l'extérieur**, entre la boîte et ses voisines.

### Une ou deux valeurs

```css
.carte {
  padding: 16px 24px;
}
```

```text
16px → haut et bas
24px → gauche et droite
```

## Flexbox simple

HTML :

```html
<nav class="navigation">
  <a href="index.html">Accueil</a>
  <a href="pages/sujet.html">Sujet</a>
  <a href="pages/apropos.html">À propos</a>
</nav>
```

CSS :

```css
.navigation {
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
}
```

À retenir :

```text
parent flex
├── enfant direct
├── enfant direct
└── enfant direct
```

- `display: flex` s'applique au **parent**;
- `gap` crée de l'espace entre les enfants;
- `justify-content` agit sur l'axe principal;
- `align-items` agit sur l'autre axe.

## Petits ajouts utiles

Ces propriétés peuvent être pratiques sans devenir des exigences à mémoriser :

```css
.carte {
  border-radius: 8px;
  box-sizing: border-box;
}

.navigation {
  flex-wrap: wrap;
}
```

:::note Pour aller plus loin — non évalué
`border-radius`, `box-sizing` et `flex-wrap` peuvent être utiles selon votre projet. Elles ne remplacent pas les notions essentielles à maîtriser.
:::

## Réflexes de débogage

### Une image ou un lien ne fonctionne pas

1. Trouvez le fichier dans lequel le chemin est écrit.
2. Trouvez le fichier de destination.
3. Vérifiez s'il faut entrer dans un dossier ou remonter avec `../`.
4. Vérifiez les noms de fichiers et les majuscules.

### Une page ne reçoit pas son CSS

Vérifiez d'abord le `<link>` et le chemin vers `styles.css`.

Depuis `index.html` :

```html
<link rel="stylesheet" href="css/styles.css">
```

Depuis une page dans `pages/` :

```html
<link rel="stylesheet" href="../css/styles.css">
```

### Une image de fond n'apparaît pas

Si la règle est dans `css/styles.css`, vérifiez le chemin **depuis le dossier `css`** :

```css
background-image: url("../images/paysage.jpg");
```

### Flexbox agit sur les mauvais éléments

Trouvez d'abord les éléments que vous voulez disposer, puis appliquez `display: flex` à leur **parent commun**.

:::info Validation
Les validations HTML/CSS portent sur votre capacité à comprendre, expliquer, modifier et corriger votre code. Elles ne consistent pas à accumuler un nombre précis de balises ou de propriétés.
:::
