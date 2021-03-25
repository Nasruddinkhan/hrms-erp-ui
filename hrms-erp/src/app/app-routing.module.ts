import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component:AdminLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: { title: 'Dashboard', titleI18n: 'dashboard' },
      },
      {
        path: 'inbox',
        loadChildren: () => import('./views/inbox/inbox.module').then(m => m.InboxModule),
      },
      {
        path: 'profile',
        loadChildren: () => import('./views/profile/profile/profile.module').then(m => m.ProfileModule),
        data: { title: 'Profile', titleI18n: 'profile' },
      },
      {
        path: 'me',
        loadChildren: () => import('./views/me/me.module').then(m => m.MeModule),
        data: { title: 'Profile', titleI18n: 'profile' },
      },
      {
        path: 'my-team',
        loadChildren: () => import('./views/my-team/my-team.module').then(m => m.MyTeamModule)
      },
      {
        path: 'finance',
        loadChildren: () => import('./views/my-finances/my-finance.module').then(m => m.MyFinanceModule)
      },
      {
        path: 'org',
        loadChildren: () => import('./views/organization/organization.module').then(m => m.OrganizationModule)
      },
      
    ],
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent, data: { title: 'Login', titleI18n: 'login' } },
    ],
  },
  { path: '**', redirectTo: 'dashboard' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    relativeLinkResolution: 'legacy',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
