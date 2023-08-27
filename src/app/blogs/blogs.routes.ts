import { Route } from '@angular/router';

export const BLOG_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./blogs.component').then((c) => c.BlogsComponent),
  },
  {
    path: 'blogs/:id',
    loadComponent: () =>
      import('./blog/blog.component').then((c) => c.BlogComponent),
  },
];
