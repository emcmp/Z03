# Modifications transversales à prévoir — Rencontres 1 à 5

Ce document sert de **liste de suivi avant modification** pour les rencontres 1 à 5 de Z03.

L'objectif est d'éviter les changements isolés : lorsqu'une notion est ajoutée, retirée ou déplacée, il faut vérifier tous les endroits où elle peut apparaître afin que la théorie, la pratique, le Projet Web et l'évaluation demeurent cohérents.

Ce document complète notamment :

- `SOMMAIRE_COUVERTURE_RENCONTRES.md`;
- `COMPETENCES_HTML_CSS.md`;
- `EVALUATION.md`.

## Règle de propagation

Pour **chaque notion ajoutée, retirée ou déplacée**, vérifier systématiquement les éléments suivants :

- [ ] théorie de la rencontre;
- [ ] exercice guidé;
- [ ] Projet Web;
- [ ] compétences / critères d'évaluation, si la notion est évaluée;
- [ ] aide-mémoire HTML/CSS;
- [ ] exemples de code et aperçus visuels;
- [ ] `SOMMAIRE_COUVERTURE_RENCONTRES.md`.

Une notion ne devrait pas être demandée dans le Projet Web ou dans une validation si elle n'a pas été **enseignée ou pratiquée auparavant**.

Inversement, une notion présentée comme essentielle dans la théorie devrait normalement être réinvestie dans une activité ou un projet, sauf si elle est explicitement identifiée comme information de référence ou « Pour aller plus loin ».

# Liste actuelle des modifications

## 1. Rencontre 1 — Expliquer les commentaires HTML

**Statut : à faire**

Le gabarit du Projet Web utilise déjà un commentaire HTML, par exemple :

```html
<!-- Votre contenu ira ici -->
```

La syntaxe des commentaires n'est toutefois pas expliquée explicitement avant son apparition.

### Modification souhaitée

Ajouter une très courte explication des commentaires HTML dès la rencontre 1.

Niveau attendu :

- reconnaître la syntaxe `<!-- ... -->`;
- comprendre qu'un commentaire sert à laisser une note dans le code;
- comprendre qu'il n'est pas affiché comme contenu normal de la page.

Il ne s'agit pas d'en faire une compétence ni une section importante du cours.

### Propagation à vérifier

- [ ] théorie R1;
- [ ] exercice guidé R1, si un commentaire peut être utilisé naturellement;
- [ ] Projet Web R1;
- [ ] aide-mémoire HTML/CSS;
- [ ] exemples de code R1;
- [ ] sommaire de couverture.

## 2. Rencontre 2 — Ajouter `width` et `height` aux images en HTML

**Statut : à faire**

À la rencontre 2, l'élément `<img>` est actuellement introduit principalement avec `src` et `alt`.

### Modification souhaitée

Présenter aussi les attributs HTML :

```html
<img src="images/chat.jpg" alt="Un chat" width="400" height="300">
```

L'objectif est que l'étudiant sache qu'une image peut avoir des dimensions indiquées directement dans son élément HTML.

Points à couvrir simplement :

- `width` indique la largeur;
- `height` indique la hauteur;
- les valeurs représentent des pixels lorsqu'elles sont écrites comme nombres dans ces attributs HTML;
- les proportions doivent être respectées pour éviter de déformer l'image;
- CSS permettra plus tard de contrôler plus largement la présentation et les dimensions des éléments.

Cette introduction doit rester simple et adaptée à R2.

### Propagation à vérifier

- [ ] théorie R2 — section sur `<img>`;
- [ ] exercice guidé R2;
- [ ] Projet Web R2;
- [ ] aide-mémoire HTML/CSS;
- [ ] exemples utilisant `<img>`;
- [ ] critères de compétence seulement si on décide explicitement que la maîtrise des dimensions fait partie de WEB-03;
- [ ] sommaire de couverture.

## 3. Rencontre 2 — Enseigner les liens vers une section de la même page

**Statut : à faire**

L'exercice Flexbox de la rencontre 5 utilise actuellement une ancre interne semblable à :

```html
<a href="#activites">Activités</a>
<h2 id="activites">Activités</h2>
```

Cette mécanique n'est pas encore enseignée explicitement avant son utilisation.

### Modification souhaitée

Ajouter les **liens vers une section de la même page** à la rencontre 2, avec les autres formes de navigation.

Présenter le principe :

```html
<a href="#contact">Aller à la section Contact</a>

<h2 id="contact">Contact</h2>
```

À expliquer :

- `id` identifie un élément dans la page;
- `href="#nom-id"` crée un lien vers cet élément;
- le `#` indique une cible interne à la page;
- la valeur de `href` doit correspondre à la valeur de `id`.

La notion peut être présentée comme une extension naturelle de `<a>` et `href`, sans en faire une nouvelle compétence séparée.

### Propagation à vérifier

- [ ] théorie R2 — section sur les liens/navigation;
- [ ] exercice guidé R2;
- [ ] Projet Web R2, si un usage naturel peut être proposé sans devenir une exigence artificielle;
- [ ] aide-mémoire HTML/CSS;
- [ ] exemples R2;
- [ ] exercice Flexbox R5, qui pourra alors conserver son ancre interne sans introduire une notion nouvelle;
- [ ] sommaire de couverture.

# Vérification particulière après modification

Une fois ces changements réalisés, refaire un passage ciblé sur les rencontres 1 à 5 afin de vérifier qu'aucune notion n'apparaît encore « par surprise » dans :

- les blocs de code;
- les checklists du Projet Web;
- les critères de validation;
- les exemples guidés;
- l'aide-mémoire;
- les contenus facultatifs qui pourraient être confondus avec des exigences.

Le document `SOMMAIRE_COUVERTURE_RENCONTRES.md` doit ensuite être mis à jour pour refléter l'état réel du cours, et non seulement les intentions de la refonte.
