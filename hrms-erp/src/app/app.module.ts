import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './layout/footer/footer.component';
import { SideMenuComponent } from './layout/side-menu/side-menu.component';
import { CommonUiAppModule } from 'common-ui-app/src/public-api';
import { LoginComponent } from './views/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared';
import { ToastrModule } from 'ngx-toastr';
import { CoreModule } from './core/core.module';
import { AdminLayoutModule } from './layout/admin-layout.module';
import { ProfileModule } from './views/profile/profile/profile.module';
import { appInitializerProviders } from './layout/appInitializerProviders';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SideMenuComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    CommonUiAppModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    CoreModule,
    AdminLayoutModule,
    ProfileModule
    ],
  providers: [ appInitializerProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
