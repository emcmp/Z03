# Aides-mémoires JavaScript — R6 à R9

Portée : trois HTML autonomes et un menu principal, selon la demande de l’enseignant. Aucun changement aux cours, exercices, ZIP ou à la production.

| Tâche | État | Fichiers et dépendances | Définition de terminé |
| --- | --- | --- | --- |
| Préparer les trois fiches | Terminé | `web/static/files/rencontre6/aide-memoire-rencontres6-7.html`, `rencontre8/aide-memoire-rencontre8.html`, `rencontre9/aide-memoire-rencontre9.html`; original R6–R7 fourni et quatre pages de cours R8–R9 | Exemples R6–R7 préservés; couverture R8–R9 demandée; CSS commun intégré, ancres, impression, consultation hors ligne |
| Ajouter le menu | Terminé | `web/docusaurus.config.js`; dépend des trois fichiers | Trois liens compatibles avec les deux baseUrl, navigation actuelle conservée |
| Valider | Terminé | Build depuis la racine, HTML et navigation générés | Builds locaux des deux contextes, fichiers et ancres vérifiés; état Git revu; aucun commit/push/déploiement |

La validation ne change aucune compétence évaluée. R10–R12 ne sont pas affichées. La rédaction finale reste à réviser par l’enseignant.

Validation : `npm run build` avec `GITHUB_REPOSITORY=emcmp/Z03` réussi, code 0, le 28 octobre 2026; trois HTML présents dans `web/build`; 21 liens d’ancre internes valides. La navigation utilise `to: 'pathname:///files/...'` et `target: '_self'`, compatibles avec le baseUrl. R10–R12 absentes volontairement.
