import Keycloak from 'keycloak-js';

let keycloakInstance = null;
let isAuthenticated = false;

const initKeycloak = (onAuthenticatedCallback) => {
  keycloakInstance = new Keycloak({
    url: 'http://localhost:8080',
    realm: 'front',
    clientId: 'frontend',
  });

  keycloakInstance.init({ onLoad: 'check-sso' })
    .then(auth => {
      isAuthenticated = auth;
      if (auth) {
        console.log("Authenticated");
      }
      if (typeof onAuthenticatedCallback === 'function') {
        onAuthenticatedCallback(auth);
      }
    })
    .catch(err => {
      console.error("Keycloak initialization error:", err);
    });
};

// keycloak.js
const login = () => {
  keycloakInstance.login({ redirectUri: `${window.location.origin}/Bar` });
};


const logout = () => {
  if (keycloakInstance) {
    keycloakInstance.logout();
  }
};

const getKeycloakInstance = () => keycloakInstance;
const getIsAuthenticated = () => isAuthenticated;

export { initKeycloak, login, logout, getKeycloakInstance, getIsAuthenticated };