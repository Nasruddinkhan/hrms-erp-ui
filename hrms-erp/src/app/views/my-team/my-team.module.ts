import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared';
import { MyTeamComponent } from './my-team.component';
import { MyTeamRoutingModule } from './my-team-routing.module';



@NgModule({
  declarations: [MyTeamComponent],
  imports: [
    SharedModule,
    MyTeamRoutingModule
  ]
})
export class MyTeamModule { }
