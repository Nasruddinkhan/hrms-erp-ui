import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InboxComponent } from './inbox.component';

const routes: Routes = [ {
      path: '',
      children: [ { path: '', redirectTo: 'inbox', pathMatch: 'full' },
        { path: 'inbox', component: InboxComponent, data: { title: 'Checkbox' } },
      ],
    },
  ];
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class InboxRoutingModule {}
