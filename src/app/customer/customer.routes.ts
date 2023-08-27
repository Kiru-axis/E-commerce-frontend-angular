import { Route } from '@angular/router';

export const CUSTOMER_ROUTES: Route[] = [
  {
    path: 'cart',
    loadComponent: () =>
      import('./cart/cart.component').then((c) => c.CartComponent),
  },
  {
    path: 'compare',
    loadComponent: () =>
      import('./compare/compare.component').then((c) => c.CompareComponent),
  },
  {
    path: 'wishlist',
    loadComponent: () =>
      import('./wishlist/wishlist.component').then((c) => c.WishlistComponent),
  },
];
