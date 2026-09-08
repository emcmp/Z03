---
title: Exercice guidé - Comprendre le modèle en boîte
description: Manipuler padding, border, margin, dimensions relatives et centrage pour comprendre l'espace occupé par les éléments.
---

# Exercice guidé — Comprendre le modèle en boîte

Dans cet exercice, vous allez reprendre le thème **Club découverte** et construire quelques cartes simples afin de voir clairement la différence entre :

```text
contenu → padding → border → margin
```

Vous allez aussi comparer une largeur fixe à une largeur en pourcentage et distinguer le centrage du contenu du centrage d'une boîte.

L'objectif n'est pas de produire un design final. Vous allez plutôt modifier une propriété à la fois, observer son effet, puis remettre le fichier dans un état clair avant de poursuivre.

## 1. Créer la structure

Créez :

```text
exercice-rencontre4/
├── index.html
├── css/
│   └── styles.css
└── images/
    └── chat.jpg
```

:::info 📥 Image à utiliser
Vous pouvez réutiliser l'image de la rencontre 2 ou télécharger de nouveau **[chat.jpg](pathname:///files/rencontre2/chat.jpg)** et la placer dans le dossier `images`.
:::

Dans `index.html`, utilisez :

```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Découvrir le modèle en boîte</title>
    <link rel="stylesheet" href="css/styles.css">
  </head>
  <body>
    <main>
      <h1>Club découverte</h1>

      <div class="zone-image">
        <img class="image-principale" src="images/chat.jpg" alt="Un chat">
      </div>

      <section class="carte">
        <h2>Photo</h2>
        <p>Une sortie pour pratiquer la photographie extérieure.</p>
      </section>

      <section class="carte">
        <h2>Cuisine</h2>
        <p>Un atelier simple pour découvrir une nouvelle recette.</p>
      </section>
    </main>
  </body>
</html>
```

Dans `css/styles.css`, commencez avec :

```css
body {
  font-family: Arial, sans-serif;
  color: #263238;
}

.carte {
  background-color: #eaf3ff;
  border: 2px solid #245a86;
}
```

Ouvrez la page dans le navigateur.

## 2. Voir la boîte

L'arrière-plan et la bordure permettent de voir les limites de chaque `.carte`.

Pour le moment, le texte est assez près de la bordure.

La boîte peut être imaginée ainsi :

```text
margin
┌──────────────────────────────┐
│ border                       │
│  ┌────────────────────────┐  │
│  │ padding                │  │
│  │   contenu              │  │
│  └────────────────────────┘  │
└──────────────────────────────┘
```

:::info À maîtriser
Le `padding` est à **l'intérieur** de la bordure. La `margin` est à **l'extérieur** de la bordure.
:::

## 3. Ajouter de l'espace intérieur avec `padding`

Dans la règle `.carte` qui existe déjà, ajoutez `padding: 20px;` :

```css
.carte {
  background-color: #eaf3ff;
  border: 2px solid #245a86;
  padding: 20px;
}
```

Actualisez la page.

Observez que :

- le texte s'éloigne de la bordure;
- la couleur d'arrière-plan continue dans cet espace;
- les deux cartes utilisent le même `padding` parce qu'elles partagent la même classe.

Changez temporairement **seulement la valeur de `padding`** : essayez `5px`, puis `40px`.

Remettez ensuite :

```css
padding: 20px;
```

## 4. Ajouter de l'espace extérieur avec `margin`

Dans la même règle `.carte`, ajoutez maintenant `margin: 20px;` :

```css
.carte {
  background-color: #eaf3ff;
  border: 2px solid #245a86;
  padding: 20px;
  margin: 20px;
}
```

Actualisez.

Cette fois, l'espace apparaît **autour de la carte**, entre sa bordure et les autres éléments.

:::warning Ne pas confondre
Si votre contenu est collé à la bordure, pensez d'abord à `padding`.

Si deux boîtes sont trop collées entre elles, pensez d'abord à `margin`.
:::

