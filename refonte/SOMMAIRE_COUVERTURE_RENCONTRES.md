# Sommaire de couverture des rencontres — Z03

Ce document sert de **matrice d'audit pédagogique** pour la refonte de Z03.

Son objectif est de permettre de vérifier rapidement que :

- une notion demandée dans un exercice ou dans le Projet Web a bien été enseignée auparavant;
- une notion déclarée essentielle dans la théorie est effectivement pratiquée;
- une compétence évaluée repose uniquement sur des notions enseignées et pratiquées;
- les notions facultatives ne deviennent pas accidentellement des exigences;
- l'ordre des rencontres du site reste cohérent avec le plan de cours.

Il doit être mis à jour chaque fois qu'une notion importante est ajoutée, retirée ou déplacée.

Documents associés :

- [COMPETENCES_HTML_CSS.md](./COMPETENCES_HTML_CSS.md)
- [EVALUATION.md](./EVALUATION.md)
- [SUIVI_CONTENU.md](./SUIVI_CONTENU.md)
- [MIGRATION_LABORATOIRES_CODEX.md](./MIGRATION_LABORATOIRES_CODEX.md)

## Légende d'audit

- ✅ **Aligné** : la demande est soutenue par la théorie et la pratique précédente ou courante.
- 🟡 **À surveiller** : notion présente seulement comme bonne pratique, exemple, enrichissement ou élément peu pratiqué.
- 🔴 **Écart** : une activité utilise ou demande une notion qui n'est pas explicitement enseignée, ou la séquence du site ne correspond plus à la séquence décidée.
- ⏳ **Provisoire** : la matière ou l'activité n'est pas encore reconstruite dans la nouvelle version du cours.

> **Règle de lecture :** la colonne « Théorie » décrit ce qui apparaît réellement dans la page de cours actuelle. La colonne « Exercice guidé / pratique » décrit ce que l'étudiant pratique effectivement. La colonne « Projet Web / activité » décrit ce qui lui est demandé dans sa production personnelle.

# Vue d'ensemble — rencontres 1 à 15

