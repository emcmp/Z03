---
title: Aide-mémoire — HTML/CSS
description: Référence rapide pour retrouver les syntaxes essentielles des rencontres 1 à 5.
---

# Aide-mémoire — HTML/CSS

Utilisez cette page pour **retrouver une syntaxe rapidement**. Les explications complètes se trouvent dans les pages de rencontre.

## Structure HTML minimale

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
  </body>
</html>
```

| Élément | Rôle |
| --- | --- |
| `<head>` | informations sur la page |
| `<title>` | texte dans l'onglet |
| `<body>` | contenu visible |
| `<h1>` à `<h6>` | titres hiérarchisés |
| `<p>` | paragraphe |
| `<ul>` / `<ol>` / `<li>` | listes |
| `<strong>` | importance |
| `<em>` | emphase |
| `<nav>` | groupe de navigation |
| `<main>` | contenu principal |
| `<section>` | section de contenu |
| `<div>` | conteneur général |

### Commentaire

```html
<!-- Cette note reste dans le code -->
```

## Liens

```html
<a href="pages/sujet.html">Sujet</a>
```

Depuis une page sous `pages/` vers l'accueil :

```html
<a href="../index.html">Accueil</a>
```

Lien vers une section de la page actuelle :

```html
<h2 id="contact">Contact</h2>
<a href="#contact">Aller à Contact</a>
```

## Images

```html
<img
  src="images/photo.jpg"
  alt="Description utile de l'image"
  width="400"
>
```

Depuis une page sous `pages/` :

```html
<img src="../images/photo.jpg" alt="Description utile">
```

### Attribut `alt`

```text
image informative → description utile
image décorative   → alt=""
```

Chaque élément `<img>` doit posséder un attribut `alt`.

### Dimensions

Dans l'attribut HTML, `width="400"` représente la largeur en pixels et s'écrit sans `px`.

Pour une largeur relative, utilisez CSS :

```css
.image-principale {
  width: 80%;
  height: auto;
}
```

## Chemins relatifs

Avec cette structure :

```text
mon-site/
├── index.html
├── css/
│   └── styles.css
├── images/
│   └── photo.jpg
└── pages/
    └── sujet.html
```

| Point de départ | Destination | Chemin |
| --- | --- | --- |
| `index.html` | image | `images/photo.jpg` |
| `pages/sujet.html` | image | `../images/photo.jpg` |
| `index.html` | page secondaire | `pages/sujet.html` |
| `pages/sujet.html` | accueil | `../index.html` |
| `index.html` | CSS | `css/styles.css` |
| `pages/sujet.html` | CSS | `../css/styles.css` |

:::warning Réflexe essentiel
Commencez toujours par le fichier **dans lequel le chemin est écrit**.
:::

## Relier CSS

Dans `index.html` :

```html
<link rel="stylesheet" href="css/styles.css">
```

Dans une page sous `pages/` :

```html
<link rel="stylesheet" href="../css/styles.css">
```

## Règle CSS

```css
p {
  color: navy;
}
```

```text
p            → sélecteur
color        → propriété
navy         → valeur
color: navy; → déclaration
```

## Sélecteurs

### Élément

```css
p {
  color: #37474f;
}
```

### Classe

```html
<p class="mise-en-valeur">Important</p>
```

```css
.mise-en-valeur {
  font-weight: bold;
}
```

### Identifiant

```html
<p id="intro">Bienvenue</p>
```

```css
#intro {
  color: darkgreen;
}
```

```text
classe → rôle réutilisable → .nom-de-classe
id     → élément unique    → #nom-identifiant
```

Une classe peut être réutilisée. Un `id` doit être unique dans la page.

Dans le Projet Web, au moins un élément doit posséder un `id` unique ciblé par un sélecteur `#id` correspondant.

## Propriétés visuelles courantes