## 5. Comparer `padding` et `margin`

Gardez la même règle `.carte` et modifiez temporairement **seulement les lignes `padding` et `margin`**.

### Essai A

```css
.carte {
  padding: 40px;
  margin: 5px;
}
```

### Essai B

```css
.carte {
  padding: 5px;
  margin: 40px;
}
```

Comparez le résultat.

Vous devriez maintenant pouvoir répondre à cette question :

> Si je veux éloigner le texte de la bordure, est-ce que je change `padding` ou `margin`?

Avant de continuer, remettez ces deux lignes dans cet état :

```css
padding: 20px;
margin: 20px;
```

Votre règle `.carte` doit toujours conserver aussi son `background-color` et sa `border`.

## 6. Utiliser deux valeurs

Nous allons maintenant remplacer les valeurs simples par des formes à deux valeurs.

Dans la règle `.carte`, remplacez seulement la ligne `padding` par :

```css
.carte {
  padding: 16px 24px;
}
```

Elles se lisent ainsi :

```text
16px → haut et bas
24px → gauche et droite
```

Remplacez ensuite seulement la ligne `margin` par :

```css
.carte {
  margin: 24px 0;
}
```

Ici :

```text
24px → haut et bas
0    → gauche et droite
```

Gardez ces deux valeurs pour la suite de l'exercice.

:::tip Bonne pratique
Pour commencer, une valeur ou deux valeurs suffisent dans la majorité de nos exemples. Vous n'avez pas à mémoriser toutes les variantes possibles aujourd'hui.
:::

## 7. Comparer une largeur fixe et une largeur relative

### Essai avec une largeur fixe

Ajoutez temporairement cette ligne dans `.carte` :

```css
.carte {
  width: 320px;
}
```

Observez que la zone de contenu possède maintenant une largeur fixe.

Après l'observation, **retirez la ligne `width: 320px;`** de `.carte`. Les cartes reviennent donc à leur largeur normale.

### Essai avec une largeur relative

Ajoutez maintenant une nouvelle règle pour l'image :

```css
.image-principale {
  width: 80%;
  height: auto;
}
```

Actualisez, puis changez temporairement `80%` pour :

```text
50%
100%
120%
```

À `120%`, l'image demande plus d'espace que la largeur de son parent. Vous devriez voir qu'elle devient trop large pour sa zone.

**Laissez temporairement `width: 120%`** avant de passer à l'étape suivante.

:::info `px` ou `%`?
- `320px` décrit une dimension fixe;
- `80%` décrit une dimension relative à la largeur disponible dans le parent.

Dans CSS, le choix dépend du résultat recherché.
:::

## 8. Empêcher l'image de dépasser et la centrer

Votre image demande maintenant `120%` de la largeur de son parent. Ajoutez une règle générale qui impose une limite :

```css
img {
  max-width: 100%;
  height: auto;
}
```

Actualisez.

Même si `.image-principale` demande `120%`, `max-width: 100%` empêche maintenant l'image de devenir plus large que son conteneur.

Vous venez donc de corriger un problème visible avec une propriété adaptée au problème.

Remettez ensuite la largeur de l'image à une valeur raisonnable :

```css
.image-principale {
  width: 80%;
}
```

La règle générale `img` contient déjà `height: auto`, donc il n'est plus nécessaire de répéter cette ligne dans `.image-principale`.

Puis centrez le contenu de la zone qui contient l'image :

```css
.zone-image {
  text-align: center;
}
```

L'image est maintenant centrée **à l'intérieur de la boîte `.zone-image`**.

:::info Réinvestissement de R3
Vous connaissiez déjà `text-align: center` pour centrer le texte d'un titre. Une image est aussi du contenu en ligne dans son conteneur, donc le même principe peut servir ici.
:::

## 9. Centrer la boîte principale

Nous allons maintenant centrer le `<main>` lui-même dans l'espace disponible.

Ajoutez une nouvelle règle :

