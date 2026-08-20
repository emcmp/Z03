# Tâches Codex — préparation du premier cours Z03

**Statut : lot CODEX-BD terminé**
**Portée : préparation immédiate du premier cours et vérifications techniques des rencontres 1 à 5**  
**Document maître pédagogique : `PLAN_IMPLEMENTATION_RENCONTRES_1_A_5.md`**

Ce fichier contient les tâches qui sont particulièrement adaptées à **Codex local**, parce qu'elles demandent un accès direct au dépôt, au système de fichiers, aux fichiers PowerPoint, à Git, à Node/Docusaurus ou à un navigateur local.

Le **GPT-concepteur** conserve la responsabilité des décisions pédagogiques, de la progression des notions, de la rédaction des rencontres 3 à 5 et du Projet Web. Codex ne doit pas étendre la portée pédagogique de lui-même.

## Règles générales pour Codex

Avant toute tâche :

1. lire `AGENTS.md`;
2. lire `web/AGENTS.md`;
3. lire `refonte/REFONTE.md`;
4. lire `refonte/PLAN_IMPLEMENTATION_RENCONTRES_1_A_5.md`;
5. lire le présent fichier;
6. exécuter `git status --short`, `git branch --show-current` et regarder les derniers commits;
7. préserver tous les changements locaux de l'utilisateur;
8. ne jamais utiliser `git reset --hard`, `git clean -fd`, un force-push ou une réécriture d'historique;
9. ne pas pousser vers GitHub ou vers le dépôt officiel sans demande explicite de l'utilisateur.

Si le worktree contient des changements non reliés à la tâche, **ne pas les écraser et ne pas les inclure dans le commit**. Signaler le conflit de portée avant de continuer si nécessaire.

## État observé avant délégation

Au moment de la création de ce fichier, l'état réel de `main` est plus avancé que certains statuts du plan :

- `web/docusaurus.config.js` contient déjà un onglet **Bien débuter** utilisant `sidebarId: "bienDebuter"`;
- `web/sidebars.js` contient déjà le sidebar `bienDebuter` avec **Fonctionnement du cours** et **Accès au poste et compte réseau**;
- `web/docs/acces-poste-compte-reseau.md` existe déjà et contient les liens vers le compte réseau, la 2FA et l'aide technologique;
- `web/docs/01-cours/01-rencontre1-environnement.md` contient déjà les explications textuelles sur dossiers, extensions, ZIP et VS Code;
- les quatre captures VS Code sont déjà présentes dans `web/static/img/rencontre1/`;
- les captures Windows/ZIP provenant du PowerPoint **Environnement de travail** ne sont pas encore présentes dans `web/static/img/rencontre1/`.

Le premier travail de Codex est donc de **réconcilier les statuts documentés avec l'état réel du dépôt**, et non de refaire ce qui existe déjà.

---

# Lot prioritaire CODEX-BD — Bien débuter et environnement

## CODEX-BD-00 — Réconcilier l'état réel et le plan

**État : Terminé**

**Résultat :** BD-01 et BD-02 du plan ont été confirmés puis marqués terminés. L'onglet **Bien débuter**, son sidebar et les deux pages attendues sont présents.

### Objectif

Vérifier précisément ce qui est déjà terminé dans la phase BD/R1 et mettre les statuts du plan à jour avant de modifier davantage le site.

### Fichiers à vérifier

- `refonte/PLAN_IMPLEMENTATION_RENCONTRES_1_A_5.md`
- `web/docusaurus.config.js`
- `web/sidebars.js`
- `web/docs/acces-poste-compte-reseau.md`
- `web/docs/fonctionnement-du-cours.md`
- `web/docs/01-cours/01-rencontre1-environnement.md`
- `refonte/RESSOURCES_A_FOURNIR.md`

### Résultat attendu

