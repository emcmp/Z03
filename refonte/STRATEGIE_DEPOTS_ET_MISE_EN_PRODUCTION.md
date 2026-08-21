# Stratégie des dépôts et mise en production

**Statut : plan de référence avant automatisation avec Codex**  
**Dépôt de développement : `emcmp/Z03`**  
**Dépôt officiel : `departement-info-cem/z03`**

## Objectif

Conserver un seul dossier de travail local et un seul historique de développement, tout en séparant clairement :

- la refonte et la prévisualisation personnelle;
- la publication officielle du matériel du Cégep;
- les opérations manuelles initiales;
- la future automatisation sécuritaire confiée à Codex.

Les copies manuelles entre deux dossiers locaux doivent disparaître une fois les deux dépôts correctement alignés.

## Architecture cible

Un même dépôt Git local utilise deux dépôts distants :

```text
Dossier local Z03
│
├── origin  → https://github.com/emcmp/Z03.git
│             développement, PR, prévisualisation personnelle
│
└── cegep   → https://github.com/departement-info-cem/z03.git
              publication officielle
```

Le dépôt personnel demeure la destination par défaut. La publication au Cégep doit toujours être une action explicite.

La configuration Docusaurus détecte le dépôt dans lequel le build s'exécute. Le même commit peut donc produire :

```text
emcmp/Z03
→ https://emcmp.github.io/Z03/

departement-info-cem/z03
→ https://info.cegepmontpetit.ca/z03/
```

## Principes de sécurité

1. Ne plus copier manuellement les fichiers entre deux dossiers.
2. Ne pas configurer un seul `git push` pour publier automatiquement dans les deux dépôts.
3. Garder `origin` comme destination normale de développement.
4. Ne publier au Cégep qu'une version déjà fusionnée, testée et approuvée.
5. Ne jamais publier directement une branche de travail comme version officielle.
6. Ne pas exclure `.github/` lors de la synchronisation : le workflow de déploiement fait partie du projet.
7. Ne pas utiliser `git push --force` pour l'alignement initial.
8. Conserver une branche d'archive du dépôt officiel avant de remplacer son historique actif.
9. Vérifier le SHA exact publié et conserver un moyen de revenir à la version précédente.
10. Ne jamais enregistrer un jeton GitHub dans le dépôt, un script versionné ou un fichier Markdown.

# Phase 1 — Terminer et nettoyer le dépôt personnel

Avant toute synchronisation officielle :

- [ ] terminer la révision courante;
- [ ] fusionner les PR approuvées dans `emcmp/Z03/main`;
- [ ] vérifier qu'aucune branche utile ne contient encore des changements non fusionnés;
- [ ] supprimer ou archiver les branches devenues inutiles;
- [ ] vérifier que le dossier local est propre;
- [ ] vérifier que `main` correspond exactement à `origin/main`;
- [ ] exécuter le typecheck et le build;
- [ ] vérifier le déploiement personnel.

Commandes de contrôle :

```powershell
git status --short
git switch main
git pull --ff-only origin main
git fetch origin --prune
git branch -vv
npm run typecheck
npm run build
```

Résultat attendu :

```text
- aucune modification locale;
- aucune PR nécessaire encore en attente pour la publication;
- main à jour avec origin/main;
- build réussi;
- site personnel validé.
```

# Phase 2 — Ajouter le dépôt officiel comme deuxième remote

Dans le dossier local actuel de `emcmp/Z03` :

```powershell
git remote -v
git remote add cegep https://github.com/departement-info-cem/z03.git
git fetch cegep --prune
git remote -v
```

Résultat attendu :

```text
origin  https://github.com/emcmp/Z03.git
cegep   https://github.com/departement-info-cem/z03.git
```

Pour conserver le dépôt personnel comme destination implicite :

```powershell
git config remote.pushDefault origin
git branch --set-upstream-to=origin/main main
```

Ainsi :

```powershell
git push
```

continue de pousser vers le dépôt personnel. La publication officielle exige une commande contenant explicitement `cegep`.

# Phase 3 — Vérifier si les historiques sont déjà compatibles

Après :

