# Environment variables for SEPP Docusaurus

This project uses environment variables to configure the Swagger/OpenAPI JSON URL and other runtime values.

Files:
- `.env.development` - Variables for local development
- `.env.production` - Variables for production builds

Important variables:
- `SWAGGER_JSON_URL` - Full URL to the OpenAPI/Swagger JSON (used by the `/api` page)
- `API_BASE_URL` - Base URL for your API (optional)

Usage:

1. Install dependencies (once):

```bash
npm install
```

2. Run in development (Docusaurus will load `.env` if you use `dotenv` or your shell):

```bash
# on Windows PowerShell
copy .env.development .env
npm run start
```

3. Build for production:

```bash
# ensure .env or environment variables are set to production values
copy .env.production .env
npm run build
npm run serve
```

Notes:
- The config reads `process.env.SWAGGER_JSON_URL` and falls back to `http://localhost:5001/swagger/v1/swagger.json`.
- If you prefer, set environment variables directly in your CI/CD environment instead of copying `.env` files.
