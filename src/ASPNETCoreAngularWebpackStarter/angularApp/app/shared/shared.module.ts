import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CustomInterceptor, DataService } from './services/dataService';

@NgModule({
    imports: [CommonModule, RouterModule],
    exports: [FooterComponent, NavigationComponent],
    declarations: [FooterComponent, NavigationComponent],
    providers: [DataService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: CustomInterceptor,
            multi: true,
        }],
})

export class SharedModule { }
