import { ForecastdemandComponent } from './forecastdemand/forecastdemand.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProjectviewdemandComponent } from './projectviewdemand/projectviewdemand.component';
import { ManualdemandComponent } from './manualdemand/manualdemand.component';
import { ApprovemanualdemandComponent } from './approvemanualdemand/approvemanualdemand.component';


const routes: Routes = [
    { path: 'forecast', component: ForecastdemandComponent, data: { title: 'Forecast Demand' } },
    { path: 'viewdemand', component: ProjectviewdemandComponent, data: { title: 'View Demands ' } },
    { path: 'manualdemand', component: ManualdemandComponent, data: { title: 'Manual Demands ' } },
    { path: 'appdemand', component: ApprovemanualdemandComponent, data: { title: 'Approved Demands ' } },

  ];
  //project 
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
export class UpdateRoutingModule {}