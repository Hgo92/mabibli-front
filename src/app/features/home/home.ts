import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './home.scss',
})
export class Home {
  private readonly auth = inject(Auth);
  private readonly router = inject(Router);
  private readonly snackBar = inject(MatSnackBar);

  toLogin() {
    this.router.navigate(['/login']);
  }

  toRegister() {
    this.router.navigate(['/register']);
  }

  async toTest() {
    this.auth.login('invité', 'mdpTest92!').subscribe({
      next: () => {
        this.router.navigate(['/library']);
        this.snackBar.open(`Vous êtes connecté comme invité 👋`, 'Fermer', {
          duration: 3000,
          panelClass: ['snackbar-success'],
        });
      },
      error: (err) => {
        this.snackBar.open('Erreur de connexion, veuillez nous excuser', 'Fermer', {
          duration: 3000,
          panelClass: ['snackbar-error'],
        });
        console.error(err);
      },
    });
  }
}
