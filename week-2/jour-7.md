# Jour 7 — Prompt Engineering & IA réelle multi-provider

## Objectif
Construire un assistant IA métier capable de fonctionner avec plusieurs fournisseurs IA
(OpenAI / 1min.ai / LLM local), avec fallback automatique.

## Points clés
- Architecture IA découplée
- Prompt en couches (SYSTEM / TASK / DATA)
- Validation JSON stricte
- Fallback mock si erreur IA
- Stockage local des résultats

## Résultat
Workflow `workflow-ia-1-summary-real` génère un résumé structuré
dans `/files/summary-real.json`.
