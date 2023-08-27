import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Route[] = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'store',
    loadComponent: () =>
      import('./store/store.component').then((c) => c.StoreComponent),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then((r) => r.AUTH_ROUTES),
  },
  {
    path: 'blogs',
    loadChildren: () =>
      import('./blogs/blogs.routes').then((r) => r.BLOG_ROUTES),
  },
  {
    path: 'customer',
    loadChildren: () =>
      import('./customer/customer.routes').then((r) => r.CUSTOMER_ROUTES),
  },
  {
    path: 'policy',
    loadChildren: () =>
      import('./policy/policy.routes').then((r) => r.POLICY_ROUTES),
  },
];
