---
title: Étape 4 - Auditer les blocs, les dimensions et les espacements
description: Analyser les vrais contenus des quatre pages et utiliser le modèle en boîte, les dimensions relatives et le centrage pour améliorer leur lisibilité.
sidebar_position: 5
---

# Projet Web — Étape 4

<ProjectStepHero step={4} />

## Mission

Faites un audit de vos quatre pages et corrigez des problèmes réels d'espace intérieur, d'espace extérieur, de dimensions, de centrage et de regroupement visuel.

Avant de commencer :

- consultez le **[cours de la rencontre 4](../01-cours/04-rencontre4.md)**;
- faites l'**[exercice guidé — Comprendre le modèle en boîte](../01-cours/04-rencontre4-exercice-guide.md)**.

L'exercice guidé utilise des cartes communes pour isoler les notions. Dans votre Projet Web, **ne recopiez pas ces cartes automatiquement**. Appliquez plutôt les propriétés de la rencontre aux contenus qui ont déjà un vrai rôle dans votre site.

## Exemple de progression

Voici le même **Carnet de randonnée** que dans l'étape 3, maintenant amélioré avec le modèle en boîte. Les quatre pages, la navigation, la feuille `css/styles.css`, les classes de R3 et l'identifiant unique sont toujours présents.

Observez surtout que les nouveaux espacements sont appliqués à des contenus qui ont un rôle réel : fiches de sentiers, conseils, bloc de présentation et messages importants.

<ExampleFrame
  src="examples/projet-web/evolution/etape4/preview.html"
  title="Exemple de Projet Web à la fin de l'étape 4"
  showCode={false}
  minHeight={480}
  maxHeight={620}
/>

Votre sujet, vos textes, vos classes et vos choix visuels seront différents.

## 1. Observer avant de modifier

Parcourez les **quatre pages** de votre site avant d'ajouter du CSS.

Repérez quelques problèmes concrets, par exemple :

- un texte trop près d'une bordure ou d'un arrière-plan;
- deux blocs trop collés;
- des contenus semblables espacés différemment sans raison;
- un contenu principal trop large sur un grand écran;
- une image qui risque de dépasser de son conteneur;
- une page À propos qui semble visuellement détachée du reste du site.

Pour chaque correction, essayez d'abord de nommer le problème : **espace intérieur, espace extérieur, largeur, image ou centrage**.

## 2. Choisir de vrais blocs comparables

Choisissez au moins deux contenus qui jouent le même rôle, par exemple :

- deux fiches de joueurs;
- deux résumés de films;
- deux recettes;
- deux informations importantes;
- deux sections présentant des sujets;
- deux services ou intérêts.

Utilisez ou créez une **classe commune** pour ces blocs.

:::info Réutiliser plutôt que dupliquer
Si deux blocs jouent le même rôle, ils devraient généralement partager une classe au lieu de recevoir deux règles presque identiques.
:::

## 3. Corriger les espacements utiles

Utilisez `padding` lorsque le contenu a besoin d'espace **à l'intérieur** de sa boîte.

Utilisez `margin` lorsque la boîte a besoin d'espace **par rapport à ses voisines**.

Une `border` ou un `background-color` peut aider à rendre un regroupement visible, mais seulement si cela améliore réellement votre interface.

Vous devez pouvoir montrer une correction et expliquer pourquoi vous avez choisi `padding`, `margin` ou `border`.

## 4. Contrôler la largeur du contenu principal

Si votre contenu devient trop large, vous pouvez utiliser une combinaison comme :

```css
main {
  width: 80%;
  max-width: 900px;
  margin: 0 auto;
}
```

Les valeurs `80%` et `900px` sont des exemples. Choisissez des valeurs raisonnables pour votre site et soyez capable de les expliquer.

Rappelez-vous :

- une valeur en `px` est fixe;
- une valeur en `%` dépend de l'espace disponible dans le parent;
- `margin: 0 auto` peut centrer une boîte dont la largeur est contrôlée.

## 5. Garder les images dans leur conteneur

Vérifiez toutes les images de votre site.

Une règle générale peut être utile :