- marquer **BD-01** terminé si la navigation Bien débuter est réellement fonctionnelle;
- marquer **BD-02** terminé si la page Compte réseau existe, est liée dans Bien débuter et contient des liens valides;
- laisser BD-03/04/05 ouverts tant que l'audit PowerPoint, les images et le build ne sont pas terminés;
- ajouter une courte note de reprise dans le plan si l'état réel diffère encore de la documentation.

Ne pas réécrire le contenu pédagogique simplement pour uniformiser le style.

---

## CODEX-BD-01 — Auditer l'ancien Atelier

**État : Terminé**

**Résultat :** les destinations actuelles de compte réseau, 2FA, Teams/Mio et OneDrive sont documentées dans le plan et le suivi des ressources. L'autodiagnostic n'est pas retenu dans la nouvelle formule; la formation d'équipes n'est pas reprise.

### Source

`web/docs/01-cours/01-rencontre1.1.md`

### Décisions déjà prises — ne pas les redécider

L'ancien Atelier contient plusieurs éléments. Les décisions pour cette passe sont :

- **Compte réseau** : pertinent; déjà déplacé vers `web/docs/acces-poste-compte-reseau.md`.
- **Double authentification (2FA)** : pertinente; déjà liée depuis la page Compte réseau.
- **Teams** : ne pas créer une nouvelle page Atelier. Les règles de communication Teams/Mio sont déjà dans `web/docs/fonctionnement-du-cours.md`. Signaler seulement un élément vraiment utile qui manquerait encore.
- **Google Drive** : ne pas restaurer. Le cours actuel utilise **OneDrive** comme stockage de référence dans le préambule.
- **Formation d'équipes de 2** : ne pas réintégrer dans la documentation principale pour cette passe.
- **Autodiagnostic informatique** : **non retenu**. Ne pas publier ni remettre le formulaire dans la navigation; le conserver uniquement dans la source historique de l'ancien Atelier.

### Travail demandé

Comparer l'ancien Atelier avec :

- `web/docs/acces-poste-compte-reseau.md`;
- `web/docs/fonctionnement-du-cours.md`;
- `web/docs/01-cours/01-rencontre1-environnement.md`.

Ajouter dans le plan ou le suivi une courte note confirmant que les éléments utiles ont une destination actuelle et que les éléments non retenus ne sont pas perdus.

Ne pas supprimer `01-rencontre1.1.md` : il demeure une source historique pendant la refonte.

---

## CODEX-BD-02 — Localiser et auditer le PowerPoint « Environnement de travail »

**État : Terminé**

**Résultat :** source retrouvée dans `P:/Projects/_CEGEP/Z03-Local/R01/Environnement de travail.pptx`; les 12 diapositives, leur texte et leurs 20 médias utiles ont été inspectés. Le tableau d'audit est consigné dans le plan principal.

### Pourquoi Codex local

Cette tâche est plus simple localement : le fichier PowerPoint peut être présent dans le dossier de travail, dans un dossier source ou à proximité du projet, et son contenu peut être extrait directement sans passer par GitHub.

### Travail demandé

1. Chercher raisonnablement le fichier `Environnement de travail.pptx` dans le dépôt et dans les emplacements de travail accessibles à Codex. Ne pas scanner inutilement tout le disque.
2. S'il est introuvable, **ne pas inventer les captures** : marquer la tâche bloquée et indiquer exactement où l'utilisateur doit déposer le `.pptx` pour reprendre.
3. S'il est trouvé, analyser les diapositives et les médias. Une méthode possible est d'utiliser `python-pptx` ou de traiter le `.pptx` comme une archive ZIP et d'examiner `ppt/media/` et les relations de diapositives.
4. Ne pas utiliser d'OCR si le texte des diapositives est directement accessible dans le PPTX.
5. Produire un petit tableau d'audit dans le plan ou le suivi avec, pour chaque notion : `présent dans le texte`, `illustré`, `à intégrer`, `non retenu`.

### Couverture à retrouver

