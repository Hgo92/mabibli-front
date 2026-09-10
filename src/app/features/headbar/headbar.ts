import { Component, inject, OnInit } from '@angular/core';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LogoutComponent } from '../logout-component/logout-component';

@Component({
  imports: [],
  selector: 'app-headbar',
  styleUrl: './headbar.scss',
  templateUrl: './headbar.html',
})
export class Headbar implements OnInit {
  username = '';

  private readonly auth = inject(Auth);
  private readonly router = inject(Router);
  private readonly dialog = inject(MatDialog);

  constructor() {}

  ngOnInit(): void {
    this.username = this.auth.getUsername() ?? '';
  }

  openDialog() {
    this.dialog.open(LogoutComponent, {
      height: '250px',
      width: '400px',
    });
  }

  onCancel() {
    this.router.navigate(['/home']);
  }
}