```css
main {
  width: 80%;
  max-width: 900px;
  margin: 0 auto;
}
```

Actualisez la page et observez les marges gauche et droite.

Dans `margin: 0 auto` :

```text
0    → marge en haut et en bas
auto → marges gauche et droite calculées automatiquement
```

Les marges horizontales automatiques se partagent l'espace restant autour du `<main>`.

:::warning Deux centrages différents
`text-align: center` centre le **contenu à l'intérieur d'une boîte**.

`margin: 0 auto` peut centrer **la boîte elle-même** lorsqu'elle n'occupe pas toute la largeur disponible.
:::

## 10. Ajouter un troisième bloc

Ajoutez dans `<main>` :

```html
<section class="carte">
  <h2>Jeux</h2>
  <p>Une rencontre pour découvrir un nouveau jeu de société.</p>
</section>
```

Vous n'avez rien à ajouter dans CSS : la classe `.carte` existe déjà.

Les trois blocs reçoivent donc le même modèle de boîte.

## 11. Stabiliser l'état final

Après toutes les expérimentations, votre fichier `css/styles.css` devrait maintenant être dans cet état :

```css
body {
  font-family: Arial, sans-serif;
  color: #263238;
}

main {
  width: 80%;
  max-width: 900px;
  margin: 0 auto;
}

img {
  max-width: 100%;
  height: auto;
}

.image-principale {
  width: 80%;
}

.zone-image {
  text-align: center;
}

.carte {
  background-color: #eaf3ff;
  border: 2px solid #245a86;
  padding: 16px 24px;
  margin: 24px 0;
}
```

Comparez votre fichier avec cet état avant de continuer. Les valeurs temporaires comme `5px`, `40px`, `120%` ou `width: 320px` ne doivent plus être présentes.

Voici le résultat attendu à ce stade :

<ExampleFrame
  src="examples/exercices/rencontre4/preview.html"
  title="Résultat final de l'exercice guidé — Rencontre 4"
  showCode={false}
  minHeight={520}
  maxHeight={680}
/>

## 12. Faire un diagnostic

Pour chacun des problèmes suivants, choisissez d'abord la propriété que vous modifieriez.

### Problème A

Le texte d'une carte touche presque la bordure.

```text
padding ou margin?
```

### Problème B

Deux cartes sont trop près l'une de l'autre.

```text
padding ou margin?
```

### Problème C

Vous voulez rendre la ligne qui entoure la carte plus visible.

```text
padding, border ou margin?
```

### Problème D

Une image dépasse la largeur de son conteneur.

```text
width fixe ou max-width: 100%?
```

### Problème E

Le `<main>` doit rester moins large que l'écran et être centré.

Pensez à une largeur ou une `max-width`, puis à :

```css
margin: 0 auto;
```

Expliquez votre choix avant de modifier le CSS.

## Vérification avant de terminer

- [ ] je peux nommer les quatre zones du modèle en boîte;
- [ ] je sais que `padding` crée de l'espace à l'intérieur de la bordure;
- [ ] je sais que `margin` crée de l'espace à l'extérieur;
- [ ] je peux utiliser une valeur simple de `padding` et de `margin`;
- [ ] je comprends la forme à deux valeurs;
- [ ] je sais que la bordure se situe entre padding et margin;
- [ ] je peux expliquer la différence entre une largeur en `px` et une largeur en `%`;
- [ ] j'ai observé un débordement avec une largeur supérieure à `100%`;
- [ ] je peux utiliser `max-width: 100%` et `height: auto` pour garder une image dans son conteneur;
- [ ] je peux expliquer la différence entre `text-align: center` et `margin: 0 auto`;
- [ ] mon `styles.css` final ne contient plus les valeurs temporaires des expériences;
- [ ] je peux choisir la bonne propriété pour corriger un problème d'espacement ou de dimension simple.

## Continuer avec votre Projet Web

**[Continuer vers Projet Web — Étape 4](../03-projet-web/04-rencontre4.md)**