```powershell
git fetch origin --prune
git fetch cegep --prune
```

examiner les deux historiques :

```powershell
git log --oneline --decorate --graph --all -n 40
```

Tester si le dépôt officiel peut avancer directement vers la version personnelle :

```powershell
git merge-base --is-ancestor cegep/main main
$LASTEXITCODE
```

Interprétation :

```text
0 → cegep/main est un ancêtre de main; un push rapide devrait être possible.
1 → les historiques ont divergé ou sont indépendants; faire l'alignement initial non destructif.
```

## Cas A — Avance rapide possible

```powershell
git push cegep main:main
```

Aucun remplacement d'historique n'est nécessaire.

## Cas B — Historiques divergents ou indépendants

Ne pas forcer le push. Conserver d'abord l'ancien historique officiel.

### Méthode non destructive recommandée

Dans GitHub, sur `departement-info-cem/z03` :

1. ouvrir **Settings → Branches**;
2. renommer la branche actuelle `main` en :

```text
archive-avant-synchronisation-2026
```

3. confirmer que cette branche contient toujours les anciens commits et essais de déploiement;
4. dans le dépôt local, actualiser les références :

```powershell
git fetch cegep --prune
```

5. créer une nouvelle branche officielle `main` à partir du `main` personnel validé :

```powershell
git switch main
git pull --ff-only origin main
git push cegep main:main
```

6. dans GitHub, remettre la nouvelle branche `main` comme branche par défaut;
7. conserver la branche `archive-avant-synchronisation-2026` jusqu'à ce que plusieurs publications officielles aient été validées.

Cette méthode évite un `force push` et conserve l'ancien état du dépôt officiel.

# Phase 4 — Publication manuelle normale après l'alignement

## Développement et prévisualisation

```powershell
git push origin main
```

Le dépôt personnel reste le lieu normal de travail, de PR et de prévisualisation.

## Contrôle avant production

```powershell
git status --short
git switch main
git pull --ff-only origin main
git fetch cegep --prune
npm run typecheck
npm run build
git rev-parse HEAD
git log -1 --oneline
```

Vérifier :

- [ ] le dossier est propre;
- [ ] la branche courante est `main`;
- [ ] `main` est à jour avec `origin/main`;
- [ ] le typecheck réussit;
- [ ] le build réussit;
- [ ] le SHA affiché est bien celui qui doit être publié;
- [ ] le site personnel correspondant a été vérifié.

## Publication officielle directe

```powershell
git push cegep main:main
```

Après le push :

- [ ] vérifier le workflow GitHub Actions du dépôt officiel;
- [ ] confirmer que le build et le déploiement réussissent;
- [ ] ouvrir le site officiel;
- [ ] vérifier quelques pages critiques et les ressources statiques;
- [ ] noter le SHA publié.

# Méthode recommandée à long terme — branche de publication et PR officielle

La publication directe vers `cegep/main` est simple, mais une branche de publication offre davantage de sécurité.

Exemple :

```powershell
$sha = git rev-parse --short HEAD
git push cegep main:publication-$sha
```

Puis ouvrir une PR dans `departement-info-cem/z03` :

```text
publication-<sha> → main
```

Avantages :

- le diff officiel peut être relu une dernière fois;
- le SHA publié est explicite;
- les validations peuvent s'exécuter avant la fusion;
- une publication accidentelle devient moins probable;
- la fusion de la PR déclenche ensuite le déploiement officiel.

# Phase 5 — Automatisation sécuritaire à confier à Codex

L'automatisation ne doit être mise en place qu'après :

1. la fusion et le nettoyage des branches du dépôt personnel;
2. l'alignement initial des deux dépôts;
3. au moins une publication manuelle réussie;
4. la validation du déploiement officiel.

## Fonctionnement cible

Lorsqu'une version est prête, l'enseignant donne une instruction explicite à Codex, par exemple :

```text
Mets en production sur le dépôt du Cégep le commit actuellement validé sur emcmp/Z03 main.
```

Codex doit alors :

