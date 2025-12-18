# Jour 5 — n8n "prod-like" avec Docker Compose + volumes

## Objectif
Mettre en place une stack n8n locale durable, avec :
- persistance des données n8n (DB, config, encryption key)
- écriture de fichiers métiers sur le système hôte (Mac)

## Structure
n8n-local/
- data/  -> /home/node/.n8n (persistant)
- files/ -> /files (fichiers métiers)

## docker-compose.yml (volumes)
- ./data:/home/node/.n8n
- ./files:/files

## Validation
- n8n redémarre sans perdre les workflows
- le workflow "API → Convert to File → Write to Disk" écrit :
  - /files/posts-api.json (dans le conteneur)
  - n8n-local/files/posts-api.json (sur le Mac)

## Point clé appris
- Ne jamais écraser data/config (encryption key) sinon perte/invalidations des credentials.
- Toujours écrire les fichiers métiers dans un volume dédié (/files), pas dans /home/node/.n8n.

