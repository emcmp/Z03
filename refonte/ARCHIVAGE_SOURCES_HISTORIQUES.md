# Archivage des sources historiques

**Date : 2026-08-21**  
**Portée : pages historiques qui ne doivent plus être publiées avec le site étudiant**

## Décision

Les anciennes pages de cours sont déplacées hors de `web/docs/` vers :

```text
archives/ancien-site/web/docs/01-cours/
```

Leur contenu est conservé intégralement dans le dépôt, avec leur nom de fichier original.

## Effet sur le site

Docusaurus compile seulement les documents actifs sous `web/docs/`. Les pages archivées :

- ne créent plus de route publique;
- ne figurent plus dans la recherche ou la navigation;
- restent disponibles pour la migration des rencontres 6 et suivantes;
- restent consultables directement dans le dépôt GitHub ou dans un éditeur Markdown.

## Pages archivées dans ce lot

- anciennes introductions générales HTML et CSS;
- ancien chapitre de modèle en boîte et positionnement;
- ancien aide-mémoire JavaScript;
- anciennes pages numérotées de la progression 905;
- anciennes périodes de TP;
- anciennes pages d'examens formatif et sommatif.

## Ressources statiques

Les fichiers historiques sous `web/static/files/` ne sont pas supprimés dans ce lot. Ils servent encore d'inventaire pour la migration des laboratoires.

Ils devront être revus séparément lorsque les rencontres 6 et suivantes seront réorganisées.

## Règle de traçabilité

Toute réutilisation d'une page archivée doit indiquer :

1. la source archivée;
2. la rencontre cible;
3. les portions conservées, adaptées ou retirées;
4. les exercices et ressources associés;
5. la validation technique effectuée avant publication.
