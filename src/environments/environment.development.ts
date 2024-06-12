export const environment = {
  production: false,
  keycloak: {
    authority: 'http://localhost:8080', // Keycloack server
    redirectUri: 'http://localhost:4200', // redirect
    postLogoutRedirectUri: 'http://localhost:4200/logout', // post logout url
    realm: 'my-app',
    clientId: 'angular-app',
  },
};
