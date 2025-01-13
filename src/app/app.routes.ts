import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.page').then(m => m.HomePage)
  },
  {
    path: 'signup',
    loadComponent: () => import('./auth/pages/signup/signup.page').then(m => m.SignupPage)
  }
];
