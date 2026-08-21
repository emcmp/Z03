# Audit du déploiement — phase 1

**Date : 2026-08-21**

**Portée : audit, préparation et documentation seulement**

**Interdiction : aucune modification de `departement-info-cem/z03/main`**

## Plan d'implémentation

| Tâche | État | Dépendances | Fichiers visés | Définition de « terminé » |
| --- | --- | --- | --- | --- |
| Relever l'état Git local et actualiser `origin` | Terminé | Accès réseau en lecture | Aucun | Branche, worktree, remotes et SHA consignés |
| Auditer le dépôt officiel en lecture seule | Terminé | Accès GitHub en lecture | Aucun | Branche par défaut, branches, SHA, historique, Actions et Pages consignés |
| Établir la relation des historiques et des arbres | Terminé | Références `origin` et `cegep` à jour | Aucun | Ancêtre commun, divergence et différences de fichiers établis |
| Définir le protocole durable de candidat | Terminé | Résultats de l'audit | `AGENTS.md`, `refonte/STRATEGIE_DEPOTS_ET_MISE_EN_PRODUCTION.md` | Autorisations, invariants et transitions documentés sans ambiguïté |
| Durcir les validations locales et le workflow existant | Terminé | Protocole durable défini | `package.json`, `.github/workflows/deploy.yml`, `.gitignore` | Typecheck accessible à la racine; déploiement limité à `main`; fichiers temporaires ignorés |
| Valider la version personnelle | Terminé | Dépendances installées | `web/scripts/run-refonte.cjs` | Typecheck, build étudiant et build Refonte exécutés et résultats consignés |
| Produire le rapport final de phase 1 | Prêt à réviser | Toutes les tâches précédentes | Ce document | Risques, plan d'alignement, fichiers touchés, résultats et verdict consignés |

## État observé avant modification suivie

```text
répertoire   : P:/Projects/_CEGEP/Z03-EMCMP
branche      : main
worktree     : propre
main local   : 990cbf580a976a56a74b6014948cedf1ea982178
origin/main  : 990cbf580a976a56a74b6014948cedf1ea982178
cegep/main   : 6d3221981bae41a25fd84d31a9d2e1b5f8a55128
```

Le remote local `cegep` a été ajouté après confirmation du dépôt GitHub. `remote.pushDefault` est maintenant `origin`.

```text
origin fetch/push : https://github.com/emcmp/Z03.git
cegep fetch/push  : https://github.com/departement-info-cem/z03.git
```

## État actuel

```text
origin/main : 990cbf580a976a56a74b6014948cedf1ea982178
main local  : 990cbf580a976a56a74b6014948cedf1ea982178
cegep/main  : 6d3221981bae41a25fd84d31a9d2e1b5f8a55128
worktree    : propre au début de l'audit; modifications de phase 1 présentes à la fin
```

`main` local et `origin/main` étaient identiques après `git fetch origin --prune`. Le dernier workflow personnel de ce SHA a réussi et `https://emcmp.github.io/Z03/` répond avec HTTP 200.

## Dépôt officiel

- branche par défaut : `main`;
- branches : `main` et `AjoutNiveauPourTP1`;
- `AjoutNiveauPourTP1` pointe vers `eb06fce464a9db27a3af48aea8fcbcf068a4836d` et possède deux commits absents de `main`;
- GitHub Pages utilise le mode `workflow`;
- le site officiel répond avec HTTP 200 en HTTP et en HTTPS;
- HTTPS n'est pas imposé malgré un certificat approuvé;
- `main` n'a actuellement aucune protection de branche;
- deux workflows actifs portent le nom `Déploiement` et se déclenchent sur chaque push à `main`.

Les deux workflows officiels sont :

1. `.github/workflows/deploy.yml`, qui construit Docusaurus et téléverse `web/build`;
2. `.github/workflows/deploy_back.yml`, qui téléverse directement la racine du dépôt.

Les deux exécutions du SHA officiel actuel ont réussi, mais elles ont déployé deux artéfacts différents vers le même environnement. Leur ordre de fin détermine donc le contenu visible. C'est une course de déploiement dangereuse. Le candidat provenant de `origin/main` ne contient que `deploy.yml`, ce qui éliminera `deploy_back.yml` lors de l'alignement exact; aucune suppression distante séparée n'a été faite pendant cette phase.

## Relation des historiques

```text
ancêtre commun : 6503dce4a1668bfb858e0f7b4ce941833f546a39
commits propres à cegep/main  : 4
commits propres à origin/main : 350
```

Ni `cegep/main` ni `origin/main` n'est ancêtre de l'autre. Les historiques ont divergé et un push rapide vers le `main` officiel est actuellement impossible.

Les quatre commits officiels postérieurs à l'ancêtre commun sont :