Vérifier au minimum :

- avertissement sur les fichiers laissés sur les postes du Cégep;
- arborescence / hiérarchie de dossiers;
- racine / Ce PC / disques et supports;
- création d'un dossier;
- fichiers et extensions;
- affichage des extensions;
- principe d'une archive ZIP;
- compression d'un dossier;
- archive ZIP créée / contenu de l'archive;
- extraction / décompression;
- résultat après extraction;
- avertissement final : **ne jamais travailler directement dans le ZIP**.

---

## CODEX-BD-03 — Extraire et nommer les captures historiques utiles

**État : Terminé**
**Dépend de : CODEX-BD-02**

**Résultat :** six captures source ont été copiées sans recompression dans `web/static/img/rencontre1/` avec des noms stables.

### Destination

`web/static/img/rencontre1/`

### Principe

Les captures peuvent être anciennes. Elles servent de **version provisoire immédiatement utilisable**. Il est préférable d'avoir une procédure illustrée et claire maintenant, puis de remplacer les PNG plus tard, que de bloquer le premier cours en attendant des captures parfaites.

### Noms de fichiers recommandés

Utiliser les noms stables suivants lorsque les captures correspondantes existent réellement dans le PowerPoint :

- `windows-ce-pc-disques.png`
- `windows-creer-dossier.png`
- `windows-extensions-cachees.png`
- `windows-afficher-extensions.png`
- `windows-extensions-affichees.png`
- `windows-compresser-zip.png`
- `windows-zip-cree.png`
- `windows-contenu-archive.png`
- `windows-extraire-zip.png`
- `windows-apres-extraction.png`
- `windows-ne-pas-travailler-dans-zip.png`

Ne pas créer un fichier artificiel pour un élément qui n'existe pas clairement dans la source.

Conserver les proportions des captures. Éviter les recompressions destructives ou les redimensionnements inutiles. PNG est approprié pour ces captures d'interface.

---

## CODEX-BD-04 — Intégrer les captures dans le préambule

**État : Terminé**
**Dépend de : CODEX-BD-03**

**Résultat :** les six captures sont placées aux sections Racine, Création de dossier, Extensions et ZIP. L'admonition `:::danger` demeure en place et porte le message prioritaire d'extraction.

### Fichier principal

`web/docs/01-cours/01-rencontre1-environnement.md`

### Travail demandé

Insérer les captures aux endroits naturels du document, sans transformer la page en galerie d'images.

Priorité visuelle :

1. création d'un dossier;
2. extensions cachées / affichage des extensions;
3. compression ZIP;
4. extraction ZIP;
5. avertissement visuel **ne pas travailler directement dans l'archive**.

Les captures `Ce PC / disques`, `archive créée`, `contenu de l'archive` et `après extraction` peuvent être ajoutées seulement si elles améliorent réellement la compréhension et ne rendent pas la page trop lourde.

Ajouter une seule note générale indiquant que les captures Windows peuvent différer légèrement selon la version de Windows ou de l'outil d'archive.

Conserver l'admonition `:::danger` sur le ZIP. Le message le plus important est : **extraire d'abord, puis travailler dans le dossier extrait**.

Ne pas modifier la progression HTML de la rencontre 1.

---

## CODEX-BD-05 — Mettre à jour le suivi des ressources

**État : Terminé**
**Dépend de : CODEX-BD-03/04**

**Résultat :** les six ressources sont marquées **Provisoire intégré** avec leur chemin, leur fonction et la possibilité d'un remplacement moderne sous le même nom. L'autodiagnostic est marqué **Non retenu**.

Fichier : `refonte/RESSOURCES_A_FOURNIR.md`.

Pour chaque capture intégrée :

- indiquer son chemin final;
- indiquer son usage;
- utiliser l'état **Provisoire intégré**;
- préciser qu'un remplacement moderne est facultatif et peut conserver le même nom de fichier.

