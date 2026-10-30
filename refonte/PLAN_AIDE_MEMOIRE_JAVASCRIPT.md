# Aides-mémoires JavaScript — R6 à R9

## Navigation latérale et téléchargements

Plan du 28 octobre 2026 : remplacer le menu déroulant par une section Docusaurus avec navigation latérale gauche. Conserver intégralement les trois HTML autonomes, les cours, exercices et ZIP. La validation historique ci-dessous concerne la version antérieure du menu.

| Tâche | État | Fichiers et dépendances | Définition de terminé |
| --- | --- | --- | --- |
| Premier lot : navigation et deux pages | Terminé | `web/sidebars.js`, `web/docusaurus.config.js`, `web/docs/06-aide-memoire/00-accueil.md`, `04-telechargements.md` | Sidebar `aideMemoires` à cinq docs, item navbar `docSidebar`, présentation et téléchargements; aucun build, commit ou push dans ce lot |
| Fiche R6–R7 | Terminé | `web/docs/06-aide-memoire/01-rencontres6-7.md`; HTML R6–R7 existant | Doc `aide-memoire/rencontres6-7`, consultation dans la section; HTML autonome inchangé |
| Fiche R8 | Terminé | `web/docs/06-aide-memoire/02-rencontre8.md`; HTML R8 existant | Doc `aide-memoire/rencontre8`, consultation dans la section; HTML autonome inchangé |
| Fiche R9 | Terminé | `web/docs/06-aide-memoire/03-rencontre9.md`; HTML R9 existant | Doc `aide-memoire/rencontre9`, consultation dans la section; HTML autonome inchangé |
| Validation de la section | Terminé | Dépend des cinq docs : `aide-memoire/accueil`, `aide-memoire/rencontres6-7`, `aide-memoire/rencontre8`, `aide-memoire/rencontre9`, `aide-memoire/telechargements` | Build et rendu, sidebar gauche, liens relatifs et téléchargements vérifiés avec le baseUrl personnel; HTML inchangés |
| Publication EMCMP | À faire | En attente d’une demande explicite ultérieure | Publier sur le dépôt personnel `emcmp/Z03`, puis vérifier la navigation et les téléchargements en production personnelle; aucune production officielle |

Portée historique bornée du premier lot : créer uniquement le dossier `web/docs/06-aide-memoire` et ses deux pages de présentation et téléchargements, configurer la navigation, puis arrêter sans créer les trois fiches Markdown. Les références à ces trois docs et leurs liens seront résolus au deuxième lot; la section intermédiaire n’est pas prête à construire ou publier. Aucun autre agent ne travaille en parallèle sur ces tâches.

Le document regroupé R6 à R12 reste à venir après validation de R10–R12 : aucun fichier ni lien fictif. Les fiches servent à la révision; l’enseignant détermine expressément la documentation permise à l’examen.

Premier lot réalisé : diff relu et `git diff --check` sans erreur d’espacement. Aucun build exécuté sur demande explicite. Les trois HTML et les fichiers non suivis sous `%SystemDrive%/` n’ont pas été touchés.

Constat de validation du nouveau lot — 28 octobre 2026 (navigation latérale et téléchargements, distinct du menu historique ci-dessous) :

- Les cinq pages docs Docusaurus et la sidebar `aideMemoires` sont créées. Les trois fiches Markdown de consultation R6–R7, R8 et R9 sont alignées avec les trois HTML autonomes, qui restent inchangés.
- La page de téléchargements comporte trois liens vers ces HTML. Le futur document regroupé R6–R12 n’est pas créé.
- Validation rapportée : `npm run build` sous `GITHUB_REPOSITORY=emcmp/Z03`, `EXIT_CODE=0`.
- Rendu généré dans `web/build/aide-memoire.html`, `web/build/aide-memoire/rencontres6-7.html`, `web/build/aide-memoire/rencontre8.html`, `web/build/aide-memoire/rencontre9.html` et `web/build/aide-memoire/telechargements.html`.
- La sidebar contient cinq liens sous `/Z03/aide-memoire`. La navigation et les téléchargements restent à vérifier en production personnelle après publication.

Les tâches de réalisation et de validation de cette section sont terminées. La publication EMCMP reste en attente; aucune production officielle. Cette consignation ne relance aucun build et ne comporte aucun push ni commit.

## Réalisation antérieure : HTML autonomes et menu déroulant

Portée : trois HTML autonomes et un menu principal, selon la demande de l’enseignant. Aucun changement aux cours, exercices, ZIP ou à la production.

| Tâche | État | Fichiers et dépendances | Définition de terminé |
| --- | --- | --- | --- |
| Préparer les trois fiches | Terminé | `web/static/files/rencontre6/aide-memoire-rencontres6-7.html`, `rencontre8/aide-memoire-rencontre8.html`, `rencontre9/aide-memoire-rencontre9.html`; original R6–R7 fourni et quatre pages de cours R8–R9 | Exemples R6–R7 préservés; couverture R8–R9 demandée; CSS commun intégré, ancres, impression, consultation hors ligne |
| Ajouter le menu | Terminé | `web/docusaurus.config.js`; dépend des trois fichiers | Trois liens compatibles avec les deux baseUrl, navigation actuelle conservée |
| Valider | Terminé | Build depuis la racine, HTML et navigation générés | Builds locaux des deux contextes, fichiers et ancres vérifiés; état Git revu; aucun commit/push/déploiement |

La validation ne change aucune compétence évaluée. R10–R12 ne sont pas affichées. La rédaction finale reste à réviser par l’enseignant.

