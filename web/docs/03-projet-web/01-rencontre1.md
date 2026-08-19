---
title: Étape 1 - Démarrer votre site Web
description: Choisir un sujet et créer la première version de votre site personnel en HTML.
---

# Projet Web — Étape 1

Cette activité est la **mise en pratique de la rencontre 1**.

Vous allez commencer le petit site Web que vous ferez évoluer pendant les rencontres 1 à 5. Vous garderez le même projet et vous l'améliorerez à mesure que nous verrons de nouvelles notions de HTML et de CSS.

:::info Avant de commencer
Assurez-vous d'avoir parcouru la théorie de la **[Rencontre 1 — Environnement et première page Web](../01-cours/01-rencontre1.md)**.
:::

# 1. Choisir un sujet

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

# 2. Créer le dossier du projet

Dans votre dossier de cours Z03, créez un dossier pour votre site.

Par exemple :

```text
Z03/
└── mon-site/
```

Ouvrez ensuite **le dossier complet** dans VS Code.

Dans ce dossier, créez :

```text
index.html
```

À cette étape, votre projet devrait donc ressembler à ceci :

```text
mon-site/
└── index.html
```

# 3. Créer une structure HTML complète

Votre fichier `index.html` doit contenir une structure HTML complète semblable à celle vue dans le cours :

```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon sujet</title>
  </head>
  <body>
    <!-- Votre contenu ira ici -->
  </body>
</html>
```

Remplacez `Mon sujet` par un titre adapté à votre propre site.

# 4. Construire le contenu de la page

Dans le `<body>`, construisez une première vraie page sur votre sujet.

Votre page devrait contenir :

1. un titre principal avec `<h1>`;
2. une courte introduction avec un ou plusieurs paragraphes;
3. quelques sections organisées avec des titres pertinents;
4. au moins une liste là où une liste a du sens;
5. du contenu réel lié à votre sujet.

Vous pouvez utiliser `<strong>` ou `<em>` lorsqu'ils ont un sens dans votre contenu.

:::info À maîtriser
Le but n'est pas d'accumuler des balises. Vous devez être capable de choisir des éléments qui correspondent au rôle du contenu et de les imbriquer correctement.
:::

# 5. Tester votre page

Ouvrez `index.html` dans un navigateur.

Pendant votre travail, répétez souvent ce cycle :

```text
modifier le code
      ↓
enregistrer
      ↓
actualiser le navigateur
      ↓
observer le résultat
```

Ne faites pas dix changements avant de vérifier. De petites vérifications fréquentes rendent les erreurs beaucoup plus faciles à trouver.

:::warning Pas de CSS aujourd'hui
Votre page sera probablement très simple visuellement. C'est normal.

HTML sert d'abord à **structurer le contenu**. Nous commencerons la mise en forme avec CSS à la rencontre 3.
:::

# Avant de terminer

Vérifiez que :

- vous savez où se trouve le dossier de votre site;
- le fichier se nomme réellement `index.html`;
- le dossier du projet s'ouvre correctement dans VS Code;
- la page s'ouvre dans le navigateur;
- vous savez modifier le code, enregistrer et actualiser la page;
- votre document contient une structure HTML complète;
- votre `<title>` et votre `<h1>` correspondent à votre sujet;
- votre contenu est organisé avec des éléments HTML pertinents;
- vos balises sont correctement imbriquées;
- votre code reste suffisamment lisible pour que vous puissiez vous y retrouver.

Si un de ces points ne fonctionne pas, demandez de l'aide avant la prochaine rencontre.

# Compétences préparées

Il n'y a **aucune validation sommative** à la rencontre 1.

Cette étape prépare principalement :

- **WEB-01 — Organiser un projet Web et utiliser les chemins**;
- **WEB-02 — Construire une page HTML correctement structurée**.

Ces compétences commenceront à être observées plus formellement à la rencontre 2, lorsque votre projet contiendra plusieurs fichiers et ressources.

:::tip Bonne pratique
Pour faciliter la suite du projet :

- gardez une indentation lisible;
- utilisez des noms de fichiers simples;
- enregistrez souvent;
- vérifiez fréquemment le résultat dans le navigateur;
- corrigez un problème dès que vous le remarquez.
:::

:::note Pour aller plus loin — non évalué
Si vous terminez rapidement, enrichissez le **contenu** de votre page : ajoutez une section, une liste ou une sous-section supplémentaire et vérifiez que la structure reste logique.

N'essayez pas encore de prendre de l'avance avec CSS, la navigation ou une mise en page complexe.
:::

# Prochaine étape

À la rencontre 2, cette page unique deviendra un petit site avec :

- plusieurs pages;
- des images locales;
- des dossiers organisés;
- des chemins relatifs;
- une navigation permettant de circuler dans le site.