Mettre à jour les anciennes lignes `À fournir` pour éviter qu'elles donnent l'impression que les ressources manquent encore.

Conserver l'autodiagnostic comme **Non retenu**, sans le réintroduire dans le parcours étudiant.

---

## CODEX-BD-06 — Vérification locale Docusaurus et visuelle

**État : Terminé**
**Dépend de : CODEX-BD-00 à 05**

**Résultat :** `npm run build` réussit. Le build statique contient Bien débuter, Fonctionnement, Compte réseau, le préambule et le passage au cours HTML. Les dix images référencées existent, possèdent un texte alternatif et conservent leurs dimensions intrinsèques. Les trois liens institutionnels répondent HTTP 200. Le navigateur automatisé n'était pas disponible; les PNG ont été inspectés individuellement à pleine taille et le HTML généré a été contrôlé.

### Vérifications obligatoires

Depuis la racine du dépôt :

```bash
npm run build
git diff --check
```

Puis, si possible :

```bash
npm run start
```

ou utiliser le build statique avec `npm run serve`.

Vérifier visuellement au minimum :

- onglet **Bien débuter**;
- page **Fonctionnement du cours**;
- page **Accès au poste et compte réseau**;
- préambule **Environnement de travail**;
- taille et lisibilité des captures;
- absence de captures étirées ou trop petites;
- liens vers Compte réseau, 2FA et aide technologique;
- navigation vers le cours HTML de la rencontre 1.

Si un lien institutionnel externe ne peut pas être testé à cause du réseau, le signaler sans supprimer le lien.

### Fin du lot

Mettre à jour :

- `refonte/PLAN_IMPLEMENTATION_RENCONTRES_1_A_5.md`;
- `refonte/RESSOURCES_A_FOURNIR.md`;
- le présent fichier, avec les statuts réels et un point de reprise.

---

# Tâches Codex facultatives après la phase BD/R1

Le GPT-concepteur rédigera normalement R3, R4 et R5. Codex peut ensuite être utilisé pour des contrôles techniques bornés.

## CODEX-QA-R3 / R4 / R5

Après qu'une rencontre a été rédigée par le GPT-concepteur :

- vérifier les chemins Markdown/MDX;
- vérifier les assets;
- vérifier les IDs et la navigation dans `sidebars.js`;
- vérifier les liens Cours → Exercice guidé → Projet Web;
- exécuter `npm run build` et `git diff --check`;
- corriger seulement les problèmes techniques non ambigus;
- ne pas ajouter de nouvelle matière pédagogique.

## CODEX-QA-FINAL

Lorsque R1 à R5 sont toutes `Prêt à réviser` :

- vérifier toute la navigation R1–R5;
- vérifier tous les téléchargements;
- vérifier les assets statiques;
- rechercher les chemins cassés et références à d'anciens noms;
- exécuter un build complet;
- faire un contrôle visuel rapide des pages principales;
- produire un bref rapport des problèmes qui nécessitent encore une décision pédagogique.

---

# Règles Git pour ce lot

Codex doit travailler de façon à ne pas perdre les changements de l'utilisateur.

À la fin :

1. montrer `git status --short`;
2. montrer un résumé du diff;
3. exécuter `git diff --check`;
4. exécuter `npm run build` si `web/` a été modifié;
5. créer un **commit local ciblé** seulement si l'utilisateur l'a autorisé dans son prompt;
6. ne pas pousser le commit sans autorisation explicite.

Si le dépôt local contient déjà des changements non reliés, ne pas les inclure dans le commit.

# Point de reprise après le lot CODEX-BD

Les tâches **CODEX-BD-00 à CODEX-BD-06 sont terminées**. Le GPT-concepteur peut reprendre à **R3-01** dans le plan principal. L'autodiagnostic informatique n'est pas retenu dans la nouvelle formule; aucune décision pédagogique du lot Bien débuter ne reste ouverte pour Codex.
