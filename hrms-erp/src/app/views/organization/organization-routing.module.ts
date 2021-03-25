import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDirectoryComponent } from './employee/employee-directory/employee-directory.component';
import { OrganazationTreeComponent } from './employee/organazation-tree/organazation-tree.component';
import { AnnouncementComponent } from './engage/announcement/announcement.component';
import { ArticlesComponent } from './engage/articles/articles.component';
import { PollsComponent } from './engage/polls/polls.component';
import { OrganizationDocumentsComponent } from './organization-documents/organization-documents.component';

const routes: Routes = [
  { path: 'directory', component: EmployeeDirectoryComponent, data: { title: 'Checkbox' } },
  { path: 'orgtree', component: OrganazationTreeComponent, data: { title: 'Checkbox' } },
  { path: 'announcement', component: AnnouncementComponent, data: { title: 'Checkbox' } },
  { path: 'articles', component: ArticlesComponent, data: { title: 'Checkbox' } },
  { path: 'polls', component: PollsComponent, data: { title: 'Checkbox' } },
  { path: 'orgdocuments', component: OrganizationDocumentsComponent, data: { title: 'Checkbox' } },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationRoutingModule { }
