import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./ui/pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'users',
    loadComponent: () => import('./ui/pages/users/users.component').then(m => m.UsersComponent)
  },

  {
    path: 'posts',
    loadComponent: () => import('./ui/pages/post/post.component').then(m => m.PostComponent)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];
