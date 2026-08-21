# Cartographie HTML/CSS — version courante

**Mise à jour : 2026-08-21**  
**Portée : rencontres 1 à 5**

Ce document est la référence interne actuelle pour les compétences HTML/CSS. Il doit être lu avec :

- `EVALUATION.md`;
- `MODELE_EDITORIAL_CONTENU.md`;
- `PLAN_EPURATION_REPETITIONS_R1_R5.md`;
- la page étudiante `web/docs/03-projet-web/00-evaluation.md`.

Les anciens plans et revues restent utiles comme historique des décisions, mais la présente cartographie prévaut lorsqu'une exigence antérieure est différente.

## Principes

- Les rencontres 1 et 2 portent principalement sur l'environnement de travail et HTML.
- Les rencontres 3 à 5 portent principalement sur CSS.
- JavaScript commence à la rencontre 6.
- Le même Projet Web sert de support aux validations.
- Une validation porte sur la compréhension et la capacité à modifier le code, pas seulement sur la présence d'un résultat.
- Les minimums du projet garantissent un support assez riche; ils ne constituent pas une grille mécanique de points.
- La personnalisation est appréciée séparément et ne devient pas une neuvième compétence technique.

## Minimum du Projet Web à la fin de la rencontre 5

```text
mon-site/
├── index.html
├── css/
│   └── styles.css
├── images/
│   └── au moins deux images locales
└── pages/
    ├── sous-theme-1.html
    ├── sous-theme-2.html
    └── apropos.html
```

Le projet contient au minimum :

- un thème principal;
- deux pages de sujet distinctes, avec possibilité d'en ajouter davantage;
- une page À propos adaptée au type de site;
- quatre pages HTML complètes;
- une navigation permettant d'atteindre les quatre pages depuis chaque page;
- du contenu original et différent dans chaque page;
- au moins deux images locales;
- un attribut `alt` sur chaque élément `<img>`;
- une feuille CSS externe partagée;
- des sélecteurs d'élément et des classes réutilisables;
- au moins un `id` unique ciblé par une règle `#id`;
- une application comprise du modèle en boîte;
- une disposition simple avec `display: flex` et `gap`.

`background-image` est un enrichissement facultatif dans le Projet Web. La notion est montrée dans l'exercice de la rencontre 5 pour réinvestir les chemins écrits dans CSS, mais elle n'ajoute pas de critère indépendant.

## Page À propos

La page `pages/apropos.html` est obligatoire.

- Pour un site personnel ou informatif, elle peut présenter un prénom ou un pseudonyme, le domaine d'études, les intérêts, les passe-temps et la motivation liée au thème.
- Pour une entreprise ou une organisation fictive, elle peut présenter sa description, sa mission, ses services, son équipe et des coordonnées fictives.
- Aucun renseignement personnel sensible ne doit être demandé.

## Niveaux d'attente

### À maîtriser

La notion appartient au noyau du cours et peut être observée pendant une validation.

### Bonne pratique

La pratique est enseignée et encouragée, mais son absence seule ne fait pas échouer une compétence.

Exemples :

- utiliser `header`, `nav`, `main` et `footer` lorsqu'ils conviennent;
- garder une indentation lisible;
- valider le HTML avec W3C;
- nommer les classes et les identifiants selon leur rôle;
- rédiger un texte alternatif précis et concis.

### Pour aller plus loin

La notion est facultative et non évaluée dans le bloc HTML/CSS.

Exemples :

- `border-radius`;
- `box-sizing: border-box`;
- `flex-wrap`;
- Flexbox avancé;
- Grid;
- positionnement;
- transitions et animations.

## Règle concernant `alt`

Chaque élément `<img>` doit posséder un attribut `alt` :

```text
image informative → description utile
image décorative   → alt=""
```

La **présence** de l'attribut fait partie du minimum technique de WEB-03. La qualité exacte de sa rédaction est accompagnée comme bonne pratique d'accessibilité et ne devient pas un décompte mécanique de mots.

