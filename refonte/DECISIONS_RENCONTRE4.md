# Décisions de conception — Rencontre 4

**Date initiale : 2026-08-19**  
**Mise à jour : 2026-09-08**  
**Statut : théorie, exercice guidé et Projet Web stabilisés**

**Référence courante : `COMPETENCES_HTML_CSS.md`**

Ce document conserve les décisions propres à la rencontre 4. Lorsque le plan initial et la cartographie HTML/CSS courante diffèrent, `COMPETENCES_HTML_CSS.md` et `SOMMAIRE_COUVERTURE_RENCONTRES.md` prévalent.

## Intention de la rencontre

Après avoir relié une feuille CSS et utilisé des sélecteurs à la rencontre 3, l'étudiant apprend maintenant à comprendre **l'espace occupé par un élément**.

Le modèle en boîte doit répondre à une difficulté très concrète :

> Pourquoi mon texte est-il collé à la bordure? Pourquoi deux blocs sont-ils collés ensemble? Où dois-je ajouter de l'espace?

Le noyau de la rencontre reste : **contenu → padding → border → margin**.

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
- diagnostic simple : déterminer si l'espace recherché doit être intérieur ou extérieur;
- différence entre une largeur fixe en `px` et une largeur relative en `%`;
- `width` et `max-width` lorsqu'ils répondent à un besoin réel;
- `max-width: 100%` et `height: auto` pour garder une image dans son conteneur;
- différence entre centrer du contenu avec `text-align: center` et centrer une boîte avec `margin: 0 auto`.

### Consolidation WEB-07

La rencontre réutilise :

- couleurs et arrière-plans;
- bordures;
- classes;
- typographie déjà vue;
- `text-align` déjà vu à R3.

La nouveauté n'est pas d'ajouter une longue liste de propriétés visuelles, mais de mieux organiser l'espace et les dimensions.

## Dimensions et centrage

La portée actuelle de R4 comprend explicitement :

- `width` en `px` pour illustrer une dimension fixe;
- `width` en `%` pour illustrer une dimension relative au parent;
- `max-width` pour imposer une limite souple;
- `height: auto` sur une image pour conserver ses proportions;
- `margin: 0 auto` pour centrer une boîte dont la largeur est contrôlée;
- `text-align: center` comme réinvestissement de R3 pour centrer du contenu en ligne dans un conteneur.

Ces outils servent des problèmes réels du Projet Web. Aucune valeur précise comme `320px`, `80%` ou `900px` ne devient une exigence mécanique de WEB-08.

La rencontre ne doit pas devenir un cours sur toutes les unités CSS ni sur toutes les techniques de mise en page.

## `box-sizing`

`box-sizing: border-box` peut être mentionné comme **Pour aller plus loin / référence utile** dans la théorie, mais n'est pas une exigence de validation.

Il ne doit pas être ajouté silencieusement dans un aperçu d'un exemple qui ne le montre pas et n'est pas répété dans l'exercice guidé.

## Conteneurs HTML

R4 introduit clairement l'idée qu'on applique le modèle en boîte à un **conteneur**.

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
- sélecteurs descendants/enfants combinés comme nouvelle notion;
- `opacity`;
- `box-shadow`;
- transitions et animations.

La disposition horizontale est faite avec **Flexbox simple à R5**, pas avec `inline-block`.

Cette liste est une **décision interne de conception**. Elle ne doit pas être reproduite dans la page étudiante sous forme de section « ce que nous ne faisons pas » ou d'historique de l'ancien matériel. L'étudiant voit ce qu'il doit apprendre et les transitions utiles vers la suite du cours, pas les éléments retirés pendant la refonte.

## Exercice guidé

Implémenté dans `web/docs/01-cours/04-rencontre4-exercice-guide.md` autour de petites cartes empilées du thème **Club découverte**, afin de conserver un fil conducteur visuel avec les exercices des rencontres 3 et 5.

L'exercice fait pratiquer :

1. rendre les limites de la boîte visibles avec un arrière-plan et une bordure;
2. ajouter du `padding` et constater que l'espace apparaît **à l'intérieur**;
3. ajouter de la `margin` et constater que l'espace apparaît **à l'extérieur**;
4. comparer volontairement beaucoup de `padding` / peu de `margin`, puis l'inverse;
5. remettre explicitement le fichier dans un état connu après chaque expérience;
6. utiliser une forme à deux valeurs;
7. comparer une largeur fixe en `px` et une largeur relative en `%`;
8. provoquer volontairement un débordement avec `width: 120%`;
9. corriger ce débordement avec `max-width: 100%` et `height: auto`;
10. distinguer le centrage du contenu (`text-align`) du centrage d'une boîte (`margin: 0 auto`);
11. terminer avec un `styles.css` complet et déterministe avant le diagnostic final.

L'exercice reste expérimental : il sert à isoler les notions avant leur transfert dans le Projet Web. Les valeurs temporaires (`5px`, `40px`, `120%`, `width: 320px`) sont explicitement retirées ou remplacées avant l'état final.

### État final de l'exercice

L'état final de référence utilise :

- `main { width: 80%; max-width: 900px; margin: 0 auto; }`;
- `img { max-width: 100%; height: auto; }`;
- `.image-principale { width: 80%; }`;
- `.zone-image { text-align: center; }`;
- `.carte` avec arrière-plan, bordure de `2px`, `padding: 16px 24px` et `margin: 24px 0`.

