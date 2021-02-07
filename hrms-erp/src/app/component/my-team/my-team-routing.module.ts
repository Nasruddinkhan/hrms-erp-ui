import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyTeamComponent } from './my-team.component';
const routes: Routes = [
    {
      path: '',
      component: MyTeamComponent,
      data: {
        title: 'Dashboard'
      }
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class MyTeamRoutingModule {}