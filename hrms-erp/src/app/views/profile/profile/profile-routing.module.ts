import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsService } from 'src/app/core/bootstrap/settings.service';
import { AboutComponent } from './about/about.component';
import { AssetsComponent } from './assets/assets.component';
import { DocumentsComponent } from './documents/documents.component';
import { JobProfileComponent } from './job-profile/job-profile.component';
import { OverviewComponent } from './overview/overview.component';
import { ProfileLayoutComponent } from './profile-layout.component';
import { ResumeBuilderComponent } from './resume-builder/resume-builder.component';
import { SettingsComponent } from './settings/settings.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
    {
      path: '',
      component:ProfileLayoutComponent,
      children: [
        { path: '', redirectTo: 'overview', pathMatch: 'full' }, 
        { path: 'overview', component: OverviewComponent, data: { title: 'Profile Overview' } },
        { path: 'settings', component: SettingsComponent, data: { title: 'Profile Settings' } },
        { path: 'about', component: AboutComponent, data: { title: 'Profile Overview' } },
        { path: 'job', component: JobProfileComponent, data: { title: 'Profile Overview' } },
        { path: 'documents', component: DocumentsComponent, data: { title: 'Profile Overview' } },
        { path: 'assets', component: AssetsComponent, data: { title: 'Profile Overview' } },
        { path: 'userprofile', component: UserProfileComponent, data: { title: 'Profile Overview' } },
        { path: 'resume-builder', component: ResumeBuilderComponent, data: { title: 'Profile Overview' } },
        
      ],
    },
  ];
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class ProfileRoutingModule {}