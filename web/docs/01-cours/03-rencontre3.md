---
title: Rencontre 3 - Introduction à CSS
description: Relier une feuille CSS externe, utiliser des sélecteurs et commencer la mise en forme du site.
---

import classeHtml from '!!raw-loader!../../static/examples/rencontre3/classe-mise-en-valeur/preview.html';
import classeCss from '!!raw-loader!../../static/examples/rencontre3/classe-mise-en-valeur/styles.css';
import couleursR3Html from '!!raw-loader!../../static/examples/rencontre3/couleurs-r3/preview.html';
import couleursR3Css from '!!raw-loader!../../static/examples/rencontre3/couleurs-r3/styles.css';
import bordureHtml from '!!raw-loader!../../static/examples/rencontre3/bordure-simple/preview.html';
import bordureCss from '!!raw-loader!../../static/examples/rencontre3/bordure-simple/styles.css';

# Rencontre 3 - Introduction à CSS

Aux rencontres 1 et 2, vous avez surtout travaillé la **structure et le contenu** avec HTML. À partir d'aujourd'hui, CSS va vous permettre de contrôler l'**apparence** de ces mêmes pages.

Le but n'est pas d'apprendre toutes les possibilités de CSS en une seule rencontre. Nous allons commencer par une base très importante : **une feuille CSS externe partagée par plusieurs pages**.

## Objectifs de la rencontre

À la fin de la rencontre, vous devriez être capable de :

- expliquer le rôle de CSS par rapport à HTML;
- reconnaître la syntaxe d'une règle CSS;
- reconnaître les trois façons courantes d'ajouter du CSS et expliquer pourquoi nous privilégions la feuille externe;
- créer un fichier `css/styles.css`;
- relier une page HTML à une feuille CSS externe avec `<link>`;
- utiliser le bon chemin vers CSS depuis la racine ou depuis un sous-dossier;
- utiliser un sélecteur d'élément;
- créer et réutiliser une classe CSS;
- créer un identifiant unique et le cibler avec `#id`;
- choisir entre un sélecteur d'élément, une classe et un identifiant selon le besoin;
- comprendre un conflit CSS simple entre des règles de précision différente;
- appliquer quelques propriétés visuelles simples;
- diagnostiquer une page qui ne reçoit pas sa feuille CSS.

## 1. HTML et CSS ont deux rôles différents

HTML décrit **ce que contient la page** et comment son contenu est structuré.

Par exemple :

```html
<h1>Mon site</h1>
<p>Bienvenue sur ma page.</p>
```

CSS décrit **à quoi ces éléments ressemblent**.

Par exemple :

```css
h1 {
  color: darkblue;
}
```

Le navigateur combine les deux :

```text
HTML = structure et contenu
CSS  = présentation
```

:::info À maîtriser
CSS ne remplace pas HTML. Une page Web utilise généralement HTML pour construire le contenu et CSS pour le mettre en forme.
:::

## 2. Trois façons d'ajouter le même style

Il existe plusieurs façons d'ajouter du CSS. Pour bien voir la différence, utilisons toujours le même besoin : **afficher un paragraphe en `darkred`**.

### CSS intraligne

On peut écrire le CSS directement dans l'élément HTML avec l'attribut `style` :

```html
<p style="color: darkred;">Un paragraphe important.</p>
```

Cette forme est facile à reconnaître parce que le CSS est placé directement dans la balise.

Mais si cinq paragraphes doivent avoir la même apparence, il faut répéter le même `style` cinq fois. HTML et CSS se retrouvent aussi mélangés dans les mêmes lignes.

### CSS interne

On peut plutôt regrouper les règles dans un élément `<style>` placé dans `<head>` :

```html
<head>
  <meta charset="UTF-8">
  <title>Ma page</title>

  <style>
    p {
      color: darkred;
    }
  </style>
</head>
```

Le paragraphe peut alors rester simple :

```html
<p>Un paragraphe important.</p>
```

