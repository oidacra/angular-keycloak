import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { RouterLink } from '@angular/router';

/**
 * Represents the main page component of the application.
 * This component is responsible for rendering the main page view and handling user authentication.
 */
@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {
  readonly #authService = inject(AuthService);

  $isLoggedIn = computed(() => this.#authService.isLoggedIn());
  $userName = signal(this.#authService.getUserName());

  /**
   * Redirects the user to the login page.
   *
   * @return {void}
   */
  loginPage(): void {
    this.#authService.redirectToLoginPage();
  }

  logout() {
    this.#authService.logout();
  }
}
