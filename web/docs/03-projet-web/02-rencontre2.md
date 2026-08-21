---
title: Étape 2 - Transformer votre page en petit site
description: Organiser les ressources, ajouter une image locale et relier plusieurs pages avec des chemins relatifs.
sidebar_position: 3
---

import r2ProjetExempleHtml from '!!raw-loader!../../static/examples/rencontre2/exercice-final/source.html';

# Projet Web — Étape 2

<ProjectStepHero step={2} />

Cette activité est la **mise en pratique personnelle de la rencontre 2**. Vous partez du site commencé à la rencontre 1 et vous le transformez en un petit site composé de plusieurs pages.

Avant de commencer, consultez le **[cours de la rencontre 2](../01-cours/02-rencontre2.md)**. L'**[exercice guidé sur les chemins et la navigation](../01-cours/02-rencontre2-exercice-guide.md)** vous permettra ensuite de pratiquer avec un petit exemple avant de modifier votre propre projet.

## 1. Reprendre le projet de la rencontre 1

Ouvrez le **même dossier de projet** que la semaine dernière dans VS Code.

Au départ, votre projet ressemble probablement à ceci :

```text
mon-site/
└── index.html
```

Ne recommencez pas un nouveau site. Tout ce que vous faites aujourd'hui doit faire évoluer ce projet.

## 2. Organiser les fichiers

Pour cette étape, nous allons utiliser volontairement deux sous-dossiers :

- `pages` pour les pages secondaires;
- `images` pour les images du site.

Le minimum demandé ressemble à ceci :

```text
mon-site/
├── index.html
├── images/
│   └── image1.jpg
└── pages/
    └── sujet.html
```

Le nom `sujet.html` est un exemple. Choisissez un nom qui correspond à votre sujet.

:::info À maîtriser
Vous devez être capable de retrouver un fichier dans cette structure et de construire un chemin relatif à partir du fichier HTML dans lequel vous écrivez le code.
:::

:::tip Bonne pratique
Utilisez des noms de fichiers courts, sans espace et sans accent, par exemple `jeux-video.html`, `mes-recettes.html` ou `equipe.html`.
:::

## 3. Créer une page secondaire

Créez une nouvelle page dans le dossier `pages`.

Votre page secondaire doit posséder une structure HTML complète et un contenu qui a une fonction reconnaissable dans votre site.

Par exemple :

- `index.html` : présenter le sujet;
- `pages/sujet.html` : développer un aspect du sujet.

Vous n'avez pas besoin d'écrire beaucoup de texte. Utilisez les éléments HTML vus en classe de façon logique : titres, paragraphes, listes et autres éléments pertinents.

## 4. Ajouter une image locale

Placez au moins une image dans le dossier `images` au lieu de la laisser dans Téléchargements ou sur le Bureau.

Depuis `index.html`, une image peut être utilisée ainsi :

```html
<img src="images/image1.jpg" alt="Description de l'image" width="400">
```

Depuis une page placée dans `pages`, le chemin doit d'abord remonter au dossier du projet :

```html
<img src="../images/image1.jpg" alt="Description de l'image" width="400">
```

Utilisez l'image dans les deux situations afin de voir la différence entre `images/...` et `../images/...`.

### Choisir des dimensions raisonnables

Vous pouvez utiliser `width` et `height` pour préciser les dimensions affichées d'une image :

```html
<img
  src="images/image1.jpg"
  alt="Description de l'image"
  width="400"
  height="300"
>
```

Les valeurs exactes dépendent de votre image. Si vous utilisez les deux attributs, conservez les proportions de l'image pour éviter de l'étirer ou de l'écraser. Si vous n'êtes pas certain de la hauteur appropriée, une seule dimension comme `width` suffit pour le moment.

:::tip Bonne pratique — texte alternatif
L'attribut `alt` devrait transmettre l'information importante de l'image. Évitez un texte comme `image1.jpg`; décrivez plutôt ce que l'image apporte à la page.
:::

## 5. Construire la navigation

Votre navigation doit permettre d'aller vers la page secondaire et de revenir à l'accueil.

Comme les fichiers ne sont pas tous dans le même dossier, **le chemin des liens n'est pas identique sur toutes les pages**.

### Navigation dans `index.html`

Depuis la racine du projet, il faut entrer dans le dossier `pages` :

```html
<nav>
  <a href="index.html">Accueil</a>
  <a href="pages/sujet.html">Mon sujet</a>
</nav>
```

### Navigation dans une page du dossier `pages`

Depuis `pages/sujet.html`, il faut utiliser `../` pour revenir au dossier parent avant d'atteindre `index.html` :

```html
<nav>
  <a href="../index.html">Accueil</a>
  <a href="sujet.html">Mon sujet</a>
</nav>
```

Adaptez le nom du fichier et le texte du lien à votre propre site.

### Ajouter un lien vers une section de la page d'accueil

Choisissez une section déjà présente dans `index.html` et donnez-lui un `id` clair. Par exemple :

```html
<h2 id="galerie">Galerie</h2>
```

Ajoutez ensuite un lien qui mène directement à cette section :

```html
<a href="#galerie">Voir la galerie</a>
```

Le nom `galerie` est seulement un exemple. Utilisez un identifiant qui correspond réellement au contenu de votre page.