| Rencontre | Théorie actuelle | Exercice guidé / pratique actuelle | Projet Web / activité actuelle | Compétences / évaluation | Audit |
|---|---|---|---|---|---|
| **R1 — Environnement et HTML** | OneDrive, dossiers/fichiers, extensions, ZIP, VS Code, navigateur; éléments HTML, attributs, imbrication, structure complète, titres, paragraphes, listes, emphase | Première page complète; cycle modifier/enregistrer/actualiser; erreurs d'imbrication; validation W3C | Création de `mon-site/index.html`, structure complète, contenu HTML de base, test navigateur, W3C | Prépare 🗂️ WEB-01 et 🧱 WEB-02 | ✅ avec un petit écart sur les commentaires HTML, détaillé plus bas |
| **R2 — HTML, fichiers et navigation** | Arborescence, images locales, `src`, `alt`, chemins relatifs, `../`, liens, navigation, éléments sémantiques simples, diagnostic | Site de deux pages avec `images/`, `pages/`, image utilisée depuis deux niveaux, liens aller-retour, erreur volontaire de chemin | Ajout d'une page secondaire, image locale, navigation bidirectionnelle, chemins relatifs | 🗂️ WEB-01, 🧱 WEB-02, ✍️ WEB-03, 🔗 WEB-04 | ✅ |
| **R3 — Introduction à CSS** | Rôle HTML/CSS; CSS intraligne/interne/externe; règle CSS; feuille externe; sélecteurs élément/classe/id; cascade simple; couleurs, typographie, alignement, bordure | Deux pages reliées à une feuille CSS; sélecteurs d'élément; classe réutilisée; cascade simple; diagnostic d'un mauvais `href` CSS | Ajout de `css/styles.css`, feuille partagée, styles généraux, classe, premières décisions visuelles | 🔌 WEB-05, 🎯 WEB-06; reprises ✍️ WEB-03 / 🔗 WEB-04 | ✅; quelques enrichissements facultatifs non pratiqués dans le guidé |
| **R4 — Modèle en boîte** | Contenu → `padding` → `border` → `margin`; une/deux valeurs; dimensions simples; `width`, `max-width`; conteneurs; `<div>` | Cartes; `padding`, `margin`, `border`; forme à deux valeurs; `width`; diagnostic | Ajustement des espacements du vrai site; classes réutilisées; `<div>` au besoin; `max-width` au besoin | 🎨 WEB-07, 📐 WEB-08; reprises 🔌 WEB-05 / 🎯 WEB-06 | ✅; enrichissements facultatifs à surveiller |
| **R5 — Flexbox simple et intégration** | Parent/enfants directs; `display: flex`; `gap`; `justify-content`; `align-items`; navigation et cartes; intégration HTML/CSS | Navigation flex; cartes flex; `gap`; `justify-content`; `align-items`; erreur volontaire sur le mauvais parent | Flexbox utile dans le site, surtout navigation; intégration et correction de tout le bloc HTML/CSS | 🎨 WEB-07, 📐 WEB-08; reprises de tous les badges | 🔴 le guidé utilise un lien d'ancrage interne non enseigné explicitement |
| **R6 — Variables et JavaScript** | Page actuelle provisoire : JS, variables, affectation, nombres, chaînes, opérateurs, concaténation/interpolation, console | Aucun nouvel exercice guidé Z03 finalisé; ancien labo 2 à migrer | Aucun Projet Web R6 actuellement | Mini-quiz futur préparé par R6–R7; TP2/TP3 plus tard | ⏳ noyau cohérent, activité à reconstruire |
| **R7 — Séquence à réaligner** | **Site actuel : conditions et logique** | Migration actuelle prévue depuis anciens labos 5 et 6 | Aucun Projet Web R7 | — | 🔴 ne correspond plus au plan de cours décidé : R7 doit devenir DOM + fonctions simples + console/`alert()` |
| **R8 — Séquence à réaligner** | **Site actuel : fonctions** | Migration actuelle prévue depuis portions des anciens labos 3 et 13 | Aucun Projet Web R8 | **Mini-quiz 10 % au début de R8** | 🔴 le plan de cours prévoit ensuite portée locale/globale + événements + DOM/fonctions; page actuelle à reconstruire |
| **R9 — Séquence à réaligner** | **Site actuel : DOM de base** (`querySelector`, `textContent`) | Migration actuelle prévue depuis ancien labo 3 / 14 | Aucun Projet Web R9 | — | 🔴 le plan de cours prévoit les booléens, comparaisons, `if`/`else` et opérateurs logiques à R9 |
| **R10 — Séquence à réaligner** | **Site actuel : événements et classes CSS** | Migration actuelle prévue depuis ancien labo 4 / 14 | Aucun Projet Web R10 | TP2 en développement | 🔴 le plan de cours prévoit les boucles à R10 |
| **R11 — Séquence à réaligner** | **Site actuel : boucles** | Ancien labo 11 à simplifier | Aucun Projet Web R11 | TP2 / pratique | 🔴 le plan de cours prévoit tableaux + boucles à R11 |
| **R12 — Séquence à réaligner** | **Site actuel : tableaux** | Ancien labo 12 à adapter | Aucun Projet Web R12 | TP3 / intégration | 🔴 le plan de cours prévoit fonctions avec paramètres / retours au besoin / intégration à R12 |
| **R13 — Plusieurs éléments du DOM / intégration** | `querySelectorAll`, parcours de plusieurs éléments, intégration tableaux/boucles/fonctions/DOM | Ancien labo 15 à réorganiser | Aucun Projet Web R13 actuellement | TP3 / intégration | 🟡 direction compatible avec la cible, détail à confirmer après réalignement R7–R12 |
| **R14 — Buffer** | Aucune nouvelle notion essentielle | Reprises, pratique, consolidation, révision | Travail incomplet au besoin | Reprises / préparation finale | ✅ |
| **R15 — Évaluation finale** | Aucune nouvelle matière | Évaluation sommative finale | — | **Examen final 30 %** selon le plan de cours | 🟡 page actuelle du site dit encore que la pondération est à déterminer |

# Audit détaillé — R1 à R5

Les rencontres 1 à 5 sont actuellement les plus avancées. Elles sont donc inventoriées à un niveau suffisamment précis pour vérifier les balises, attributs, propriétés et mécanismes réellement utilisés.

## Rencontre 1 — Environnement et premiers pas en HTML

Sources :

