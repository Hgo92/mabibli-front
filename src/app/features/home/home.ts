import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';

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

  toLogin() {
    this.router.navigate(['/login']);
  }

  toRegister() {
    this.router.navigate(['/register']);
  }

  toTest() {}
}
