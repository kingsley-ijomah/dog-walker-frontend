import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.page').then(m => m.HomePage)
  },
  {
    path: 'signup',
    loadComponent: () => import('./auth/pages/signup/signup.page').then(m => m.SignupPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./auth/pages/login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'forgot-password',
    loadComponent: () => import('./auth/pages/forgot-password/forgot-password.page').then(m => m.ForgotPasswordPage)
  },
  {
    path: 'verify-otp',
    loadComponent: () => import('./auth/pages/verify-otp/verify-otp.page').then(m => m.VerifyOtpPage)
  },
];
