# Décisions de conception — Rencontre 5

**Date initiale : 2026-08-19**  
**Mise à jour : 2026-09-09**  
**Statut : exercice guidé refait; théorie et Projet Web à réviser**

**Référence courante : `COMPETENCES_HTML_CSS.md`**

## Intention de la rencontre

R5 termine le noyau HTML/CSS avant JavaScript.

La rencontre ne doit donc pas devenir un grand chapitre Flexbox. Elle doit fournir **juste assez de disposition** pour résoudre quelques besoins concrets, puis laisser beaucoup de temps pour :

- améliorer le Projet Web;
- corriger les problèmes HTML/CSS;
- terminer les validations C/D;
- reprendre une compétence au besoin.

## Modèle mental principal

Flexbox est présenté avec une idée simple :

> On applique `display: flex` au **parent** pour organiser ses **enfants directs**.

La relation parent/enfants doit rester le fil conducteur principal de la rencontre.

## Noyau obligatoire de R5

À maîtriser à un niveau introductif :

- parent flex / enfants directs;
- `display: flex`;
- disposition horizontale par défaut dans les exemples retenus;
- `gap` pour espacer les enfants;
- réutilisation du modèle en boîte sur les éléments placés par Flexbox;
- diagnostic simple : vérifier que `display: flex` est appliqué au bon parent.

## Propriétés montrées sans couverture exhaustive

### `justify-content`

La propriété sert à montrer qu'un groupe peut être placé sur l'axe principal.

Dans l'exercice guidé, on utilise surtout :

- `center` comme état final;
- `flex-start` comme comparaison temporaire.

Il n'est pas nécessaire de transformer l'exercice en catalogue de valeurs.

### `align-items`

La propriété peut rester présentée dans la théorie comme contrôle de l'autre axe, mais elle n'est plus nécessaire dans l'exercice guidé.

Elle ne constitue pas une exigence mécanique de WEB-08.

## Contenu volontairement hors noyau

Ne sont pas rendus obligatoires :

- `flex-direction` comme chapitre;
- `flex-wrap`;
- `flex-grow`, `flex-shrink`, `flex-basis`;
- propriété abrégée `flex`;
- `order`;
- `align-self`;
- Flexbox imbriqué complexe;
- Grid;
- positionnement;
- animations et transitions.

Ces décisions sont internes. Elles ne doivent pas devenir une longue liste de notions « non couvertes » présentée aux étudiants sans besoin pédagogique.

## Exercice guidé — version refaite

Implémenté dans `web/docs/01-cours/05-rencontre5-exercice-guide.md`.

L'exercice reprend directement l'état final **Club découverte** de R4 au lieu de repartir avec un nouveau mini-projet. Il conserve donc :

- la même image;
- les trois cartes;
- le modèle en boîte;
- le centrage du contenu principal;
- la feuille `css/styles.css`.

La progression devient :

1. copier l'exercice R4 et ajouter un conteneur `.cartes` ainsi qu'une navigation;
2. identifier `.cartes` comme parent des trois cartes;
3. ajouter `display: flex` au parent et observer le passage évident de cartes empilées à une rangée;
4. ajouter `gap` et comparer temporairement quelques valeurs;
5. retirer la marge des cartes afin que `gap` contrôle clairement l'espace entre les enfants flex;
6. provoquer l'erreur classique en appliquant `display: flex` à `.carte` plutôt qu'à `.cartes`, puis corriger;
7. transférer le même modèle mental à `.navigation`;
8. utiliser `justify-content: center` avec un essai temporaire de `flex-start`;
9. réutiliser `padding` sur la navigation pour montrer que Flexbox ne remplace pas le modèle en boîte;
10. terminer avec un `styles.css` complet et déterministe avant le diagnostic final.

### Choix de l'ordre

Les cartes sont utilisées avant la navigation parce que l'effet de `display: flex` y est immédiatement visible : des sections naturellement empilées deviennent côte à côte.

Les liens `<a>` d'une navigation peuvent déjà apparaître sur une même ligne sans Flexbox. La navigation est donc plus utile comme **transfert du modèle mental** et pour pratiquer `gap` et `justify-content` que comme première démonstration de `display: flex`.

### Notions retirées de l'exercice guidé

L'exercice guidé ne demande plus :

- `background-image`;
- `background-size`;
- `background-position`;
- le calcul d'un chemin dans `url(...)`;
- `align-items`;
- `space-between` comme essai obligatoire;
- une nouvelle image `sentier.svg`.

`background-image` peut rester un enrichissement dans la théorie ou le Projet Web lorsqu'il est pertinent, mais il ne doit pas détourner l'exercice de son objectif Flexbox.

### État final et aperçu

L'état final de l'exercice contient :

- `.cartes { display: flex; gap: 20px; }`;
- `.navigation { display: flex; gap: 20px; justify-content: center; ... }`;
- les acquis R4 sur `main`, les images et `.carte`;
- `margin: 0` sur `.carte` afin que l'espacement entre les cartes soit attribuable clairement à `gap`.

Un aperçu final dédié est conservé sous `web/static/examples/exercices/rencontre5/` avec un CSS identique à l'état final montré dans l'exercice.

## Projet Web — Étape 5

Implémenté dans `web/docs/03-projet-web/05-rencontre5.md`.

Le projet privilégie **l'intégration plutôt que l'ajout de nouvelles fonctionnalités**.

L'étudiant doit :

- utiliser Flexbox dans une situation utile, idéalement la navigation;
- utiliser `gap` pour gérer l'espacement des enfants flex;
- utiliser `justify-content` ou `align-items` seulement si cela améliore réellement la disposition;
- vérifier toutes les pages et leurs chemins;
- corriger les problèmes de feuille CSS, classes, modèle en boîte et navigation;
- harmoniser l'apparence générale sans rendre tous les sites identiques;
- se préparer aux validations restantes.

Aucun nombre précis de conteneurs flex n'est exigé.

Le Projet Web R5 devra être revu séparément afin de repartir du nouvel état R4 à quatre pages et d'éviter l'ancienne régression de l'exemple d'évolution.

## Validation

R5 vise la finalisation de :

- **Validation D — WEB-07 / WEB-08**;
- Validation C ou validations HTML antérieures à reprendre au besoin, sans bloquer la progression du groupe.

Après R5, aucune nouvelle notion HTML/CSS essentielle n'est prévue. JavaScript commence à R6.

## Ressources

Aucune nouvelle ressource externe n'est requise pour l'exercice guidé.

L'exercice réutilise `chat.jpg` de R4. Les exemples de code et les schémas textuels parent/enfants suffisent pour comprendre le noyau.

## Point de reprise

Après stabilisation de l'exercice guidé, les prochaines vérifications pédagogiques de R5 sont :

1. la théorie, notamment son niveau de détail réel par rapport au noyau;
2. le Projet Web — Étape 5 et son exemple d'évolution à partir du site R4 à quatre pages.
