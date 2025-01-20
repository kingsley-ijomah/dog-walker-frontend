import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage)
  },
  {
    path: 'groups',
    loadComponent: () => import('./pages/groups/groups.page').then(m => m.GroupsPage)
  },
  {
    path: 'walks',
    loadComponent: () => import('./pages/walks/walks.page').then(m => m.WalksPage)
  },
  {
    path: 'chats',
    loadComponent: () => import('./pages/chats/chats.page').then(m => m.ChatsPage)
  },
  {
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile.page').then(m => m.ProfilePage)
  }
];