- [Préambule — Environnement de travail](../web/docs/01-cours/01-rencontre1-environnement.md)
- [Cours — Premiers pas en HTML](../web/docs/01-cours/01-rencontre1.md)
- [Exercice guidé — Première page](../web/docs/01-cours/01-rencontre1-exercice-guide.md)
- [Projet Web — Étape 1](../web/docs/03-projet-web/01-rencontre1.md)

| Notion / syntaxe | Théorie | Exercice guidé | Projet Web | Compétence liée | Observation |
|---|---|---|---|---|---|
| OneDrive, dossier `Z03`, arborescence, racine | ✅ | ✅ création du dossier d'exercice | ✅ création du dossier `mon-site` | WEB-01 | Aligné |
| Extensions `.html`, `.css`, `.js`, `.jpg`, `.png`, `.txt`, `.pdf`, `.zip` | ✅ préambule | `.html` utilisé | `.html` utilisé | WEB-01 | Les extensions CSS/JS sont annoncées avant leur utilisation, sans être exigées |
| ZIP : extraire avant de travailler | ✅ préambule | — | — | Fondation | Théorie opérationnelle, non évaluée séparément |
| Ouvrir un **dossier complet** dans VS Code | ✅ | ✅ | ✅ | WEB-01 | Aligné |
| Cycle modifier → enregistrer → actualiser → observer | ✅ | ✅ répété explicitement | ✅ | Fondation | Aligné |
| `<!doctype html>` | ✅ | ✅ | ✅ | WEB-02 | Aligné |
| `<html lang="fr">` | ✅ | ✅ | ✅ | WEB-02 | Aligné |
| `<head>` / `<body>` | ✅ | ✅ | ✅ | WEB-02 | Aligné |
| `<meta charset="UTF-8">` | ✅ | ✅ | ✅ | WEB-02 | Aligné |
| `<meta name="viewport" ...>` | ✅ | ✅ | ✅ | WEB-02 | Aligné |
| `<title>` | ✅ | ✅ | ✅ | WEB-02 | Aligné |
| Attributs — idée générale | ✅ avec exemple `class` | utilisés dans structure | utilisés dans structure | WEB-02 | `class` est seulement annoncé; son usage réel arrive à R3 |
| `<h1>` à `<h6>` | ✅ théorie des six niveaux | ✅ surtout `h1`, `h2` | ✅ `h1` + titres de sections | WEB-03 | Pas nécessaire de pratiquer les six niveaux |
| `<p>` | ✅ | ✅ | ✅ | WEB-03 | Aligné |
| `<ul>` / `<li>` | ✅ | ✅ | ✅ liste demandée lorsque pertinente | WEB-03 | Aligné |
| `<ol>` | ✅ | — | non exigé | WEB-03 | Théorie seulement; acceptable |
| `<strong>` / `<em>` | ✅ | ✅ | facultatif selon le sens | WEB-03 | Aligné |
| `<br>` / `<hr>` | ✅ comme éléments sans fermeture | — | non exigés | — | Théorie de reconnaissance seulement |
| Imbrication et balises croisées | ✅ | ✅ erreurs à corriger | ✅ checklist | WEB-02 | Aligné |
| Indentation | Bonne pratique | ✅ utilisée comme outil de diagnostic | attendue comme lisibilité, pas critère mécanique | WEB-02 | Aligné avec le statut de bonne pratique |
| Validation W3C | pas développée dans la page théorique R1 | ✅ enseignée explicitement | ✅ demandée comme précontrôle | WEB-02 | 🟡 couverte par l'exercice guidé avant le Projet Web, donc pas d'exigence « surprise » |
| Commentaire HTML `<!-- ... -->` | **non enseigné dans R1** | — | apparaît dans le gabarit de structure | — | 🔴 petit écart : soit retirer le commentaire du gabarit, soit expliquer en une phrase qu'il s'agit d'un commentaire |

### Conclusion R1

Le noyau évalué WEB-01 / WEB-02 est couvert. Le seul élément réellement utilisé avant explication est le **commentaire HTML dans le gabarit du Projet Web**, sans conséquence sur la validation, mais facile à nettoyer.

## Rencontre 2 — Images, chemins et navigation

Sources :

- [Cours — HTML, fichiers et navigation](../web/docs/01-cours/02-rencontre2.md)
- [Exercice guidé — Images, chemins et navigation](../web/docs/01-cours/02-rencontre2-exercice-guide.md)
- [Projet Web — Étape 2](../web/docs/03-projet-web/02-rencontre2.md)

