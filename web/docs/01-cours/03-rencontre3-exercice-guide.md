---
title: Exercice guidé - Première feuille CSS
description: Relier deux pages à une même feuille CSS, utiliser des sélecteurs et diagnostiquer un chemin de feuille de styles.
---

# Exercice guidé — Première feuille CSS

Dans cet exercice, vous allez prendre deux petites pages HTML et leur donner une apparence commune avec **une seule feuille CSS externe**.

L'objectif n'est pas de créer un design complexe. Vous devez surtout comprendre :

- où placer `styles.css`;
- comment le relier depuis deux dossiers différents;
- comment un sélecteur choisit les éléments à modifier;
- comment une classe permet de donner un style particulier à certains éléments;
- quoi vérifier lorsqu'une page semble ne pas recevoir son CSS.

## 1. Créer la structure de l'exercice

Créez un dossier nommé `exercice-rencontre3`, puis cette structure :

```text
exercice-rencontre3/
├── index.html
├── css/
│   └── styles.css
└── pages/
    └── infos.html
```

:::info À maîtriser
Le fichier CSS n'est pas « dans VS Code ». Il existe réellement dans le dossier `css` du projet, comme vos pages HTML existent dans leurs dossiers.
:::

## 2. Préparer `index.html`

Dans `index.html`, utilisez ce contenu :

```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Club découverte</title>
  </head>
  <body>
    <header>
      <h1>Club découverte</h1>
      <p class="mise-en-valeur">Une activité différente chaque semaine.</p>
    </header>

    <nav>
      <a href="index.html">Accueil</a>
      <a href="pages/infos.html">Informations</a>
    </nav>

    <main>
      <h2>Bienvenue</h2>
      <p>Ce petit site servira à expérimenter notre première feuille CSS.</p>
      <p class="mise-en-valeur">Le même style pourra être réutilisé à plusieurs endroits.</p>
    </main>
  </body>
</html>
```

Ouvrez la page dans le navigateur. Pour le moment, elle utilise seulement l'apparence par défaut du navigateur.

## 3. Préparer `pages/infos.html`

Dans `pages/infos.html`, utilisez :

```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Informations - Club découverte</title>
  </head>
  <body>
    <header>
      <h1>Informations</h1>
    </header>

    <nav>
      <a href="../index.html">Accueil</a>
      <a href="infos.html">Informations</a>
    </nav>

    <main>
      <h2>Horaire</h2>
      <p>Les rencontres ont lieu le mercredi après-midi.</p>
      <p class="mise-en-valeur">Consultez cette page avant chaque activité.</p>
    </main>
  </body>
</html>
```

Testez les liens entre les deux pages avant d'ajouter CSS.

## 4. Créer une première règle CSS

Dans `css/styles.css`, écrivez :

```css
body {
  font-family: Arial, sans-serif;
  color: #263238;
}

h1 {
  color: #245a86;
  text-align: center;
}
```

Pour l'instant, rien ne change dans le navigateur. Le fichier CSS existe, mais les pages HTML ne savent pas encore qu'elles doivent le charger.

## 5. Relier `index.html` à la feuille CSS

Dans `<head>` de `index.html`, ajoutez :

```html
<link rel="stylesheet" href="css/styles.css">
```

Votre `<head>` devrait maintenant contenir, entre autres :

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Club découverte</title>
  <link rel="stylesheet" href="css/styles.css">
