/* tslint:disable:no-unused-variable */
"use strict";
var testing_1 = require('@angular/core/testing');
var measure_unit_service_1 = require('./measure-unit.service');
describe('Service: MeasureUnit', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [measure_unit_service_1.MeasureUnitService]
        });
    });
    it('should ...', testing_1.inject([measure_unit_service_1.MeasureUnitService], function (service) {
        expect(service).toBeTruthy();
    }));
});