| Notion / syntaxe | Théorie | Exercice guidé | Projet Web | Compétence liée | Observation |
|---|---|---|---|---|---|
| Dossiers `images/` et `pages/` | ✅ | ✅ | ✅ | WEB-01 | Aligné |
| `<img>` | ✅ | ✅ | ✅ | WEB-03 | Aligné |
| `src` | ✅ | ✅ depuis racine et sous-dossier | ✅ | WEB-01 / WEB-03 | Aligné |
| `alt` | ✅ bonne pratique fortement recommandée | ✅ utilisé | ✅ demandé dans les exemples | WEB-03 | Ne pas en faire seul un motif d'échec, conformément à la cartographie |
| Chemin vers fichier du même dossier | ✅ | ✅ | ✅ dans navigation secondaire | WEB-01 / WEB-04 | Aligné |
| Chemin vers sous-dossier | ✅ | ✅ | ✅ | WEB-01 / WEB-04 | Aligné |
| `../` | ✅ | ✅ avec erreur volontaire | ✅ | WEB-01 / WEB-04 | Très bien renforcé |
| `<a href="...">` | ✅ | ✅ | ✅ | WEB-04 | Aligné |
| Lien externe avec URL complète | ✅ | — | seulement enrichissement facultatif | WEB-04 | Théorie suffisante puisque non obligatoire |
| `<nav>` | ✅ comme bonne pratique | ✅ | ✅ utilisé | WEB-04 | Ne constitue pas une compétence autonome |
| `<main>` | ✅ comme bonne pratique | — | non exigé explicitement | WEB-03 | Acceptable |
| `<header>` / `<footer>` | mentionnés comme bonnes pratiques | — | non exigés | WEB-03 | Acceptable |
| Document HTML complet pour chaque page | ✅ | ✅ deux pages complètes | ✅ | WEB-02 | Aligné |
| Diagnostic de chemin incorrect | ✅ méthode en étapes | ✅ erreur volontaire | ✅ checklist et validation possible | WEB-01 / WEB-04 | Très bien aligné |
| Sensibilité aux majuscules des noms | ✅ | — | ✅ avertissement | WEB-01 | Enseigné avant d'être rappelé |
| W3C + test réel des chemins | ✅ distinction explicitée | ✅ | ✅ précontrôle | WEB-02 / WEB-04 | Aligné |

### Conclusion R2

La rencontre 2 est fortement cohérente : les notions évaluées sont enseignées, pratiquées puis transférées dans le Projet Web.

## Rencontre 3 — Introduction à CSS

Sources :

- [Cours — Introduction à CSS](../web/docs/01-cours/03-rencontre3.md)
- [Exercice guidé — Première feuille CSS](../web/docs/01-cours/03-rencontre3-exercice-guide.md)
- [Projet Web — Étape 3](../web/docs/03-projet-web/03-rencontre3.md)

