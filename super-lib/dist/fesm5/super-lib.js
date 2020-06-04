import { __decorate } from 'tslib';
import { Component, NgModule } from '@angular/core';

var SuperLibComponent = /** @class */ (function () {
    function SuperLibComponent() {
    }
    SuperLibComponent = __decorate([
        Component({
            // tslint:disable-next-line: component-selector
            selector: "super-lib-component",
            template: "<h3>Hello from an external template!</h3>\r\n"
        })
    ], SuperLibComponent);
    return SuperLibComponent;
}());

var SuperLibModule = /** @class */ (function () {
    function SuperLibModule() {
    }
    SuperLibModule = __decorate([
        NgModule({
            declarations: [SuperLibComponent],
            exports: [SuperLibComponent]
        })
    ], SuperLibModule);
    return SuperLibModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { SuperLibComponent, SuperLibModule };
//# sourceMappingURL=super-lib.js.map
