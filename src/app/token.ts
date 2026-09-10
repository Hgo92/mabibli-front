import { InjectionToken } from '@angular/core';

export const API_URL = new InjectionToken<string>("URL de l'API", {
  providedIn: 'root',
  factory: () => 'http://localhost:8080',
});
