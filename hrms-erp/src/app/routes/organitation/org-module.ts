import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { OrganitionDocumentsComponent } from './documents/organition-documents/organition-documents.component';
import { EmployeeDirectoryComponent } from './employees/employee-directory/employee-directory.component';
import { OrganizationTreeComponent } from './employees/organization-tree/organization-tree.component';
import { AnnouncementsComponent } from './engage/announcements/announcements.component';
import { ArticlesComponent } from './engage/articles/articles.component';
import { PollsComponent } from './engage/polls/polls.component';
import { OrganizationRountingModule } from './org-routing.module';
const COMPONENTS = [OrganizationTreeComponent, EmployeeDirectoryComponent, AnnouncementsComponent,
     ArticlesComponent, OrganitionDocumentsComponent, PollsComponent];
const COMPONENTS_DYNAMIC = [];

@NgModule({
    imports: [SharedModule, OrganizationRountingModule],
    declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
    entryComponents: COMPONENTS_DYNAMIC,
})
export class OrganizationModule { }