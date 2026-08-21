# Rapport d'assainissement — phase 1.5

**Date : 2026-08-21**

**Portée : source personnelle `emcmp/Z03` seulement**

**État : PR brouillon créée — validation GitHub sous Node 20 réussie**

## Plan et suivi

| Tâche | État | Dépendances | Définition de « terminé » |
| --- | --- | --- | --- |
| Vérifier l'état initial et le contenu préparé en phase 1 | Terminé | Références Git locales et distantes | `HEAD` identique à `origin/main`, remotes conformes, aucun changement étranger |
| Créer la branche de travail | Terminé | État initial conforme | Branche dédiée créée sans perdre les changements locaux |
| Auditer `.codex-temp/` | Terminé | Fichiers locaux présents | Inventaire, taille et recherche de dépendances consignés |
| Retirer `.codex-temp/` du suivi sans effacement local | Terminé | Exclusion `.gitignore` confirmée | Aucun fichier suivi; 503 fichiers locaux toujours présents et ignorés |
| Finaliser les garde-fous de phase 1 | Terminé | Audit du workflow et de la documentation | PR validée sans capacité de déploiement |
| Exécuter les validations locales | Terminé | Modifications finalisées | Toutes les commandes imposées réussissent |
| Créer les commits et la PR brouillon personnelle | Terminé | Diff final inspecté | Branche poussée uniquement vers `origin`; PR brouillon créée |
| Vérifier GitHub Actions sous Node 20 | Terminé | PR brouillon disponible | Installation, typecheck et build réussis; déploiement ignoré |

## Commits préparés

```text
dad22d2 chore: retire les artefacts Codex du suivi Git
b6ad30a chore: sécurise le protocole de déploiement
4dfd63e docs: consigne l’assainissement de la source
ebce05f chore: corrige le formatage de gitignore
```

Un dernier commit documentaire consigne le résultat de la PR sans réécrire les commits précédents.

## État initial

```text
branche initiale : main
SHA de départ    : 990cbf580a976a56a74b6014948cedf1ea982178
origin/main      : 990cbf580a976a56a74b6014948cedf1ea982178
branche créée    : chore/assainissement-source-personnelle
pushDefault      : origin
```

```text
origin fetch/push : https://github.com/emcmp/Z03.git
cegep fetch/push  : https://github.com/departement-info-cem/z03.git
```

## Inventaire de `.codex-temp/`

Le répertoire contenait 503 fichiers suivis, tous encore présents localement, pour 60 774 205 octets, soit environ 57,96 Mio.

| Sous-dossier | Fichiers |
| --- | ---: |
| `r01-html-editorial` | 121 |
| `r01-html-extraction-audit` | 54 |
| `r02-css-editorial` | 121 |
| `r03-box-model-editorial` | 207 |

Répartition principale : 488 PNG, 4 GIF, 3 JSON, 3 PPTX, 3 TXT, 1 JPG et 1 script PowerShell d'extraction.

La recherche n'a trouvé aucune dépendance fonctionnelle : aucun build, test, import, workflow, configuration ou source ne référence `.codex-temp/`. Les seules références hors du répertoire sont des mentions documentaires dans le rapport de phase 1.

La commande suivante a retiré les 503 fichiers de l'index sans les effacer localement :

```powershell
git rm -r --cached --ignore-unmatch -- .codex-temp
```

Après l'opération :

```text
fichiers encore suivis : 0
fichiers locaux présents : 503
règle d'exclusion : .gitignore:2:/.codex-temp/
réécriture historique : aucune
```

## Changements de sécurité préparés

- `origin` demeure la destination de push implicite;
- le dépôt personnel est la source de vérité et le dépôt du cégep est la production;
- le candidat de production est unique, verrouillé par SHA et distinct de l'autorisation de production;
- le workflow personnel valide les PR sous Node 20;
- le job Pages est limité aux événements `push` sur `main`;
- une PR, une branche de travail ou un déclenchement manuel ne peut pas déployer;
- le typecheck et le build précèdent tout déploiement;
- les permissions Actions sont minimales et l'artéfact publié reste `web/build`;
- les secrets et jetons sont interdits dans les fichiers versionnés;
- le correctif Refonte lance Docusaurus directement avec Node, de façon portable entre Windows et Linux.

## Fichiers modifiés

Les changements fonctionnels et documentaires sont limités aux chemins suivants :

```text
.gitignore
.github/workflows/deploy.yml
AGENTS.md
package.json
refonte/AUDIT_DEPLOIEMENT_PHASE_1_2026-08-21.md
refonte/RAPPORT_ASSAINISSEMENT_PHASE_1_5_2026-08-21.md
refonte/STRATEGIE_DEPOTS_ET_MISE_EN_PRODUCTION.md
web/scripts/run-refonte.cjs
```

À ceux-ci s'ajoutent exactement 503 suppressions de l'arbre Git courant sous `.codex-temp/`. Aucun autre chemin n'est modifié.

## Validations locales

Environnement local : Node 22.16.0 et npm 11.13.0.

| Commande | Résultat |
| --- | --- |
| `npm ci` | Réussi; une seule entrée racine, aucune vulnérabilité à ce niveau |
| `npm run setup` | Réussi; 1 515 paquets vérifiés dans `web/` |
| `npm run typecheck` | Réussi |
| `npm run build` | Réussi |
| `npm --prefix web run build:refonte` | Réussi |

`npm run setup` signale 65 vulnérabilités héritées : 7 faibles, 21 modérées, 35 élevées et 2 critiques. Aucun `npm audit fix`, changement de version ou changement volontaire du fichier de verrouillage n'a été effectué.

Les builds conservent des avertissements non bloquants sur `onBrokenMarkdownLinks`, Browserslist et les données `baseline-browser-mapping` vieillissantes.

## Validation GitHub Actions sous Node 20

PR brouillon personnelle : <https://github.com/emcmp/Z03/pull/4>

Workflow : <https://github.com/emcmp/Z03/actions/runs/32516568140>

| Job | Résultat |
| --- | --- |
| `Build le site` | Réussi sous Node 20 en 1 min 31 s |
| `Déployer le site` | Ignoré comme prévu |

Le workflow a été déclenché par `pull_request`. Il a exécuté `npm ci`, le typecheck et le build. La condition du job Pages a empêché tout déploiement depuis la PR.

## Risques volontairement reportés

- les anciens blobs `.codex-temp/` demeurent dans l'historique Git;
- les vulnérabilités npm héritées feront l'objet d'un chantier distinct;
- la protection des branches et l'alignement du dépôt officiel nécessitent une autorisation ultérieure;
- le double workflow et HTTPS non imposé dans le dépôt officiel ne sont pas modifiés pendant cette phase.

## Reproduire les vérifications

```powershell
git rev-parse HEAD
git rev-parse origin/main
git remote -v
git config --get remote.pushDefault
git ls-files -- .codex-temp
git check-ignore -v .codex-temp/r01-html-editorial/curated-montage.png
npm ci
npm run setup
npm run typecheck
npm run build
npm --prefix web run build:refonte
git diff --check
git status --short
```

## Dépôt officiel

Le dépôt `departement-info-cem/z03` doit demeurer strictement inchangé pendant toute cette phase. Son SHA de référence en lecture seule reste `6d3221981bae41a25fd84d31a9d2e1b5f8a55128` jusqu'à vérification finale.

## Prochaine étape recommandée

Faire réviser la PR personnelle, puis la fusionner uniquement après une décision humaine distincte. Aucun candidat de production ne doit être créé pendant la phase 1.5.
