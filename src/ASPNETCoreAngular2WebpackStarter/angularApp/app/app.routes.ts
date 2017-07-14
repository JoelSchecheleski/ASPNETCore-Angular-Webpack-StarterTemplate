import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home/home.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', loadChildren: './about/about.module#AboutModule' }
];

export const AppRoutes = RouterModule.forRoot(appRoutes, { useHash: true, preloadingStrategy: PreloadAllModules });
