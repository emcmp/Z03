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

### Commentaire HTML

```html
<!-- Cette note reste dans le code -->
```

Un commentaire commence par `<!--` et se termine par `-->`. Son texte n'est pas affiché comme contenu normal de la page.

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
| Image | `<img src="images/chat.jpg" alt="Un chat blanc" width="400" height="300">` |
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
| `width` | `width="400"` | Largeur d'une image en pixels dans HTML. |
| `height` | `height="300"` | Hauteur d'une image en pixels dans HTML. |
| `class` | `class="carte"` | Permet de réutiliser un style CSS. |
| `id` | `id="intro"` | Identifie un élément unique et peut servir de cible à un lien dans la page. |

:::warning Dimensions d'une image
Si vous indiquez `width` et `height` ensemble, gardez les proportions de l'image pour éviter de l'étirer ou de l'écraser. Dans les attributs HTML, écrivez un nombre comme `width="400"`, sans `px`.

Pour une largeur en pourcentage, utilisez plutôt CSS, par exemple `width: 80%`.
:::

## Lien vers une section de la même page

Donnez d'abord un `id` à la cible :

```html
<h2 id="contact">Contact</h2>
```

Puis utilisez le même nom après `#` dans le lien :

```html
<a href="#contact">Aller à la section Contact</a>
```

```text
href="#contact" → cible l'élément dont id="contact"
```

La valeur après `#` doit correspondre exactement à la valeur de `id`.

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

Un `id` doit être unique dans une page. Il peut aussi servir de cible à un lien comme `href="#intro"`. Pour un style réutilisable, préférez généralement une classe.

## Propriétés CSS courantes

| Propriété | Exemple | Effet |
|---|---|---|
| `color` | `color: darkblue;` | Couleur du texte. |
| `background-color` | `background-color: #eaf3ff;` | Couleur de fond. |
| `font-family` | `font-family: Arial, sans-serif;` | Police du texte. |
| `font-size` | `font-size: 1.2rem;` | Taille du texte. |
| `font-weight` | `font-weight: bold;` | Graisse du texte. |
| `font-style` | `font-style: italic;` | Style du texte. |
| `text-align` | `text-align: center;` | Alignement du contenu en ligne dans une boîte. |
| `text-decoration` | `text-decoration: none;` | Décoration du texte. |
| `border` | `border: 2px solid #245a86;` | Bordure. |
| `width` | `width: 320px;` ou `width: 80%;` | Largeur fixe ou relative. |
| `max-width` | `max-width: 900px;` ou `max-width: 100%;` | Largeur maximale. |
| `height` | `height: auto;` | Laisse le navigateur calculer la hauteur. |

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
.banniere {
  background-image: url("../images/paysage.jpg");
  background-size: cover;
  background-position: center;
  padding: 48px 20px;
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

| Propriété | Effet |
|---|---|
| `background-image` | Utilise une image comme arrière-plan. |
| `background-size: cover` | Agrandit l'image pour couvrir la zone disponible. |
| `background-position: center` | Garde le centre de l'image au centre. |
| `padding` | Donne de la hauteur et de l'espace intérieur à la bannière. |

:::tip Image de contenu ou image de fond?
Une image importante pour comprendre la page devrait normalement rester un `<img>` avec un `alt`. `background-image` convient surtout à une image décorative ou à une ambiance visuelle.
:::

:::note Au besoin — non évalué séparément
Vous pouvez aussi rencontrer :

```css
background-repeat: no-repeat;
```

Cette propriété empêche une image de fond de se répéter. Elle n'est pas une exigence mécanique de la Validation D.
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

## Largeurs relatives, images et centrage

### Largeur en pourcentage

```css
.image-principale {
  width: 80%;
  height: auto;
}
```

`80%` signifie 80 % de la largeur disponible dans le parent. `height: auto` conserve les proportions de l'image lorsque sa largeur change.

### Empêcher une image de dépasser son conteneur

```css
img {
  max-width: 100%;
  height: auto;
}
```

### Centrer une boîte

```css
main {
  width: 80%;
  max-width: 900px;
  margin: 0 auto;
}
```

Dans `margin: 0 auto`, `0` s'applique en haut et en bas et `auto` aux côtés gauche et droit.

### Centrer le contenu d'une boîte

```css
.zone-image {
  text-align: center;
}
```

À retenir :

```text
text-align: center → centre le contenu dans la boîte
margin: 0 auto     → peut centrer la boîte elle-même
```

À la rencontre 5, `justify-content: center` servira plutôt à disposer les enfants d'un conteneur Flexbox.

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

### Une image dépasse son conteneur

Vérifiez si une règle comme celle-ci est appropriée :

```css
img {
  max-width: 100%;
  height: auto;
}
```

### Une boîte n'est pas centrée

Vérifiez d'abord que sa largeur est plus petite que l'espace disponible, puis ses marges horizontales :

```css
margin: 0 auto;
```

### Flexbox agit sur les mauvais éléments

Trouvez d'abord les éléments que vous voulez disposer, puis appliquez `display: flex` à leur **parent commun**.

:::info Validation
Les validations HTML/CSS portent sur votre capacité à comprendre, expliquer, modifier et corriger votre code. Elles ne consistent pas à accumuler un nombre précis de balises ou de propriétés.
:::