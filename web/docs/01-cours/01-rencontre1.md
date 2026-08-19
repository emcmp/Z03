---
title: Rencontre 1 - Environnement et première page Web
description: Prendre en main les fichiers, VS Code et le navigateur, puis découvrir les bases de HTML.
---

# Rencontre 1 - Environnement et première page Web

Aujourd'hui, vous allez apprendre à travailler avec les fichiers d'un projet Web et découvrir comment une page HTML est structurée.

Le but n'est pas encore de produire un site complet ni de travailler son apparence. Vous devez surtout être capable de **retrouver vos fichiers, modifier votre code et voir le résultat dans le navigateur**.

## Objectifs de la rencontre

À la fin de la rencontre, vous devriez être capable de :

- créer et retrouver un dossier de projet;
- reconnaître une extension de fichier comme `.html`;
- ouvrir un dossier dans VS Code;
- créer et enregistrer un fichier `index.html`;
- ouvrir cette page dans un navigateur et l'actualiser après une modification;
- reconnaître les principales parties d'un document HTML;
- expliquer simplement ce qu'est une balise HTML;
- utiliser des titres, des paragraphes et des listes pour structurer du contenu;
- imbriquer correctement des éléments HTML simples.

---

# 1. Préparer son espace de travail

## Où conserver vos fichiers

Les fichiers enregistrés seulement sur un poste du cégep peuvent être perdus lorsque vous changez de poste ou fermez votre session.

Conservez donc le dossier du cours dans l'espace **OneDrive** utilisé pour vos travaux scolaires.

Une organisation simple pourrait ressembler à ceci :

```text
OneDrive/
└── Z03/
    └── mon-site/
```

Le dossier `mon-site` sera le **dossier racine** de votre projet Web.

:::tip Bonne pratique
Pour les noms de fichiers et de dossiers Web, privilégiez des noms courts, sans espace et sans accent.

Par exemple :

```text
mon-site
mes-jeux
voyage-japon
```
:::

## Les extensions de fichiers

L'extension indique le type d'un fichier.

Quelques extensions que nous utiliserons dans le cours :

```text
.html    page Web
.css     feuille de styles
.js      code JavaScript
.jpg     image
.png     image
.zip     archive contenant plusieurs fichiers
```

Aujourd'hui, nous commençons avec un fichier HTML :

```text
index.html
```

:::warning Vérifiez le vrai nom du fichier
Un fichier nommé `index.html.txt` n'est pas une page HTML.

Si Windows masque les extensions, activez leur affichage afin de toujours voir le nom complet de vos fichiers.
:::

## À propos des fichiers ZIP

Une archive `.zip` sert à transporter plusieurs fichiers ensemble.

Lorsqu'un laboratoire ou un exemple vous est fourni en ZIP, **extrayez d'abord son contenu** dans un dossier avant de travailler dessus dans VS Code.

---

# 2. Ouvrir un projet dans VS Code

Créez votre dossier `mon-site`, puis ouvrez **le dossier complet** dans VS Code.

Dans VS Code :

1. choisissez **Fichier → Ouvrir le dossier**;
2. sélectionnez `mon-site`;
3. créez un nouveau fichier nommé `index.html`;
4. enregistrez-le.

Vous devriez voir quelque chose comme ceci dans l'explorateur de VS Code :

```text
mon-site/
└── index.html
```

:::tip Bonne pratique
Ouvrez le dossier du projet dans VS Code plutôt qu'un fichier isolé. Vous verrez ainsi tous les fichiers du site au même endroit.
:::

---

# 3. Une première page HTML

Ajoutez le code suivant dans `index.html` :

```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ma première page</title>
  </head>
  <body>
    <h1>Bienvenue sur ma page</h1>
    <p>Je viens de créer ma première page Web.</p>
  </body>
</html>
```

Enregistrez le fichier, puis ouvrez `index.html` dans votre navigateur.

Le navigateur interprète le HTML et affiche le titre et le paragraphe. Il ne montre pas les balises elles-mêmes.

## Le cycle de travail

Pendant le cours, vous répéterez très souvent le même cycle :

```text
modifier le code
      ↓
enregistrer
      ↓
actualiser le navigateur
      ↓
observer le résultat
```

Essayez-le immédiatement : changez le texte du `<h1>`, enregistrez le fichier, puis actualisez la page dans le navigateur.

---

# 4. Comprendre les éléments HTML

Un document HTML est composé d'**éléments**. La plupart des éléments possèdent :

1. une balise ouvrante;
2. un contenu;
3. une balise fermante.

```html
<p>Ceci est un paragraphe.</p>
```

