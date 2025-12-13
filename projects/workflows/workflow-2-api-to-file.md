# workflow-2-api-to-file
## Workflow 2 — API externe → Fichier
- Appel d'une API REST publique
- Transformation métier en JavaScript
- Génération d’un fichier JSON

### Extension : Notification de fin de pipeline
Un message de notification est généré à la fin du workflow
pour signaler le succès du traitement (prêt à être envoyé
vers Slack / email / webhook).


### Gestion des métadonnées (records count)

Après transformation, le workflow génère 5 items.
Cependant, après le node "Convert to File", n8n ne transmet plus
qu’un seul item (le fichier binaire).

Pour conserver le nombre d’items traités, un node "Set (Meta)"
est utilisé avant la conversion en fichier.

Ce node stocke la valeur :
- records = nombre d’items transformés

Cette métadonnée est ensuite réutilisée dans la notification finale.


