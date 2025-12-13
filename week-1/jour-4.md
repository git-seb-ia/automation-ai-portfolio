# Jour 4 — n8n Workflow

## Workflow 2 — API externe → Fichier
- Appel d'une API REST publique
- Transformation métier en JavaScript
- Génération d’un fichier JSON

## Workflow 3 — Notification système
- Simulation d’un événement métier
- Condition IF
- Génération d’un message structuré


“J’ai choisi d’implémenter la notification directement à la fin du pipeline API,
ce qui correspond à une logique métier réelle.”

### Point clé appris sur n8n
- Après un node "Convert to File", le nombre d’items change (1 item = 1 fichier).
- Pour conserver des informations métier (ex: nombre de records),
  il faut les stocker explicitement avant la conversion.
- Utilisation d’un node "Set (Meta)" pour transporter les métadonnées.
