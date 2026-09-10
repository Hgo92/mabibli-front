import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Login } from './features/authentication/login/login';
import { Register } from './features/authentication/register/register';
import { loggedGuard, unloggedGuard } from './features/authentication/guards/auth-guard';
import { LibraryHome } from './features/library/library-home/library-home';

export const routes: Routes = [
  {
    path: '',
    canActivate: [unloggedGuard],
    children: [
      { path: '', component: Home },
      { path: 'login', component: Login },
      { path: 'register', component: Register },
    ],
  },
  {
    path: 'library',
    component: LibraryHome,
    canActivate: [],
  },
];
