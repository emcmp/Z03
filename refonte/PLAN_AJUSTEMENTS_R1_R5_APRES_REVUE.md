# Plan d'ajustements — rencontres 1 à 5 après revue

**Date : 2026-08-19**  
**Statut : actif — AJ-01 à AJ-05 terminés; AJ-06 POC implémenté, validation technique et visuelle en attente**  
**Branche de travail : `agent/ajustements-r1-r5`**

Ce plan transforme les conclusions de `REVUE_TRANSVERSALE_R1_R5.md` et les décisions de l'enseignant en tâches d'ajustement bornées. Il complète `PLAN_IMPLEMENTATION_RENCONTRES_1_A_5.md` et devient le point de reprise opérationnel pour la phase **REV-03 — Ajustements de poids**.

Aucune page sous `web/` ne devait être modifiée avant que les décisions ci-dessous soient documentées et que la documentation d'évaluation soit cohérente. Ce préalable est maintenant satisfait par AJ-01.

## Décisions pédagogiques approuvées

### Rencontre 1

- Conserver le contenu actuel.
- Ne pas transformer tout le préambule Environnement en exposé magistral : plusieurs sections servent aussi de référence et de soutien aux démonstrations.
- Protéger le temps consacré à la première page HTML, au cycle VS Code → enregistrer → navigateur → actualiser et au démarrage du Projet Web.

### Rencontre 2 — allègement du Projet Web

Le minimum obligatoire du Projet Web doit devenir :

```text
mon-site/
├── index.html
├── images/
│   └── ...
└── pages/
    └── sujet.html
```

Une seule page secondaire obligatoire suffit pour pratiquer :

- entrer dans `pages/`;
- remonter avec `../`;
- charger une image depuis la racine et depuis un sous-dossier;
- construire une navigation aller-retour;
- préparer le chemin `../css/styles.css` utilisé à la rencontre 3.

Une deuxième page secondaire devient un enrichissement naturel **Pour aller plus loin — non évalué**.

La réduction porte sur la quantité de production, pas sur les compétences WEB-01 à WEB-04.

### Calendrier opérationnel des validations HTML/CSS

Les huit compétences et les quatre validations sont conservées. Le changement est une clarification opérationnelle afin d'éviter que la rencontre 2 devienne une suite de mini-entrevues.

- **Validation A — WEB-01 / WEB-02 : priorité de la rencontre 2.**
- **Validation B — WEB-03 / WEB-04 : peut commencer à la rencontre 2 et se poursuivre au début de la rencontre 3.** Elle n'a pas à être terminée pour tout le groupe avant la fin de R2.
- **Validation C — WEB-05 / WEB-06 : rencontres 3–4.** Elle commence avec les étudiants prêts sans attendre que toutes les Validation B du groupe soient terminées.
- **Validation D — WEB-07 / WEB-08 : rencontres 4–5.**
- Les reprises demeurent possibles plus tard sans retarder la progression du groupe vers JavaScript à R6.

Les périodes de validation sont des **fenêtres de disponibilité et de priorité**, pas des échéances rigides imposant que tous les étudiants passent au même moment.

### Rencontre 3 — montrer les trois façons d'ajouter CSS

R3 doit montrer brièvement, avec le même petit besoin visuel, les trois formes qu'un étudiant peut rencontrer :

1. **CSS intraligne** avec `style="..."`;
2. **CSS interne** avec `<style>` dans `<head>`;
3. **CSS externe** avec `styles.css` et `<link>`.

Intention pédagogique :

- l'étudiant doit savoir que les trois formes existent et pouvoir les reconnaître;
- l'intraligne et l'interne servent de **contexte**, pas de méthode recommandée pour le Projet Web;
- la feuille externe demeure la méthode à maîtriser pour WEB-05;
- la transition vers le fichier externe doit être justifiée concrètement par la maintenance : répétition, cohérence entre plusieurs pages et modification centralisée;
- éviter un long chapitre théorique sur les avantages/inconvénients : faire comprendre le problème avec un exemple simple qui passe d'une page à plusieurs pages.

