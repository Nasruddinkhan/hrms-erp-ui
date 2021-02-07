import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTeamComponent } from './my-team.component';
import { MyTeamRoutingModule } from './my-team-routing.module';



@NgModule({
  declarations: [
    MyTeamComponent
  ],
  imports: [
    CommonModule,
    MyTeamRoutingModule

  ]
})
export class MyTeamModule { }
