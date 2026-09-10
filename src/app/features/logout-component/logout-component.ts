import { Component, inject } from '@angular/core';
import { Auth } from '../../services/auth';
import { MatDialogActions, MatDialogClose, MatDialogRef } from '@angular/material/dialog';

@Component({
  imports: [MatDialogClose, MatDialogActions],
  selector: 'app-logout-component',
  styleUrl: './logout-component.scss',
  templateUrl: './logout-component.html',
})
export class LogoutComponent {
  private readonly auth = inject(Auth);
  private readonly dialogRef = inject(MatDialogRef<LogoutComponent>);
  protected showLogOut = false;

  // Ma méthode pour me déconnecter
  onLogout() {
    this.showLogOut = true;
    this.dialogRef.updateSize('auto', 'auto');

    setTimeout(() => {
      this.auth.logout();
      this.dialogRef.close(true);
      this.showLogOut = false;
    }, 2000);
  }
}
