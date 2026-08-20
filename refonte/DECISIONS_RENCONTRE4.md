# Décisions de conception — Rencontre 4

**Date : 2026-08-19**  
**Statut : R4-01 terminé; R4-02 à R4-05 à implémenter**  
**Plan maître : `PLAN_IMPLEMENTATION_RENCONTRES_1_A_5.md`**

Ce document consigne le résultat de **R4-01 — Extraire le noyau utile du matériel existant** avant la rédaction de la rencontre 4.

## Intention de la rencontre

Après avoir relié une feuille CSS et utilisé des sélecteurs à la rencontre 3, l'étudiant apprend maintenant à comprendre **l'espace occupé par un élément**.

Le modèle en boîte doit répondre à une difficulté très concrète :

> Pourquoi mon texte est-il collé à la bordure? Pourquoi deux blocs sont-ils collés ensemble? Où dois-je ajouter de l'espace?

Le noyau de la rencontre est donc : **contenu → padding → border → margin**.

## Noyau obligatoire de R4

### WEB-08 — Espace et boîte

À maîtriser :

- chaque élément HTML occupe une boîte;
- les quatre zones : contenu, `padding`, `border`, `margin`;
- différence entre `padding` et `margin`;
- `padding` avec une valeur simple;
- `margin` avec une valeur simple;
- forme abrégée à deux valeurs (`vertical horizontal`) lorsqu'elle est utile;
- `border` comme partie visible entre padding et margin;
- dimensions simples seulement lorsqu'elles aident à comprendre la boîte;
- diagnostic simple : déterminer si l'espace recherché doit être intérieur ou extérieur.

### Consolidation WEB-07

La rencontre réutilise :

- couleurs et arrière-plans;
- bordures;
- classes;
- typographie déjà vue.

La nouveauté n'est pas d'ajouter une longue liste de propriétés visuelles, mais de mieux organiser l'espace.

## Dimensions : traitement minimal

Le cours peut montrer :

- `width` dans un exemple expérimental;
- `max-width` comme outil utile pour éviter un bloc trop large.

`height` n'est pas nécessaire dans le noyau et ne doit pas être imposé au Projet Web.

La rencontre ne doit pas devenir un cours sur toutes les unités CSS.

## `box-sizing`

`box-sizing: border-box` peut être mentionné comme **Bonne pratique / référence utile**, mais n'est pas une exigence de validation. Éviter d'ajouter une théorie détaillée sur le sélecteur universel simplement pour cette propriété.

## Conteneurs HTML

R4 peut introduire clairement l'idée qu'on applique le modèle en boîte à un **conteneur**.

Priorité :

- utiliser un élément sémantique déjà approprié (`header`, `main`, `section`, etc.);
- présenter `<div>` comme conteneur général lorsqu'aucun élément plus précis ne convient.

Ne pas transformer la rencontre en chapitre de sémantique HTML.

## Contenu volontairement exclu du noyau R4

Reporter ou classer hors noyau :

- `display: block`, `inline`, `inline-block` comme théorie détaillée;
- menus construits avec `inline-block`;
- `display: none`;
- `overflow`;
- flux normal comme chapitre théorique;
- `position: relative`, `absolute`, `fixed`;
- `top`, `right`, `bottom`, `left`;
- `z-index`;
- `:hover` / `:active` comme exigence;
- sélecteurs descendants/enfants combinés;
- `opacity`;
- `box-shadow`;
- transitions et animations.

La disposition horizontale sera faite avec **Flexbox simple à R5**, pas avec `inline-block`.

## Exercice guidé prévu

Créer `04-rencontre4-exercice-guide.md` autour d'une petite carte ou fiche.

Objectifs pratiques :

1. rendre les limites de la boîte visibles avec un arrière-plan et une bordure;
2. ajouter du `padding` et constater que l'espace apparaît **à l'intérieur**;
3. ajouter de la `margin` et constater que l'espace apparaît **à l'extérieur**;
4. comparer plusieurs blocs empilés;
5. modifier volontairement padding vs margin pour diagnostiquer le bon choix;
6. expérimenter une largeur simple sans faire des dimensions le sujet principal.

Aucune ressource externe n'est nécessaire.

## Projet Web — Étape 4 prévue

L'étudiant continue le même site et sa même feuille `css/styles.css`.

Il doit :

- améliorer l'espace intérieur d'au moins un bloc significatif;
- améliorer l'espace entre des blocs;
- utiliser une bordure ou un arrière-plan lorsque cela sert la lisibilité;
- appliquer les styles avec les sélecteurs/classes déjà maîtrisés;
- pouvoir expliquer si un espace provient de `padding` ou de `margin`;
- éviter de refaire tout le design du site.

Le projet peut utiliser des `section`, `header`, `main` ou un `<div>` lorsque nécessaire. Aucun nombre mécanique de cartes ou de conteneurs n'est imposé.

## Validation

R4 permet :

- de terminer ou reprendre la **Validation C — WEB-05 / WEB-06**;
- de commencer la **Validation D** avec :
  - WEB-07 — Mettre en forme une interface avec CSS;
  - WEB-08 — Organiser l'espace et la disposition des éléments.

À R4, WEB-08 porte surtout sur le modèle en boîte et les espacements. Flexbox sera ajouté à R5 avant la finalisation de la Validation D.

## Ressources

Les schémas et captures déjà présents sous `web/static/img/cours-modele-boites-positionnement/` peuvent être réutilisés. Les plus utiles sont notamment :

- `modele-de-boite-css.png`;
- `marges-et-remplissage.png`;
- `boites-rendues-visibles.png`;
- `dimensions-totales-boite.png` si une explication de dimension le justifie.

Aucune nouvelle ressource n'est bloquante.

## Point de reprise

Le prochain travail est :

> **R4-02 — Rédiger `web/docs/01-cours/04-rencontre4.md` selon les décisions ci-dessus.**
