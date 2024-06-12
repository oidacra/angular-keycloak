import { inject, Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { environment } from '../../environments/environment';
import { KeycloakProfile } from 'keycloak-js';

/**
 * Provides authentication services using Keycloak.
 *
 */
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly #keycloakService = inject(KeycloakService);

  /**
   * Redirects the user to the login page.
   *
   * @returns {Promise<void>} A promise that resolves when the user is redirected to the login page.
   */
  redirectToLoginPage(): Promise<void> {
    return this.#keycloakService.login();
  }

  /**
   * Retrieves the username of the currently authenticated user.
   *
   * @return {string} The username of the authenticated user.
   */
  getUserName(): string {
    try {
      return this.#keycloakService.getUsername();
    } catch (error) {
      return '';
    }
  }

  async loadUserProfile(): Promise<KeycloakProfile | undefined> {
    try {
      return await this.#keycloakService.loadUserProfile();
    } catch (error) {
      return undefined;
    }
  }

  /**
   * Checks if the user is currently logged in.
   *
   * @return {boolean} - Returns true if the user is logged in, otherwise returns false.
   */
  isLoggedIn(): boolean {
    return this.#keycloakService.isLoggedIn();
  }

  /**
   * Logs out the user from the Keycloak service.
   *
   * @return {void} This method does not return any value.
   */
  logout(): void {
    this.#keycloakService.logout(environment.keycloak.postLogoutRedirectUri);
  }
}