</head>
```

Enregistrez, puis actualisez la page.

Vous devriez voir immédiatement la police et le titre changer.

:::info Lire le chemin
Depuis `index.html` :

```text
index.html
→ entrer dans css/
→ trouver styles.css
```

Le chemin est donc `css/styles.css`.
:::

## 6. Relier la page du dossier `pages`

Dans `pages/infos.html`, **le même chemin ne fonctionne pas**, car le fichier HTML ne se trouve pas au même endroit.

Ajoutez dans son `<head>` :

```html
<link rel="stylesheet" href="../css/styles.css">
```

On peut lire ce chemin ainsi :

```text
pages/infos.html
→ ../          remonter dans exercice-rencontre3/
→ css/         entrer dans css/
→ styles.css   trouver la feuille
```

Actualisez `infos.html`. Les deux pages devraient maintenant utiliser la même feuille CSS.

:::warning Même CSS, chemins différents
La feuille est la même : `css/styles.css`.

Mais le chemin écrit dans HTML dépend toujours du fichier HTML actuel.
:::

## 7. Utiliser une classe

Dans votre HTML, plusieurs paragraphes utilisent déjà :

```html
class="mise-en-valeur"
```

Ajoutez cette règle dans `styles.css` :

```css
.mise-en-valeur {
  color: #7a1f1f;
  background-color: #f7eaea;
  font-weight: bold;
  border: 2px solid #b45b5b;
}
```

Le point devant `.mise-en-valeur` indique que le sélecteur vise une **classe**.

Actualisez les deux pages. Tous les éléments possédant cette classe devraient recevoir le même style.

:::info À maîtriser
Dans HTML :

```html
<p class="mise-en-valeur">...</p>
```

Dans CSS :

```css
.mise-en-valeur {
  ...
}
```

On écrit le point dans le sélecteur CSS, mais pas dans la valeur de l'attribut `class`.
:::

## 8. Observer un conflit simple

Ajoutez d'abord une règle générale pour tous les paragraphes :

```css
p {
  color: #37474f;
}
```

Vous avez maintenant aussi cette règle plus ciblée :

```css
.mise-en-valeur {
  color: #7a1f1f;
  background-color: #f7eaea;
  font-weight: bold;
  border: 2px solid #b45b5b;
}
```

Les paragraphes ordinaires utilisent la couleur de `p`, tandis que les paragraphes avec la classe `mise-en-valeur` utilisent la couleur prévue par la classe.

Vous venez d'observer une partie de la **cascade CSS** : plusieurs règles peuvent viser le même élément, et une règle plus précise peut remplacer une règle plus générale.

Il n'est pas nécessaire de mémoriser une longue table de priorité aujourd'hui.

## 9. Faire un diagnostic volontaire

Dans `pages/infos.html`, remplacez temporairement :

```html
href="../css/styles.css"
```

par :

```html
href="css/styles.css"
```

Actualisez la page.

Que se passe-t-il?

La feuille n'a pas disparu. Le navigateur cherche simplement au mauvais endroit :

```text
pages/css/styles.css
```

alors que le vrai fichier se trouve ici :

```text
css/styles.css
```

Remettez ensuite le bon chemin :

```html
<link rel="stylesheet" href="../css/styles.css">
```

:::tip Réflexe de débogage
Lorsqu'une page n'est pas stylée, vérifiez d'abord :

1. le chemin dans `href`;
2. le vrai emplacement de `styles.css`;
3. le nom exact du fichier;
4. que les fichiers ont bien été enregistrés.
:::

## 10. Petite personnalisation

Sans ajouter de nouvelle notion, modifiez maintenant quelques valeurs dans `styles.css` :

- une couleur;
- la couleur d'arrière-plan de `.mise-en-valeur`;
- la police du `body`;
- l'alignement du `h1`;
- la couleur de la bordure.

L'objectif est d'observer qu'**une modification dans une seule feuille CSS peut changer les deux pages**.

## Vérification avant de terminer

- [ ] `styles.css` se trouve dans le dossier `css`;
- [ ] `index.html` utilise `css/styles.css`;
- [ ] `pages/infos.html` utilise `../css/styles.css`;
- [ ] les deux pages changent lorsque vous modifiez `styles.css`;
- [ ] vous savez reconnaître un sélecteur d'élément;
- [ ] vous savez reconnaître et utiliser une classe;
- [ ] vous pouvez expliquer pourquoi `.mise-en-valeur` peut remplacer la couleur générale des paragraphes;
- [ ] vous savez quoi vérifier lorsqu'une page semble ne pas recevoir la feuille CSS.

## Continuer avec votre Projet Web

Vous êtes maintenant prêt à appliquer la même organisation au site que vous construisez depuis la rencontre 1.

**[Continuer vers Projet Web — Étape 3](../03-projet-web/03-rencontre3.md)**
