export const environment = {
  production: true,
  keycloak: {
    authority: 'DEFINE',
    redirectUri: 'DEFINE',
    postLogoutRedirectUri: 'DEFINE',
    realm: 'DEFINE',
    clientId: 'DEFINE',
  },
  idleConfig: { idle: 10, timeout: 60, ping: 10 },
};