Cette décision est cohérente avec la cartographie existante de `COMPETENCES_HTML_CSS.md`, qui classe déjà CSS intraligne/interne comme contexte à reconnaître et la feuille externe comme notion à maîtriser.

### Rendus visuels du CSS

Principe désormais obligatoire pour les exemples illustrés :

> Lorsqu'une image prétend montrer le résultat d'un snippet HTML/CSS précis, le code et le rendu doivent former une paire vérifiée.

Un ancien screenshot ne doit pas être conservé simplement parce qu'il illustre « à peu près » la même propriété si ses couleurs, bordures, textes ou structure ne correspondent plus au code canonique.

Les rendus visuels doivent surtout aider aux moments où un débutant n'a pas encore d'image mentale du résultat :

- premier changement de couleur;
- différence entre HTML non stylé et CSS appliqué;
- classe de mise en valeur;
- combinaison `color` / `background-color` / `border`;
- exemple complet de R3;
- modèle en boîte lorsque le schéma ou le rendu apporte une information réelle;
- Flexbox seulement si un rendu aide davantage qu'un petit exemple exécuté en classe.

Éviter de transformer les pages en galeries ou de créer une capture après chaque déclaration CSS.

### Rencontre 4

- Conserver essentiellement la rencontre telle quelle.
- Maintenir le coeur `contenu → padding → border → margin`.
- Les rendus existants doivent seulement être vérifiés contre le code réellement montré.

### Rencontre 5

- Conserver la navigation comme premier cas Flexbox.
- Le noyau pratique est `display: flex` + `gap` + identification parent/enfants directs.
- `justify-content`, `align-items` et le groupe de cartes restent des expérimentations utiles, sans devoir devenir un catalogue à mémoriser.
- Corriger l'exemple actuel qui contient un lien `href="#contact"` sans cible correspondante; ne pas introduire les ancres HTML par accident dans un exercice consacré à Flexbox.

# Tâches d'ajustement

## AJ-01 — Documenter les décisions et harmoniser l'évaluation

**État : Terminé**

Documentation harmonisée dans ce lot :

- le présent plan;
- `EVALUATION.md`;
- `COMPETENCES_HTML_CSS.md`;
- `REVUE_TRANSVERSALE_R1_R5.md`.

Résultat :

- A est explicitement prioritaire en R2;
- B est explicitement répartissable entre R2 et début R3;
- C et D conservent leurs fenêtres actuelles;
- les fenêtres de validation sont distinguées des échéances rigides;
- la décision de réduire R2 à une page secondaire obligatoire est consignée;
- la progression R3 intraligne → interne → externe est consignée sans modifier WEB-05;
- la règle de concordance code ↔ rendu est consignée.

## AJ-02 — Alléger le Projet Web de la rencontre 2

**État : Terminé**  
**Dépend de : AJ-01**

Fichiers principaux :

- `web/docs/03-projet-web/02-rencontre2.md`;
- `web/docs/01-cours/02-rencontre2.md` seulement si une formulation crée une attente de deux pages secondaires;
- `web/docs/01-cours/02-rencontre2-exercice-guide.md` : conserver l'exercice `chat.jpg` avec une page secondaire, sauf correction réellement nécessaire.

Résultat attendu :

- `index.html` + une page sous `pages/` = minimum obligatoire;
- au moins une image locale utilisée pour pratiquer les chemins;
- navigation aller-retour fonctionnelle;
- deuxième page secondaire clairement facultative;
- aucune baisse des exigences conceptuelles des Validations A/B.

Résultat du lot AJ-02 :

- seule la page `web/docs/03-projet-web/02-rencontre2.md` a été modifiée côté étudiant;
- le minimum est maintenant `index.html` + une page secondaire + une image locale;
- la navigation obligatoire est réduite à un aller-retour entre l'accueil et la page secondaire;
- la deuxième page secondaire est déplacée dans `Pour aller plus loin — non évalué`;
- la page rappelle que la Validation A est prioritaire en R2 et que la Validation B peut se poursuivre au début de R3;
- le cours R2 et l'exercice guidé ne sont pas modifiés dans ce lot.

