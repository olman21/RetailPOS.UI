"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var login_component_1 = require('./Components/login/login.component');
var dashboard_component_1 = require('./Components/dashboard/dashboard.component');
var app_routing_1 = require('./app.routing');
var Services_1 = require('./Services');
var nav_bar_component_1 = require('./Components/nav-bar/nav-bar.component');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var orders_component_1 = require('./Components/orders/orders.component');
var payment_methods_component_1 = require('./Components/payment-methods/payment-methods.component');
var products_component_1 = require('./Components/products/products.component');
var measure_unit_component_1 = require('./Components/measure-unit/measure-unit.component');
var categories_component_1 = require('./Components/categories/categories.component');
var contacts_component_1 = require('./Components/contacts/contacts.component');
var contact_method_types_component_1 = require('./Components/contact-method-types/contact-method-types.component');
var config_settings_component_1 = require('./Components/config-settings/config-settings.component');
var users_component_1 = require('./Components/users/users.component');
require('chart.js');
var ng2_charts_1 = require('ng2-charts/ng2-charts');
var product_service_1 = require("./Services/product.service");
var rest_service_1 = require("./Services/rest.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                dashboard_component_1.DashboardComponent,
                nav_bar_component_1.NavBarComponent,
                orders_component_1.OrdersComponent,
                payment_methods_component_1.PaymentMethodsComponent,
                products_component_1.ProductsComponent,
                measure_unit_component_1.MeasureUnitComponent,
                categories_component_1.CategoriesComponent,
                contacts_component_1.ContactsComponent,
                contact_method_types_component_1.ContactMethodTypesComponent,
                config_settings_component_1.ConfigSettingsComponent,
                users_component_1.UsersComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_1.routing,
                forms_1.ReactiveFormsModule,
                ng2_bootstrap_1.DropdownModule,
                ng2_charts_1.ChartsModule
            ],
            providers: [
                Services_1.LocalStorageService,
                Services_1.LoginService,
                rest_service_1.RestService,
                product_service_1.ProductService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
