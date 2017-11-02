var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Configuration } from '../../app.constants';
var DataService = (function () {
    function DataService(http, _configuration) {
        this.http = http;
        this._configuration = _configuration;
        this.actionUrl = _configuration.ServerWithApiUrl + 'values/';
    }
    DataService.prototype.getAll = function () {
        return this.http.get(this.actionUrl);
    };
    DataService.prototype.getSingle = function (id) {
        return this.http.get(this.actionUrl + id);
    };
    DataService.prototype.add = function (itemName) {
        var toAdd = JSON.stringify({ ItemName: itemName });
        return this.http.post(this.actionUrl, toAdd);
    };
    DataService.prototype.update = function (id, itemToUpdate) {
        return this.http
            .put(this.actionUrl + id, JSON.stringify(itemToUpdate));
    };
    DataService.prototype.delete = function (id) {
        return this.http.delete(this.actionUrl + id);
    };
    return DataService;
}());
DataService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [HttpClient, Configuration])
], DataService);
export { DataService };
var CustomInterceptor = (function () {
    function CustomInterceptor() {
    }
    CustomInterceptor.prototype.intercept = function (req, next) {
        if (!req.headers.has('Content-Type')) {
            req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        }
        req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
        console.log(JSON.stringify(req.headers));
        return next.handle(req);
    };
    return CustomInterceptor;
}());
CustomInterceptor = __decorate([
    Injectable()
], CustomInterceptor);
export { CustomInterceptor };
//# sourceMappingURL=dataService.js.map