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
