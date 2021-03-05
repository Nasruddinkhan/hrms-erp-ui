import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyTeamComponent } from './my-team.component';

const routes: Routes = [ {
      path: '',
      children: [ { path: '', redirectTo: 'team', pathMatch: 'full' },
        { path: 'team', component: MyTeamComponent, data: { title: 'Checkbox' } },
      ],
    },
  ];
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class MyTeamRoutingModule {}
