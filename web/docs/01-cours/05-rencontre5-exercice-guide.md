---
title: Exercice guidé - Flexbox simple
description: Organiser une navigation et un groupe de cartes avec display flex et gap, puis réinvestir les chemins avec une image de fond CSS.
---

# Exercice guidé — Flexbox simple

Dans cet exercice, vous allez utiliser Flexbox dans deux situations très concrètes :

1. une navigation horizontale;
2. un petit groupe de cartes.

Vous allez ensuite réinvestir les chemins relatifs en ajoutant une petite **image d'arrière-plan CSS**.

Le modèle mental principal de Flexbox est simple :

> On applique `display: flex` au **parent** pour organiser ses **enfants directs**.

## 1. Créer la structure

Créez :

```text
exercice-rencontre5/
├── index.html
├── css/
│   └── styles.css
└── images/
    └── sentier.svg
```

:::info 📥 Image pour l'exercice
**[Télécharger `sentier.svg`](pathname:///examples/projet-web/evolution/etape5/images/sentier.svg)**

Enregistrez le fichier dans le dossier `images` de l'exercice en gardant le nom `sentier.svg`.
:::

Dans `index.html` :

```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Découvrir Flexbox</title>
    <link rel="stylesheet" href="css/styles.css">
  </head>
  <body>
    <header class="banniere">
      <h1>Club découverte</h1>
    </header>

    <nav class="navigation">
      <a href="#">Accueil</a>
      <a href="#activites">Activités</a>
    </nav>

    <main>
      <h2 id="activites">Activités</h2>

      <div class="cartes">
        <section class="carte">
          <h3>Photo</h3>
          <p>Une sortie pour pratiquer la photographie.</p>
        </section>

        <section class="carte">
          <h3>Cuisine</h3>
          <p>Un atelier pour essayer une nouvelle recette.</p>
        </section>

        <section class="carte">
          <h3>Jeux</h3>
          <p>Une rencontre pour découvrir un nouveau jeu.</p>
        </section>
      </div>
    </main>
  </body>
</html>
```

Dans `css/styles.css` :

```css
body {
  font-family: Arial, sans-serif;
  color: #263238;
}

.navigation {
  background-color: #eaf3ff;
  padding: 16px;
}

.carte {
  background-color: #f7f7f7;
  border: 2px solid #245a86;
  padding: 16px;
}
```

Ouvrez la page dans le navigateur.

## 2. Transformer la navigation en conteneur flex

Ajoutez :

```css
.navigation {
  background-color: #eaf3ff;
  padding: 16px;
  display: flex;
}
```

Ici :

```text
parent flex     → nav.navigation
enfants directs → les liens <a>
```

:::info À maîtriser
`display: flex` s'applique au **parent** dont vous voulez organiser les enfants.
:::

## 3. Ajouter de l'espace avec `gap`

Ajoutez :

```css
.navigation {
  background-color: #eaf3ff;
  padding: 16px;
  display: flex;
  gap: 20px;
}
```

`gap` crée maintenant un espace cohérent entre les enfants du conteneur flex.

Il évite d'ajouter une marge différente sur chaque lien simplement pour les séparer.

## 4. Centrer le groupe de liens

Ajoutez :

```css
.navigation {
  background-color: #eaf3ff;
  padding: 16px;
  display: flex;
  gap: 20px;
  justify-content: center;
}
```

Les liens sont maintenant regroupés au centre sur l'axe principal.

Essayez temporairement :

```css
justify-content: flex-start;
```

puis :

```css
justify-content: space-between;
```

Remettez ensuite la valeur qui convient le mieux à l'exemple.

:::tip Pas de catalogue à mémoriser
Le but est de comprendre **ce que la propriété permet de contrôler**, pas de mémoriser toutes ses valeurs aujourd'hui.
:::

## 5. Placer les cartes côte à côte

Pour le moment, les sections `.carte` s'empilent les unes sous les autres.

Leur parent est :

```html
<div class="cartes">
```

Ajoutez :

```css
.cartes {
  display: flex;
  gap: 20px;
}
```

Les trois cartes deviennent des enfants flex et se placent côte à côte dans l'espace disponible.

```text
parent flex
.cartes
├── section.carte
├── section.carte
└── section.carte
```

:::info À maîtriser
Le style `.carte` contrôle l'apparence de chaque carte.

Le style `.cartes` contrôle la **disposition du groupe**.
:::

## 6. Observer `align-items`

Ajoutez temporairement :

```css
.cartes {
  display: flex;
  gap: 20px;
  align-items: center;
}
```

Puis essayez :

```css
align-items: flex-start;
```

Observez la différence si les cartes n'ont pas exactement la même hauteur.

Pour aujourd'hui, retenez simplement que `align-items` contrôle l'alignement des enfants sur l'autre axe du conteneur flex.

## 7. Faire une erreur volontaire

Retirez `display: flex` de `.cartes` et ajoutez-le plutôt à `.carte` :

```css
.carte {
  display: flex;
}
```

Que se passe-t-il?

Les cartes ne se placent plus côte à côte comme prévu, parce que vous avez rendu **chaque carte** flex au lieu de rendre leur **parent commun** flex.

Remettez ensuite :

```css
.cartes {
  display: flex;
  gap: 20px;
}
```

et retirez le `display: flex` ajouté par erreur dans `.carte`.

:::tip Réflexe de débogage
Si Flexbox semble agir sur les mauvais éléments, demandez-vous :

1. quel élément est le parent?
2. quels sont ses enfants directs?
3. est-ce bien ce parent qui possède `display: flex`?
:::

## 8. Réutiliser le modèle en boîte

Flexbox ne remplace pas ce que vous avez appris à la rencontre 4.

Les cartes utilisent encore :

```css
.carte {
  background-color: #f7f7f7;
  border: 2px solid #245a86;
  padding: 16px;
}
```

Le parent `.cartes` gère leur disposition, tandis que chaque `.carte` conserve son propre modèle en boîte.

## 9. Ajouter une image d'arrière-plan

Le fichier `sentier.svg` se trouve maintenant dans `images/`, mais la règle CSS sera écrite dans `css/styles.css`.

Ajoutez :

```css
.banniere {
  background-image: url("../images/sentier.svg");
  background-size: cover;
  background-position: center;
  padding: 48px 20px;
}
```

Enregistrez et actualisez le navigateur.

Pourquoi faut-il écrire `../images/sentier.svg` plutôt que `images/sentier.svg`?

```text
css/styles.css
→ ../        remonter dans exercice-rencontre5
→ images/    entrer dans images
→ sentier.svg
```

:::info À maîtriser
Dans `url(...)`, le chemin est calculé à partir du **fichier CSS qui contient la règle**.

Le point de départ est donc ici `css/styles.css`, et non `index.html`.
:::

Observez aussi le rôle de :

- `background-size: cover` : l'image couvre la zone;
- `background-position: center` : le centre de l'image reste au centre de la zone.

:::tip Image de contenu ou image de fond?
Si l'image transmet une information importante, utilisez plutôt un vrai `<img>` avec un `alt`.

Ici, l'illustration sert surtout d'arrière-plan décoratif à la bannière.
:::

## 10. Petite personnalisation

Sans ajouter de nouvelle propriété obligatoire :

- ajustez le `gap` de la navigation;
- ajustez le `gap` entre les cartes;
- choisissez une valeur de `justify-content` pour la navigation;
- choisissez une valeur de `align-items` pour le groupe de cartes si elle est utile;
- essayez une autre valeur de `background-position` si vous voulez observer comment l'image se déplace dans la bannière.

Expliquez votre choix avant de modifier les valeurs au hasard.

## Vérification avant de terminer

- [ ] je sais identifier le parent flex;
- [ ] je sais identifier ses enfants directs;
- [ ] je sais où écrire `display: flex`;
- [ ] je sais utiliser `gap`;
- [ ] je comprends l'effet général de `justify-content`;
- [ ] je comprends l'effet général de `align-items`;
- [ ] je peux diagnostiquer une règle Flexbox appliquée au mauvais élément;
- [ ] je comprends que le modèle en boîte continue de s'appliquer aux éléments flex;
- [ ] je sais ajouter une image de fond avec `background-image`;
- [ ] je peux expliquer pourquoi `url("../images/sentier.svg")` part du fichier `styles.css`.

:::note Pour aller plus loin — non évalué
Sur un petit écran, vous pourriez rencontrer :

```css
flex-wrap: wrap;
```

Cette propriété permet aux enfants de passer sur une autre ligne lorsque l'espace manque. Elle n'est pas requise pour la validation de cette rencontre.
:::

## Continuer avec votre Projet Web

**[Continuer vers Projet Web — Étape 5](../03-projet-web/05-rencontre5.md)**