var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
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
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map