```text
05c5936 commit pas rapport
60493bd Switch to 905
747ccca refonte
6d32219 deploy
```

Deux indices démontrent que le contenu officiel récent provient de copies manuelles :

- l'arbre du commit officiel `60493bd` est exactement celui du commit personnel `6fcd278`, malgré des commits et des parents différents;
- le contenu de `747ccca` est identique au commit personnel contemporain `ba240a7` lorsque l'on exclut `.codex-temp/` et la variante du workflow de déploiement.

Il ne faut pas fusionner automatiquement ces quatre commits dans la source de vérité : cela réintroduirait un historique de copie et un commit de fusion sans valeur pédagogique ou technique.

## Différences de fichiers

Entre `cegep/main` et `origin/main` :

```text
690 chemins différents
633 ajouts, 37 modifications, 1 suppression, 19 renommages
```

Répartition par dossier racine :

| Racine | Nombre de chemins |
| --- | ---: |
| `.codex-temp/` | 503 |
| `web/` | 140 |
| `refonte/` | 25 |
| `archives/` | 20 |
| `.github/` | 2 |

Hors `.codex-temp/`, 187 fichiers diffèrent, pour environ 11 637 insertions et 1 305 suppressions. Les différences fonctionnelles correspondent principalement à la poursuite de la refonte des rencontres, aux exemples, aux ressources, aux documents internes et au workflow Pages.

## Risques détectés

1. **Historiques divergents.** Un push normal de `origin/main` vers `cegep/main` serait rejeté; un force push est interdit.
2. **Fichiers temporaires versionnés.** `origin/main` contient 503 fichiers sous `.codex-temp/`, soit environ 57,96 Mio dans le worktree. Les aligner copierait ces artéfacts temporaires dans le dépôt officiel.
3. **Double déploiement officiel.** Deux workflows concurrents peuvent publier des contenus différents pour le même SHA.
4. **Branche officielle non protégée.** Rien n'empêche actuellement une mise à jour directe, une suppression ou un force push selon les permissions de l'acteur.
5. **HTTPS non imposé.** Le site officiel sert encore la version HTTP sans redirection.
6. **Branche historique distincte.** `AjoutNiveauPourTP1` contient deux commits propres et doit être conservée tant qu'une décision explicite n'est pas prise.
7. **Version Node locale différente.** Les validations locales ont utilisé Node 22.16.0; GitHub Actions utilise Node 20. Le dernier build de `origin/main` sous Node 20 est réussi, mais les changements de phase 1 devront aussi passer Actions après leur intégration.
8. **Dépendances héritées.** `npm ci` dans `web/` signale 65 vulnérabilités, dont 2 critiques. Aucun `npm audit fix` n'a été lancé.
9. **Avertissements Docusaurus.** `onBrokenMarkdownLinks` est déprécié et les données Browserslist sont vieillissantes. Ils ne cassent pas le build actuel.
10. **Candidat et protections non encore éprouvés.** Les scripts de préparation/publication et les règles de branche sont volontairement reportés après l'alignement initial.

## Plan exact d'alignement initial

### 1. Lever les blocages dans la source de vérité

Après approbation explicite du nettoyage des artéfacts temporaires :

```powershell
git rm -r --cached --ignore-unmatch -- .codex-temp
git add -- .gitignore
git commit -m "Retire les fichiers temporaires versionnés"
git push origin main
```

Ces commandes modifient seulement le dépôt personnel. Les fichiers sont retirés de l'arbre Git courant, mais demeurent sur le disque local et sont ignorés. Les anciens blobs restent dans l'historique, qui n'est pas réécrit.

Intégrer aussi les fichiers de phase 1, puis attendre le succès du workflow personnel sous Node 20.

### 2. Préparer l'unique candidat sans toucher à `cegep/main`

```powershell
git status --porcelain=v1
git fetch origin --prune
git fetch cegep --prune
npm run setup
npm run typecheck
npm run build
npm --prefix web run build:refonte

$candidateSha = git rev-parse origin/main
$shortSha = git rev-parse --short=7 $candidateSha
$candidateBranch = "publication/candidat-$(Get-Date -Format 'yyyy-MM-dd')-$shortSha"

git ls-remote --heads cegep "refs/heads/publication/candidat-*"
git push --dry-run cegep "$candidateSha`:refs/heads/$candidateBranch"
git push cegep "$candidateSha`:refs/heads/$candidateBranch"
```

Le dernier `git push` est une **écriture sur le dépôt officiel**, mais ne modifie pas `cegep/main` et ne déclenche pas Pages.

### 3. Obtenir une autorisation spéciale pour le premier alignement

Le GO quotidien ne doit pas autoriser implicitement le renommage de la branche par défaut. Pour cette première opération seulement, demander une formulation non ambiguë telle que :

> GO alignement initial et première production du candidat en attente.

### 4. Préserver l'ancien `main`, puis créer le nouveau

Avec le candidat toujours unique et inchangé :

```powershell
$oldOfficialSha = git rev-parse cegep/main
$oldShortSha = git rev-parse --short=7 $oldOfficialSha
$archiveBranch = "archive/avant-alignement-2026-08-21-$oldShortSha"