Validation technique effectuée après le lot :

- `npm run build` réussi, sans erreur Docusaurus;
- `git diff --check` réussi, code de sortie 0;
- page AJ-02 servie en HTTP 200;
- titre, blocs de code et admonitions présents dans le HTML réellement servi;
- liens vers le cours R2 et l'exercice guidé présents et en HTTP 200;
- aucun marqueur d'erreur ou 404;
- automatisation visuelle du navigateur indisponible lors du contrôle, sans erreur technique relevée;
- branche propre après validation.

## AJ-03 — Propager le nouveau minimum R2 dans les exemples R3–R5

**État : Terminé**  
**Dépend de : AJ-02**

Les arborescences de R3, R4 et R5 ne doivent plus laisser croire que `sujet.html` **et** `apropos.html` sont deux fichiers obligatoires pour tous les étudiants.

Conserver des exemples à plusieurs pages lorsque cela sert la démonstration, mais distinguer clairement **exemple possible** et **minimum exigé**.

Résultat du lot AJ-03 :

- seules les pages Projet Web des rencontres 3, 4 et 5 sont modifiées côté étudiant;
- leurs arborescences montrent maintenant `index.html` + une page secondaire comme minimum;
- les pages supplémentaires sont explicitement conservées lorsqu'un étudiant en a ajouté;
- l'étape 3 applique `../css/styles.css` à chaque page située sous `pages/` sans imposer deux noms de fichiers précis;
- l'exemple de navigation obligatoire de l'étape 5 utilise `Accueil` + `Mon sujet`, avec les liens supplémentaires laissés aux étudiants qui ont enrichi leur site;
- les pages de cours R3 à R5 ne sont pas modifiées dans ce lot.

Validation technique effectuée après le lot :

- branche `agent/ajustements-r1-r5` au commit `5f911682ea6bad4f7be49f6068243399a8d61861`;
- `npm run build` réussi, sans erreur Docusaurus; seulement des avertissements non bloquants de dépréciation et de données navigateur anciennes;
- `git diff --check` réussi;
- pages Projet Web R3, R4 et R5 servies en HTTP 200;
- liens vers les cours et exercices guidés présents, avec les six destinations vérifiées en HTTP 200;
- chaque arborescence présente une seule page secondaire comme minimum requis;
- aucune occurrence de `apropos.html` dans ces trois pages;
- validation HTTP/HTML effectuée sans Browser automatisé;
- serveur local arrêté après validation;
- `git status --short` final vide.

## AJ-04 — Améliorer la progression intraligne → interne → externe en R3

**État : Terminé**  
**Dépend de : AJ-01**

Fichier principal : `web/docs/01-cours/03-rencontre3.md`.

Utiliser un même besoin simple — par exemple colorer un paragraphe — afin de montrer successivement :

```html
<p style="color: darkred;">...</p>
```

puis :

```html
<style>
  p {
    color: darkred;
  }
</style>
```

puis :

```html
<link rel="stylesheet" href="css/styles.css">
```

avec la règle dans `styles.css`.

Ajouter une comparaison courte centrée sur la maintenance :

- intraligne : proche de l'élément, mais répétitif et mélange HTML/CSS;
- interne : centralise une page, mais doit être répété si plusieurs pages partagent le même style;
- externe : un seul fichier peut servir à plusieurs pages; méthode privilégiée du Projet Web.

Ne pas demander aux étudiants d'utiliser intraligne/interne dans le Projet Web et ne pas les ajouter à WEB-05.

Résultat du lot AJ-04 :

- seule la page `web/docs/01-cours/03-rencontre3.md` est modifiée côté étudiant;
- les objectifs mentionnent maintenant la reconnaissance des trois formes et la raison de privilégier la feuille externe;
- un même paragraphe en `darkred` montre successivement CSS intraligne, CSS interne et CSS externe;
- la comparaison est centrée sur la répétition dans les éléments, puis entre les pages, puis sur la modification centralisée dans `styles.css`;
- la feuille CSS externe demeure explicitement la méthode du Projet Web et la notion à maîtriser pour WEB-05;
- l'exercice guidé, le Projet Web, les compétences et les images ne sont pas modifiés dans ce lot;
- l'audit code ↔ rendu reste réservé à AJ-05.

