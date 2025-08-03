import { Routes } from '@angular/router';

export const legalRoutes: Routes = [
  {
    path: 'consent/acik-riza-metni',
    loadComponent: () => import('./consent/acik-riza-metni').then(m => m.AcikRizaMetni)
  },
  {
    path: 'policy/privacy-policy',
    loadComponent: () => import('./policy/privacy-policy').then(m => m.PrivacyPolicy)
  },
  {
    path: 'terms/terms-of-use',
    loadComponent: () => import('./terms/terms-of-use').then(m => m.TermsOfUse)
  },
  {
    path: 'cookie/cookie-policy',
    loadComponent: () => import('./cookie/cookie-policy').then(m => m.CookiePolicy)
  },
  {
    path: 'copyright/copyright',
    loadComponent: () => import('./copyright/copyright').then(m => m.Copyright)
  },
  {
    path: 'disclaimer/disclaimer',
    loadComponent: () => import('./disclaimer/disclaimer').then(m => m.Disclaimer)
  },
  {
    path: 'accessibility/accessibility',
    loadComponent: () => import('./accessibility/accessibility').then(m => m.Accessibility)
  },
  {
    path: 'contact/contact',
    loadComponent: () => import('./contact/contact').then(m => m.Contact)
  },
  {
    path: 'sla/sla',
    loadComponent: () => import('./sla/sla').then(m => m.Sla)
  },
  {
    path: 'dpa/dpa',
    loadComponent: () => import('./dpa/dpa').then(m => m.Dpa)
  },
  {
    path: 'security/security',
    loadComponent: () => import('./security/security').then(m => m.Security)
  }
];