Validation : `npm run build` avec `GITHUB_REPOSITORY=emcmp/Z03` réussi, code 0, le 28 octobre 2026; trois HTML présents dans `web/build`; 21 liens d’ancre internes valides. La navigation utilise `to: 'pathname:///files/...'` et `target: '_self'`, compatibles avec le baseUrl. R10–R12 absentes volontairement.

## Rencontre 10 — Aide-mémoire

Ajout de la fiche R10 à la section de consultation et aux téléchargements : `web/docs/06-aide-memoire/05-rencontre10.md` et `web/static/files/rencontre10/aide-memoire-rencontre10.html`. Contenu repris de `web/docs/01-cours/10-rencontre10.md` : paramètres, arguments, plusieurs paramètres, réutilisation, passage de valeurs et de variables, `return`, `Math.random()`, interruption de la fonction et exemples de valeurs retournées. R11 et R12 à préparer; document fusionné R6–R12 non créé. Publication limitée à EMCMP personnel.

## Rencontre 11 — Aide-mémoire

Ajout de la fiche R11 en Markdown intégré et en HTML autonome : `web/docs/06-aide-memoire/06-rencontre11.md` et `web/static/files/rencontre11/aide-memoire-rencontre11.html`.

Contenu ancré dans `web/docs/01-cours/11-rencontre11.md` : boucle `while`, condition, itérations, compteur et incrémentation, accumulation avec `+=`, classes numérotées et `querySelector` / `classList.add`, prévention de boucle infinie, insertion de `if` et condition combinée `&&`. Une section séparée mentionne `do...while` et débogueur comme facultatifs et non exigés aux évaluations. R12 à rédiger avant l'éventuelle fusion R6–R12. Publication EMCMP personnel uniquement après validation CI; aucune modification au dépôt officiel.

## Rencontre 12 — Aide-mémoire

Nouvelle fiche R12 issue de `web/docs/01-cours/12-rencontre12.md` : création de tableaux, index à partir de `0`, lecture et affectation, `length` et dernier élément, calculs et contenu DOM, `push`, `pop`, `splice`, parcours `while` de `i=0` à `i < tableau.length`, affichage, somme, recherche via `if`, modification de toutes les valeurs. Fiche de consultation `web/docs/06-aide-memoire/07-rencontre12.md` et fichier HTML autonome `web/static/files/rencontre12/aide-memoire-rencontre12.html`. R12 ajoutée à la navigation et à la page de téléchargements. Pas de `for`, `forEach`, `map`, ni autres méthodes non enseignées. Fiches individuelles R6–R12 disponibles; document consolidé R6–R12 à assembler et faire valider ultérieurement, sans lien fictif. Publication sur le dépôt personnel EMCMP après vérification CI, jamais sur la production du cégep.

## Aide-mémoire complet R6–R12 — Regroupement

Création d'un fichier HTML autonome de regroupement : `web/static/files/aide-memoire/aide-memoire-javascript-r6-r12.html`, plus page de présentation intégrée `web/docs/06-aide-memoire/08-complet-r6-r12.md`. Les six fiches publiées (R6–R7, R8, R9, R10, R11, R12) ont été réunies dans l'ordre sans suppression de contenu ni réécriture pédagogique. Les 49 sections sont préservées; les identifiants HTML sont préfixés par rencontre pour éviter les collisions; le sommaire général contient 6 liens, les sommaires internes 49 liens, et les liens de retour 6. Aucune ressource externe ni JavaScript requis, CSS intégré et mode impression. La navigation Docusaurus, l'accueil et la page Téléchargements sont ajustés; les fichiers individuels ne changent pas. Cette version reste une ressource de révision; la permission pour un examen doit être décidée explicitement par l'enseignant. Publication limitée au dépôt personnel EMCMP et conditionnée au succès GitHub Actions; dépôt du cégep inchangé.


## Simplification : une seule version publique R6–R12 — 30 octobre 2026

**Décision de l'enseignant :** retirer de la navigation et des fichiers publiés les six fiches individuelles; conserver uniquement l'aide-mémoire complet R6–R12, déjà muni de sa navigation interne. Les versions précédentes doivent être conservées en archive interne dans le dépôt GitHub, hors de `web/docs/` et `web/static/`. La cible de déploiement est **emcmp/Z03 seulement**; aucune action sur le dépôt du cégep.

| Étape | État initial | Fichiers concernés | Critère de validation |
| --- | --- | --- | --- |
| Préserver les 12 fichiers individuels | En cours | 6 Markdown + 6 HTML vers `refonte/archives/aide-memoires-individuels/` | Contenus et blob SHA identiques aux sources; plus aucun original dans les chemins publiés |
| Simplifier la navigation | À faire | `web/sidebars.js`, `web/docs/06-aide-memoire/00-accueil.md` | Sidebar 2 entrées : aide-mémoire complet et téléchargements; premier lien au document complet |
| Éliminer la duplication visible | À faire | `web/docs/06-aide-memoire/08-complet-r6-r12.md`, `04-telechargements.md` | Plus aucun lien vers des pages/fichiers individuels; lien unique HTML complet |
| Établir la source de vérité | À faire | `web/static/files/aide-memoire/aide-memoire-javascript-r6-r12.html`, documentation d'archive | Le HTML complet est le seul contenu destiné aux étudiants à mettre à jour; les archives restent historiques, non synchronisées |
| Valider et publier sur EMCMP | À faire | GitHub Actions, routes et pages publiques personnelles | Build vert; page complète et téléchargements HTTP 200; anciennes pages/HTML ne sont plus publiés; production cégep intacte |

Ce chantier est une simplification de la documentation de référence, **sans modification des notions, exercices ou compétences évaluées**. Les sections historiques ci-dessus sont conservées comme trace et non comme état actuel. Les décisions sur la documentation autorisée à l'examen restent séparées.
