---
title: Rencontre 1 - Environnement et première page Web
description: Prendre en main les fichiers, VS Code et le navigateur, puis démarrer son site Web en HTML.
---

# Rencontre 1 - Environnement et première page Web

Aujourd'hui, vous allez créer le projet Web que vous ferez évoluer pendant les cinq premières rencontres du cours.

Le but n'est pas de produire une belle page dès aujourd'hui. Vous devez surtout être capable de **retrouver vos fichiers, modifier votre code et voir le résultat dans le navigateur**.

:::info Le projet des rencontres 1 à 5
Pendant les rencontres 1 à 5, vous travaillerez toujours sur le même petit site Web, sur un sujet de votre choix.

Chaque nouvelle notion de HTML ou de CSS servira directement à améliorer ce site.
:::

## Objectifs de la rencontre

À la fin de la rencontre, vous devriez être capable de :

- créer et retrouver un dossier de projet;
- reconnaître une extension de fichier comme `.html`;
- ouvrir un dossier dans VS Code;
- créer et enregistrer un fichier `index.html`;
- ouvrir cette page dans un navigateur et l'actualiser après une modification;
- reconnaître les principales parties d'un document HTML;
- utiliser des titres, des paragraphes et une liste pour structurer du contenu;
- expliquer simplement ce qu'est une balise HTML.

Aucune validation sommative n'est prévue aujourd'hui. Le travail réalisé prépare les premières validations de la rencontre 2.

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

# 3. Créer une première page HTML

Ajoutez le code suivant dans `index.html` :

```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon premier site</title>
  </head>
  <body>
    <h1>Bienvenue sur mon site</h1>
    <p>Je viens de créer ma première page Web.</p>
  </body>
</html>
```

Enregistrez le fichier, puis ouvrez `index.html` dans votre navigateur.

Vous devriez voir le titre et le paragraphe, mais pas les balises HTML elles-mêmes.

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

# 4. Comprendre ce qu'on vient d'écrire

## Les deux grandes parties de la page

Le document contient notamment un `<head>` et un `<body>`.

### `<head>`

Le `<head>` contient des informations **sur la page**.

Par exemple :

```html
<title>Mon premier site</title>
```

Le contenu de `<title>` apparaît dans l'onglet du navigateur.

### `<body>`

Le `<body>` contient principalement ce que la personne verra dans la page :

```html
<body>
  <h1>Bienvenue sur mon site</h1>
  <p>Je viens de créer ma première page Web.</p>
</body>
```

## Les éléments et les balises

La plupart des éléments HTML possèdent une balise ouvrante, un contenu et une balise fermante.

```html
<p>Ceci est un paragraphe.</p>
```

Dans cet exemple :

- `<p>` ouvre l'élément;
- `Ceci est un paragraphe.` est son contenu;
- `</p>` ferme l'élément.

Un élément peut aussi être placé à l'intérieur d'un autre élément. On parle d'**imbrication**.

```html
<p>Ce mot est <strong>important</strong>.</p>
```

Les éléments doivent se fermer dans le bon ordre.

:::tip Bonne pratique
L'indentation permet de voir plus facilement quels éléments sont contenus dans quels autres éléments.
:::

---

# 5. Structurer du contenu

Votre site ne doit pas être rempli de balises simplement pour en avoir beaucoup. Utilisez les éléments qui correspondent au rôle du contenu.

## Titres

Utilisez un titre principal pour annoncer le sujet de la page :

```html
<h1>Les jeux de société</h1>
```

Puis utilisez des sous-titres pour organiser les grandes parties :

```html
<h2>Pourquoi j'aime les jeux de société</h2>
<h2>Mes types de jeux préférés</h2>
```

Le niveau du titre représente sa place dans la structure. On ne choisit pas `<h1>` ou `<h2>` simplement en fonction de sa taille à l'écran.

## Paragraphes

Utilisez `<p>` pour écrire un paragraphe :

```html
<p>
  J'aime les jeux de société parce qu'ils permettent de passer du temps
  avec d'autres personnes et de résoudre différents problèmes.
</p>
```

## Listes

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

## Mettre l'accent sur une partie du texte

