import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AboutRoutes } from './about.routes';
import { AboutComponent } from './about/about.component';

@NgModule({
    imports: [CommonModule, AboutRoutes],
    exports: [],
    declarations: [AboutComponent],
    providers: [],
})

export class AboutModule { }
