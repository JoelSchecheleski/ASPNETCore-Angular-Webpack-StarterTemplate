import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DataService } from './services/dataService';

@NgModule({
    imports: [CommonModule, RouterModule],
    exports: [FooterComponent, NavigationComponent],
    declarations: [FooterComponent, NavigationComponent],
    providers: [DataService],
})

export class SharedModule { }
