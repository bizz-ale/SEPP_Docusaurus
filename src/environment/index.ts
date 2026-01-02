// Select the correct environment file based on NODE_ENV
const env = process.env.NODE_ENV === 'production' ? 'production' : 'development';

let vars: { API_BASE_URL: string; SWAGGER_JSON_URL: string };

if (env === 'production') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  vars = require('./production');
} else {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  vars = require('./development');
}

export const API_BASE_URL = vars.API_BASE_URL;
export const SWAGGER_JSON_URL = vars.SWAGGER_JSON_URL;