```css
img {
  max-width: 100%;
  height: auto;
}
```

Si une image doit avoir une largeur particulière, créez une classe adaptée à son rôle plutôt que d'imposer la même largeur à toutes les images.

:::info Deux centrages différents
`text-align: center` centre du contenu à l'intérieur d'une boîte.

`margin: 0 auto` peut centrer la boîte elle-même lorsqu'elle n'occupe pas toute la largeur disponible.
:::

## 6. Vérifier les quatre pages

Ne corrigez pas seulement la page d'accueil.

Parcourez l'accueil, les deux pages de sujet et la page À propos. Vérifiez que :

- les espacements sont cohérents lorsqu'ils répondent au même besoin;
- les classes existantes sont réutilisées lorsque possible;
- la largeur du contenu reste confortable à lire;
- les images restent dans leur conteneur et conservent leurs proportions;
- la navigation fonctionne toujours;
- la page À propos appartient visuellement au même site.

## Minimum attendu

Votre site doit montrer :

- au moins une classe appliquée à deux blocs comparables;
- un `padding` utilisé pour créer un espace intérieur;
- un `margin` utilisé pour créer un espace extérieur;
- une bordure ou un arrière-plan utilisé volontairement;
- un contenu principal dont la largeur est contrôlée et centré avec des marges automatiques;
- des images qui restent dans leur conteneur et conservent leurs proportions;
- des valeurs cohérentes entre les quatre pages;
- une explication claire de la différence entre `padding` et `margin`, entre `px` et `%`, puis entre `text-align: center` et `margin: 0 auto`.

Aucune valeur précise comme `80%` ou `900px` n'est imposée. La validation porte sur votre compréhension et vos choix.

## Décisions à prendre

- Quels contenus forment un même type de bloc?
- Où se trouve réellement le problème d'espace?
- Une bordure ou un arrière-plan aide-t-il à comprendre le groupe?
- Une classe existante peut-elle être réutilisée?
- Quelle largeur rend le contenu confortable à lire?
- Une largeur fixe ou relative répond-elle mieux au besoin?
- Voulez-vous centrer le contenu d'une boîte ou la boîte elle-même?
- Les images restent-elles lisibles et proportionnées?
- Un bloc de la page À propos mérite-t-il un traitement adapté?

## Tests à effectuer

- [ ] Les quatre pages chargent toujours la même feuille `css/styles.css`.
- [ ] La navigation permet toujours d'atteindre les quatre pages.
- [ ] Les classes et l'identifiant créés aux étapes précédentes sont toujours présents lorsqu'ils sont utiles.
- [ ] Je peux nommer contenu, `padding`, `border` et `margin`.
- [ ] Je peux montrer un espace intérieur créé par `padding`.
- [ ] Je peux montrer un espace extérieur créé par `margin`.
- [ ] Deux blocs comparables partagent une classe.
- [ ] Le contenu principal possède une largeur contrôlée et reste centré.
- [ ] Je peux expliquer la différence entre une largeur en `px` et une largeur en `%`.
- [ ] Les images ne dépassent pas de leur conteneur et ne sont pas déformées.
- [ ] Je peux expliquer la différence entre `text-align: center` et `margin: 0 auto`.
- [ ] Les valeurs choisies améliorent réellement la lisibilité.
- [ ] La page À propos appartient visuellement au même site.

## Validations disponibles

Vous pouvez poursuivre la Validation C :

- 🔌 **WEB-05**;
- 🎯 **WEB-06**.

Vous pouvez aussi commencer la Validation D :

- 🎨 **WEB-07 — Mettre en forme une interface avec CSS**;
- 📐 **WEB-08 — Organiser l'espace et la disposition des éléments**.

À cette rencontre, WEB-08 est surtout observée à travers le modèle en boîte, les dimensions, le centrage et les espacements. Flexbox sera ajouté à la rencontre 5.

Le soin apporté aux blocs réels du site contribue également à la dimension **Personnalisation et appropriation du projet**.

## Prochaine étape

À la rencontre 5, vous utiliserez Flexbox dans un besoin concret et ferez une dernière passe de correction et de personnalisation sur l'ensemble du site.
