"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var rxjs_1 = require("rxjs");
var config_1 = require("../config");
var MeasureUnitService = (function () {
    function MeasureUnitService(api) {
        this.api = api;
        this.saveStateSubject = new rxjs_1.Subject();
        this.saveState = this.saveStateSubject.asObservable();
    }
    MeasureUnitService.prototype.GetAll = function () {
        return this.api.get(config_1.ApiEndpoints.measureUnit);
    };
    MeasureUnitService.prototype.Get = function (id) {
        return this.api.get(config_1.ApiEndpoints.measureUnit + "/" + id);
    };
    MeasureUnitService.prototype.Post = function (measureUnit) {
        return this.api.post(config_1.ApiEndpoints.measureUnit, measureUnit);
    };
    MeasureUnitService.prototype.Put = function (measureUnit) {
        return this.api.put(config_1.ApiEndpoints.measureUnit + "/" + measureUnit.measureID, measureUnit);
    };
    MeasureUnitService.prototype.Delete = function (id) {
        return this.api.delete(config_1.ApiEndpoints.measureUnit + "/" + id);
    };
    MeasureUnitService.prototype.notifySaveChanges = function (measureUnit) {
        this.saveStateSubject.next(measureUnit);
    };
    MeasureUnitService = __decorate([
        core_1.Injectable()
    ], MeasureUnitService);
    return MeasureUnitService;
}());
exports.MeasureUnitService = MeasureUnitService;