Validation technique effectuée après le lot :

- branche `agent/ajustements-r1-r5` au commit `4a2250574855eacf8fce2069e0bf61e66804a95c`;
- `git pull --ff-only` effectué par fast-forward avant validation;
- `npm run build` réussi, sans erreur Docusaurus;
- `git diff --check` réussi;
- `git status --short` final vide;
- aucun fichier modifié par la validation.

## AJ-05 — Audit code ↔ rendu visuel R3/R4

**État : Terminé**  
**Dépend de : AJ-04 pour R3**

Pour chaque image qui prétend illustrer un snippet ou un résultat CSS :

1. identifier le code canonique associé;
2. vérifier textes, couleurs, bordures, dimensions et structure;
3. classer l'image : `Correspond`, `À régénérer`, `Illustration générale — pas un rendu exact`;
4. ne jamais modifier le snippet pédagogique seulement pour faire correspondre une ancienne capture si le snippet actuel est meilleur;
5. inscrire les nouvelles captures nécessaires dans `RESSOURCES_A_FOURNIR.md` avant leur intégration.

### Résultat de l'audit

L'audit compare les snippets actuellement montrés dans les cours R3/R4 aux exemples historiques qui utilisaient les mêmes fichiers PNG. Lorsque le snippet canonique a changé de texte, de sélecteur, de couleur ou de structure, l'ancien rendu ne peut plus être considéré comme le résultat exact du code actuel.

| Rencontre | Ressource | Classement | Décision |
|---|---|---|---|
| R3 | `fichier-css-externe.png` | **Illustration générale — pas un rendu exact** | Conserver comme illustration du principe d'une feuille externe; ne pas la présenter comme rendu du paragraphe `darkred`. |
| R3 | `lier-feuille-css.png` | **À régénérer** | L'ancien exemple est associé à `href="styles.css"` alors que R3 montre maintenant `href="css/styles.css"`; envisager plutôt de retirer cette capture redondante avec le bloc de code. |
| R3 | `selecteur-element.png` | **À régénérer** | L'ancien exemple `p` bleu + `h1` à `2.5rem` ne correspond plus au snippet actuel `h1` darkblue + `p` `#37474f`. |
| R3 | `selecteur-classe-rendu.png` | **À régénérer** | L'ancien `.important` / `firebrick` ne correspond plus à `.mise-en-valeur` / `darkred` ni au contenu actuel. |
| R3 | `couleurs-rendu.png` | **À régénérer** | L'ancien jeu `mediumturquoise` / `darkslateblue` / `mistyrose` ne correspond plus aux couleurs hexadécimales actuelles. |
| R3 | `bordure-rendu.png` | **À régénérer** | L'ancien `.encadre` avec bordure `orchid` ne correspond plus à `.mise-en-valeur` avec `#b45b5b`. |
| R4 | `boites-rendues-visibles.png` | **À régénérer** | L'ancien exemple `h1` mediumpurple + `p` lavender ne correspond plus à `.carte` avec fond bleu pâle et bordure bleue. |
| R4 | `modele-de-boite-css.png` | **Illustration générale — pas un rendu exact** | Conserver comme schéma conceptuel `contenu → padding → border → margin`. |
| R4 | `marges-et-remplissage.png` | **Illustration générale — pas un rendu exact** | Conserver seulement comme comparaison conceptuelle; ne pas l'associer à des valeurs précises du snippet actuel. |
| R4 | `dimensions-totales-boite.png` | **Illustration générale — pas un rendu exact** | Conserver pour expliquer la composition de la largeur totale, sans la présenter comme rendu exact de `width: 320px`. |

Constats complémentaires :

