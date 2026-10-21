# Intégration technique — Travaux pratiques et TP2

## Portée autorisée

Ajouter la section Docusaurus et résumer les cinq missions du TP2 Roche-Papier-Ciseaux selon la demande du concepteur. Dépôt personnel `emcmp/Z03` uniquement, branche `feature/tp2-travaux-pratiques`, base `origin/main` à jour au SHA `3bc8b8353991599da2ad37c76ed0d93d990c69c3`.

Aucune fusion, publication, intervention sur le dépôt cegep ou intégration d'un corrigé enseignant. Les points sont ceux du TP (100 au total); aucune pondération dans la note finale n'est ajoutée.

## Tâches et reprise

| Tâche | État | Fichiers visés / dépendances | Définition de terminé |
| --- | --- | --- | --- |
| Vérifier Git et chercher le paquet étudiant | Terminé | Git, ZIP du workspace, consignes du dépôt | Worktree initial propre; origin actualisé; 332 ZIP inspectés, aucun candidat TP2; branche créée depuis origin/main |
| Ajouter navigation et page | Terminé | `web/sidebars.js`, `web/docusaurus.config.js`, `web/docs/05-travaux-pratiques/01-tp2.md` | Navigation existante préservée, cinq missions, deux indices par mission, aucun lien absent |
| Intégrer le ZIP officiel étudiant | Terminé | `web/static/files/travaux-pratiques/tp2-roche-papier-ciseaux-etudiants.zip`, page TP2, `refonte/RESSOURCES_A_FOURNIR.md` | Paquet déposé par l'utilisateur : 8 629 669 octets; 13 fichiers inspectés, racine `TP2_Etudiants/`, zones étudiantes à compléter et absence de corrigé confirmées; lien ajouté et consignes alignées |
| Valider le site et ses fichiers générés | Terminé | Node.js 20.20.2, build, typecheck, aperçu local, état Git | Build, typecheck et diff sans erreur; liens internes ZIP et page vérifiés, téléchargement HTTP identique octet pour octet |
| Livrer sur le dépôt personnel | Prêt à réviser | Validation précédente; dépôt `emcmp/Z03` uniquement | PR #22 avec ZIP validé, historique de `5f051faa` conservé; SHA distant et arbre à confirmer dans le rapport local de livraison; aucune fusion |

## ZIP officiel reçu et vérifié

Le fichier déposé par l'utilisateur contient uniquement 13 fichiers sous `TP2_Etudiants/` : `index.html`, `ENONCE_TP2.html`, `css/styles.css`, `js/script.js`, `js/aide-tests.js` et huit images PNG. Les deux scripts ont été lus : zones `TON CODE ICI` encore à compléter, aucun script enseignant complet ni fichier de solution. L'énoncé contient des indices partiels, pas de corrigé complet. SHA-256 du ZIP inchangé : `915807263279e302afca7d179c117dc8065c8dd0aaf2ca9b40c7c8a877a18b73`.

L'ancien `web/static/files/tp2.zip` n'a pas été utilisé. Six compteurs confirmés : quatre pour les duels et deux pour les parties gagnées. La page utilise `className`, les classes `gris`/`vert`/`rouge`, `==`, aucune boucle demandée et le barème 10 + 5 + 50 + 20 + 15 = 100. La mission 4 conserve les résultats au dixième duel et prépare la nouvelle partie au clic suivant; aucune notion évaluée ni pondération supplémentaire ajoutée.

## Validation du lot avec ZIP

`npm run build` et `npm run typecheck` réussis sous Node.js 20.20.2; build configuré avec `GITHUB_REPOSITORY=emcmp/Z03`. Aperçu via `npm.cmd run serve -- -- --host localhost --port 3097 --no-open`. Page, liens locaux et téléchargement HTTP 200; ZIP téléchargé identique aux 8 629 669 octets d'origine. Navigation navbar/sidebar et dix indices vérifiés. Route générée : `/Z03/travaux-pratiques/tp2-roche-papier-ciseaux`. Intégrité CRC, références HTML/CSS internes au ZIP et syntaxe des deux JS vérifiées. Le jeu est volontairement incomplet : ces contrôles ne prétendent pas valider les missions que l'étudiant doit programmer.

Avertissements existants : option Docusaurus `onBrokenMarkdownLinks` dépréciée et données navigateurs anciennes. Aucune dépendance modifiée. Les scripts de vérification et le rapport détaillé demeurent sous `.codex-temp/tp2-travaux-pratiques/`, hors Git.

Le diagnostic unique du push local confirme un gestionnaire d'identifiants inaccessible et une authentification HTTPS absente. Le connecteur GitHub déjà configuré permet le transfert du ZIP exact (blob Git `d0f9858a2f5874e1765ecf305469526cac2c209b`, identique au hash local). La livraison utilise ce connecteur vers `emcmp/Z03`. Conserver le commit local sur une branche de sauvegarde, puis aligner la branche de travail sur le commit distant au contenu identique, sans réécrire l'historique ni forcer de push. Consigner le SHA final et la vérification de la PR dans le rapport local.