Vous pouvez indiquer qu'un passage est important avec `<strong>` ou lui donner une emphase avec `<em>` :

```html
<p>
  Mon jeu préféré est <strong>très stratégique</strong>, mais il reste
  <em>assez facile</em> à apprendre.
</p>
```

:::info À maîtriser
Pour l'instant, concentrez-vous sur la capacité de choisir un élément HTML qui correspond au rôle de votre contenu et de l'imbriquer correctement.

Vous n'avez pas à mémoriser une longue liste de balises.
:::

---

# 6. Démarrer votre site évolutif

Vous allez maintenant remplacer le contenu d'exemple par le début de **votre propre site**.

## Étape 1 — Choisir un sujet

Choisissez un sujet sur lequel vous pourrez facilement écrire quelques petites sections pendant les prochaines rencontres.

Quelques possibilités :

- un sport;
- un jeu;
- un artiste ou un genre musical;
- un animal;
- un lieu ou un voyage;
- la cuisine;
- une collection;
- une technologie;
- une entreprise ou un service fictif;
- tout autre sujet approprié qui vous intéresse.

Le sujet n'est pas évalué. Il sert simplement de contexte pour apprendre à construire un site.

## Étape 2 — Personnaliser la page

Dans `index.html` :

1. donnez un titre pertinent à l'onglet avec `<title>`;
2. ajoutez un `<h1>` qui présente clairement le sujet;
3. écrivez une courte introduction avec un ou plusieurs paragraphes;
4. créez quelques sections avec des titres appropriés;
5. ajoutez une liste là où elle a du sens;
6. utilisez `<strong>` ou `<em>` si cela améliore réellement le contenu;
7. enregistrez souvent et actualisez régulièrement le navigateur.

Vous n'avez pas besoin de remplir la page de texte. Quelques contenus réels et compréhensibles suffisent pour commencer.

:::warning Pas de mise en forme aujourd'hui
Votre page sera probablement très simple visuellement. C'est normal.

HTML sert d'abord à **structurer le contenu**. Nous commencerons la mise en forme avec CSS à la rencontre 3.
:::

---

# 7. Vérification avant de terminer

Avant de quitter, assurez-vous que :

- vous savez où se trouve le dossier `mon-site`;
- le fichier se nomme réellement `index.html`;
- le dossier du projet s'ouvre correctement dans VS Code;
- la page s'ouvre dans le navigateur;
- vous savez modifier le code, enregistrer et actualiser la page;
- votre document contient une structure HTML complète;
- votre `<title>` et votre `<h1>` correspondent à votre sujet;
- le contenu du `<body>` est organisé avec des éléments HTML pertinents;
- les balises sont correctement imbriquées et le code reste lisible.

Si un de ces points ne fonctionne pas, demandez de l'aide avant de commencer la rencontre suivante.

---

# Compétences préparées aujourd'hui

Il n'y a **aucune validation sommative** à la rencontre 1.

Le travail d'aujourd'hui prépare principalement :

- **WEB-01 — Organiser un projet Web et utiliser les chemins**;
- **WEB-02 — Construire une page HTML correctement structurée**.

Ces compétences seront observées plus formellement à partir de la rencontre 2, lorsque le projet contiendra plusieurs fichiers et ressources.

:::tip Bonne pratique
Pour faciliter la suite du projet :

- gardez une indentation lisible;
- utilisez des noms de fichiers simples;
- enregistrez souvent;
- vérifiez fréquemment le résultat dans le navigateur;
- corrigez un problème dès que vous le remarquez plutôt que d'accumuler plusieurs changements à la fois.
:::

:::note Pour aller plus loin — non évalué
Si vous terminez rapidement, enrichissez le **contenu** de votre page : ajoutez une section, une liste ou une sous-section supplémentaire et vérifiez que la structure reste logique.

N'essayez pas encore de prendre de l'avance avec CSS, la navigation ou une mise en page complexe. Nous les verrons ensemble dans les prochaines rencontres.
:::

# À la prochaine rencontre

À la rencontre 2, votre page unique deviendra un petit site avec :

- plusieurs pages;
- des images locales;
- des dossiers organisés;
- des chemins relatifs;
- une navigation permettant de circuler dans le site.
