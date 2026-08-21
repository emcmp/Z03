---
title: Étape 3 - Créer une identité visuelle partagée
description: Relier les quatre pages à une feuille CSS externe, utiliser des classes et un identifiant, puis créer des styles adaptés au thème du site.
sidebar_position: 4
---

# Projet Web — Étape 3

<ProjectStepHero step={3} />

## Mission

Ajoutez une seule feuille CSS externe à votre site de quatre pages, utilisez des sélecteurs adaptés au besoin, puis créez une identité visuelle cohérente avec votre thème et votre page À propos.

Avant de commencer :

- consultez le **[cours de la rencontre 3](../01-cours/03-rencontre3.md)**;
- faites l'**[exercice guidé — Première feuille CSS](../01-cours/03-rencontre3-exercice-guide.md)**.

## Structure minimale

Votre projet devient :

```text
mon-site/
├── index.html
├── css/
│   └── styles.css
├── images/
│   └── ...
└── pages/
    ├── sous-theme-1.html
    ├── sous-theme-2.html
    └── apropos.html
```

Créez `css/styles.css`. Les quatre pages doivent charger ce même fichier.

## 1. Relier les quatre pages

Ajoutez un `<link>` dans le `<head>` de chaque document.

Le cours explique les deux chemins nécessaires :

- depuis `index.html`;
- depuis une page située sous `pages/`.

Votre première vérification consiste à modifier une règle générale et à confirmer que **les quatre pages** changent.

## 2. Définir les styles généraux

Votre feuille doit au minimum contenir des règles générales pour :

- la typographie du `body`;
- la couleur du texte ou de l'arrière-plan général;
- l'apparence des titres principaux;
- l'apparence des liens ou de la navigation.

Choisissez des valeurs adaptées à votre sujet plutôt que de conserver automatiquement les couleurs de l'exercice guidé.

## 3. Créer deux classes utiles

Créez au moins **deux classes nommées selon leur rôle**.

Exemples de rôles :

```text
introduction
mise-en-valeur
fiche
information-importante
citation
profil
coordonnees
```

Au moins une de ces classes doit être réutilisée sur plusieurs éléments ou plusieurs pages.

:::warning Noms de classes
Évitez un nom qui décrit seulement une couleur, comme `texte-rouge`.

Un nom comme `information-importante` reste pertinent même si vous changez plus tard la couleur.
:::

## 4. Créer un identifiant unique

Choisissez un élément qui joue un rôle unique dans l'une de vos pages, par exemple :

- le message principal de l'accueil;
- le titre d'une section importante;
- une courte mission dans la page À propos;
- une information particulière qui ne se répète pas.

Ajoutez-lui un `id` clair dans HTML :

```html
<h2 id="message-principal">Bienvenue</h2>
```

Puis ciblez ce même élément dans `styles.css` :

```css
#message-principal {
  color: darkgreen;
}
```

Votre projet doit donc contenir **au moins un `id` unique utilisé volontairement et une règle `#id` correspondante**.

:::info À maîtriser
Une classe peut être réutilisée. Un `id` doit être unique dans la page.

Vous devez pouvoir montrer l'élément HTML, retrouver la règle CSS correspondante et expliquer pourquoi vous avez choisi un identifiant plutôt qu'une classe.
:::

:::tip Préparation à JavaScript
Cette pratique prépare le travail avec le DOM : plus tard, JavaScript devra souvent retrouver un élément précis pour le modifier.
:::

## 5. Construire une identité visuelle simple

Votre site doit montrer au moins trois décisions visuelles que vous comprenez, par exemple :

- une famille de caractères générale;
- une couleur principale pour les titres;
- une couleur ou un arrière-plan pour un type de contenu;
- une bordure simple;
- un alignement de texte choisi volontairement;
- une apparence cohérente pour les liens.

Vous n'avez pas à utiliser toutes les propriétés du cours.

:::info L'objectif n'est pas de décorer au hasard
Vous devez pouvoir retrouver la règle qui produit chaque changement important et expliquer pourquoi vous l'avez choisie.
:::

## 6. Personnaliser aussi la page À propos

La page À propos doit appartenir visuellement au même site, mais elle peut posséder un bloc adapté à son contenu, par exemple :

- une courte présentation;
- une fiche de profil;
- une mission d'entreprise;
- un groupe de services;
- des coordonnées fictives.

Réutilisez les mêmes règles générales et créez une classe supplémentaire seulement si le rôle du contenu le justifie.

## Décisions à prendre

- Quelle ambiance visuelle correspond au thème?
- Quelles règles doivent s'appliquer partout?
- Quel contenu joue un rôle spécial et mérite une classe?
- Quel élément est réellement unique et mérite un `id`?
- Une classe peut-elle être réutilisée au lieu de créer une règle différente pour chaque page?
- Les quatre pages ressemblent-elles au même site?
- La présentation de la page À propos correspond-elle à son contenu?

## Tests à effectuer

- [ ] `styles.css` existe dans `css/`.
- [ ] `index.html` charge la feuille avec le bon chemin.
- [ ] Les trois pages sous `pages/` chargent la même feuille.
- [ ] Une modification générale apparaît sur les quatre pages.
- [ ] La feuille utilise au moins un sélecteur d'élément.
- [ ] La feuille contient au moins deux classes utiles.
- [ ] Au moins une classe est réutilisée.
- [ ] Au moins un élément possède un `id` unique.
- [ ] Une règle `#id` cible exactement cet élément.
- [ ] Les noms des classes et de l'identifiant correspondent exactement dans HTML et CSS.
- [ ] Les couleurs et la typographie restent lisibles.
- [ ] Le contenu et la navigation fonctionnent toujours.

## Validations disponibles

Vous pouvez terminer la Validation B si nécessaire :

- ✍️ **WEB-03**;
- 🔗 **WEB-04**.

Vous pouvez aussi commencer la Validation C :

- 🔌 **WEB-05 — Associer correctement une feuille CSS externe**;
- 🎯 **WEB-06 — Cibler les éléments avec des sélecteurs appropriés**.

Pour WEB-06, vous devez pouvoir distinguer un sélecteur d'élément, une classe réutilisable et un identifiant unique.

Cette étape contribue aussi à la dimension **Personnalisation et appropriation du projet** par vos choix de couleurs, de typographie, de classes, d'identifiant et de présentation.

:::note Pour aller plus loin — non évalué séparément
Vous pouvez créer une troisième classe utile, enrichir la page À propos ou expérimenter avec une autre combinaison de couleurs.

N'utilisez pas encore Flexbox, Grid ou le positionnement comme exigences de votre projet.
:::

## Prochaine étape

À la rencontre 4, vous conserverez cette feuille et analyserez les vrais blocs de vos quatre pages pour corriger les espaces intérieurs et extérieurs.