Cette méthode évite de répéter `style="..."` sur chaque paragraphe de **cette page**.

Le problème apparaît lorsque plusieurs pages doivent utiliser les mêmes règles : il faut recopier le contenu de `<style>` dans chaque fichier HTML et penser à modifier toutes les copies plus tard.

### CSS externe

On peut enfin placer la règle dans un fichier séparé, par exemple `css/styles.css` :

```css
p {
  color: darkred;
}
```

Puis la page HTML charge cette feuille avec `<link>` :

```html
<link rel="stylesheet" href="css/styles.css">
```

Une deuxième page peut charger **le même fichier** au lieu de recopier la règle. Une modification dans `styles.css` peut donc mettre à jour plusieurs pages à la fois.

```text
intraligne → la règle se répète dans les éléments
interne    → la règle est regroupée, mais seulement dans une page
externe    → un même fichier peut servir à plusieurs pages
```

:::tip Méthode recommandée
Vous devez savoir reconnaître les trois formes, mais le **Projet Web utilise une feuille CSS externe**. C'est la méthode à maîtriser pour garder les styles séparés du contenu et faciliter les modifications sur plusieurs pages.
:::

## 3. Comprendre la syntaxe d'une règle CSS

Voici une règle CSS :

```css
p {
  color: navy;
}
```

On peut la décomposer ainsi :

```text
p              → sélecteur
color          → propriété
navy           → valeur
color: navy;   → déclaration
```

Une règle suit donc cette forme :

```css
selecteur {
  propriete: valeur;
}
```

Plusieurs déclarations peuvent être placées dans la même règle :

```css
p {
  color: navy;
  font-size: 1.1rem;
  font-family: Arial, sans-serif;
}
```

:::info À maîtriser
Retenez surtout quatre mots : **sélecteur, propriété, valeur, déclaration**.
:::

## 4. Créer et relier `styles.css`

Dans votre projet, créez :

```text
css/
└── styles.css
```

Pour qu'une page HTML utilise cette feuille, ajoutez un élément `<link>` dans son `<head>`.

Depuis `index.html` :

```html
<link rel="stylesheet" href="css/styles.css">
```

### Le chemin dépend encore du fichier HTML actuel

Vous avez déjà rencontré cette idée avec les images et les liens à la rencontre 2.

Depuis :

```text
mon-site/index.html
```

le chemin est :

```html
<link rel="stylesheet" href="css/styles.css">
```

Mais depuis :

```text
mon-site/pages/sujet.html
```

il faut d'abord remonter vers le dossier du projet :

```html
<link rel="stylesheet" href="../css/styles.css">
```

:::warning Même feuille, chemins différents
Le fichier CSS ne change pas. C'est le point de départ qui change.

Depuis `index.html` : `css/styles.css`  
Depuis `pages/sujet.html` : `../css/styles.css`
:::

## 5. Les sélecteurs indiquent quoi modifier

Le **sélecteur** indique quels éléments HTML recevront les déclarations d'une règle.

### Sélecteur d'élément

Le nom d'un élément HTML cible tous les éléments de ce type.

```css
h1 {
  color: darkblue;
}

p {
  color: #37474f;
}
```

La première règle vise les `<h1>`. La deuxième vise les `<p>`.

:::info À maîtriser
Un sélecteur d'élément est utile lorsqu'un style doit s'appliquer de façon générale à un type d'élément.
:::

## 6. Les classes permettent de cibler un rôle particulier

Une **classe** permet de sélectionner seulement certains éléments.

Dans HTML :

```html
<p class="mise-en-valeur">Information importante.</p>
```

Dans CSS :

```css
.mise-en-valeur {
  color: darkred;
  font-weight: bold;
}
```

Le point devant `.mise-en-valeur` signifie que le sélecteur vise une classe.

:::info À maîtriser
Dans HTML :

```html
class="mise-en-valeur"
```

Dans CSS :

