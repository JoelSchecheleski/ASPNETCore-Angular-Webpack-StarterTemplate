import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about/about.component';
import { HomeComponent } from './home/home/home.component';
var appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent }
];
export var AppRoutes = RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map