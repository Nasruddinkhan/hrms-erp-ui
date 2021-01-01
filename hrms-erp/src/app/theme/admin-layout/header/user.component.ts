import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <a mat-button href="javascript:void(0)" [matMenuTriggerFor]="menu">
     
      <span class="align-middle">Nasruddin khan</span>
    </a>

    <mat-menu #menu="matMenu">
      <a routerLink="/profile/about" mat-menu-item>
        <mat-icon>account_circle</mat-icon>
        <span>Profile</span>
      </a>
      <a routerLink="/profile/settings" mat-menu-item>
        <mat-icon>settings</mat-icon>
        <span>Settings</span>
      </a>
      <a routerLink="/" mat-menu-item>
        <mat-icon>exit_to_app</mat-icon>
        <span>Logout</span>
      </a>
    </mat-menu>
  `,
})
export class UserComponent {}
