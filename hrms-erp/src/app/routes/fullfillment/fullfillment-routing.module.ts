
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DemandfullfillmentComponent } from './demandfullfillment/demandfullfillment.component';
import { SearchemployeeComponent } from './searchemployee/searchemployee.component';
import { ApproveexternalhiringComponent } from './approveexternalhiring/approveexternalhiring.component';



const routes: Routes = [
    { path: 'demandfullfillment', component: DemandfullfillmentComponent, data: { title: 'Demand Fullfillment' } },
    { path: 'searcemployee', component: SearchemployeeComponent, data: { title: 'Search Employee' } },
    { path: 'approveexthiring', component: ApproveexternalhiringComponent, data: { title: 'Approve External Hiring' } },

  ];
  //project 
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
export class FullfillmentRoutingModule {}