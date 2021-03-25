import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationRoutingModule } from './organization-routing.module';
import { OrganizationDocumentsComponent } from './organization-documents/organization-documents.component';
import { AnnouncementComponent } from './engage/announcement/announcement.component';
import { ArticlesComponent } from './engage/articles/articles.component';
import { PollsComponent } from './engage/polls/polls.component';
import { EmployeeDirectoryComponent } from './employee/employee-directory/employee-directory.component';
import { OrganazationTreeComponent } from './employee/organazation-tree/organazation-tree.component';


@NgModule({
  declarations: [OrganizationDocumentsComponent, AnnouncementComponent, ArticlesComponent, PollsComponent, EmployeeDirectoryComponent, OrganazationTreeComponent],
  imports: [
    CommonModule,
    OrganizationRoutingModule
  ]
})
export class OrganizationModule { }