| Notion / syntaxe | Théorie | Exercice guidé | Projet Web | Compétence liée | Observation |
|---|---|---|---|---|---|
| Rôle HTML vs CSS | ✅ | implicitement renforcé | ✅ séparation `styles.css` | WEB-05 | Aligné |
| CSS intraligne `style="..."` | ✅ reconnaissance / comparaison | — | non demandé | — | Théorie de comparaison uniquement |
| CSS interne `<style>` | ✅ reconnaissance / comparaison | — | non demandé | — | Théorie de comparaison uniquement |
| CSS externe | ✅ méthode privilégiée | ✅ | ✅ obligatoire | WEB-05 | Aligné |
| Syntaxe `sélecteur { propriété: valeur; }` | ✅ | ✅ | ✅ | WEB-06 / WEB-07 | Aligné |
| `<link rel="stylesheet" href="...">` | ✅ | ✅ depuis deux niveaux | ✅ toutes les pages | WEB-05 | Très bien aligné |
| Chemins `css/styles.css` et `../css/styles.css` | ✅ | ✅ | ✅ | WEB-05 / WEB-01 | Réinvestissement direct de R2 |
| Sélecteur d'élément (`body`, `h1`, `p`) | ✅ | ✅ | ✅ | WEB-06 | Aligné |
| `class="..."` / `.classe` | ✅ | ✅ réutilisée | ✅ classe intentionnelle | WEB-06 | Aligné |
| `id="..."` / `#id` | ✅ reconnaissance seulement | — | non exigé | WEB-06 | 🟡 présent en théorie, correctement non requis |
| Cascade simple élément vs classe | ✅ | ✅ conflit observé | peut être questionnée lors validation | WEB-06 | Aligné |
| `color` | ✅ | ✅ | ✅ possible | WEB-07 | Aligné |
| `background-color` | ✅ | ✅ | ✅ possible | WEB-07 | Aligné |
| `font-family` | ✅ | ✅ | ✅ possible | WEB-07 | Aligné |
| `font-size` | ✅ | — | ✅ disponible parmi choix | WEB-07 | 🟡 enseigné mais peu pratiqué dans le guidé; acceptable si non obligatoire isolément |
| `font-weight` | ✅ | ✅ | ✅ dans exemple classe | WEB-07 | Aligné |
| `font-style` | ✅ | — | disponible parmi choix | WEB-07 | 🟡 non renforcé dans le guidé; ne pas en faire une exigence isolée |
| `text-align` | ✅ | ✅ | ✅ possible | WEB-07 | Aligné |
| `border` | ✅ première introduction | ✅ | ✅ possible | WEB-07 puis R4 | Aligné; approfondi R4 |
| `text-decoration` | seulement « pour aller plus loin » côté projet | — | facultatif | — | Correctement non évalué |

### Conclusion R3

Les compétences WEB-05 et WEB-06 sont solidement couvertes. Pour WEB-07, l'évaluation doit continuer à porter sur une **mise en forme simple et comprise**, et non exiger chacune des propriétés du catalogue théorique.

## Rencontre 4 — Modèle en boîte et espacements

Sources :

- [Cours — Modèle en boîte et espacements](../web/docs/01-cours/04-rencontre4.md)
- [Exercice guidé — Comprendre le modèle en boîte](../web/docs/01-cours/04-rencontre4-exercice-guide.md)
- [Projet Web — Étape 4](../web/docs/03-projet-web/04-rencontre4.md)

| Notion / syntaxe | Théorie | Exercice guidé | Projet Web | Compétence liée | Observation |
|---|---|---|---|---|---|
| Modèle `contenu → padding → border → margin` | ✅ | ✅ | ✅ checklist et diagnostic | WEB-07 / WEB-08 | Très bien aligné |
| `padding` | ✅ | ✅ plusieurs valeurs testées | ✅ usage motivé | WEB-08 | Aligné |
| `margin` | ✅ | ✅ plusieurs valeurs testées | ✅ usage motivé | WEB-08 | Aligné |
| `border` | ✅ réinvesti de R3 | ✅ | ✅ | WEB-07 / WEB-08 | Aligné |
| Forme à une valeur | ✅ | ✅ | ✅ | WEB-08 | Aligné |
| Forme à deux valeurs | ✅ | ✅ | ✅ exemple `20px 0` | WEB-08 | Aligné |
| `width` | ✅ comme dimension simple | ✅ expérimentation temporaire | non exigé | WEB-08 | Correctement non obligatoire |
| `max-width` | ✅ | — | proposé si besoin | WEB-08 | 🟡 théorie avant usage; non obligatoire |
| `<section>` comme conteneur sémantique | déjà rencontré, réutilisé | ✅ | ✅ | — | Aligné |
| `<div>` | ✅ introduit comme conteneur général | — dans guidé principal | ✅ au besoin | — / WEB-08 indirect | 🟡 usage facultatif; ne pas évaluer l'usage du `div` lui-même |
| Réutilisation d'une classe | ✅ | ✅ `.carte` | ✅ demandée lorsque pertinente | WEB-06 / WEB-07 | Aligné |
| `box-sizing: border-box` | facultatif | facultatif | facultatif | — | Correctement exclu du noyau |
| `border-radius` | — dans noyau | — | pour aller plus loin | — | Correctement non évalué |
| Positionnement / `inline-block` / animations | explicitement exclus | — | — | — | Très clair |

### Conclusion R4

La matière du Projet Web est bien soutenue. Les dimensions (`width`, `max-width`) et `<div>` doivent rester des outils contextuels, pas des exigences mécaniques de WEB-08.

