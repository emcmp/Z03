---
title: Étape 4 - Auditer les blocs et les espacements
description: Analyser les vrais contenus des quatre pages et utiliser le modèle en boîte pour améliorer leur lisibilité.
sidebar_position: 5
---

# Projet Web — Étape 4

<ProjectStepHero step={4} />

## Mission

Faites un audit de vos quatre pages et corrigez les problèmes réels d'espace intérieur, d'espace extérieur et de regroupement visuel.

Avant de commencer :

- consultez le **[cours de la rencontre 4](../01-cours/04-rencontre4.md)**;
- faites l'**[exercice guidé — Comprendre le modèle en boîte](../01-cours/04-rencontre4-exercice-guide.md)**.

L'exercice utilise des cartes communes pour isoler le modèle en boîte. Dans votre Projet Web, vous devez appliquer ces notions à des blocs qui ont un vrai rôle dans votre contenu.

## 1. Repérer deux blocs comparables

Choisissez au moins deux contenus qui jouent le même rôle, par exemple :

- deux fiches de joueurs;
- deux résumés de films;
- deux recettes;
- deux informations importantes;
- deux sections présentant des sujets;
- un groupe de services ou d'intérêts dans la page À propos.

Utilisez ou créez une classe commune pour ces blocs.

:::info Réutiliser plutôt que dupliquer
Si deux blocs jouent le même rôle, ils devraient généralement partager une classe au lieu de recevoir deux règles presque identiques.
:::

## 2. Corriger l'espace intérieur

Ajoutez un `padding` lorsque le contenu est trop près de sa bordure ou de son arrière-plan.

Vous devez pouvoir montrer un bloc et expliquer :

```text
Le padding crée ici l'espace entre le contenu et la bordure.
```

## 3. Corriger l'espace extérieur

Utilisez `margin` lorsqu'un bloc est trop près de ses voisins.

Vous devez pouvoir montrer deux éléments et expliquer :

```text
La margin sépare ici les boîtes l'une de l'autre.
```

## 4. Rendre les limites visibles lorsque cela aide

Selon votre sujet, utilisez au moins une propriété visuelle qui rend le regroupement compréhensible :

- `border`;
- `background-color`;
- ou les deux.

La bordure n'est pas obligatoire sur tous les blocs. Elle doit répondre à un besoin de lisibilité.

## 5. Vérifier les quatre pages

Ne corrigez pas seulement la page d'accueil.

Parcourez l'accueil, les deux pages de sujet et la page À propos. Cherchez :

- un texte collé à une bordure ou à un fond;
- deux sections trop proches;
- des blocs semblables qui utilisent des espacements différents sans raison;
- une classe répétée sous plusieurs noms;
- une largeur qui rend un texte difficile à lire;
- une page À propos qui semble visuellement détachée du reste du site.

Une limite comme `max-width` peut être utilisée si elle résout un vrai problème, mais elle n'est pas obligatoire.

## Minimum attendu

Votre site doit montrer :

- au moins une classe appliquée à deux blocs comparables;
- un `padding` utilisé pour créer un espace intérieur;
- un `margin` utilisé pour créer un espace extérieur;
- une bordure ou un arrière-plan utilisé volontairement;
- des valeurs cohérentes entre les quatre pages;
- une explication claire de la différence entre `padding` et `margin`.

## Décisions à prendre

- Quels contenus forment un même type de bloc?
- Où se trouve réellement le problème d'espace?
- Une bordure aide-t-elle à comprendre le groupe?
- Une classe existante peut-elle être réutilisée?
- Les espacements sont-ils cohérents sans rendre toutes les pages identiques?
- Un bloc de la page À propos mérite-t-il un traitement adapté?

## Tests à effectuer

- [ ] Les quatre pages chargent toujours la même feuille CSS.
- [ ] Je peux nommer contenu, `padding`, `border` et `margin`.
- [ ] Je peux montrer un espace intérieur créé par `padding`.
- [ ] Je peux montrer un espace extérieur créé par `margin`.
- [ ] Deux blocs comparables partagent une classe.
- [ ] Les valeurs choisies améliorent réellement la lisibilité.
- [ ] Je n'ai pas ajouté des dimensions fixes partout sans raison.
- [ ] La navigation et les images fonctionnent toujours.
- [ ] La page À propos appartient visuellement au même site.

## Validations disponibles

Vous pouvez poursuivre la Validation C :

- 🔌 **WEB-05**;
- 🎯 **WEB-06**.

Vous pouvez aussi commencer la Validation D :

- 🎨 **WEB-07 — Mettre en forme une interface avec CSS**;
- 📐 **WEB-08 — Organiser l'espace et la disposition des éléments**.

À cette rencontre, WEB-08 est surtout observée à travers le modèle en boîte. Flexbox sera ajouté à la rencontre 5.

Le soin apporté aux blocs réels du site contribue également à la dimension **Personnalisation et appropriation du projet**.

:::note Pour aller plus loin — non évalué séparément
Vous pouvez expérimenter avec `border-radius`, enrichir un bloc de la page À propos ou lire à propos de `box-sizing: border-box`.

Ces propriétés ne sont pas nécessaires pour réussir la validation technique.
:::

## Prochaine étape

À la rencontre 5, vous utiliserez Flexbox dans un besoin concret et ferez une dernière passe de correction et de personnalisation sur l'ensemble du site.