```css
body {
  font-family: Arial, sans-serif;
  color: #263238;
  background-color: #ffffff;
}

h1 {
  color: #245a86;
  font-size: 2rem;
  text-align: center;
}

.mise-en-valeur {
  font-weight: bold;
  font-style: italic;
  border: 2px solid #245a86;
}
```

## Modèle en boîte

```text
De l'intérieur vers l'extérieur: contenu → padding → border → margin
```

```css
.carte {
  padding: 20px;
  border: 2px solid #245a86;
  margin: 24px 0;
}
```

| Besoin | Propriété |
| --- | --- |
| éloigner le contenu de la bordure | `padding` |
| changer la ligne autour du bloc | `border` |
| séparer le bloc de ses voisins | `margin` |

Deux valeurs se lisent ainsi :

```css
padding: 16px 24px;
```

```text
16px → haut et bas
24px → gauche et droite
```

## Largeurs, images et centrage

### Largeur fixe ou relative

```css
.carte {
  width: 320px;
}

.image-principale {
  width: 80%;
  height: auto;
}
```

```text
px → dimension fixe
%  → proportion de l'espace disponible dans le parent
```

### Garder une image dans son conteneur

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

Dans `margin: 0 auto`, `0` agit en haut et en bas; `auto` agit à gauche et à droite.

### Centrer le contenu d'une boîte

```css
.zone-image {
  text-align: center;
}
```

```text
text-align: center  → centre le texte et les éléments en ligne
margin: 0 auto      → peut centrer la boîte elle-même
justify-content     → dispose les enfants d'un conteneur Flexbox
```

## Flexbox simple

```html
<nav class="navigation">
  <a href="index.html">Accueil</a>
  <a href="pages/sujet-1.html">Sujet 1</a>
  <a href="pages/sujet-2.html">Sujet 2</a>
  <a href="pages/apropos.html">À propos</a>
</nav>
```

```css
.navigation {
  display: flex;
  gap: 20px;
}
```

```text
parent flex
├── enfant direct
├── enfant direct
├── enfant direct
└── enfant direct
```

- `display: flex` s'applique sur le parent des éléments à organiser;
- `gap` espace entre ses enfants directs;
- `justify-content` agit sur l'axe principal;
- `align-items` agit sur l'autre axe.

## Image de fond — facultatif

Dans `css/styles.css` :

```css
.banniere {
  background-image: url("../images/paysage.jpg");
  background-size: cover;
  background-position: center;
}
```

Le chemin de `url(...)` part du fichier CSS.

Une image informative devrait normalement rester un `<img>` avec `alt`.

## Dépannage rapide

### Une image ou un lien ne fonctionne pas

1. Trouvez le fichier où le chemin est écrit.
2. Trouvez la destination.
3. Vérifiez s'il faut entrer dans un dossier ou remonter avec `../`.
4. Vérifiez les noms et les majuscules.

### Une page ne reçoit pas le CSS

1. Enregistrez les fichiers HTML et CSS.
2. Vérifiez le nom `styles.css`.
3. Vérifiez le `<link>`.
4. Comparez `css/styles.css` et `../css/styles.css`.
5. Actualisez la bonne page avec `CTRL + R`.

### Une image dépasse son conteneur

Vérifiez si cette règle convient :

```css
img {
  max-width: 100%;
  height: auto;
}
```

### Une boîte n'est pas centrée

Vérifiez qu'elle n'occupe pas toute la largeur, puis ses marges horizontales :

```css
margin: 0 auto;
```

### Flexbox agit sur les mauvais éléments

1. Identifiez les éléments à organiser.
2. Trouvez leur parent commun.
3. Placez `display: flex` sur ce parent.

## Raccourcis utiles

| Action | Windows |
| --- | --- |
| enregistrer | `Ctrl+S` |
| actualiser le navigateur | `Ctrl+R` ou `F5` |
| formater le document | `Shift+Alt+F` |

Pour générer une structure HTML avec Emmet, tapez `html:5`, puis vérifiez `lang="fr"` et le `<title>`.
