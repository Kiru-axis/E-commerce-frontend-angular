import { Route } from '@angular/router';

export const POLICY_ROUTES: Route[] = [
  {
    path: 'shipping',
    loadComponent: () =>
      import('./shipping-policy/shipping-policy.component').then(
        (c) => c.ShippingPolicyComponent
      ),
  },
  {
    path: 'privacy',
    loadComponent: () =>
      import('./privacy-policy/privacy-policy.component').then(
        (c) => c.PrivacyPolicyComponent
      ),
  },
  {
    path: 'refund',
    loadComponent: () =>
      import('./refund-policy/refund-policy.component').then(
        (c) => c.RefundPolicyComponent
      ),
  },
  {
    path: 'terms',
    loadComponent: () =>
      import('./terms-policy/terms-policy.component').then(
        (c) => c.TermsPolicyComponent
      ),
  },
];
