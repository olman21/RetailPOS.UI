"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
var RestService = (function () {
    function RestService(http, loginService) {
        this.http = http;
        this.loginService = loginService;
        var authHeader = this.loginService.getUserAuthHeader();
        this.headers = new http_1.Headers(authHeader);
    }
    RestService.prototype.setHeaders = function (headers) {
        if (headers) {
            for (var key in headers) {
                this.headers.append(key, headers[key]);
            }
        }
    };
    RestService.prototype.get = function (url, headers) {
        this.setHeaders(headers);
        return this.http.get(url, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    RestService.prototype.post = function (url, data, headers) {
        this.setHeaders(headers);
        return this.http.post(url, data, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    RestService.prototype.put = function (url, data, headers) {
        this.setHeaders(headers);
        return this.http.put(url, data, { headers: this.headers });
    };
    RestService.prototype.delete = function (url, headers) {
        this.setHeaders(headers);
        return this.http.delete(url, { headers: this.headers });
    };
    RestService = __decorate([
        core_1.Injectable()
    ], RestService);
    return RestService;
}());
exports.RestService = RestService;
