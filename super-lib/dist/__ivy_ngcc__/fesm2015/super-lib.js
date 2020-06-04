import { __decorate } from 'tslib';
import { Component, NgModule } from '@angular/core';

import * as ɵngcc0 from '@angular/core';
let SuperLibComponent = class SuperLibComponent {
};
SuperLibComponent.ɵfac = function SuperLibComponent_Factory(t) { return new (t || SuperLibComponent)(); };
SuperLibComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SuperLibComponent, selectors: [["super-lib-component"]], decls: 2, vars: 0, template: function SuperLibComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "h3");
        ɵngcc0.ɵɵtext(1, "Hello from an external template!");
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });

let SuperLibModule = class SuperLibModule {
};
SuperLibModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: SuperLibModule });
SuperLibModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function SuperLibModule_Factory(t) { return new (t || SuperLibModule)(); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SuperLibComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line: component-selector
                selector: "super-lib-component",
                template: "<h3>Hello from an external template!</h3>\r\n"
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(SuperLibModule, { declarations: [SuperLibComponent], exports: [SuperLibComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SuperLibModule, [{
        type: NgModule,
        args: [{
                declarations: [SuperLibComponent],
                exports: [SuperLibComponent]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { SuperLibComponent, SuperLibModule };

//# sourceMappingURL=super-lib.js.map