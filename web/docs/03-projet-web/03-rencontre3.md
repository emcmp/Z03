---
title: Étape 3 - Ajouter une identité visuelle avec CSS
description: Créer une feuille CSS externe commune, la relier à toutes les pages et commencer la mise en forme du site.
sidebar_position: 4
---

# Projet Web — Étape 3

Cette activité poursuit **le même site** commencé aux rencontres 1 et 2.

Vous allez maintenant ajouter une feuille CSS externe pour donner une apparence cohérente à toutes vos pages, sans recopier les mêmes styles dans chaque fichier HTML.

Avant de commencer :

- consultez le **[cours de la rencontre 3](../01-cours/03-rencontre3.md)**;
- faites l'**[exercice guidé — Première feuille CSS](../01-cours/03-rencontre3-exercice-guide.md)**.

## 1. Reprendre exactement le même projet

Votre projet ressemble probablement à ceci :

```text
mon-site/
├── index.html
├── images/
│   └── image1.jpg
└── pages/
    └── sujet.html
```

Si vous avez ajouté une deuxième page secondaire à la rencontre 2, conservez-la. Une seule page sous `pages/` suffit toutefois pour poursuivre le Projet Web.

Ne recommencez pas un nouveau site.

Aujourd'hui, vous allez simplement ajouter :

```text
css/
└── styles.css
```

Votre projet devient donc :

```text
mon-site/
├── index.html
├── css/
│   └── styles.css
├── images/
│   └── image1.jpg
└── pages/
    └── sujet.html
```

## 2. Créer `css/styles.css`

Créez le dossier `css`, puis le fichier `styles.css` à l'intérieur.

Commencez avec quelques règles simples, par exemple :

```css
body {
  font-family: Arial, sans-serif;
  color: #263238;
}

h1 {
  color: #245a86;
}
```

Vous pourrez ensuite modifier les valeurs pour qu'elles correspondent au sujet et à l'ambiance de votre site.

:::info À maîtriser
La feuille CSS doit être un vrai fichier du projet. Vous devez être capable de montrer où elle se trouve et d'expliquer comment chaque page HTML l'atteint.
:::

## 3. Relier la page d'accueil

Dans `<head>` de `index.html`, ajoutez :

```html
<link rel="stylesheet" href="css/styles.css">
```

Enregistrez puis actualisez la page dans le navigateur.

Si rien ne change, vérifiez d'abord le chemin et le nom du fichier.

## 4. Relier les pages du dossier `pages`

Une page située dans `pages/` doit d'abord remonter d'un dossier.

Dans chaque page située sous `pages/`, ajoutez :

```html
<link rel="stylesheet" href="../css/styles.css">
```

:::warning Le chemin n'est pas identique sur toutes les pages
Depuis `index.html` :

```text
css/styles.css
```

Depuis une page sous `pages/` :

```text
../css/styles.css
```

La feuille CSS est pourtant exactement la même.
:::

Testez **toutes les pages** avant de continuer.

## 5. Définir quelques styles généraux

Choisissez quelques éléments que vous voulez harmoniser sur tout le site.

Par exemple :

```css
body {
  font-family: Arial, sans-serif;
  color: #263238;
}

h1 {
  color: #245a86;
  text-align: center;
}

h2 {
  color: #3f6f91;
}
```

Vous n'avez pas besoin de multiplier les propriétés.

L'objectif est de voir que **la même règle agit sur plusieurs pages**.

## 6. Utiliser une classe de façon volontaire

Choisissez un type de contenu qui mérite un style particulier dans votre site :

- une information importante;
- une courte introduction;
- une note spéciale;
- une citation;
- un message à retenir.

Ajoutez une classe claire dans HTML, par exemple :

```html
<p class="mise-en-valeur">Cette information est particulièrement importante.</p>
```

Puis ajoutez la règle correspondante :

```css
.mise-en-valeur {
  color: #7a1f1f;
  background-color: #f7eaea;
  font-weight: bold;
  border: 2px solid #b45b5b;
}
```

Le nom `mise-en-valeur` est seulement un exemple. Choisissez un nom qui décrit le **rôle** du contenu plutôt que son apparence exacte.

:::tip Bonne pratique
Une classe est particulièrement utile lorsqu'un même rôle visuel revient à plusieurs endroits.

