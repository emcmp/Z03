# Modifications transversales — Rencontres 1 à 5

Ce document sert de **liste de suivi des modifications transversales** pour les rencontres 1 à 5 de Z03.

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

**Statut : ✅ réalisé**

Le gabarit du Projet Web utilise un commentaire HTML, par exemple :

```html
<!-- Votre contenu ira ici -->
```

La syntaxe est maintenant expliquée avant son utilisation dans le Projet Web.

### Niveau retenu

- reconnaître la syntaxe `<!-- ... -->`;
- comprendre qu'un commentaire sert à laisser une note dans le code;
- comprendre qu'il n'est pas affiché comme contenu normal de la page.

Il ne s'agit pas d'une compétence ni d'une section importante du cours.

### Propagation vérifiée

- [x] théorie R1;
- [x] exercice guidé R1 — ajout d'un commentaire comme repère et observation du rendu;
- [x] Projet Web R1 — explication du commentaire déjà présent dans le gabarit;
- [x] aide-mémoire HTML/CSS;
- [x] exemples de code R1 — la syntaxe est montrée explicitement dans les blocs de code;
- [x] sommaire de couverture.

## 2. Rencontre 2 — Ajouter `width` et `height` aux images en HTML

**Statut : ✅ réalisé**

À la rencontre 2, l'élément `<img>` est maintenant présenté avec `src`, `alt`, `width` et `height`.

Exemple de référence :

```html
<img src="images/chat.jpg" alt="Un chat" width="400" height="300">
```

### Niveau retenu

- `width` indique la largeur;
- `height` indique la hauteur;
- les valeurs représentent des pixels lorsqu'elles sont écrites comme nombres dans ces attributs HTML;
- on n'écrit pas `px` dans les attributs HTML `width` et `height`;
- les proportions doivent être respectées pour éviter de déformer l'image;
- si une seule dimension est indiquée, le navigateur peut conserver l'autre à partir des proportions de l'image;
- CSS permettra plus tard de contrôler plus largement la présentation et les dimensions des éléments.

L'introduction reste volontairement simple et adaptée à R2.

### Propagation vérifiée

- [x] théorie R2 — section sur `<img>`;
- [x] exercice guidé R2 — expérimentation de `width` et `height` et observation d'une déformation possible;
- [x] Projet Web R2 — dimensions raisonnables proposées pour les images personnelles;
- [x] aide-mémoire HTML/CSS;
- [x] exemples utilisant `<img>` — l'exemple final R2 utilise une largeur simple cohérente;
- [x] critères de compétence — **aucun nouveau critère mécanique ajouté** à WEB-03; la notion reste un outil HTML à comprendre;
- [x] sommaire de couverture.

## 3. Rencontre 2 — Enseigner les liens vers une section de la même page

**Statut : ✅ réalisé**

L'exercice Flexbox de la rencontre 5 utilise une ancre interne semblable à :

```html
<a href="#activites">Activités</a>
<h2 id="activites">Activités</h2>
```

Cette mécanique est maintenant enseignée et pratiquée en rencontre 2 avant son réemploi en rencontre 5.

### Niveau retenu

```html
<a href="#contact">Aller à la section Contact</a>

<h2 id="contact">Contact</h2>
```

À comprendre :

- `id` identifie un élément dans la page;
- `href="#nom-id"` crée un lien vers cet élément;
- le `#` indique une cible interne à la page;
- la valeur de `href` doit correspondre à la valeur de `id`;
- un `id` doit être unique dans la page.

La notion est présentée comme une extension naturelle de `<a>` et `href`, sans créer une nouvelle compétence séparée.

### Propagation vérifiée

- [x] théorie R2 — section sur les liens/navigation;
- [x] exercice guidé R2 — création d'une section `id="details"` et d'un lien `href="#details"`;
- [x] Projet Web R2 — ajout d'un lien vers une section de la page d'accueil;
- [x] aide-mémoire HTML/CSS;
- [x] exemples R2 — le mini-site final réutilise une ancre interne;
- [x] exercice Flexbox R5 — l'ancre existante peut être conservée puisqu'elle est maintenant une notion déjà connue;
- [x] sommaire de couverture.

## 4. Préambule R1 — Expliquer comment afficher et actualiser une page Web

