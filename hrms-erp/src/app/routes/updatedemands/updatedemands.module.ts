import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastdemandComponent } from './forecastdemand/forecastdemand.component';
import { SharedModule } from '@shared/shared.module';
import { UpdateRoutingModule } from './updatedemand.routing.module';
import { ProjectviewdemandComponent } from './projectviewdemand/projectviewdemand.component';
import { ManualdemandComponent } from './manualdemand/manualdemand.component';
import { ApprovemanualdemandComponent } from './approvemanualdemand/approvemanualdemand.component'


const COMPONENTS = [ForecastdemandComponent, ProjectviewdemandComponent, ManualdemandComponent, ApprovemanualdemandComponent];
const COMPONENTS_DYNAMIC = [];


@NgModule({
  imports: [SharedModule, UpdateRoutingModule],
  declarations: [COMPONENTS,COMPONENTS_DYNAMIC],
  entryComponents: COMPONENTS_DYNAMIC,
})
export class UpdatedemandsModule { }
