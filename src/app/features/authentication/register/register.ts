import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../../services/auth';

@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  registerModel = signal({
    username: '',
    password: '',
  });

  private readonly router = inject(Router);
  private readonly auth = inject(Auth);
}
