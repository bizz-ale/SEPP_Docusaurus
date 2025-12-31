import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

export default function ApiPage(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  const swaggerJsonUrl = (siteConfig.customFields?.swaggerJsonUrl as string) || '';

  return (
    <Layout title="API" description="Documentation API via Swagger UI">
      <div style={{padding: '2rem 0'}}>
        <div className="container">
          <h1>Documentation API</h1>
          <p>
            Cette page affiche la documentation OpenAPI/Swagger provenant de votre
            service à l'URL : <code>{swaggerJsonUrl}</code>
          </p>
          <SwaggerUI
            url={swaggerJsonUrl}
            docExpansion="none"
            defaultModelsExpandDepth={-1}
            defaultModelExpandDepth={-1}
          />
        </div>
      </div>
    </Layout>
  );
}