```css
.mise-en-valeur
```

Le point appartient au sélecteur CSS. Il ne fait pas partie du nom écrit dans l'attribut `class`.
:::

Une même classe peut être utilisée plusieurs fois. Voici le code et le résultat produits par les mêmes sources :

<ExampleFrame
  src="examples/rencontre3/classe-mise-en-valeur/preview.html"
  title="Rendu de paragraphes utilisant la classe mise-en-valeur"
  html={classeHtml}
  css={classeCss}
/>

:::tip Bonne pratique — nommer une classe selon son rôle
Préférez un nom comme :

```text
mise-en-valeur
introduction
avertissement
```

à un nom comme `texte-rouge`.

Le rôle du contenu peut rester le même même si vous changez plus tard sa couleur.
:::

## 7. Les identifiants ciblent un élément unique

Une **classe** décrit un rôle qui peut être partagé. Un attribut `id` donne plutôt un nom unique à un élément précis de la page.

Dans HTML :

```html
<h2 id="message-principal">Bienvenue.</h2>
```

En CSS, l'identifiant est ciblé avec `#` :

```css
#message-principal {
  color: darkgreen;
}
```

Un identifiant doit respecter trois règles simples :

- sa valeur doit être unique dans la page;
- elle ne doit pas contenir d'espace;
- le nom utilisé dans CSS doit correspondre exactement à celui du HTML.

```text
class="mise-en-valeur" → rôle réutilisable → .mise-en-valeur
id="message-principal" → élément unique     → #message-principal
```

:::info À maîtriser
Vous devez être capable de créer un `id` unique, de le cibler avec `#id` et d'expliquer pourquoi une classe convient mieux lorsqu'un style doit être réutilisé.
:::

:::tip Préparation à JavaScript
Plus tard, JavaScript devra souvent retrouver un élément précis de la page. Il existe plusieurs façons de sélectionner un élément, mais comprendre les identifiants fournit dès maintenant un repère clair pour cibler un élément unique.
:::

## 8. Quand plusieurs règles visent le même élément

Un même élément peut être visé par plusieurs règles.

HTML :

```html
<p class="mise-en-valeur">Attention!</p>
```

CSS :

```css
p {
  color: #37474f;
}

.mise-en-valeur {
  color: darkred;
}
```

Le paragraphe avec la classe devient rouge : la règle de classe est plus précise que la règle générale qui vise tous les paragraphes.

C'est une première idée de la **cascade CSS**.

:::info À retenir pour aujourd'hui
Vous n'avez pas à mémoriser toute la théorie de priorité CSS.

Pour les cas simples :

- une classe peut remplacer une règle générale sur un type d'élément;
- un sélecteur d'identifiant est plus précis qu'un sélecteur de classe;
- lorsque deux règles comparables se contredisent, leur ordre peut aussi avoir un effet;
- si le résultat vous surprend, cherchez quelles règles ciblent le même élément.
:::

## 9. Quelques propriétés visuelles utiles

Nous allons volontairement utiliser seulement un petit ensemble de propriétés aujourd'hui.

### Couleur du texte et arrière-plan

Voici un exemple où les couleurs montrées dans le code sont exactement celles du rendu :

<ExampleFrame
  src="examples/rencontre3/couleurs-r3/preview.html"
  title="Rendu des couleurs de texte et d'arrière-plan de la rencontre 3"
  html={couleursR3Html}
  css={couleursR3Css}
/>

Vous pouvez utiliser un nom de couleur ou un code hexadécimal comme `#245a86`.

### Typographie

```css
body {
  font-family: Arial, sans-serif;
}

h1 {
  font-size: 2rem;
}
```

`rem` est une unité relative à la taille de référence du texte du document. Pour aujourd'hui, retenez simplement que `2rem` produit environ deux fois cette taille de référence.

Vous pouvez aussi rencontrer :

```css
.mise-en-valeur {
  font-weight: bold;
}

.citation {
  font-style: italic;
}
```

