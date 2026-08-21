# Stratégie des dépôts et mise en production

**Statut : protocole cible; alignement initial non encore autorisé**

**Source de vérité : `emcmp/Z03`**

**Production : `departement-info-cem/z03`**

## Objectif

Conserver un seul historique de développement et promouvoir vers la production exactement la version approuvée, sans copie manuelle, sans force push et sans demander à l'utilisateur de manipuler un SHA.

```text
développement
→ preview personnelle
→ candidat unique et immuable
→ validation du candidat
→ GO humain explicite
→ avance rapide de la production
→ vérification et journal d'audit
```

## Architecture à deux remotes

```text
Dossier local Z03
│
├── origin  → https://github.com/emcmp/Z03.git
│             source de vérité, développement et preview
│
└── cegep   → https://github.com/departement-info-cem/z03.git
              candidats et production officielle
```

`origin` reste la destination implicite :

```powershell
git config remote.pushDefault origin
git branch --set-upstream-to=origin/main main
```

Ne jamais ajouter plusieurs URL de push à `origin`. Toute écriture vers le dépôt officiel doit nommer explicitement `cegep`.

## Invariants de sécurité

1. `emcmp/Z03` est la source de vérité.
2. Le dépôt officiel ne sert pas au développement courant.
3. Préparer un candidat n'autorise pas sa publication.
4. Seule la phrase exacte **« GO production du candidat en attente »** autorise une production.
5. Aucun force push n'est permis vers le dépôt officiel.
6. Un worktree sale arrête la préparation et la publication.
7. Un typecheck ou un build en échec arrête l'opération.
8. Les URL fetch et push des remotes doivent correspondre exactement aux deux dépôts attendus.
9. Il ne peut exister qu'un candidat actif sous `publication/candidat-*`.
10. Une évolution de `origin/main` ne remplace jamais silencieusement un candidat.
11. Une publication promeut le candidat préparé, jamais la version la plus récente par défaut.
12. `cegep/main` doit pouvoir avancer rapidement vers le candidat; sinon l'opération s'arrête.
13. GitHub Actions et le site officiel sont vérifiés après la production.
14. Codex trouve les SHA lui-même et les consigne pour l'audit.
15. La production ne doit pas dépendre d'un squash, d'un rebase ou d'un commit de fusion qui changerait l'identité du candidat.
16. Aucun secret, jeton d'accès ou identifiant ne doit être écrit dans le dépôt ou dans un script versionné.

## Commandes humaines

### Synchroniser et vérifier la preview

> Synchronise Z03 et vérifie la version personnelle. Ne touche pas à la production.

Cette commande autorise les opérations normales sur `origin`, mais aucune écriture vers `cegep`.

### Préparer un candidat

> Prépare un candidat de production à partir de la version personnelle actuelle. Ne publie rien.

Cette commande autorise la création d'une seule branche candidate dans le dépôt officiel. Elle n'autorise jamais une modification de `cegep/main`.

### Publier le candidat

> GO production du candidat en attente.

Cette phrase autorise seulement la promotion du candidat actif déjà préparé et revalidé. Elle n'autorise pas la publication d'un nouveau SHA.

### Annuler le candidat

> Annule le candidat de production en attente.

Le candidat est déplacé hors de l'espace actif, par exemple vers `publication/annule-...`, afin de préserver sa trace sans publier.

### Remplacer le candidat

> Remplace le candidat de production par la version personnelle actuelle.

L'ancien candidat est d'abord invalidé explicitement. La nouvelle version passe ensuite tous les contrôles de préparation. Si la nouvelle préparation échoue, aucune production n'a lieu.

## Contrôles communs obligatoires

Avant toute préparation ou production :

```powershell
git status --porcelain=v1
git branch --show-current
git remote get-url origin
git remote get-url --push origin
git remote get-url cegep
git remote get-url --push cegep
git fetch origin --prune
git fetch cegep --prune
```

Valeurs exigées :

```text
origin fetch/push : https://github.com/emcmp/Z03.git
cegep fetch/push  : https://github.com/departement-info-cem/z03.git
branche locale    : main, pour une préparation
worktree          : propre
```

Validations du contenu :

