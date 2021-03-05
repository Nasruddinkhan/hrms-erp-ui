import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileLayoutComponent } from './profile-layout.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from 'src/app/shared';
import { SettingsComponent } from './settings/settings.component';
import { OverviewComponent } from './overview/overview.component';
import { AboutComponent } from './about/about.component';
import { AssetsComponent } from './assets/assets.component';
import { DocumentsComponent } from './documents/documents.component';
import { JobProfileComponent } from './job-profile/job-profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ResumeBuilderComponent } from './resume-builder/resume-builder.component';
import { PrimaryDetailsComponent } from './user-profile/primary-details/primary-details.component';
import { ContactDetailsComponent } from './user-profile/contact-details/contact-details.component';
import { AddressDetailsComponent } from './user-profile/address-details/address-details.component';

const COMPONENTS = [ProfileLayoutComponent, SettingsComponent, OverviewComponent];
@NgModule({
  declarations: [...COMPONENTS, AboutComponent, AssetsComponent, DocumentsComponent, JobProfileComponent, UserProfileComponent, ResumeBuilderComponent, PrimaryDetailsComponent, ContactDetailsComponent, AddressDetailsComponent],
  imports: [SharedModule, ProfileRoutingModule],
})
export class ProfileModule { }
