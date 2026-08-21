# Plan d’industrialisation du déploiement

**Date : 2026-08-21**

**Branche : `chore/industrialise-deploiement`**

**Portée : outils locaux, tests et documentation; aucune écriture vers le dépôt officiel pendant ce chantier**

## Suivi

| Tâche | État | Dépendances | Fichiers visés | Définition de « terminé » |
| --- | --- | --- | --- | --- |
| Vérifier l’état initial des dépôts | Terminé | Accès Git et GitHub en lecture | Aucun | Worktree propre, remotes exacts, `origin/main == cegep/main`, aucun candidat actif |
| Concevoir les contrôles partagés | Terminé | Rapports des phases 1, 1.5, 2A et 2B | `scripts/deploiement/commun.ps1` | Contrôles Git, GitHub, HTTP, worktree et journalisation centralisés sans écriture officielle implicite |
| Implémenter les quatre opérations | Terminé | Contrôles partagés | `scripts/deploiement/*.ps1` | Preview, préparation, publication et annulation possèdent un mode `-DryRun` sûr et des erreurs explicites |
| Ajouter les tests autonomes | Terminé | Scripts disponibles | `scripts/deploiement/tests/` | Cas sûrs et cas refusés vérifiés sans accès en écriture aux vrais remotes |
| Actualiser les règles et la stratégie | Terminé | Comportement final des scripts | `AGENTS.md`, `refonte/STRATEGIE_DEPOTS_ET_MISE_EN_PRODUCTION.md` | Alignement réussi, workflow normal et arrêt sur divergence documentés |
| Créer le guide opérateur | Terminé | Commandes humaines stabilisées | `refonte/GUIDE_MISE_EN_PRODUCTION.md` | Guide court, sans SHA ni commande Git à recopier |
| Valider localement | En cours | Implémentation terminée | Aucun fichier généré suivi | npm, builds, dry-runs, tests et `git diff --check` réussissent |
| Livrer pour révision | À faire | Validations réussies | PR brouillon personnelle | Commits logiques, push vers `origin` seulement, Actions vertes, `cegep` inchangé |

## Dépendances et contraintes

- PowerShell 5.1, Git, GitHub CLI, Node.js et npm sont les seuls outils requis.
- Le dépôt officiel `departement-info-cem/z03` reste en lecture seule pendant l’implémentation et les tests.
- Les scripts déterminent les SHA automatiquement et n’acceptent jamais de force push.
- Une divergence d’historique, une référence candidate ambiguë ou une validation en échec arrête l’opération.
- Les journaux sont écrits uniquement sous `.codex-temp/deploiement/`, déjà ignoré.

## Critère global de fin

Le chantier est terminé lorsque les scripts et leurs tests passent localement, que la PR brouillon personnelle est verte, que `cegep/main` et toutes les branches officielles sont identiques à l’état initial, et qu’aucun candidat officiel n’a été créé.
