import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { AppLayoutHeaderComponent } from './app-layout-header/app-layout-header.component';
import { SharedModule } from '../shared';
import { UserComponent } from './app-layout-header/widgets/user/user.component';
import { NotificationComponent } from './app-layout-header/widgets/notification/notification.component';
import { TranslateComponent } from './app-layout-header/widgets/translate/translate.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { TopMenuPanelComponent } from './top-menu/top-menu-panel/top-menu-panel.component';



@NgModule({
  declarations: [AdminLayoutComponent,  
     AuthLayoutComponent,
    AppLayoutHeaderComponent,
    UserComponent,
    NotificationComponent,
    TranslateComponent,
    TopMenuComponent,
    TopMenuPanelComponent  ],
  imports: [
   SharedModule
  ]
})
export class AdminLayoutModule { }
