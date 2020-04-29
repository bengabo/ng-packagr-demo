import { __decorate } from 'tslib';
import { Component, NgModule } from '@angular/core';

var SuperLibcomponent = /** @class */ (function () {
    function SuperLibcomponent() {
    }
    SuperLibcomponent = __decorate([
        Component({
            // tslint:disable-next-line: component-selector
            selector: 'super-lib-component',
            template: '<p>"Hello from the library!"</p>'
        })
    ], SuperLibcomponent);
    return SuperLibcomponent;
}());

var SuperLibModule = /** @class */ (function () {
    function SuperLibModule() {
    }
    SuperLibModule = __decorate([
        NgModule({
            declarations: [SuperLibcomponent],
            exports: [SuperLibcomponent]
        })
    ], SuperLibModule);
    return SuperLibModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { SuperLibModule, SuperLibcomponent };
//# sourceMappingURL=super-lib.js.map
