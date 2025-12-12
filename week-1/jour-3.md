# Jour 3 — n8n (Webhook → Code → Convert to File)

## Objectif
Construire un workflow n8n qui :
1) reçoit une requête HTTP via Webhook  
2) transforme les données en JavaScript  
3) génère un fichier JSON (binaire) téléchargeable

## Workflow réalisé
**Webhook (GET /webhook-test)** → **Code in JavaScript** → **Convert to File (Convert to JSON)**

### Détails de configuration importants
- **Webhook**
  - Method: GET
  - Path: `webhook-test`
  - Respond: **When Last Node Finishes**
  - Response Data: **First Entry JSON**
- **Code in JavaScript**
  - Transformation: ajout d’un `receivedAt` + message + récupération headers/query
- **Convert to File**
  - Operation: Convert to JSON
  - Mode: All Items to One File
  - Output binary field: `data`

## Point clé appris (UI / exécutions)
- Dans ma version (self-hosted), la visualisation de l’output se fait via **Executions**.
- Pour les webhooks, le réglage **Respond: When Last Node Finishes** est essentiel pour exécuter toute la chaîne.
- Le fichier est visible dans **Convert to File → Binary** (téléchargement).

## Problème rencontré / résolution
- Difficulté à voir l’output et à comprendre le chaînage des nodes dans la nouvelle UI.
- Résolu en :
  - reconnectant correctement les nodes (flèches)
  - utilisant `Respond: When Last Node Finishes`
  - lançant le workflow via **Execute workflow** + appel de la Test URL