Un aperçu final dédié est conservé sous `web/static/examples/exercices/rencontre4/` avec une feuille `css/styles.css` distincte. Il sert à vérifier l'état cumulatif de l'exercice; les micro-aperçus génériques continuent de servir uniquement aux notions isolées.

## Projet Web — Étape 4

Implémenté dans `web/docs/03-projet-web/04-rencontre4.md`.

L'étudiant continue le même site et sa même feuille `css/styles.css`.

Il doit :

- auditer les vrais blocs des quatre pages plutôt que recopier les cartes de l'exercice;
- améliorer l'espace intérieur d'au moins un bloc significatif;
- améliorer l'espace entre des blocs;
- utiliser une bordure ou un arrière-plan lorsque cela sert la lisibilité;
- réutiliser une classe sur des blocs comparables;
- contrôler et centrer la largeur du contenu principal;
- vérifier que les images restent dans leur conteneur et conservent leurs proportions;
- pouvoir expliquer `padding` vs `margin`, `px` vs `%` et `text-align` vs `margin: 0 auto`;
- éviter de refaire tout le design du site.

Le projet peut utiliser `section`, `header`, `main` ou un `<div>` lorsque nécessaire. Aucun nombre mécanique de cartes ou de conteneurs n'est imposé.

### Exemple d'évolution du Projet Web

L'exemple de l'étape 4 est une **évolution directe de l'étape 3** :

- les quatre pages sont conservées;
- la navigation à quatre destinations est conservée;
- la feuille partagée reste `css/styles.css`;
- les classes `introduction` et `mise-en-valeur` restent présentes;
- l'identifiant `message-principal` et la règle `#message-principal` restent présents;
- R4 ajoute les espacements, la largeur contrôlée et les images adaptables sans supprimer les acquis précédents;
- les blocs ajoutés ont des rôles liés au thème (`fiche-sentier`, `conseil`, `presentation`) plutôt qu'une classe générique copiée de l'exercice guidé.

Le grand aperçu du site est affiché explicitement dans la section **Exemple de progression** du Projet Web. Il n'est plus injecté automatiquement après un bloc CSS, afin de garder les micro-aperçus de syntaxe séparés de l'état global du projet.

## Validation

R4 permet :

- de terminer ou reprendre la **Validation C — WEB-05 / WEB-06**;
- de commencer la **Validation D** avec :
  - WEB-07 — Mettre en forme une interface avec CSS;
  - WEB-08 — Organiser l'espace et la disposition des éléments.

À R4, WEB-08 porte surtout sur le modèle en boîte, les espacements, les dimensions simples et le centrage. Flexbox est ajouté à R5 avant la finalisation de la Validation D.

## Règle de fidélité des aperçus

Les aperçus associés aux blocs de code R4 doivent respecter la règle suivante :

> **Le sélecteur enseigné reçoit uniquement les propriétés montrées dans le bloc de code.**

Un élément auxiliaire peut servir de repère visuel dans l'iframe, mais il ne doit pas modifier silencieusement la propriété ou le sélecteur qu'on cherche à expliquer.

Conséquences :

- pas de `overflow`, `display`, `box-sizing` ou sélecteur descendant ajouté pour « aider » un aperçu si le bloc ne les montre pas;
- un bloc « padding seul » et un bloc « bordure seule » utilisent des aperçus distincts des exemples composés;
- l'aperçu complet de la théorie contient exactement les règles `body`, `main` et `.carte` affichées dans le cours;
- l'aperçu final de l'exercice utilise son propre CSS cumulatif et n'est pas substitué à un micro-aperçu de notion;
- le grand aperçu du Projet Web représente le vrai site de quatre pages et conserve les acquis des étapes précédentes.

## Ressources

Le cours réutilise des schémas déjà présents sous `web/static/img/cours-modele-boites-positionnement/`, notamment :

- `modele-de-boite-css.png`;
- `marges-et-remplissage.png`;
- `boites-rendues-visibles.png`;
- `dimensions-totales-boite.png`.

L'exercice réutilise `chat.jpg` de la rencontre 2. Aucune nouvelle ressource externe n'est nécessaire.

## Implémentation actuelle

Les éléments suivants sont présents dans la branche de stabilisation R4 :

- `web/docs/01-cours/04-rencontre4.md` — cours canonique sans historique de notions retirées;
- `web/docs/01-cours/04-rencontre4-exercice-guide.md` — exercice guidé stabilisé;
- `web/docs/03-projet-web/04-rencontre4.md` — Projet Web recentré sur l'audit du vrai site;
- `web/sidebars.js` — rencontre 4 structurée en Cours / Exercice guidé / Projet Web;
- `web/static/examples/peek/r4-*.html` — micro-aperçus de notions;
- `web/static/examples/exercices/rencontre4/` — état final de l'exercice guidé;
- `web/static/examples/projet-web/evolution/etape4/` — évolution fidèle du site de quatre pages de l'étape 3;
- `web/src/theme/CodeBlock/index.tsx` — correspondance exacte entre blocs et micro-aperçus, sans injection automatique du grand aperçu R4.

## Point de reprise

Après validation technique de l'ensemble de R4, la prochaine revue peut porter sur **la Rencontre 5**, en commençant par vérifier que son Projet Web repart bien de l'état final corrigé de l'étape 4.
