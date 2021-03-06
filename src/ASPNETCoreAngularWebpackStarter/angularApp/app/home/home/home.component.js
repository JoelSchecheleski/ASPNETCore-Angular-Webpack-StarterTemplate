var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ToasterService } from 'angular2-toaster/angular2-toaster';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { DataService } from '../../shared/services/dataService';
var HomeComponent = (function () {
    function HomeComponent(_dataService, _toasterService, _slimLoadingBarService) {
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this._slimLoadingBarService = _slimLoadingBarService;
        this.message = 'Hello from HomeComponent constructor';
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._slimLoadingBarService.start();
        this._dataService
            .getAll()
            .subscribe(function (data) { return _this.values = data; }, function (error) { return function () {
            _this._toasterService.pop('error', 'Damn', 'Something went wrong...');
        }; }, function () {
            _this._toasterService.pop('success', 'Complete', 'Getting all values complete');
            _this._slimLoadingBarService.complete();
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Component({
        selector: 'app-home-component',
        templateUrl: './home.component.html'
    }),
    __metadata("design:paramtypes", [DataService,
        ToasterService,
        SlimLoadingBarService])
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map