### Alignement du texte

```css
h1 {
  text-align: center;
}
```

### Bordure simple

Voici le code HTML, la règle CSS et le rendu produits par les mêmes fichiers :

<ExampleFrame
  src="examples/rencontre3/bordure-simple/preview.html"
  title="Rendu d'un paragraphe entouré d'une bordure simple"
  html={bordureHtml}
  css={bordureCss}
/>

La propriété `border` réunit ici :

```text
2px       → épaisseur
solid     → style de trait
#b45b5b   → couleur
```

À la rencontre 4, nous verrons plus précisément comment la bordure s'insère dans le **modèle en boîte** avec `padding` et `margin`.

## 10. Exemple complet

### Structure

```text
mon-site/
├── index.html
└── css/
    └── styles.css
```

### `index.html`

```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon site</title>
    <link rel="stylesheet" href="css/styles.css">
  </head>
  <body>
    <header>
      <h1>Mon site</h1>
    </header>

    <main>
      <h2 id="introduction">Bienvenue</h2>
      <p>Voici une première page mise en forme avec CSS.</p>
      <p class="mise-en-valeur">Cette information reçoit un style particulier.</p>
    </main>
  </body>
</html>
```

### `css/styles.css`

```css
body {
  font-family: Arial, sans-serif;
  color: #263238;
}

h1 {
  color: #245a86;
  text-align: center;
}

#introduction {
  color: #245a86;
}

.mise-en-valeur {
  color: #7a1f1f;
  background-color: #f7eaea;
  font-weight: bold;
  border: 2px solid #b45b5b;
}
```

## 11. Quand une page ne semble pas recevoir CSS

Avant de changer vos règles au hasard, vérifiez :

1. avez-vous enregistré `styles.css`?
2. avez-vous enregistré la page HTML?
3. le nom du fichier est-il exactement `styles.css`?
4. le fichier se trouve-t-il réellement dans `css/`?
5. le chemin dans `href` part-il du bon fichier HTML?
6. avez-vous actualisé la bonne page dans le navigateur?

:::tip Réflexe de débogage
Si `index.html` est stylé mais qu'une page sous `pages/` ne l'est pas, vérifiez d'abord si vous avez oublié `../` dans le chemin vers CSS.
:::

## À retenir

- HTML structure le contenu; CSS contrôle sa présentation.
- Le CSS peut être intraligne, interne ou externe; dans le Projet Web, nous utilisons une feuille externe partagée.
- Une feuille CSS externe évite de répéter les mêmes styles dans chaque page et permet une modification centralisée.
- Une règle CSS contient un sélecteur et des déclarations.
- Le chemin vers `styles.css` se lit à partir du fichier HTML actuel.
- Un sélecteur d'élément vise un type d'élément.
- Une classe peut être réutilisée et constitue l'outil principal pour cibler un rôle partagé.
- Un `id` cible un élément unique et se sélectionne avec `#id`.
- Une classe ou un identifiant peut remplacer une règle plus générale dans un conflit simple.
- Quelques propriétés suffisent déjà pour donner une identité visuelle au site.

## Pratique guidée

Avant de modifier votre Projet Web, faites l'exercice avec deux petites pages et une feuille CSS commune :

**[Exercice guidé — Première feuille CSS](./03-rencontre3-exercice-guide.md)**

## Projet Web

Vous pourrez ensuite reprendre le site commencé aux rencontres 1 et 2 :

**[Projet Web — Étape 3](../03-projet-web/03-rencontre3.md)**

## Validation disponible

À partir de cette rencontre, vous pouvez commencer la **Validation C** :

- **WEB-05 — Associer correctement une feuille CSS externe**;
- **WEB-06 — Cibler les éléments avec des sélecteurs appropriés**.

Les propriétés visuelles pratiquent aussi la mise en forme, mais le modèle en boîte et la disposition seront développés aux rencontres 4 et 5.
