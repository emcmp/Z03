# Décisions de conception — Rencontre 5

**Date : 2026-08-19**  
**Statut : R5-01 à R5-05 terminés; rencontre prête à réviser**

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

Flexbox est présenté avec une idée simple :

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

Le cours montre seulement quelques valeurs utiles :

- `flex-start` comme comportement de départ conceptuel;
- `center`;
- `space-between` lorsqu'un besoin réel le justifie.

Aucune mémorisation exhaustive n'est demandée.

### `align-items`

La propriété est présentée comme contrôle de l'alignement sur l'autre axe avec surtout :

- `center`;
- `flex-start` pour comparer.

R5 ne devient pas un chapitre détaillé sur les axes Flexbox.

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

`flex-wrap` est seulement mentionné **Pour aller plus loin — non évalué**.

## Exercice guidé

Implémenté dans `web/docs/01-cours/05-rencontre5-exercice-guide.md` avec deux situations :

1. transformer une navigation en conteneur flex et utiliser `gap`;
2. placer quelques cartes côte à côte avec un parent `.cartes`.

L'exercice fait verbaliser :

- quel élément est le parent flex;
- quels éléments sont les enfants directs;
- où `gap` crée l'espace;
- ce qui se passe si `display: flex` est appliqué au mauvais élément.

`justify-content` et `align-items` sont expérimentés avec quelques valeurs seulement.

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

## Validation

R5 vise la finalisation de :

- **Validation D — WEB-07 / WEB-08**;
- Validation C ou validations HTML antérieures à reprendre au besoin, sans bloquer la progression du groupe.

Après R5, aucune nouvelle notion HTML/CSS essentielle n'est prévue. JavaScript commence à R6.

## Ressources

Aucune ressource externe n'est requise pour comprendre le noyau. Les exemples de code et les schémas textuels parent/enfants suffisent pour cette passe.

Une illustration Flexbox dédiée pourra être ajoutée plus tard si elle apporte une vraie valeur pédagogique, mais elle n'est pas bloquante.

## Implémentation réalisée

Les éléments suivants sont maintenant présents sur `main` :

- `web/docs/01-cours/05-rencontre5.md` — cours canonique complet;
- `web/docs/01-cours/05-rencontre5-exercice-guide.md` — exercice guidé;
- `web/docs/03-projet-web/05-rencontre5.md` — Projet Web, étape 5;
- `web/sidebars.js` — rencontre 5 structurée en Cours / Exercice guidé / Projet Web.

## Validation technique réalisée

Validation locale réussie le 2026-08-19 :

- `npm run build` et `git diff --check` réussissent;
- les IDs de navigation et les liens entre cours, exercice et Projet Web sont résolus;
- les blocs de code Flexbox et les admonitions sont présents dans le HTML généré;
- les trois routes R5 répondent en HTTP 200 sans marqueur de page 404;
- aucune page R3–R5 ne pointe vers un lien local ou un asset absent.

## Point de reprise

Après validation technique du bloc R3–R5, le prochain travail pédagogique est :

> **REV-01 puis REV-02 — relire R2 et ensuite la progression complète R1 → R5 pour juger le poids réel de chaque rencontre.**
