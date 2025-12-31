# SEPP Docs (Docusaurus)

Site de documentation généré avec [Docusaurus](https://docusaurus.io/).

## Prérequis

- Node.js et npm (v18+ recommandé)

## Installation

```bash
npm install
```

## Démarrage en local

```bash
npm start
```

Le serveur démarre sur http://localhost:3000. Les modifications sont rechargées à chaud.

## Build de production

```bash
npm run build
npm run serve   # tester le build en local
```

## Configuration de l'API / Swagger

Les URLs sont définies dans `docusaurus.config.ts` via `customFields`:

- `apiBaseUrl`: base de l'API (par défaut `http://localhost:5001`)
- `swaggerJsonUrl`: URL de la spécification OpenAPI (par défaut `http://localhost:5001/swagger/v1/swagger.json`)

La page API est accessible sur `/api` et utilise `swagger-ui-react`.
