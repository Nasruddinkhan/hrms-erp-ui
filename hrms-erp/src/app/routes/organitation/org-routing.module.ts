import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganitionDocumentsComponent } from './documents/organition-documents/organition-documents.component';
import { EmployeeDirectoryComponent } from './employees/employee-directory/employee-directory.component';
import { OrganizationTreeComponent } from './employees/organization-tree/organization-tree.component';
import { AnnouncementsComponent } from './engage/announcements/announcements.component';
import { ArticlesComponent } from './engage/articles/articles.component';
import { PollsComponent } from './engage/polls/polls.component';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: 'directory', component: EmployeeDirectoryComponent, data: { title: 'Employee Directory' } },
            { path: 'orgtree', component: OrganizationTreeComponent, data: { title: 'Organization Employee' } },
            { path: 'announcement', component: AnnouncementsComponent, data: { title: 'Organization Employee' } },
            { path: 'articles', component: ArticlesComponent, data: { title: 'Organization Employee' } },
            { path: 'polls', component: PollsComponent, data: { title: 'Organization Employee' } },
            { path: 'orgdocuments', component: OrganitionDocumentsComponent, data: { title: 'Organization Documents' } },

        ],
    },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OrganizationRountingModule { }