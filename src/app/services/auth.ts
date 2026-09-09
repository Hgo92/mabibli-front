import { inject, Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { API_URL } from '../token';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private readonly url = inject(API_URL);
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);

  constructor() {}

  // Ma méthode pour s'enregistrer et stocker le token
  register(username: string, password: string) {
    return this.http
      .post<{ token: string }>(`${this.url}/api/auth/register`, { username, password })
      .pipe(tap((res) => localStorage.setItem('token', res.token)));
  }

  // Ma méthode pour se connecter
  login(username: string, password: string) {
    return this.http
      .post<{ token: string }>(`${this.url}/api/auth/login`, { username, password })
      .pipe(tap((res) => localStorage.setItem('token', res.token)));
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  isTokenExpired(token?: string): boolean {
    const t = token ?? localStorage.getItem('token');
    if (!t) return true;

    try {
      const { exp } = JSON.parse(atob(t.split('.')[1]));
      if (!exp) return false;
      return Date.now() >= exp * 1000;
    } catch {
      return true;
    }
  }

  // Méthode pour vérifier la connexion via le token
  getToken() {
    const token = localStorage.getItem('token');
    if (!token) return null;

    if (this.isTokenExpired(token)) {
      this.logout();
      return null;
    }

    return token;
  }
}
