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
import { SideMenuComponent } from './side-menu/side-menu.component';
import { SideMenuDataComponent } from './side-menu/side-menu-data/side-menu-data.component';
import { AccordionDirective } from './side-menu/side-menu-data/accordion.directive';
import { AccordionItemDirective } from './side-menu/side-menu-data/accordionItem.directive';
import { AccordionAnchorDirective } from './side-menu/side-menu-data/accordionanchor.directive';
import { FooterComponent } from './footer/footer.component';
import { CustomizerComponent } from './customizer/customizer.component';



@NgModule({
  declarations: [AdminLayoutComponent,  
     AuthLayoutComponent,
    AppLayoutHeaderComponent,
    UserComponent,
    NotificationComponent,
    TranslateComponent,
    TopMenuComponent,
    SideMenuComponent,
    TopMenuPanelComponent,
    AccordionDirective,
    AccordionItemDirective,
    AccordionAnchorDirective,
    FooterComponent,
    SideMenuDataComponent,
    CustomizerComponent  ],
  imports: [
   SharedModule
  ]
})
export class AdminLayoutModule { }
