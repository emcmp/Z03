# Décisions de conception — Rencontre 5

**Date : 2026-08-19**  
**Statut : R5-01 terminé; R5-02 à R5-05 à implémenter**  
**Plan maître : `PLAN_IMPLEMENTATION_RENCONTRES_1_A_5.md`**

Ce document consigne le résultat de **R5-01 — Définir le Flexbox minimal** avant la rédaction de la rencontre 5.

## Intention de la rencontre

R5 termine le noyau HTML/CSS avant JavaScript.

La rencontre ne doit donc pas devenir un grand chapitre Flexbox. Elle doit fournir **juste assez de disposition** pour résoudre quelques besoins concrets, puis laisser beaucoup de temps pour :

- améliorer le Projet Web;
- corriger les problèmes HTML/CSS;
- terminer les validations C/D;
- reprendre une compétence au besoin.

## Modèle mental principal

Flexbox doit être présenté avec une idée simple :

> On applique `display: flex` au **parent** pour organiser ses **enfants directs**.

Exemple :

```html
<nav class="navigation">
  <a href="index.html">Accueil</a>
  <a href="pages/sujet.html">Sujet</a>
  <a href="pages/apropos.html">À propos</a>
</nav>
```

```css
.navigation {
  display: flex;
  gap: 16px;
}
```

La navigation est le premier cas concret parce qu'elle réutilise directement le site des rencontres précédentes.

## Noyau obligatoire de R5

À maîtriser à un niveau introductif :

- parent flex / enfants directs;
- `display: flex`;
- disposition horizontale par défaut dans notre exemple;
- `gap` pour espacer les enfants;
- réutilisation du modèle en boîte sur les éléments placés par Flexbox;
- diagnostic simple : vérifier que `display: flex` est appliqué au bon parent.

## Propriétés montrées sans couverture exhaustive

### `justify-content`

Montrer seulement quelques valeurs utiles :

- `flex-start` comme comportement de départ conceptuel;
- `center`;
- `space-between` lorsqu'un besoin réel le justifie.

Ne pas faire mémoriser toutes les valeurs.

### `align-items`

Présenter comme contrôle de l'alignement sur l'autre axe et montrer surtout :

- `center` dans un exemple simple;
- éventuellement `flex-start` pour comparer.

Ne pas transformer R5 en théorie détaillée des axes.

## Contenu volontairement hors noyau

Ne pas rendre obligatoires :

- `flex-direction` comme chapitre;
- `flex-wrap`;
- `flex-grow`, `flex-shrink`, `flex-basis`;
- propriété abrégée `flex`;
- `order`;
- alignement individuel avec `align-self`;
- Flexbox imbriqué complexe;
- Grid;
- positionnement;
- animations et transitions.

`flex-wrap` peut être mentionné **Pour aller plus loin — non évalué** si un étudiant veut éviter qu'une navigation déborde sur un petit écran.

## Exercice guidé prévu

Créer `05-rencontre5-exercice-guide.md` avec deux situations simples :

1. transformer une navigation en conteneur flex et utiliser `gap`;
2. placer quelques cartes côte à côte avec un parent `.cartes`.

L'exercice doit faire verbaliser :

- quel élément est le parent flex;
- quels éléments sont les enfants directs;
- où `gap` crée l'espace;
- ce qui se passe si `display: flex` est appliqué au mauvais élément.

`justify-content` et `align-items` sont expérimentés avec une ou deux valeurs, sans catalogue exhaustif.

## Projet Web — Étape 5 prévue

Le projet doit privilégier **l'intégration plutôt que l'ajout de nouvelles fonctionnalités**.

L'étudiant doit :

- utiliser Flexbox dans au moins une situation utile, idéalement la navigation;
- utiliser `gap` pour gérer l'espacement des enfants flex;
- utiliser `justify-content` ou `align-items` seulement si cela améliore réellement la disposition;
- vérifier toutes les pages et leurs chemins;
- corriger les problèmes de feuille CSS, classes, modèle en boîte et navigation;
- harmoniser l'apparence générale sans rendre tous les sites identiques;
- se préparer aux validations restantes.

Aucun nombre précis de conteneurs flex n'est exigé. Une utilisation comprise et pertinente vaut mieux que plusieurs Flexbox ajoutés artificiellement.

## Validation

R5 vise la finalisation de :

- **Validation D — WEB-07 / WEB-08**;
- Validation C ou validations HTML antérieures à reprendre au besoin, sans bloquer la progression du groupe.

Après R5, aucune nouvelle notion HTML/CSS essentielle n'est prévue. JavaScript commence à R6.

## Ressources

Aucune ressource externe n'est requise pour comprendre le noyau. Les exemples de code et un petit schéma textuel parent/enfants sont suffisants pour cette passe.

Une illustration Flexbox dédiée pourrait être ajoutée plus tard si elle améliore réellement la compréhension, mais elle ne doit pas bloquer le premier cours ni la finalisation R1–R5.

## Point de reprise

Le prochain travail est :

> **R5-02 — Rédiger `web/docs/01-cours/05-rencontre5.md` selon les décisions ci-dessus.**
