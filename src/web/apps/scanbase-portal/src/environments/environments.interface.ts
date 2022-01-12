/*
 * @copyright Copyright (c) 2021 Carl Zeiss Industrielle Messtechnik GmbH - All Rights Reserved. ZEISS, ZEISS.com are trademarks of Carl Zeiss AG
 */

import { KeycloakOptions } from 'keycloak-angular';

export interface Environment {
  production: boolean;
  keycloakOptions: KeycloakOptions;
  baseUrl: string;
}
