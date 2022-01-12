import { Environment } from './environments.interface';

const BASE_URL = 'https://localhost'; // for local development

export const environment: Environment = {
  production: false,
  keycloakOptions: {
    config: {
      url: 'https://localhost:8080/auth',
      realm: 'default',
      clientId: 'portal',
    },
    loadUserProfileAtStartUp: true,
    initOptions: {
      onLoad: 'login-required',
      silentCheckSsoRedirectUri:
        window.location.origin + '/assets/silent-check-sso.html',
    },
  },
  baseUrl: `${BASE_URL}`, // Can be used during development
};
