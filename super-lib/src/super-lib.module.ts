import { NgModule } from "@angular/core";
import { SuperLibcomponent } from './super-lib.component';

@NgModule({
  declarations: [SuperLibcomponent],
  exports: [SuperLibcomponent]
})
export class SuperLibModule {}
