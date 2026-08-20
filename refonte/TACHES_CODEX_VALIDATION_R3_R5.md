# Tâches Codex — validation technique des rencontres 3 à 5

**Statut : terminé**

**Date : 2026-08-19**  
**Responsabilité pédagogique : GPT-concepteur**

Ce lot sert à valider techniquement le bloc CSS nouvellement rédigé avant la relecture pédagogique transversale R1 → R5.

Codex ne doit pas changer la portée pédagogique, ajouter de nouvelles notions CSS ou réécrire les exercices pour les « améliorer ».

## État de départ

Le GPT-concepteur a déjà créé ou réécrit sur `main` :

### Rencontre 3

- `web/docs/01-cours/03-rencontre3.md`
- `web/docs/01-cours/03-rencontre3-exercice-guide.md`
- `web/docs/03-projet-web/03-rencontre3.md`
- `refonte/DECISIONS_RENCONTRE3.md`

### Rencontre 4

- `web/docs/01-cours/04-rencontre4.md`
- `web/docs/01-cours/04-rencontre4-exercice-guide.md`
- `web/docs/03-projet-web/04-rencontre4.md`
- `refonte/DECISIONS_RENCONTRE4.md`

### Rencontre 5

- `web/docs/01-cours/05-rencontre5.md`
- `web/docs/01-cours/05-rencontre5-exercice-guide.md`
- `web/docs/03-projet-web/05-rencontre5.md`
- `refonte/DECISIONS_RENCONTRE5.md`

La navigation `web/sidebars.js` présente maintenant R3, R4 et R5 selon la structure :

```text
Cours
Exercice guidé
Projet Web — Étape N
```

Le conteneur du GPT-concepteur n'a pas pu lancer le build parce qu'il ne pouvait pas résoudre `github.com` pour cloner le dépôt. Il n'y a donc pas d'échec Docusaurus connu; la validation locale reste simplement à faire.

# CODEX-R3R5-01 — Synchroniser et inspecter l'état local

**État : Terminé**

**Résultat :** `main` est propre au point de départ et synchronisé avec `origin/main` (`0` commit en avance, `0` commit en retard). Aucun changement utilisateur n'a été écrasé.

1. Lire `AGENTS.md`, `web/AGENTS.md`, `refonte/PLAN_IMPLEMENTATION_RENCONTRES_1_A_5.md` et le présent fichier.
2. Vérifier :

```bash
git status --short
git branch --show-current
git log --oneline -12
```

3. Récupérer les changements de `main` si le dépôt local n'est pas à jour, sans écraser de changement local de l'utilisateur.
4. Ne pas utiliser `reset --hard`, `clean -fd` ou force-push.

# CODEX-R3R5-02 — Vérifier les fichiers et les liens

**État : Terminé**

**Résultat :** les neuf pages existent; les neuf IDs du sidebar correspondent aux IDs Docusaurus dérivés des chemins et sont confirmés par le build; les parcours Cours → Exercice guidé → Projet Web et les retours Projet Web → Cours / Exercice sont résolus; les étapes 3, 4 et 5 portent respectivement les positions 4, 5 et 6; aucun lien local des neuf pages ne vise un fichier absent.

Vérifier mécaniquement :

- que les neuf pages R3–R5 existent;
- que les IDs utilisés dans `web/sidebars.js` sont résolus par Docusaurus;
- que les liens Cours → Exercice guidé → Projet Web fonctionnent dans les trois rencontres;
- que les liens Projet Web → Cours / Exercice fonctionnent;
- que les étapes 3, 4 et 5 apparaissent dans le sidebar Projet Web dans le bon ordre;
- qu'aucune page ne pointe vers un fichier absent.

Ne pas changer le contenu pédagogique sauf correction technique non ambiguë d'un chemin ou d'un lien.

# CODEX-R3R5-03 — Vérifier les assets

**État : Terminé**

**Résultat :** les six images utilisées par R3 et les quatre images utilisées par R4 existent dans les répertoires attendus, sont des PNG lisibles et ont toutes un texte alternatif non vide. R5 ne référence aucune nouvelle image obligatoire.

Pour R3, confirmer l'existence des images référencées sous :

`web/static/img/cours-introduction-css/`

Pour R4, confirmer l'existence des images référencées sous :

