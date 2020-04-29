import { __decorate } from 'tslib';
import { Component, NgModule } from '@angular/core';

let SuperLibcomponent = class SuperLibcomponent {
};
SuperLibcomponent = __decorate([
    Component({
        // tslint:disable-next-line: component-selector
        selector: 'super-lib-component',
        template: '<p>"Hello from the library!"</p>'
    })
], SuperLibcomponent);

let SuperLibModule = class SuperLibModule {
};
SuperLibModule = __decorate([
    NgModule({
        declarations: [SuperLibcomponent],
        exports: [SuperLibcomponent]
    })
], SuperLibModule);

/**
 * Generated bundle index. Do not edit.
 */

export { SuperLibModule, SuperLibcomponent };
//# sourceMappingURL=super-lib.js.map
