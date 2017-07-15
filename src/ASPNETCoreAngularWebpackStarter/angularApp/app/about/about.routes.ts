import { AboutComponent } from './about/about.component';

import { RouterModule, Routes } from '@angular/router';

const aboutRoutes: Routes = [
  { path: '', component: AboutComponent }
];

export const AboutRoutes = RouterModule.forChild(aboutRoutes);