Évitez des noms comme `texte-rouge` si la couleur pourrait changer plus tard. Un nom comme `important`, `intro` ou `mise-en-valeur` décrit mieux l'intention.
:::

## 7. Donner une identité visuelle simple au site

Vous pouvez maintenant ajuster quelques propriétés parmi celles vues en classe :

```css
color
background-color
font-family
font-size
font-weight
font-style
text-align
border
```

Il n'est pas nécessaire d'utiliser toutes ces propriétés.

Choisissez plutôt quelques décisions cohérentes :

- une famille de caractères lisible;
- une couleur principale pour les titres;
- une couleur de texte facile à lire;
- un arrière-plan lorsque cela apporte quelque chose;
- une classe spéciale pour un type de contenu;
- une bordure simple lorsque vous voulez faire ressortir un élément.

:::warning N'essayez pas encore de tout placer parfaitement
`margin`, `padding`, dimensions et disposition avec Flexbox seront abordés aux rencontres 4 et 5.

Aujourd'hui, concentrez-vous sur la **feuille CSS, les chemins et les sélecteurs**.
:::

## 8. Vérifier que la feuille est réellement partagée

Faites un petit test :

1. modifiez la couleur de vos `h1` dans `styles.css`;
2. enregistrez;
3. actualisez `index.html`;
4. actualisez aussi vos pages sous `pages/`.

La même modification devrait apparaître partout où la règle s'applique.

Si une seule page ne change pas, vérifiez son `<link>`.

## 9. Précontrôle avant la Validation C

Avant de demander une validation, vérifiez que :

- [ ] vous travaillez toujours dans le site commencé aux rencontres précédentes;
- [ ] `css/styles.css` existe réellement;
- [ ] `index.html` charge `css/styles.css`;
- [ ] les pages dans `pages/` chargent `../css/styles.css`;
- [ ] toutes vos pages reçoivent la feuille CSS;
- [ ] votre feuille contient au moins des règles générales compréhensibles;
- [ ] vous savez expliquer ce qu'est un sélecteur d'élément;
- [ ] vous utilisez une classe pour un besoin réel de votre site;
- [ ] vous pouvez expliquer le lien entre `class="..."` dans HTML et `.nom-classe` dans CSS;
- [ ] vous savez quoi vérifier si une page perd sa mise en forme.

La validation porte sur votre compréhension et votre capacité à intervenir dans le code. Elle ne consiste pas à compter le nombre de propriétés ou de classes.

## Badges disponibles — Validation C

À cette étape, vous pouvez commencer à acquérir les badges CSS suivants :

- 🔌 **WEB-05 — Associer correctement une feuille CSS externe**;
- 🎯 **WEB-06 — Cibler les éléments avec des sélecteurs appropriés**.

Consultez **[Projet Web — Évaluation](./00-evaluation.md)** pour voir les checklists détaillées de ces badges et le calendrier complet.

L'enseignant peut, par exemple, vous demander :

- d'expliquer pourquoi deux pages utilisent des chemins CSS différents;
- de corriger un `<link>` qui pointe au mauvais endroit;
- d'ajouter une classe à un élément;
- de modifier une règle pour cibler le bon groupe d'éléments;
- d'expliquer pourquoi une classe remplace une règle plus générale.

Vous n'êtes pas obligé de faire valider les deux compétences au même moment. Une compétence `À revoir` pourra être représentée plus tard.

:::tip Collection de badges
Si les badges ✍️ WEB-03 ou 🔗 WEB-04 ne sont pas encore acquis, vous pouvez aussi terminer leur validation au début de cette rencontre.
:::

:::note Pour aller plus loin — non évalué
Si votre feuille CSS fonctionne partout et que vous êtes prêt pour la validation, vous pouvez :

- créer une deuxième classe utile;
- expérimenter avec une autre combinaison de couleurs;
- essayer `text-decoration` sur un élément où son effet est pertinent;
- comparer une couleur nommée et un code hexadécimal.

N'utilisez pas encore Flexbox, Grid, positionnement ou des effets complexes comme exigence du projet.
:::

## Prochaine étape

À la rencontre 4, vous conserverez cette même feuille CSS et vous apprendrez à mieux contrôler **l'espace autour du contenu** avec le modèle en boîte, `padding`, `border` et `margin`.