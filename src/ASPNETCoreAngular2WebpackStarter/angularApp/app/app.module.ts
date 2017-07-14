import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

import { AppComponent } from './app.component';
import { Configuration } from './app.constants';
import { AppRoutes } from './app.routes';
import { HomeComponent } from './home/home/home.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutes,
        HttpModule,
        ToasterModule,
        SlimLoadingBarModule.forRoot(),
        SharedModule
    ],

    declarations: [
        AppComponent,
        HomeComponent
    ],

    providers: [
        Configuration
    ],

    bootstrap: [AppComponent]
})

export class AppModule { }
