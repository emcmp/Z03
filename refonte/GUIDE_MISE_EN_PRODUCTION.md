# Guide court de mise en production

Ce guide décrit les phrases à dire à Codex. Les contrôles Git, les SHA, les builds et les vérifications du site sont pris en charge par les scripts locaux.

## Après une modification

1. Vérifier le site personnel.
2. Dire :

   > Prépare un candidat de production à partir de la version personnelle actuelle. Ne publie rien.

3. Lire le résumé de Codex et confirmer que le candidat est prêt, que les validations réussissent et que la production est inchangée.
4. Dire exactement :

   > GO production du candidat en attente

Cette dernière phrase est la seule autorisation de publication réelle. Une préparation, une vérification ou une correction ne publie jamais implicitement.

## Pour annuler un candidat

Dire :

> Annule le candidat de production en attente

Le candidat est conservé comme trace annulée; le site officiel ne change pas.

## Pour remplacer un candidat

Dire :

> Remplace le candidat de production par la version personnelle actuelle

Codex annule d'abord l'ancien candidat, revérifie le site personnel, puis prépare le nouveau. Si la nouvelle préparation échoue, la production reste inchangée et aucun candidat partiel n'est publié.

## À retenir

- Aucun SHA n'est à copier.
- Aucune commande Git n'est normalement à saisir.
- La production n'est jamais implicite.
- Une divergence ou une validation en échec arrête le processus et demande une intervention distincte.
