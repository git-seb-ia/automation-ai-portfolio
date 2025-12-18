a# Jour 6 — IA Mock & Chaîne IA Ready

## Objectif
Créer une chaîne IA simulée, remplaçable par un vrai LLM.

## Architecture
Trigger → Preparation → IA Mock → Post-processing → Output

## IA Mock
- Implémentation via Code JS
- Format compatible OpenAI
- Aucun appel externe

## Pourquoi un mock ?
- Tests locaux
- Développement sans quota
- Architecture découplée

## Évolution prévue
- Remplacement par OpenAI
- Ajout de mémoire
- Ajout de contexte métier

