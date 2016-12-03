"use strict";
var apibaseUrl = "http://localhost:2628";
exports.ApiEndpoints = {
    auth: apibaseUrl + "/token",
    user: apibaseUrl + "/users",
    category: apibaseUrl + "/categories",
    product: apibaseUrl + "/products",
    measureUnit: apibaseUrl + "/measureunits",
    Auth: apibaseUrl + "/token"
};
