import { Routes } from '@angular/router';
// import { authGuard } from '../guards/auth.guard';

export const APP_ROUTES: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: '',
    loadComponent: () =>
      import('./pages/layout/layout.component').then((c) => c.LayoutComponent),
    children: [
      {
        path: '',
        // canActivate: [authGuard],
        loadComponent: () =>
          import('./pages/standalone/standalone.component').then(
            (c) => c.StandaloneComponent
          ),
      },
      // {
      //   path: 'high-volume-scanning',
      //   // canActivate: [authGuard],
      //   loadComponent: () =>
      //     import(
      //       '../pages/high-volume-scanning/high-volume-scanning.component'
      //     ).then((c) => c.HighVolumeScanningComponent),
      // },
      // {
      //   path: 'asset-search',
      //   // canActivate: [authGuard],
      //   loadComponent: () =>
      //     import('../pages/search/search.component').then(
      //       (c) => c.SearchComponent
      //     ),
      // },
      // {
      //   path: 'asset/:serialNumber',
      //   // canActivate: [authGuard],
      //   loadComponent: () =>
      //     import('../pages/asset-details/asset-details.component').then(
      //       (c) => c.AssetComponent
      //     ),
      // },
      // {
      //   path: 'inventory',
      //   // canActivate: [authGuard],
      //   loadComponent: () =>
      //     import('../pages/inventory/inventory.component').then(
      //       (c) => c.InventoryComponent
      //     ),
      // },
      // {
      //   path: '**',
      //   // canActivate: [authGuard],
      //   pathMatch: 'full',
      //   loadComponent: () =>
      //     import('../pages/page-not-found/page-not-found.component').then(
      //       (c) => c.PageNotFoundComponent
      //     ),
      // },
    ],
  },
];
