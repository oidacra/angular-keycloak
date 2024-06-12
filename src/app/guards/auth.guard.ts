import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  // Checks if the user is currently logged in.
  if (authService.isLoggedIn()) {
    // Allow go to the URL
    return true;
  }
  // Redirects the user to the login page.
  authService.redirectToLoginPage();
  return false;
};