:::info À maîtriser
Le lien et la cible doivent correspondre : `href="#galerie"` mène à l'élément dont `id="galerie"`.
:::

:::tip Bonne pratique
L'élément `<nav>` est recommandé pour regrouper les liens qui servent à la navigation principale du site. Son utilisation exacte n'est pas une compétence évaluée séparément.
:::

Voici un **exemple de niveau attendu** pour cette étape : une page d'accueil, une image locale et une navigation vers une page secondaire. Votre sujet, vos textes et vos noms de fichiers seront différents.

<ExampleFrame
  src="examples/rencontre2/exercice-final/preview.html"
  title="Exemple de petit site attendu au Projet Web de la rencontre 2"
  html={r2ProjetExempleHtml}
  minHeight={260}
/>

## 6. Tester tous les chemins

Ne testez pas seulement la page d'accueil.

Ouvrez les deux pages dans le navigateur et vérifiez :

1. que l'image apparaît depuis `index.html`;
2. que la même image apparaît depuis la page sous `pages/`;
3. que le lien vers la page secondaire fonctionne;
4. que vous pouvez revenir à l'accueil;
5. que votre lien vers une section de `index.html` mène bien au bon `id`;
6. que les noms de fichiers dans le code correspondent exactement aux vrais noms des fichiers.

Si une image ou un lien ne fonctionne pas, partez du fichier HTML actuel et posez-vous la question : **où dois-je aller à partir d'ici pour atteindre le fichier voulu?**

:::warning Majuscules et noms de fichiers
`Image1.jpg`, `image1.jpg` et `image1.JPG` peuvent être considérés comme des noms différents lorsque le site est publié en ligne. Utilisez toujours exactement le même nom dans vos dossiers et dans votre code.
:::

## 7. Précontrôle avant la validation

Avant de demander une validation, assurez-vous que :

- [ ] vous travaillez toujours dans le projet commencé à la rencontre 1;
- [ ] `index.html` se trouve à la racine du projet;
- [ ] votre page secondaire se trouve dans `pages/`;
- [ ] au moins une image locale se trouve dans `images/`;
- [ ] vos deux pages possèdent une structure HTML complète;
- [ ] vos pages contiennent du contenu réel et organisé;
- [ ] la même image peut être chargée depuis la page d'accueil et depuis la page secondaire;
- [ ] vous reconnaissez `width` et `height` et vous évitez de déformer vos images;
- [ ] la navigation fonctionne dans les deux directions;
- [ ] vous avez un lien simple vers une section de votre page d'accueil avec `href="#..."` et `id="..."`;
- [ ] vous comprenez pourquoi certains chemins commencent par `../`;
- [ ] vous avez corrigé les erreurs HTML évidentes, avec le validateur W3C au besoin.

Cette checklist sert à vous préparer. La validation ne consiste pas à compter mécaniquement le nombre de pages, d'images, de dimensions, de liens ou de balises.

## Badges disponibles pour validation

À partir de cette rencontre, vos premiers badges HTML deviennent disponibles. Consultez **[Projet Web — Évaluation](./00-evaluation.md)** pour la checklist détaillée de chaque compétence.

### Validation A — Structure HTML

La **Validation A est prioritaire pendant la rencontre 2**.

- 🗂️ **WEB-01 — Organiser un projet Web et utiliser les chemins**;
- 🧱 **WEB-02 — Construire une page HTML correctement structurée**.

L'enseignant peut par exemple vous demander de montrer où se trouve une image, d'expliquer un chemin ou de corriger un chemin devant lui.

### Validation B — Contenu et navigation

La Validation B peut aussi commencer à cette rencontre avec les étudiants prêts. **Elle peut se poursuivre au début de la rencontre 3**; tout le groupe n'a pas besoin de la terminer aujourd'hui.

- ✍️ **WEB-03 — Structurer et enrichir le contenu HTML**;
- 🔗 **WEB-04 — Relier plusieurs pages dans une navigation fonctionnelle**.

L'enseignant peut par exemple vous demander d'ajouter un lien, de modifier la destination d'un lien ou d'expliquer comment revenir d'une page secondaire vers l'accueil.

Une même courte interaction peut permettre d'observer plusieurs compétences. Une compétence qui demande encore du travail pourra être représentée plus tard.

:::tip Collection de badges
Une compétence **Validée** signifie que son badge est acquis. Une compétence **À revoir** reste disponible : corrigez les éléments demandés et présentez-la de nouveau lorsque vous êtes prêt.
:::

:::note Pour aller plus loin — non évalué
Si votre site fonctionne bien et que vos validations sont prêtes, vous pouvez :

- ajouter une deuxième page secondaire pertinente dans `pages/`;
- ajouter un lien vers un site externe utile;
- enrichir le contenu d'une page;
- ajouter d'autres images locales en vérifiant soigneusement leurs chemins.

Si vous ajoutez une deuxième page, profitez-en pour vérifier la navigation entre plusieurs fichiers du dossier `pages`.

Ne commencez pas encore CSS : la feuille de styles externe sera introduite à la rencontre 3.
:::

## Prochaine étape

À la rencontre 3, vous conserverez exactement ce site et vous lui ajouterez une **feuille CSS externe** pour commencer sa mise en forme visuelle.
