"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var config_1 = require("../config");
var UserService = (function () {
    function UserService(api) {
        this.api = api;
    }
    UserService.prototype.GetAll = function () {
        return this.api.get(config_1.ApiEndpoints.user);
    };
    UserService.prototype.Get = function (id) {
        return this.api.get(config_1.ApiEndpoints.user + "/" + id);
    };
    UserService.prototype.GetByUsername = function (username) {
        return this.api.get(config_1.ApiEndpoints.user + "/" + username);
    };
    UserService = __decorate([
        core_1.Injectable()
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