`web/static/img/cours-modele-boites-positionnement/`

R5 n'a pas de nouvelle ressource obligatoire.

Si une image référencée n'existe pas :

- ne pas en inventer une;
- corriger le lien seulement si le fichier correspondant existe clairement sous un autre nom;
- sinon signaler le problème au GPT-concepteur.

# CODEX-R3R5-04 — Build et contrôle visuel

**État : Terminé**

**Résultat :** après `npm run clear` pour retirer un cache Docusaurus incohérent, `npm run build` réussit. `git diff --check` réussit. Le serveur statique a rendu les neuf routes avec un statut HTTP 200; les titres, admonitions, blocs de code, liens, images et l'ordre du sidebar Projet Web sont présents dans le HTML généré. L'automatisation du navigateur intégrée a refusé la connexion; le contrôle a donc été complété par l'inspection du HTML rendu, des réponses HTTP et d'images représentatives à pleine taille.

Depuis la racine :

```bash
npm run build
git diff --check
```

Si possible, lancer ensuite :

```bash
npm run start
```

ou :

```bash
npm run serve
```

Vérifier visuellement au minimum :

- sidebar R3, R4, R5;
- titres et admonitions;
- blocs de code HTML/CSS;
- images R3/R4;
- liens vers les exercices et le Projet Web;
- absence de page 404 dans le parcours R3 → R5;
- absence de débordement ou de rendu manifestement cassé causé par le Markdown/MDX.

Ne pas juger ou réécrire le poids pédagogique à ce stade.

# CODEX-R3R5-05 — Réconcilier la documentation de suivi

**État : Terminé**

**Dépend de : build réussi**

**Résultat :** le plan marque R3-01 à R5-05 terminés et les trois rencontres prêtes à réviser; `SUIVI_CONTENU.md` consigne les migrations et conserve les sources historiques; les trois fichiers de décisions consignent le build et les contrôles réussis. Le point de reprise est REV-01, puis REV-02.

Mettre à jour `refonte/PLAN_IMPLEMENTATION_RENCONTRES_1_A_5.md` avec l'état réel :

- R3-01 à R3-05 → `Terminé` si le build et les contrôles réussissent;
- R4-01 à R4-05 → `Terminé` si le build et les contrôles réussissent;
- R5-01 à R5-05 → `Terminé` si le build et les contrôles réussissent;
- Rencontre 3, 4 et 5 dans le tableau d'état → `Prêt à réviser` ou `Terminé` selon la convention du plan;
- point de reprise → `REV-01 — Relecture ciblée de la rencontre 2`, puis `REV-02 — Lecture transversale R1 → R5`.

Mettre aussi à jour `refonte/SUIVI_CONTENU.md` :

- indiquer que `00-introduction-css.md` a été condensé dans la page canonique R3;
- indiquer que `00-modele-boites-positionnement.md` a été fortement allégé pour R4;
- indiquer que le Flexbox minimal de R5 est une nouvelle synthèse ciblée, remplaçant `inline-block` comme outil introductif de disposition;
- ajouter au journal les créations des cours, exercices guidés et étapes Projet Web R3–R5;
- ne supprimer aucune source historique.

Mettre à jour les trois fichiers de décisions si nécessaire pour remplacer « validation technique requise » par le résultat réel du build.

# CODEX-R3R5-06 — Rapport final

**État : Terminé**

Fournir :

1. résultat de `npm run build`;
2. résultat de `git diff --check`;
3. liste des corrections techniques effectuées;
4. résultat du contrôle visuel;
5. fichiers de suivi modifiés;
6. `git status --short` final;
7. problèmes qui exigent une décision pédagogique plutôt qu'une correction technique.

## Git

Ne créer ni commit ni push sans autorisation explicite de l'utilisateur.

Si l'utilisateur autorise ensuite un commit :

- inclure uniquement les fichiers de suivi et corrections techniques de ce lot;
- ne pas mélanger d'autres changements locaux;
- ne jamais pousser vers `departement-info-cem/z03`.

## Point de reprise après ce lot

Une fois cette validation terminée, le GPT-concepteur reprend :

> **REV-01 — relecture ciblée de R2**, puis **REV-02 — lecture transversale R1 → R5** pour juger le poids réel de chaque rencontre.
