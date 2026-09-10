import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { Auth } from '../../../services/auth';
import { Router } from '@angular/router';
import { FormField, FormRoot, form, required } from '@angular/forms/signals';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  imports: [FormField, FormRoot],
  templateUrl: './login.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './login.scss',
})
export class Login {
  loginModel = signal({
    username: '',
    password: '',
  });

  private readonly auth = inject(Auth);
  private readonly router = inject(Router);
  private snackBar = inject(MatSnackBar);

  loginForm = form(
    this.loginModel,
    (schemaPath) => {
      required(schemaPath.username, { message: "Un nom d'utilisateur est nécessaire" });
      required(schemaPath.password, { message: 'Un mot de passe est nécessaire' });
    },
    {
      submission: {
        action: async () => {
          const formValue = this.loginModel();

          this.auth.login(formValue.username, formValue.password).subscribe({
            next: () => {
              this.router.navigate(['/library']);
              this.snackBar.open(`Coucou, ${formValue.username} 👋`, 'Fermer', {
                duration: 3000,
                panelClass: ['snackbar-success'],
              });
            },
            error: (err) => {
              this.snackBar.open('Erreur de connexion (vérifiez vos identifiants)', 'Fermer', {
                duration: 3000,
                panelClass: ['snackbar-error'],
              });
              console.error(err);
            },
          });
        },
      },
    },
  );
  onCancel() {
    this.router.navigate(['/']);
  }
}