```powershell
npm run setup
npm run typecheck
npm run build
npm --prefix web run build:refonte
```

Le build Refonte est un contrôle interne. Il ne change pas le contenu publié par le workflow étudiant normal.

## Préparation d'un candidat

Le futur script `scripts/deploiement/preparer-candidat.ps1` devra :

1. exécuter tous les contrôles communs;
2. confirmer que `main`, `HEAD` et `origin/main` désignent le même commit;
3. confirmer que le workflow de preview de ce SHA a réussi;
4. refuser de continuer si une branche `publication/candidat-*` existe déjà sur `cegep`;
5. calculer lui-même le SHA complet et son préfixe court;
6. exécuter le typecheck et les deux builds;
7. créer `publication/candidat-YYYY-MM-DD-<sha-court>` directement au SHA complet;
8. relire la référence distante et confirmer qu'elle pointe encore vers ce SHA;
9. rapporter le nom du candidat et le SHA sans modifier `cegep/main`.

La branche candidate constitue le registre distant du candidat en attente. Le SHA est encodé dans son nom et vérifié contre sa cible réelle. Une branche candidate ne déclenche pas le déploiement Pages, qui reste limité à `main`.

Pseudo-commandes, à automatiser plutôt qu'à faire saisir à l'utilisateur :

```powershell
$candidateSha = git rev-parse origin/main
$shortSha = git rev-parse --short=7 $candidateSha
$candidateBranch = "publication/candidat-$(Get-Date -Format 'yyyy-MM-dd')-$shortSha"

git ls-remote --heads cegep "refs/heads/publication/candidat-*"
git push --dry-run cegep "$candidateSha`:refs/heads/$candidateBranch"
git push cegep "$candidateSha`:refs/heads/$candidateBranch"
git ls-remote --heads cegep "refs/heads/$candidateBranch"
```

Les deux dernières commandes sont des écritures ou vérifications sur le dépôt officiel, mais aucune ne touche `main`.

## Publication après le GO

Le futur script `scripts/deploiement/publier-candidat.ps1` ne sera créé qu'après l'alignement initial approuvé et testé. Il devra offrir `-DryRun` et procéder ainsi :

1. retrouver l'unique branche `publication/candidat-*` sur `cegep`;
2. refuser zéro ou plusieurs candidats;
3. vérifier que le SHA court du nom correspond au SHA complet de la branche;
4. ne pas substituer `origin/main` si celui-ci a changé depuis la préparation;
5. valider le candidat exact dans un worktree Git détaché et temporaire;
6. vérifier que `cegep/main` est un ancêtre du candidat;
7. effectuer un dry-run du push rapide;
8. afficher le candidat, l'ancien SHA officiel et le nouveau SHA;
9. exiger que l'instruction courante soit le GO exact;
10. pousser le SHA du candidat vers `cegep/main` sans force;
11. relire `cegep/main` et vérifier son SHA;
12. attendre le succès du workflow officiel et vérifier le site;
13. créer une trace `production/YYYY-MM-DD-<sha-court>`;
14. déplacer le candidat vers `publication/publie-...` seulement après vérification réussie.

La promotion technique doit être une avance rapide directe. Une PR GitHub fusionnée par merge, squash ou rebase créerait ou recréerait des commits et ne garantirait plus que `cegep/main` désigne exactement le candidat validé. La protection recommandée de `main` doit donc interdire les force push et les suppressions, restreindre les acteurs autorisés, mais permettre à l'acteur de publication désigné d'effectuer cette avance rapide après le GO.

## Alignement initial sans force push

Tant que `cegep/main` n'est pas un ancêtre du candidat personnel, un push rapide est impossible. Il ne faut ni fusionner automatiquement les historiques ni forcer `main`.

La méthode recommandée préserve l'ancien `main` officiel par renommage, puis crée un nouveau `main` au commit personnel validé.

### Précontrôles sans écriture officielle

```powershell
git status --porcelain=v1
git fetch origin --prune
git fetch cegep --prune
git rev-parse main
git rev-parse origin/main
git rev-parse cegep/main
git merge-base --is-ancestor cegep/main origin/main
npm run setup
npm run typecheck
npm run build
npm --prefix web run build:refonte
```

Arrêter si le worktree n'est pas propre, si `main` diffère de `origin/main`, si une validation échoue ou si les remotes sont inattendus.

### Opérations après une autorisation distincte d'alignement

1. **[ÉCRITURE OFFICIELLE]** Renommer la branche officielle actuelle :

   ```text
   main → archive/avant-alignement-YYYY-MM-DD-<sha-court-officiel>
   ```

   Le renommage préserve le commit et tout son historique sans force push ni suppression.

2. Actualiser les références locales et confirmer que la branche d'archive pointe vers l'ancien SHA officiel.

3. **[ÉCRITURE OFFICIELLE]** Créer le nouveau `main` directement au SHA validé de `origin/main` :

   ```powershell
   $candidateSha = git rev-parse origin/main
   git push --dry-run cegep "$candidateSha`:refs/heads/main"
   git push cegep "$candidateSha`:refs/heads/main"
   ```

4. **[MODIFICATION DE CONFIGURATION OFFICIELLE]** Remettre `main` comme branche par défaut.

5. Ne pas modifier la configuration GitHub Pages si le mode `workflow` fonctionne toujours.

6. Vérifier que `cegep/main` est identique au SHA validé, que le workflow officiel réussit et que le site répond correctement.

7. Conserver la branche d'archive et les autres branches historiques jusqu'à une décision de conservation explicite.

Cette opération provoque une production officielle lors de la création du nouveau `main`. Elle exige donc une autorisation d'alignement et de première production distincte de la présente phase d'audit.

## GitHub Actions et Pages

Le workflow versionné `.github/workflows/deploy.yml` est le seul mécanisme de déploiement attendu. Il doit :

- se déclencher automatiquement sur un push à `main`;
- installer avec Node.js 20 et `npm ci` dans `web/`;
- exécuter le typecheck avant le build;
- construire `web/build`;
- empêcher le job de déploiement si la référence n'est pas `refs/heads/main`;
- utiliser une concurrence Pages qui ne laisse pas deux productions se chevaucher;
- téléverser uniquement `web/build`;
- déployer avec l'environnement `github-pages`.

Il ne faut pas conserver un deuxième workflow qui téléverse la racine du dépôt. Une branche candidate peut être bâtie manuellement pour diagnostic, mais ne doit jamais être déployée par `workflow_dispatch`.

La configuration Docusaurus reste portable :

```text
emcmp/Z03                  → https://emcmp.github.io/Z03/
departement-info-cem/z03  → https://info.cegepmontpetit.ca/z03/
```

## Scripts futurs

Architecture proposée après l'alignement initial :

```text
scripts/deploiement/
├── verifier-preview.ps1       # lecture seule
├── preparer-candidat.ps1      # crée une branche candidate, jamais main
├── publier-candidat.ps1       # -DryRun; main seulement après le GO
└── annuler-candidat.ps1       # sort le candidat de l'espace actif
```

Les contrôles partagés devraient être centralisés dans un module interne non exporté comme commande de publication. Aucun script ne doit contenir de jeton, contourner une protection ou accepter `--force`.

## Protection recommandée

Après l'alignement initial :

- interdire les force push et la suppression de `main`;
- restreindre les mises à jour de `main` aux acteurs de publication désignés;
- protéger `publication/candidat-*` contre la réécriture;
- conserver l'environnement GitHub `github-pages`;
- ajouter une approbation d'environnement si elle ne casse pas le déploiement automatique de la preview personnelle;
- ne pas exiger une méthode de fusion qui change le SHA du candidat;
- activer HTTPS pour le domaine officiel après vérification séparée du domaine et du certificat.

## Retour arrière

Un retour arrière est une nouvelle publication explicite d'un commit précédemment validé. Il ne réécrit pas l'historique. Le journal doit conserver :

- le SHA officiel précédent;
- le SHA du candidat;
- le nom de la branche candidate;
- la date et l'auteur de l'autorisation;
- les résultats du typecheck et des builds;
- l'URL et le résultat du workflow Pages;
- le résultat de la vérification du site.

Le retour arrière suit les mêmes contrôles et exige une autorisation humaine explicite.