## Rencontre 5 — Flexbox simple et intégration

Sources :

- [Cours — Flexbox simple et intégration](../web/docs/01-cours/05-rencontre5.md)
- [Exercice guidé — Flexbox simple](../web/docs/01-cours/05-rencontre5-exercice-guide.md)
- [Projet Web — Étape 5](../web/docs/03-projet-web/05-rencontre5.md)

| Notion / syntaxe | Théorie | Exercice guidé | Projet Web | Compétence liée | Observation |
|---|---|---|---|---|---|
| Parent flex / enfants directs | ✅ central | ✅ navigation + cartes | ✅ navigation | WEB-08 | Très bien aligné |
| `display: flex` | ✅ | ✅ deux contextes | ✅ au moins un contexte utile | WEB-08 | Aligné |
| `gap` | ✅ | ✅ | ✅ | WEB-08 | Aligné |
| `justify-content` | ✅ quelques valeurs | ✅ `center`, `flex-start`, `space-between` | facultatif si utile | WEB-08 | Aligné; ne pas exiger toutes les valeurs |
| `align-items` | ✅ rôle général | ✅ observation | facultatif | WEB-08 | 🟡 correctement secondaire |
| Navigation horizontale | ✅ exemple central | ✅ | ✅ usage recommandé | WEB-08 | Aligné |
| Flexbox sur groupe de cartes | ✅ deuxième exemple | ✅ | facultatif | WEB-08 | Aligné |
| Modèle en boîte + Flexbox | ✅ | ✅ | ✅ réinvesti | WEB-07 / WEB-08 | Aligné |
| Mauvais parent flex — diagnostic | ✅ | ✅ erreur volontaire | peut être demandé en validation | WEB-08 | Très bon alignement |
| `flex-direction`, `flex-grow`, etc. | explicitement hors noyau | — | — | — | Correctement exclus |
| `flex-wrap` | pour aller plus loin | pour aller plus loin | pour aller plus loin | — | Correctement non évalué |
| Ancre interne `href="#activites"` + `id="activites"` | **non enseignée dans le cours R5 ni auparavant comme mécanisme de navigation interne** | ✅ utilisée dans le code de départ | non requise dans Projet Web | — | 🔴 éviter cette syntaxe dans le guidé ou l'expliquer explicitement; elle n'apporte rien à l'objectif Flexbox |

### Conclusion R5

Le noyau WEB-08 est très bien couvert. Le **lien d'ancrage interne** est l'écart principal à corriger pour que l'exercice guidé n'utilise aucun mécanisme Web inexpliqué.

# Audit de la séquence R6 à R15

À ce stade, il serait trompeur de produire le même niveau de détail pour R6–R13 : les pages actuelles sont principalement des **squelettes de migration**, et les exercices guidés / nouveaux laboratoires ne sont pas encore stabilisés.

Le contrôle prioritaire devient donc la **séquence elle-même**.

## Séquence décidée dans le plan de cours

La séquence à utiliser pour la suite de la refonte est :

| Rencontre | Cible à construire |
|---|---|
| **R6** | Variables, expressions arithmétiques, opérateurs, chaînes de caractères |
| **R7** | DOM, fonctions simples, console, `alert()` |
| **R8** | **Mini-quiz 10 %**, puis variables locales/globales, événements, DOM et fonctions |
| **R9** | Booléens, comparaisons, `if`, `else`, `else if`, opérateurs logiques |
| **R10** | Boucles et applications Web |
| **R11** | Tableaux et boucles |
| **R12** | Fonctions avec paramètres, valeurs de retour au besoin, intégration |
| **R13** | Plusieurs éléments du DOM, `querySelectorAll`, intégration JavaScript |
| **R14** | Rattrapage, reprises, pratique et révision; aucune nouvelle notion essentielle |
| **R15** | Évaluation sommative finale — **30 %** |

## Écarts avec les pages actuellement publiées

