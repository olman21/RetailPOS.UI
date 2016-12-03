"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var LoginComponent = (function () {
    function LoginComponent(_loginService, _localStorageService, router) {
        this._loginService = _loginService;
        this._localStorageService = _localStorageService;
        this.router = router;
        this.errorMessage = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this._loginService.isUserLoguedIn())
            this.router.navigate(['Dashboard']);
        this.loginForm = new forms_1.FormGroup({
            username: new forms_1.FormControl('', [forms_1.Validators.required]),
            password: new forms_1.FormControl('', [forms_1.Validators.required]),
        });
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        this._loginService.login(this.loginForm.value.username, this.loginForm.value.password)
            .subscribe(function (res) {
            _this.errorMessage = "";
            _this._loginService.startSession(res, _this.loginForm.value.username);
            _this.router.navigate(['Dashboard']);
        }, function (error) {
            console.log(error);
            if (error.error == "invalid_grant") {
                _this.errorMessage = "Nombre de usuario/contraseña incorrecto";
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
