# Intégration technique — Travaux pratiques et TP2

## Portée autorisée

Ajouter la section Docusaurus et résumer les cinq missions du TP2 Roche-Papier-Ciseaux selon la demande du concepteur. Dépôt personnel `emcmp/Z03` uniquement, branche `feature/tp2-travaux-pratiques`, base `origin/main` à jour au SHA `3bc8b8353991599da2ad37c76ed0d93d990c69c3`.

Aucune fusion, publication, intervention sur le dépôt cegep ou intégration d'un corrigé enseignant. Les points sont ceux du TP (100 au total); aucune pondération dans la note finale n'est ajoutée.

## Tâches et reprise

| Tâche | État | Fichiers visés / dépendances | Définition de terminé |
| --- | --- | --- | --- |
| Vérifier Git et chercher le paquet étudiant | Terminé | Git, ZIP du workspace, consignes du dépôt | Worktree initial propre; origin actualisé; 332 ZIP inspectés, aucun candidat TP2; branche créée depuis origin/main |
| Ajouter navigation et page | Terminé | `web/sidebars.js`, `web/docusaurus.config.js`, `web/docs/05-travaux-pratiques/01-tp2.md` | Navigation existante préservée, cinq missions, deux indices par mission, aucun lien absent |
| Intégrer le ZIP officiel étudiant | Bloqué | `web/static/files/travaux-pratiques/tp2-roche-papier-ciseaux-etudiants.zip`, `refonte/RESSOURCES_A_FOURNIR.md` | Paquet officiel reçu, contenu et absence de corrigé vérifiés, puis encadré téléchargement ajouté |
| Valider le site et ses fichiers générés | Terminé | Node.js 20.20.1, build, typecheck, aperçu local, état Git | Build et typecheck réussis; page et liens de navigation HTTP 200; dix indices; grille générée de 15 rencontres; aperçu bureau/mobile vérifié; aucun fichier généré ajouté |
| Livrer sur le dépôt personnel | Prêt à réviser | Validation précédente; dépôt `emcmp/Z03` uniquement | Lot validé pour une PR brouillon vers main; ZIP toujours bloquant; aucune fusion |

## ZIP manquant

Le ZIP doit contenir `TP2_Etudiants/js/script.js`, `TP2_Etudiants/js/aide-tests.js`, `TP2_Etudiants/images/roche.png` et `ENONCE_TP2.html` (à repérer dans le paquet). Vérifier aussi que le script est bien une version étudiante à compléter et que les missions, les tests et les couleurs correspondent à l'énoncé officiel.

Ne pas substituer `web/static/files/tp2.zip`, qui appartient à un autre TP. Ne pas fabriquer un jeu de départ. Le rapport détaillé local demeure sous `.codex-temp/tp2-travaux-pratiques/`, hors Git. À réception du paquet, reprendre la tâche bloquée avant de rendre la PR prête à réviser.

## Validation du lot sans ZIP

`npm run build` et `npm run typecheck` réussis sous Node.js 20.20.1; build configuré avec `GITHUB_REPOSITORY=emcmp/Z03`. Aperçu via `npm.cmd run serve -- -- --host localhost --port 3097 --no-open`, contrôles HTTP et captures Edge aux formats bureau et mobile. Route générée : `/Z03/travaux-pratiques/tp2-roche-papier-ciseaux`.

Avertissements existants : option Docusaurus `onBrokenMarkdownLinks` dépréciée et données navigateurs anciennes. Aucune dépendance modifiée. La concordance avec le script étudiant, les tests du jeu et les couleurs de l'énoncé reste à vérifier à réception du paquet.

La livraison utilise le connecteur GitHub vers `emcmp/Z03` si les outils de push locaux échouent. Dans ce cas, conserver les commits locaux sur une branche de sauvegarde et recréer la branche de travail depuis la branche distante au contenu identique, sans réécrire l'historique.
