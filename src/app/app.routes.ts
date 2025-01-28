import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./platforms/landing/pages/home/home.page').then(m => m.HomePage)
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
  {
    path: 'guest',
    loadComponent: () => import('./platforms/guest/guest.component').then(m => m.GuestComponent),
    loadChildren: () => import('./platforms/guest/guest.route').then(m => m.routes)
  },
  {
    path: 'admin',
    loadComponent: () => import('./platforms/admin/admin.component').then(m => m.AdminComponent),
    loadChildren: () => import('./platforms/admin/admin.route').then(m => m.routes)
  }
];
