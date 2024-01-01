import Keycloak from 'keycloak-js';

let keycloak;
let authenticated = false;

if (typeof window !== 'undefined') {
  // Keycloak initialization
  keycloak = new Keycloak({
    url: 'http://localhost:8080',
    realm: 'saas-realm',
    clientId: 'front-client',
    secret: '2dLJS5AcDZfsevo1HsA4emyy7yTrY4UH',
  });

  keycloak.init({ onLoad: 'check-sso' }).then((auth) => {
    authenticated = auth;
    if (authenticated) {
      console.log("Authenticated");
    }
  });
}

export function getKeycloak() {
  return { keycloak, authenticated };
}