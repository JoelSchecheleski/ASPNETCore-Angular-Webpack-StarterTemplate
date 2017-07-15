import { PreloadAllModules, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
var appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', loadChildren: './about/about.module#AboutModule' }
];
export var AppRoutes = RouterModule.forRoot(appRoutes, { useHash: true, preloadingStrategy: PreloadAllModules });
//# sourceMappingURL=app.routes.js.map