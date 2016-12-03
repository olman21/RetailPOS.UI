"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/Rx');
var rxjs_1 = require("rxjs");
var Models_1 = require("../Models");
var config_1 = require("../config");
var util_1 = require("util");
var API_LOCALSTORAGE_KEY = "ApiToken";
var USER_DATA_KEY = "UserData";
var LoginService = (function () {
    function LoginService(http, _localStorageService, _router) {
        this.http = http;
        this._localStorageService = _localStorageService;
        this._router = _router;
        this.loginStateObserver = new rxjs_1.Subject();
        this.loginState = this.loginStateObserver.asObservable();
    }
    LoginService.prototype.login = function (username, password) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var body = "username=" + username + "&password=" + password + "&grant_type=password";
        return this.http.post(config_1.ApiEndpoints.auth, body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return rxjs_1.Observable.throw(error.json()); });
    };
    LoginService.prototype.notifyLoginState = function (login) {
        this.loginStateObserver.next(login);
    };
    LoginService.prototype.startSession = function (apiToken, username) {
        var _this = this;
        var serializedToken = JSON.stringify(apiToken);
        this._localStorageService.write(API_LOCALSTORAGE_KEY, serializedToken);
        this.http.get(config_1.ApiEndpoints.user + "/" + username)
            .map(function (res) { return res.json(); })
            .subscribe(function (user) {
            var serializedUser = JSON.stringify(user);
            _this._localStorageService.write(USER_DATA_KEY, serializedUser);
            var login = new Models_1.Login();
            login.isUserLogued = true;
            login.userData = user;
            _this.notifyLoginState(login);
        });
    };
    LoginService.prototype.isUserLoguedIn = function () {
        var apiToken = this._localStorageService.read(API_LOCALSTORAGE_KEY);
        return !util_1.isNullOrUndefined(apiToken);
    };
    LoginService.prototype.getUserAuthHeader = function () {
        var apiToken = JSON.parse(this._localStorageService.read(API_LOCALSTORAGE_KEY));
        if (!util_1.isNullOrUndefined(apiToken) && apiToken.access_token) {
            return { Authorization: "bearer " + apiToken.access_token };
        }
    };
    LoginService.prototype.logOut = function () {
        this._localStorageService.write(API_LOCALSTORAGE_KEY, null);
        this._localStorageService.write(USER_DATA_KEY, null);
        var login = new Models_1.Login();
        login.isUserLogued = false;
        this.notifyLoginState(login);
        this._router.navigate(['']);
    };
    LoginService.prototype.getUserData = function () {
        return JSON.parse(this._localStorageService.read(USER_DATA_KEY));
    };
    LoginService = __decorate([
        core_1.Injectable()
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