1. identifier le SHA exact de `emcmp/Z03/main`;
2. confirmer que la branche est propre et que toutes les PR nécessaires sont fusionnées;
3. vérifier que les contrôles automatisés sont réussis;
4. vérifier que le remote officiel correspond exactement à `departement-info-cem/z03`;
5. vérifier qu'aucune publication plus récente n'est déjà présente;
6. pousser le SHA vers une branche officielle `publication/<date>-<sha>`;
7. ouvrir une PR vers `departement-info-cem/z03/main`;
8. exécuter ou vérifier le typecheck et le build dans le dépôt officiel;
9. fusionner seulement après une autorisation explicite de mise en production;
10. vérifier le déploiement et rapporter l'URL, le SHA et le résultat des contrôles.

## Script local envisagé

Codex pourra créer un script comme :

```text
scripts/publier-cegep.ps1
```

Le script devra refuser de continuer si :

- la branche courante n'est pas `main`;
- le dossier contient des modifications;
- `HEAD` ne correspond pas à `origin/main`;
- le remote `cegep` pointe vers une autre URL;
- le push ne serait pas une avance rapide;
- le typecheck ou le build échoue;
- le SHA à publier n'a pas été confirmé;
- une branche de publication du même SHA existe déjà.

Le script devrait offrir :

```text
- un mode --dry-run;
- un résumé avant toute écriture distante;
- une confirmation explicite;
- des messages d'erreur compréhensibles;
- un journal du SHA publié;
- aucune utilisation de force push.
```

# Authentification pour Codex

## Codex local

Préférer l'authentification GitHub déjà configurée sur le poste, par exemple avec Git Credential Manager ou GitHub CLI.

Ne jamais placer les identifiants dans le script.

## Automatisation exécutée par GitHub

Si une automatisation inter-dépôts est un jour exécutée par GitHub Actions :

- préférer une GitHub App ou un jeton finement limité;
- limiter les permissions aux deux dépôts nécessaires;
- conserver le secret dans les paramètres GitHub;
- ne jamais écrire le secret dans le dépôt;
- exiger un environnement protégé ou une approbation avant production;
- ne pas donner de permission administrative si une permission de contenu suffit.

Une automatisation inter-dépôts par GitHub Actions n'est pas nécessaire pour la première version du processus.

# Protection recommandée du dépôt officiel

Une fois le processus stabilisé :

- protéger `departement-info-cem/z03/main`;
- exiger une PR avant fusion;
- exiger le typecheck et le build;
- interdire les force push;
- empêcher la suppression de `main`;
- limiter les personnes et outils autorisés à fusionner;
- conserver le déploiement uniquement sur une fusion dans `main`;
- ajouter une approbation manuelle de l'environnement de production si la gouvernance du département le permet.

# Retour arrière

Avant chaque publication officielle, conserver :

- le SHA actuellement en production;
- le SHA proposé;
- la branche de publication;
- le résultat des contrôles.

Optionnellement, créer une étiquette Git :

```powershell
git tag production-2026-08-21 <sha>
git push cegep production-2026-08-21
```

En cas de problème, remettre en production un commit précédent doit se faire par une nouvelle PR ou une nouvelle publication explicite, et non par une réécriture silencieuse de l'historique.

# Handoff futur à Codex

Lorsque les opérations manuelles seront terminées, l'instruction à Codex devra inclure :

1. les deux dépôts exacts;
2. le rôle de `origin` et de `cegep`;
3. le SHA de référence déjà publié manuellement;
4. la règle d'absence de force push;
5. la méthode branche de publication → PR officielle;
6. les contrôles obligatoires;
7. la procédure de vérification du déploiement;
8. la stratégie de retour arrière;
9. les permissions autorisées;
10. la phrase ou l'autorisation explicite requise avant une mise en production.

# Résumé opérationnel

```text
Maintenant
→ terminer la révision
→ fusionner les PR
→ nettoyer les branches
→ valider main et le site personnel

Ensuite, manuellement
→ ajouter le remote cegep
→ préserver l'ancien main officiel
→ aligner les deux dépôts
→ réussir une première publication officielle

Enfin, avec Codex
→ créer un script sécurisé
→ publier par branche et PR officielle
→ exiger les contrôles et une autorisation explicite
→ vérifier et documenter chaque mise en production
```