## Règle concernant `id`

L'identifiant devient une notion **À maîtriser** dans WEB-06.

L'étudiant doit pouvoir :

- ajouter un attribut `id` à un élément unique;
- respecter l'unicité de la valeur dans la page;
- relier `id="nom"` dans HTML au sélecteur `#nom` dans CSS;
- expliquer qu'une classe convient à un rôle réutilisable et qu'un identifiant convient à un élément précis;
- retrouver et modifier la règle qui cible cet identifiant.

Le Projet Web doit contenir au moins un `id` utilisé volontairement et une règle `#id` correspondante. Il n'est pas nécessaire de multiplier les identifiants.

Cette exigence prépare le bloc JavaScript et DOM : même si JavaScript peut sélectionner un élément de plusieurs façons, les identifiants fournissent un modèle clair pour retrouver un élément unique.

# Huit compétences techniques

| Code | Compétence | Notions principalement observées | Support minimal dans le projet |
| --- | --- | --- | --- |
| **WEB-01** | **Organiser un projet Web et utiliser les chemins** | dossiers, ressources, chemins relatifs, sous-dossiers, `../` | `index.html` à la racine, trois pages sous `pages/`, images sous `images/`, chemins fonctionnels |
| **WEB-02** | **Construire une page HTML correctement structurée** | document complet, `head`, `body`, éléments, attributs, imbrication | quatre documents HTML complets et lisibles |
| **WEB-03** | **Structurer et enrichir le contenu HTML** | titres, paragraphes, listes, images, choix d'éléments | contenu original sur quatre pages, au moins une liste utile, deux images et `alt` sur chaque `<img>` |
| **WEB-04** | **Relier plusieurs pages dans une navigation fonctionnelle** | `a`, `href`, navigation, chemins | quatre destinations accessibles depuis chaque page |
| **WEB-05** | **Associer correctement une feuille CSS externe** | fichier CSS, `link`, chemins vers CSS, syntaxe d'une règle | un seul `css/styles.css` chargé par les quatre pages |
| **WEB-06** | **Cibler les éléments avec des sélecteurs appropriés** | sélecteurs d'élément, classes, identifiants, réutilisation, unicité et cascade simple | au moins un sélecteur d'élément, deux classes utiles dont une réutilisée, ainsi qu'un `id` unique avec une règle `#id` correspondante |
| **WEB-07** | **Mettre en forme une interface avec CSS** | couleurs, arrière-plans, typographie, alignement, bordures | choix visuels cohérents et règles que l'étudiant peut retrouver et modifier |
| **WEB-08** | **Organiser l'espace et la disposition des éléments** | modèle en boîte, `padding`, `border`, `margin`, Flexbox simple | un bloc utilisant volontairement le modèle en boîte et un parent avec `display: flex` et `gap` |

## Ce qui valide réellement une compétence

La présence du support minimal crée une occasion d'observer la compétence. L'étudiant doit aussi être capable de :

- retrouver le fichier ou la règle concernée;
- expliquer son choix;
- prévoir l'effet d'une modification simple;
- effectuer une petite modification;
- diagnostiquer ou corriger une erreur comparable.

Une même interaction peut produire deux décisions différentes :

```text
WEB-05 — Feuille CSS externe     Validée
WEB-06 — Sélecteurs              À revoir
```

## Ce qui n'est pas attendu

Une validation ne devient pas un décompte automatique du type :

- deux couleurs;
- deux polices;
- deux `div`;
- un nombre précis de bordures;
- une liste de chaque type;
- plusieurs identifiants sans besoin réel;
- toutes les valeurs de `justify-content`;
- toutes les propriétés vues dans le cours.

Les minimums du projet portent sur une structure suffisamment riche et cohérente. La validation porte sur l'usage volontaire des outils.