**Statut : ✅ réalisé**

Le préambule annonçait déjà le cycle VS Code → navigateur, mais ne montrait pas concrètement comment passer du fichier `index.html` à la page affichée.

### Niveau retenu

L'étudiant doit savoir faire le cycle de base sans dépendre d'une extension VS Code :

```text
modifier dans VS Code
→ Ctrl+S
→ ouvrir ou revenir au navigateur
→ Ctrl+R ou F5
→ observer le résultat
```

Le préambule explique maintenant :

- que VS Code sert à modifier les fichiers et que le navigateur sert à les afficher;
- comment faire **Révéler dans l'Explorateur de fichiers** depuis `index.html` dans VS Code;
- comment ouvrir ensuite `index.html` avec le navigateur par défaut;
- qu'une adresse locale peut commencer par `file:///`;
- que `Ctrl+S` enregistre le fichier;
- que `Ctrl+R` ou `F5` actualise la page;
- comment diagnostiquer le cas classique « j'ai modifié le code, mais rien ne change ».

### Propagation vérifiée

- [x] préambule R1 — procédure détaillée ajoutée à la fin de la prise en main de VS Code;
- [x] exercice guidé R1 — le cycle enregistrer → actualiser → observer était déjà pratiqué plusieurs fois;
- [x] Projet Web R1 — le test dans le navigateur est déjà demandé;
- [x] compétences / évaluation — aucune nouvelle compétence; il s'agit d'une habitude opérationnelle de fondation;
- [x] aide-mémoire — pas de nouvelle syntaxe HTML/CSS à ajouter; le préambule reste la référence pour la procédure;
- [x] sommaire de couverture.

## 5. Rencontre 5 — Enseigner une image d'arrière-plan avec `background-image`

**Statut : ✅ réalisé**

L'aide-mémoire possédait déjà une référence à `background-image`, mais la notion n'était pas enseignée dans une rencontre. Elle est maintenant intégrée à R5 comme réinvestissement de CSS et des chemins relatifs.

### Niveau retenu

Exemple principal :

```css
.banniere {
  background-image: url("../images/sentier.svg");
  background-size: cover;
  background-position: center;
  padding: 48px 20px;
}
```

À comprendre :

- `background-image` utilise une image comme fond visuel;
- le chemin dans `url(...)` est calculé à partir du **fichier CSS** qui contient la règle;
- `background-size: cover` couvre la zone;
- `background-position: center` centre l'image dans cette zone;
- `background-repeat: no-repeat` peut être rencontré au besoin, sans devenir une exigence mécanique;
- une image de contenu reste généralement un `<img>` avec `alt`, alors qu'une image de fond sert surtout à la présentation.

### Propagation vérifiée

- [x] théorie R5 — nouvelle section sur `background-image`, `url(...)`, `cover` et `center`;
- [x] exercice guidé R5 — téléchargement de `sentier.svg`, ajout d'une bannière et pratique du chemin `../images/sentier.svg` depuis `css/styles.css`;
- [x] Projet Web R5 — essai d'une image de fond dans le site personnel, avec possibilité de la conserver ou de la retirer selon le design;
- [x] compétences / évaluation — aucun nouveau critère mécanique ajouté à WEB-07; la notion est un outil de mise en forme à comprendre;
- [x] aide-mémoire HTML/CSS — une section `background-image` existait déjà et sert maintenant de référence après l'enseignement de R5;
- [x] exemples / aperçus — un aperçu `ExamplePeek` R5 montre une bannière avec image de fond;
- [x] sommaire de couverture.

# Vérification particulière après modification

Les cinq modifications ci-dessus ont été propagées dans les principaux points de contact R1–R5.

Le passage d'audit doit néanmoins rester une étape récurrente lorsque d'autres notions sont ajoutées, retirées ou déplacées. Il faut continuer à vérifier qu'aucune notion n'apparaît « par surprise » dans :

- les blocs de code;
- les checklists du Projet Web;
- les critères de validation;
- les exemples guidés;
- l'aide-mémoire;
- les contenus facultatifs qui pourraient être confondus avec des exigences.

Le document `SOMMAIRE_COUVERTURE_RENCONTRES.md` doit toujours refléter l'état réel du cours, et non seulement les intentions de la refonte.