- les exercices guidés R3 et R4 reposent directement sur l'expérimentation dans le navigateur et ne contiennent pas de captures de rendu à corriger;
- aucune nouvelle capture n'est demandée dans ce lot et `RESSOURCES_A_FOURNIR.md` reste donc inchangé;
- aucun PNG n'est supprimé ou remplacé pendant AJ-05;
- le contrôle effectué ici est un audit de cohérence entre code canonique, usage historique et rôle pédagogique des images; aucune inspection pixel par pixel des binaires n'est revendiquée;
- pour les images classées **Illustration générale**, cette limite est acceptable puisqu'elles ne doivent plus être présentées comme le résultat exact d'un snippet;
- pour les images classées **À régénérer**, privilégier d'abord un aperçu HTML/CSS vivant lorsque cela réduit le risque de dérive entre code et rendu.

Candidats prioritaires pour un aperçu vivant après le POC : `selecteur-classe-rendu.png`, `couleurs-rendu.png` et `boites-rendues-visibles.png`. `lier-feuille-css.png` peut probablement être retiré plutôt que reproduit, puisque le code adjacent communique déjà l'information.

## AJ-06 — POC ExampleFrame : aperçus HTML/CSS vivants

**État : En cours — POC implémenté; validation technique et visuelle requise**  
**Responsable privilégié : Codex local**  
**Dépend de : AJ-05**

But : vérifier, sur un périmètre volontairement minuscule, qu'un rendu HTML/CSS vivant intégré à Docusaurus est plus fiable et plus utile qu'une capture PNG lorsqu'il prétend montrer le résultat exact d'un snippet.

### Portée stricte du POC

Implémenter seulement deux aperçus dans `web/docs/01-cours/00-introduction-css.md` :

1. le paragraphe intraligne violet actuellement associé à `premier-style-css.png`;
2. l'exemple `color` / `background-color` actuellement associé à `couleurs-rendu.png`.

Ne pas migrer automatiquement les rendus du cours R3/R4 pendant ce POC et ne supprimer aucun PNG existant.

### Architecture proposée

- exemples autonomes sous `web/static/examples/rencontre3/<slug>/`;
- composant global `web/src/components/ExampleFrame/`;
- enregistrement du composant dans `web/src/theme/MDXComponents.js`;
- chemins compatibles avec le `baseUrl`, sans URL codée en dur vers un dépôt;
- isolation du rendu dans un `iframe`;
- `sandbox="allow-same-origin"`, sans scripts dans les exemples;
- hauteur automatique par accès same-origin et `ResizeObserver`, avec bornes raisonnables; permettre une hauteur explicite si nécessaire;
- réutiliser les mêmes sources pour afficher le code et produire le rendu afin d'éviter la dérive code ↔ aperçu; le hand-off technique prévoit `raw-loader` pour cette lecture de source;
- aucune dépendance ou plateforme externe : pas de Sandpack, CodeSandbox, iframe-resizer, éditeur interactif, manifeste ou serveur supplémentaire.

### Critères de succès

Le POC est retenu seulement si :

- `npm run build` réussit;
- `git diff --check` réussit;
- les deux aperçus fonctionnent avec le `baseUrl` du dépôt;
- le code montré et le rendu proviennent bien de la même source canonique;
- le contenu de l'iframe reste isolé du CSS Docusaurus;
- la hauteur s'ajuste sans couper le contenu ni créer un grand espace inutile;
- la page reste lisible sur une largeur étroite raisonnable;
- une vérification **visuelle réelle** confirme les deux rendus; une compilation seule ne suffit pas.

### Résultat du lot AJ-06 avant validation

- le composant global `ExampleFrame` est ajouté sous `web/src/components/ExampleFrame/` et enregistré dans `web/src/theme/MDXComponents.js`;
- `ExampleFrame` résout l'URL de l'iframe avec `useBaseUrl`, utilise `sandbox="allow-same-origin"` et ajuste sa hauteur avec `ResizeObserver` entre des bornes configurables;
- les deux exemples autonomes sont ajoutés sous `web/static/examples/rencontre3/`;
- `00-introduction-css.md` lit ces mêmes fichiers avec `raw-loader` pour afficher le code exact qui est aussi rendu dans l'iframe;
- `raw-loader` était déjà présent dans les dépendances du projet; aucune nouvelle dépendance n'est ajoutée;
- les anciens PNG demeurent physiquement dans le dépôt et aucune migration supplémentaire de R3/R4 n'est faite;
- le build, `git diff --check` et la vérification visuelle réelle restent à exécuter avant de marquer AJ-06 `Terminé`.

