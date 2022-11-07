/**
 * Here you can add the configuration related to keycloak
 * So we can use this common config for diffrent environment
 */
import { KeycloakConfig } from 'keycloak-js';

const keycloakConfig: KeycloakConfig = {
    url: 'http://localhost:8080/auth',
    realm: 'RegescKeycloak',
    clientId: 'regesc-webapp',
};

export default keycloakConfig;
