"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forms_1 = require("@angular/forms");
var MeasureUnitDetailComponent = (function () {
    function MeasureUnitDetailComponent(fb, api, activeRoute) {
        this.fb = fb;
        this.api = api;
        this.activeRoute = activeRoute;
        this.form = this.fb.group({
            name: ["", forms_1.Validators.required],
            symbol: ["", forms_1.Validators.required],
            measureID: [""]
        });
        this.notifySave = new core_1.EventEmitter();
    }
    MeasureUnitDetailComponent.prototype.saveMeasureUnit = function () {
        var _this = this;
        if (this.form.valid) {
            var measureUnit = this.form.value;
            this.api.Post(measureUnit).subscribe(function (measureUnit) { return _this.notifySave.emit(measureUnit); });
        }
    };
    MeasureUnitDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSubs = this.activeRoute.params.subscribe(function (params) {
            var id = params['id'];
            console.log('id', id);
            if (id) {
                _this.api.Get(id)
                    .subscribe(function (measureUnit) {
                    _this.form = _this.fb.group({
                        name: [measureUnit.name, forms_1.Validators.required],
                        symbol: [measureUnit.symbol, forms_1.Validators.required],
                        measureID: [measureUnit.measureID]
                    });
                });
            }
        });
    };
    MeasureUnitDetailComponent.prototype.ngOnDestroy = function () {
        this.routeSubs.unsubscribe();
    };
    __decorate([
        core_1.Output()
    ], MeasureUnitDetailComponent.prototype, "notifySave", void 0);
    MeasureUnitDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-measure-unit',
            templateUrl: 'measure-unit-detail.component.html'
        })
    ], MeasureUnitDetailComponent);
    return MeasureUnitDetailComponent;
}());
exports.MeasureUnitDetailComponent = MeasureUnitDetailComponent;
