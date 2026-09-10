import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../../../services/auth';
import { inject } from '@angular/core';

// Guard pour vérifier si l'utilisateur n'est pas connecté et a besoin d'accéder à login/register

function createAuthGuard(requiresAuth: boolean, redirectTo: string): CanActivateFn {
  return () => {
    const authService = inject(Auth);
    const router = inject(Router);

    let isLoggedIn;

    typeof authService.getToken() === 'string' ? (isLoggedIn = true) : (isLoggedIn = false);
    if (isLoggedIn === requiresAuth) {
      return true;
    }
    return router.createUrlTree([redirectTo]);
  };
}

export const loggedGuard = createAuthGuard(true, '');
export const unloggedGuard = createAuthGuard(false, '/library');
