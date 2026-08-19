# Ressources à fournir — suivi de la refonte Z03

Ce document est la **liste de travail des captures d'écran, images, fichiers téléchargeables et autres ressources** nécessaires aux rencontres du cours.

Il sert à éviter qu'une page étudiante demande soudainement « utilisez le fichier fourni par l'enseignant » alors que ce fichier n'a pas encore été préparé.

## Règle de travail

Lorsqu'une page de cours, un exercice ou un Projet Web a besoin d'une nouvelle ressource qui n'existe pas encore dans le dépôt :

1. ajouter immédiatement la ressource dans ce document;
2. lui donner un **nom de fichier prévu** et un **emplacement prévu**;
3. décrire précisément ce que la ressource doit montrer ou contenir;
4. ne pas créer de lien étudiant vers le fichier tant qu'il n'existe pas réellement;
5. une fois le fichier fourni, l'intégrer au dépôt puis passer son état à `Prêt`.

Ne jamais laisser une dépendance implicite du type « image fournie en classe » sans entrée correspondante dans cette liste.

## Convention de dossiers

Les ressources sont regroupées par rencontre.

### Images affichées dans la documentation

```text
web/static/img/
├── rencontre1/
├── rencontre2/
├── rencontre3/
└── ...
```

Utiliser ces dossiers pour :

- captures d'écran;
- schémas;
- illustrations;
- images utilisées directement dans les pages Docusaurus.

### Fichiers que l'étudiant doit télécharger ou manipuler

```text
web/static/files/
├── rencontre1/
├── rencontre2/
├── rencontre3/
└── ...
```

Utiliser ces dossiers pour :

- images de départ à télécharger;
- archives ZIP;
- fichiers HTML/CSS/JS à corriger;
- documents ou projets de départ.

Les dossiers n'ont pas besoin d'être créés tant qu'ils ne contiennent aucune ressource réelle.

## États utilisés

- **À décider** : il faut d'abord confirmer si la ressource ou l'activité est encore pertinente.
- **À produire** : la ressource est définie, mais elle doit être créée ou capturée.
- **À fournir** : la ressource doit être fournie par l'enseignant.
- **À intégrer** : le fichier existe, mais il n'est pas encore placé ou référencé dans le site.
- **Prêt** : le fichier est dans le dépôt et la page qui l'utilise est prête.
- **Non retenu** : la ressource a été examinée et ne sera pas utilisée.

# Rencontre 1 — Environnement et HTML

## Sources déjà disponibles

| Source | Utilité | État / décision |
|---|---|---|
| Ancien PowerPoint **Environnement de travail** (12 diapositives) | Arborescence, création de dossiers, extensions, affichage des extensions, compression/décompression ZIP | **Source reçue**. Le contenu a alimenté le nouveau préambule. Plusieurs captures montrent un ancien Windows et 7-Zip : les utiliser comme référence, mais privilégier des captures actuelles. |
| `web/docs/01-cours/01-rencontre1.1.md` — ancien **Cours 1 - Atelier** | Connexion aux postes, 2FA, Teams, stockage infonuagique, ancien autodiagnostic | **Source historique conservée**. Les éléments durables sur le stockage ont été repris; Teams et l'autodiagnostic doivent être confirmés avant réintégration. |
| `web/static/img/atelier/leaEtudiant.png` | Ancienne capture associée à l'atelier | **À décider**. Ne pas l'utiliser automatiquement tant que son rôle dans la nouvelle rencontre n'est pas confirmé. |

## Captures à produire

| Ressource | Emplacement prévu | Ce que la capture doit montrer | État |
|---|---|---|---|
| Afficher les extensions dans Windows | `web/static/img/rencontre1/windows-afficher-extensions.png` | Explorateur Windows actuel avec l'option **Extensions de noms de fichiers** clairement visible; aucune donnée personnelle. | **À fournir** |
| Extraire une archive ZIP | `web/static/img/rencontre1/windows-extraire-zip.png` | Interface Windows actuelle montrant clairement l'action **Extraire tout** ou son équivalent; éviter de dépendre de 7-Zip si ce n'est pas requis au cégep. | **À fournir** |
| Ouvrir un dossier dans VS Code | `web/static/img/rencontre1/vscode-ouvrir-dossier.png` | VS Code actuel avec **Fichier → Ouvrir le dossier** visible; aucune information personnelle. | **À fournir** |
| Explorateur VS Code d'un petit projet | `web/static/img/rencontre1/vscode-explorateur-projet.png` | VS Code avec un dossier `mon-site` ouvert et `index.html` visible dans l'Explorateur de gauche. | **À fournir** |

## Décisions à confirmer

| Élément de l'ancien atelier | Question | État |
|---|---|---|
| Teams | Est-ce encore la plateforme réellement utilisée pour les communications ou certaines remises dans Z03? | **À décider** |
| Test autodiagnostic informatique | Est-ce que le formulaire existe encore et est-il encore utile dans la nouvelle formule du cours? | **À décider** |
| Liens compte réseau / double authentification | Doivent-ils être affichés directement dans le préambule étudiant ou simplement présentés en classe? | **À décider** |

# Rencontre 2 — HTML, fichiers et navigation

## Fichiers à fournir

| Ressource | Emplacement prévu | Utilisation | État |
|---|---|---|---|
| Image de chat pour l'exercice guidé | `web/static/files/rencontre2/chat.jpg` | Fichier prêt à télécharger pour pratiquer `images/chat.jpg` et `../images/chat.jpg`, sans perdre du temps à chercher une image pendant le cours. | **À produire** |

### Contraintes pour `chat.jpg`

- fichier léger et simple à reconnaître;
- format JPEG réel;
- nom final exactement `chat.jpg`;
- image dont l'utilisation dans le cours est permise;
- dimensions raisonnables pour éviter un téléchargement inutilement lourd.

Une fois le fichier ajouté, modifier l'exercice guidé de la rencontre 2 afin que l'étudiant puisse **le télécharger directement depuis la page**.

# Rencontres suivantes

La liste doit être enrichie **au moment où chaque nouvelle rencontre est conçue**, avant de considérer son matériel prêt pour la classe.

Pour toute nouvelle ressource, noter au minimum :

| Rencontre | Page concernée | Ressource | Fichier prévu | Description exacte | État |
|---|---|---|---|---|---|
| — | — | — | — | — | — |