| Rencontre | Page actuelle | Cible | Action |
|---|---|---|---|
| R6 | Variables | Variables | ✅ conserver le noyau, reconstruire pratique/labo |
| R7 | Conditions | DOM + fonctions simples + console/alert | 🔴 reconstruire |
| R8 | Fonctions | Quiz + portée + événements + DOM/fonctions | 🔴 reconstruire |
| R9 | DOM | Conditions et logique | 🔴 déplacer/fusionner le contenu conditions ici |
| R10 | Événements/classes | Boucles | 🔴 reconstruire / déplacer événements vers R8 |
| R11 | Boucles | Tableaux + boucles | 🔴 déplacer et intégrer |
| R12 | Tableaux | Fonctions paramètres/retour/intégration | 🔴 reconstruire |
| R13 | Plusieurs éléments DOM | Plusieurs éléments DOM / intégration | 🟡 conceptuellement proche, mais dépend des changements précédents |
| R14 | Buffer | Buffer | ✅ |
| R15 | Examen final | Examen final 30 % | 🟡 mettre à jour la pondération et retirer « à déterminer » |

# Audit des évaluations

## HTML/CSS — 30 %

Les huit compétences sont documentées dans [COMPETENCES_HTML_CSS.md](./COMPETENCES_HTML_CSS.md) et présentées aux étudiants dans [Projet Web — Évaluation](../web/docs/03-projet-web/00-evaluation.md).

| Validation | Période | Compétences | Principales notions nécessaires | Couverture actuelle |
|---|---|---|---|---|
| **A** | R2 | WEB-01, WEB-02 | fichiers/dossiers, chemins, structure complète, imbrication | ✅ R1–R2 |
| **B** | R2 → début R3 | WEB-03, WEB-04 | titres, paragraphes, listes, images, liens, navigation | ✅ R1–R2 |
| **C** | R3–R4 | WEB-05, WEB-06 | feuille CSS externe, chemins CSS, sélecteurs, classes | ✅ R3 |
| **D** | R4–R5 | WEB-07, WEB-08 | mise en forme simple, boîte, espacements, Flexbox simple | ✅ R3–R5 |

### Règle d'évaluation à conserver

Une compétence ne doit **pas** être transformée en liste exhaustive où chaque balise ou chaque propriété CSS vaut un point.

L'audit doit plutôt vérifier que tout ce que l'enseignant peut raisonnablement demander lors d'une validation a été :

1. présenté;
2. pratiqué;
3. réinvesti dans un contexte comparable.

## Mini-quiz R8 — 10 % supervisé

Le quiz doit porter sur la matière **enseignée avant son début**, donc principalement R6 et R7.

La refonte de R7 doit être terminée avant de définir précisément le quiz.

Aucune notion introduite **après le quiz pendant R8** ne doit apparaître dans celui-ci.

## Examen final R15 — 30 % supervisé

L'examen final ne doit utiliser que des notions marquées comme **noyau essentiel** et effectivement enseignées d'ici R13.

Les encadrés « Pour aller plus loin » sont explicitement exclus de l'examen.

# Registre des écarts à corriger

| Priorité | Rencontre | Écart | Correction proposée | État |
|---|---|---|---|---|
| haute | R7–R12 | ordre actuel du site incompatible avec le nouveau plan de cours | réaligner les pages, sidebars et plan de migration des labos | à faire |
| haute | R15 | page indique encore que la pondération finale reste à concevoir | inscrire examen final 30 % | à faire |
| moyenne | R5 | `href="#activites"` / `id="activites"` dans le guidé sans enseignement des ancres internes | remplacer par des liens simples `href="#"` ou expliquer explicitement le mécanisme | à faire |
| basse | R1 | commentaire HTML présent dans le gabarit du Projet Web avant explication | retirer `<!-- ... -->` ou ajouter une phrase d'explication | à faire |

# Processus de validation d'une rencontre

Avant de considérer une rencontre comme stabilisée :

- [ ] inventorier les notions de la page de théorie;
- [ ] inventorier les syntaxes, balises, propriétés, méthodes et concepts employés;
- [ ] vérifier que l'exercice guidé n'utilise aucune notion obligatoire inexpliquée;
- [ ] vérifier que le Projet Web / laboratoire ne demande aucune notion obligatoire inexpliquée;
- [ ] vérifier que les compétences ou évaluations associées utilisent uniquement ce noyau;
- [ ] distinguer explicitement les notions essentielles et « Pour aller plus loin »;
- [ ] corriger les écarts ou les inscrire dans le registre ci-dessus;
- [ ] lancer le build du site après les modifications de contenu.

Quand ces points sont satisfaits, la rencontre peut passer au statut **✅ Alignée** dans ce document.