gh api --method POST repos/departement-info-cem/z03/branches/main/rename -f "new_name=$archiveBranch"
git fetch cegep --prune

$candidateSha = git rev-parse "cegep/$candidateBranch"
git push --dry-run cegep "$candidateSha`:refs/heads/main"
git push cegep "$candidateSha`:refs/heads/main"

gh api --method PATCH repos/departement-info-cem/z03 -f default_branch=main
git fetch cegep --prune
```

Toutes les commandes `gh api` et le push réel de cette étape sont des **modifications du dépôt officiel**. Le renommage préserve l'ancien SHA `6d32219` et tout son historique sans supprimer ni forcer une branche.

### 5. Vérifier la première production

```powershell
git rev-parse "cegep/$archiveBranch"
git rev-parse cegep/main
git rev-parse "cegep/$candidateBranch"
gh run list --repo departement-info-cem/z03 --limit 5
```

Exiger l'identité entre `cegep/main` et le candidat, un seul workflow de déploiement, le succès de GitHub Actions et une réponse correcte du site officiel. Ne pas modifier GitHub Pages si le mode `workflow` continue de fonctionner.

## Architecture du workflow futur

```text
origin/main validé
→ preview personnelle réussie pour ce SHA
→ une branche publication/candidat-... au même SHA
→ candidat revalidé dans un worktree détaché
→ « GO production du candidat en attente »
→ vérification d'avance rapide
→ cegep/main avance exactement vers le candidat
→ GitHub Actions et site officiel vérifiés
→ trace production/... et candidat archivé comme publié
```

Si `origin/main` avance après la préparation, le candidat reste inchangé. Il faut soit publier l'ancien candidat, soit recevoir l'instruction explicite de remplacement.

## Fichiers proposés ou modifiés

| Fichier | Action | Justification |
| --- | --- | --- |
| `AGENTS.md` | Modifié | Rend persistants la source de vérité, le GO exact et les refus obligatoires |
| `refonte/STRATEGIE_DEPOTS_ET_MISE_EN_PRODUCTION.md` | Modifié | Remplace le modèle PR/squash ambigu par un candidat unique et une promotion exacte en avance rapide |
| `refonte/AUDIT_DEPLOIEMENT_PHASE_1_2026-08-21.md` | Ajouté | Conserve les preuves, le plan, les risques et le verdict de phase 1 |
| `.github/workflows/deploy.yml` | Modifié | Ajoute typecheck, permissions minimales, concurrence Pages et garde `main` |
| `package.json` | Modifié | Rend `npm run typecheck` utilisable depuis la racine |
| `.gitignore` | Ajouté | Empêche de nouveaux fichiers `.codex-temp/` et `node_modules/` racine d'être ajoutés |
| `web/scripts/run-refonte.cjs` | Modifié | Lance Docusaurus via Node et corrige `spawnSync npm.cmd EINVAL` sous Windows |

Scripts proposés après l'alignement, mais non créés pendant cette phase :

```text
scripts/deploiement/verifier-preview.ps1
scripts/deploiement/preparer-candidat.ps1
scripts/deploiement/publier-candidat.ps1  # avec -DryRun
scripts/deploiement/annuler-candidat.ps1
```

## Validation

| Contrôle | Résultat |
| --- | --- |
| `npm ci` à la racine | Réussi; aucune dépendance applicative à la racine |
| `npm run setup` | Réussi; 1 515 paquets installés dans `web/` |
| `npm run typecheck` | Réussi |
| `npm run build` | Réussi |
| `npm --prefix web run build:refonte` | Réussi après correction du lanceur Windows |
| Preview personnelle | Workflow réussi pour `990cbf5`; HTTP 200 |
| Site officiel, lecture seule | HTTP et HTTPS répondent 200; aucune modification |

Environnement local : Node 22.16.0 et npm 11.13.0. Le workflow GitHub reste fixé à Node 20.

## Verdict

```text
BLOQUÉ — INTERVENTION REQUISE AVANT ALIGNEMENT
```

Raison : la source de vérité contient encore 503 fichiers temporaires versionnés (57,96 Mio). Il faut approuver leur inventaire et leur retrait, intégrer les changements de phase 1 dans `origin/main`, puis obtenir un workflow personnel vert sous Node 20 avant de préparer le premier candidat. **Aucune production n'a été effectuée.**
