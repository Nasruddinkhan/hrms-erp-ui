import { NgModule } from '@angular/core';
import { SearchemployeeComponent } from './searchemployee/searchemployee.component';
import { ApproveexternalhiringComponent } from './approveexternalhiring/approveexternalhiring.component';
import { DemandfullfillmentComponent } from './demandfullfillment/demandfullfillment.component';
import { FullfillmentRoutingModule } from 'app/routes/fullfillment/fullfillment-routing.module';
import { SharedModule } from '@shared/shared.module';




const COMPONENTS = [SearchemployeeComponent, DemandfullfillmentComponent, ApproveexternalhiringComponent];
const COMPONENTS_DYNAMIC = [];


@NgModule({
  imports: [SharedModule, FullfillmentRoutingModule],
  declarations: [COMPONENTS,COMPONENTS_DYNAMIC],
  entryComponents: COMPONENTS_DYNAMIC,
})
export class FullfillmentModule { }