Si le Browser automatisé de Codex demeure indisponible, documenter cette limite et effectuer la vérification visuelle avec le navigateur local disponible plutôt que de déclarer le POC réussi sur le seul build.

Après le POC, **arrêter et présenter le résultat**. Aucune migration en masse n'est autorisée implicitement.

## AJ-07 — Décider de l'adoption et de la migration ciblée

**État : À faire seulement après AJ-06**

AJ-07 remplace l'idée de construire par défaut un outil batch de captures PNG.

Après revue du POC ExampleFrame :

- si le composant est simple, portable et visuellement satisfaisant, décider explicitement quels rendus exacts de l'audit AJ-05 seront migrés;
- commencer par quelques cas à forte valeur pédagogique plutôt que convertir toute la documentation;
- conserver les schémas et illustrations générales lorsqu'ils communiquent mieux une idée qu'un rendu HTML vivant;
- retirer une vieille capture redondante plutôt que la reproduire lorsque le code seul suffit;
- ne pas supprimer les PNG du POC avant la décision d'adoption;
- si ExampleFrame n'est pas satisfaisant, revenir à une génération PNG ciblée; ne construire un outil batch que si un besoin récurrent est démontré et après décision explicite.

Aucune migration massive, aucun nouvel outil permanent et aucune nouvelle dépendance ne doivent être introduits automatiquement dans AJ-07.

## AJ-08 — Nettoyer R5

**État : À faire**

- retirer/corriger le `#contact` sans cible;
- conserver navigation + `display: flex` + `gap` comme noyau;
- garder les cartes et alignements comme expérimentation utile sans les rendre mécaniquement obligatoires;
- vérifier qu'aucune nouvelle notion HTML parasite n'est introduite.

## AJ-09 — Mise à jour des suivis et validation finale

**État : À faire**  
**Dépend de : AJ-02 à AJ-08**

Après les modifications réelles :

- mettre `SUIVI_CONTENU.md` à jour pour les changements de portée;
- mettre `RESSOURCES_A_FOURNIR.md` à jour pour les rendus ajoutés, retirés ou remplacés;
- revérifier `EVALUATION.md` et `COMPETENCES_HTML_CSS.md`;
- exécuter `npm run build`;
- exécuter `git diff --check`;
- vérifier visuellement R2, R3, R4 et R5;
- confirmer que R3 montre correctement intraligne/interne/externe sans changer la compétence évaluée;
- confirmer que tout rendu présenté comme résultat exact — PNG ou aperçu vivant — correspond au code canonique associé;
- remettre le plan principal et `SUIVI_CONTENU.md` à l'état final.

# Ordre recommandé

```text
AJ-01 documentation / validations       Terminé
  ↓
AJ-02 R2 minimum                        Terminé
  ↓
AJ-03 propagation R3–R5                Terminé
  ↓
AJ-04 progression CSS R3               Terminé
  ↓
AJ-05 audit visuel                     Terminé
  ↓
AJ-06 POC ExampleFrame                 En cours — validation requise
  ↓
AJ-07 décision / migration ciblée
  ↓
AJ-08 nettoyage R5
  ↓
AJ-09 validation finale
```

AJ-08 peut être réalisé en parallèle du travail visuel s'il n'y a pas de conflit de fichiers.

# Point de reprise actuel

> **AJ-06 — le POC ExampleFrame est implémenté sur deux exemples de `00-introduction-css.md`. Valider maintenant le build, `git diff --check`, le `baseUrl`, l'isolation, la hauteur et le rendu réel, puis arrêter avant toute migration supplémentaire.**
