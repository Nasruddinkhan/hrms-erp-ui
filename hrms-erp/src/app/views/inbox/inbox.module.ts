import { NgModule } from '@angular/core';
import { InboxComponent } from './inbox.component';
import { SharedModule } from 'src/app/shared';
import {InboxRoutingModule}  from './inbox-routing.module'


@NgModule({
  declarations: [InboxComponent],
  imports: [
    SharedModule,
    InboxRoutingModule
  ]
})
export class InboxModule { }