# Personnalisation et appropriation du projet

Cette dimension transversale représente **20 % du bloc HTML/CSS**. Les huit compétences techniques représentent ensemble les 80 % restants.

Puisque le bloc HTML/CSS vaut 30 % de la note finale :

```text
compétences techniques → 24 % de la note finale
personnalisation        →  6 % de la note finale
```

La personnalisation :

- n'est pas nommée WEB-09;
- ne reçoit pas de badge;
- n'utilise pas les états `À faire`, `À revoir` et `Validée`;
- est appréciée à la fin du bloc sur 20 points;
- porte sur des manifestations observables, pas sur un nombre d'heures supposé.

## Critères de personnalisation — 20 points

| Critère | Points | Manifestations observées |
| --- | ---: | --- |
| Contenu original | 5 | textes personnels, informations pertinentes, images choisies pour le thème |
| Cohérence du thème | 5 | accueil, pages de sujet et page À propos complémentaires |
| Décisions personnelles | 5 | noms, organisation, classes, couleurs et présentation adaptés plutôt que copiés |
| Finition et initiative | 5 | relecture, cohérence, soin des détails et enrichissements pertinents |

La structure HTML de base et les syntaxes apprises dans le cours peuvent naturellement être réutilisées. Ce qui est apprécié est la transformation de ces outils en un projet personnel.

Un site simple peut obtenir une excellente appréciation. Les effets avancés, le talent graphique, les ressources financières ou le temps supposé ne doivent pas devenir des critères implicites.

# Quatre fenêtres de validation

| Validation | Période cible | Compétences | Priorité |
| --- | --- | --- | --- |
| **A — Structure HTML** | Rencontre 2 | WEB-01, WEB-02 | priorité opérationnelle de R2 |
| **B — Contenu et navigation** | Rencontre 2 et début de R3 | WEB-03, WEB-04 | peut commencer avec les étudiants prêts |
| **C — CSS de base** | Rencontres 3–4 | WEB-05, WEB-06 | commence sans attendre la fermeture de toutes les B |
| **D — Mise en forme et disposition** | Rencontres 4–5 | WEB-07, WEB-08 | finalisation du bloc HTML/CSS |

Ces périodes sont des fenêtres, pas des échéances imposant que tout le groupe termine simultanément.

# Progression des rencontres

| Rencontre | Cours | Exercice guidé | Projet Web | Validation |
| --- | --- | --- | --- | --- |
| **R1** | environnement et premiers HTML | page HTML commune | thème, deux sujets et page À propos planifiés; page d'accueil créée | aucune sommative |
| **R2** | images, chemins et navigation | mini-site de deux pages pour isoler `../` | création de deux pages de sujet, de `apropos.html`, des images et de la navigation à quatre pages | A prioritaire; B peut débuter |
| **R3** | feuille CSS externe; sélecteurs d'élément, de classe et d'identifiant | deux pages reliées à une feuille commune; classe réutilisée et `id` unique | identité visuelle des quatre pages, classes personnelles et un `id` ciblé avec `#id` | fin possible de B; début C |
| **R4** | modèle en boîte | cartes communes pour comparer les espaces | audit des vrais blocs des quatre pages | C; début D |
| **R5** | Flexbox simple et intégration | navigation, cartes et chemin CSS vers une image | un usage flex utile, personnalisation et passe finale de correction | D, reprises et appréciation de la personnalisation |

# Modèle éditorial associé

- **Cours** : explique le concept et le modèle mental.
- **Exercice guidé** : impose une structure commune pour pratiquer et provoquer des erreurs.
- **Projet Web** : demande des décisions personnelles, du contenu original et une adaptation.
- **Aide-mémoire** : fournit seulement la syntaxe et le dépannage rapide.

Lorsqu'une notion est déjà expliquée dans le cours, le Projet Web doit utiliser un rappel court et un lien plutôt que répéter l'explication complète.
