# Workflow IA #1 — Résumé automatique (IA Mock)

##  Objectif
Mettre en place un workflow de résumé automatique de texte, basé sur une **chaîne IA simulée (mock)**, afin de préparer une intégration future avec un LLM réel (OpenAI, Hugging Face, LLM local).

Ce workflow est volontairement conçu **sans dépendance externe**, pour permettre :
- le développement local
- les tests reproductibles
- une architecture IA professionnelle et découplée

---

##  Description fonctionnelle

Le workflow reçoit un texte en entrée, le prépare pour un traitement IA, simule une réponse de type LLM, puis génère un résultat structuré (résumé + TL;DR).

---

##  Architecture du workflow

Trigger
↓
Edit Fields (préparation du texte)
↓
IA Mock (Code JavaScript)
↓
Post-traitement / Validation
↓
Écriture fichier JSON

## 🔧 Détail des étapes

### 1️⃣ Trigger
- Déclenchement manuel ou via chat (n8n)
- Utilisé pour simuler une requête utilisateur

---

### 2️⃣ Préparation des données (Edit Fields)
Champ principal créé :
```json
{
  "input_text": "Texte à résumer"
}

Cette étape isole clairement l’entrée IA (bonne pratique pro).

### 3️⃣ IA Mock (Code JavaScript)

Simulation d’un modèle de langage avec un format compatible LLM :

{
  "bullets": ["...", "..."],
  "tldr": "...",
  "model": "mock-llm-v1"
}


Avantages :

aucun quota

aucun appel externe

remplacement instantané par un vrai LLM

### 4️⃣ Post-traitement

Vérification de la présence des champs bullets et tldr

Possibilité d’ajouter des notifications ou logs

### 5️⃣ Sortie / Fichier

Écriture du résultat dans /files/ia-summary-mock.json

Format JSON exploitable par d’autres systèmes

### 🧪 Résultat attendu
{
  "bullets": [
    "Résumé simulé – point 1",
    "Résumé simulé – point 2",
    "Résumé simulé – point 3"
  ],
  "tldr": "TL;DR simulé à partir du texte fourni",
  "model": "mock-llm-v1",
  "generated_at": "2025-XX-XXTXX:XX:XXZ"
}

### 🚀 Évolutions prévues

Remplacement du mock par OpenAI / Hugging Face

Ajout de prompt dynamique

Mémoire conversationnelle

Enrichissement métier (résumé orienté business)

### 🧠 Points clés apprentissage

Architecture IA découplée

Simulation LLM professionnelle

Préparation à la mise en production

Approche test-first sans dépendance externe