Dans cet exemple :

- `<p>` ouvre l'élément;
- `Ceci est un paragraphe.` est son contenu;
- `</p>` ferme l'élément.

## Les attributs

Une balise ouvrante peut contenir des **attributs**. Un attribut donne une information supplémentaire sur l'élément.

```html
<p class="introduction">Bienvenue!</p>
```

Ici, l'attribut `class` possède la valeur `introduction`. Nous utiliserons davantage les classes lorsque nous commencerons CSS.

## Quelques éléments sans balise fermante

Certains éléments ne contiennent pas de texte et n'ont pas de balise fermante. C'est notamment le cas de :

```html
<br>
<hr>
```

Nous verrons l'élément `<img>` et les chemins vers les images à la prochaine rencontre.

---

# 5. Imbriquer les éléments correctement

Un élément peut en contenir un autre. On parle alors d'**imbrication**.

```html
<p>Ce mot est <strong>important</strong>.</p>
```

Les balises doivent se fermer dans l'ordre inverse de leur ouverture.

Code correctement imbriqué :

```html
<p>Cinq chiens <strong><em>chassent</em></strong> six chats.</p>
```

:::danger Balises croisées
Le code suivant est incorrect, parce que les balises se croisent :

```html
<p>Cinq chiens <strong><em>chassent</strong></em> six chats.</p>
```
:::

:::tip Bonne pratique
L'indentation aide à voir la structure et à repérer plus facilement une balise mal placée.
:::

---

# 6. La structure d'un document HTML

Chaque partie du document joue un rôle précis.

## `<!doctype html>`

Cette déclaration indique au navigateur qu'il doit interpréter le document comme du HTML moderne. Elle apparaît tout au début du fichier.

## `<html>`

L'élément `<html>` contient tout le document, sauf la déclaration `<!doctype html>`. L'attribut `lang="fr"` indique que le contenu est en français.

## `<head>`

L'élément `<head>` contient des informations sur la page qui ne font pas partie du contenu principal affiché :

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Titre affiché dans l'onglet</title>
</head>
```

- `charset="UTF-8"` permet d'utiliser correctement les caractères accentués;
- `viewport` adapte l'affichage à la largeur de l'appareil;
- `<title>` détermine le texte affiché dans l'onglet du navigateur.

## `<body>`

L'élément `<body>` contient ce que la personne voit dans la page : titres, paragraphes, listes et, plus tard, images et liens.

---

# 7. Structurer le contenu visible

## Les titres

HTML propose six niveaux de titres, de `<h1>` à `<h6>`.

```html
<h1>Titre principal de la page</h1>
<h2>Une grande section</h2>
<h3>Une sous-section</h3>
```

Le niveau indique la place du titre dans la structure du document. On choisit donc un niveau pour son sens, et non simplement pour obtenir une taille de caractères particulière.

## Les paragraphes

L'élément `<p>` représente un paragraphe :

```html
<p>Voici mon premier paragraphe.</p>
<p>Voici un deuxième paragraphe.</p>
```

## Les listes

Une liste non ordonnée utilise `<ul>` et `<li>` :

```html
<ul>
  <li>Jeux de stratégie</li>
  <li>Jeux coopératifs</li>
  <li>Jeux de cartes</li>
</ul>
```

Une liste ordonnée utilise `<ol>` lorsque l'ordre des éléments est important :

```html
<ol>
  <li>Choisir un jeu</li>
  <li>Lire les règles</li>
  <li>Commencer la partie</li>
</ol>
```

## Mettre l'accent sur un passage

```html
<p>
  Cette consigne est <strong>importante</strong> et ce mot reçoit
  une <em>emphase</em> particulière.
</p>
```

:::info À maîtriser
Concentrez-vous sur la capacité de choisir un élément HTML qui correspond au rôle de votre contenu et de l'imbriquer correctement.

Vous n'avez pas à mémoriser une longue liste de balises.
:::

---

# Mise en pratique

La théorie de cette rencontre est appliquée dans une page séparée, comme un laboratoire :

**[Projet Web — Étape 1 : démarrer votre site](../03-projet-web/01-rencontre1.md)**

Aucune validation sommative n'est prévue à la rencontre 1. Cette première étape prépare surtout les compétences **WEB-01** et **WEB-02**, qui commenceront à être validées à la rencontre 2.

:::note Pour aller plus loin — non évalué
Si vous souhaitez explorer davantage HTML après avoir terminé l'étape pratique, vous pouvez consulter des éléments supplémentaires dans la documentation d'introduction. Ils ne deviennent pas automatiquement des exigences évaluées.
:::
