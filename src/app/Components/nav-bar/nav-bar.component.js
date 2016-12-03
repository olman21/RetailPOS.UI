"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var util_1 = require("util");
var NavBarComponent = (function () {
    function NavBarComponent(_loginService) {
        this._loginService = _loginService;
    }
    NavBarComponent.prototype.logout = function () {
        this._loginService.logOut();
    };
    NavBarComponent.prototype.ngOnInit = function () {
        if (util_1.isNullOrUndefined(this.userData)) {
            this.userData = this._loginService.getUserData();
        }
    };
    NavBarComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        core_1.Input()
    ], NavBarComponent.prototype, "userData", void 0);
    NavBarComponent = __decorate([
        core_1.Component({
            selector: 'app-nav-bar',
            templateUrl: './nav-bar.component.html'
        })
    ], NavBarComponent);
    return NavBarComponent;
}());
exports.NavBarComponent = NavBarComponent;
