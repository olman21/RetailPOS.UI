"use strict";
var router_1 = require('@angular/router');
var Components_1 = require('./Components');
var APP_ROUTES = [
    { path: 'Dashboard', component: Components_1.DashboardComponent },
    { path: 'Orders', component: Components_1.OrdersComponent },
    { path: 'PaymentMethods', component: Components_1.PaymentMethodsComponent },
    { path: 'Products', component: Components_1.ProductsComponent },
    { path: 'Categories', component: Components_1.CategoriesComponent },
    { path: 'MeasureUnits', component: Components_1.MeasureUnitComponent },
    { path: 'Contacts', component: Components_1.ContactsComponent },
    { path: 'ContactMethodTypes', component: Components_1.ContactMethodTypesComponent },
    { path: 'ConfigSettings', component: Components_1.ConfigSettingsComponent },
    { path: '', component: Components_1.LoginComponent }
];
exports.routing = router_1.RouterModule.forRoot(APP_ROUTES);
