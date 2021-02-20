import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/core';
import { SettingsService, User } from 'src/app/core/bootstrap/settings.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent  {
  user: User;

  constructor(
    private router: Router,
    private settings: SettingsService,
    private token: TokenService,
   // private menu: MenuService
  ) {
    this.user = settings.user;
  }

  logout() {
    this.token.clear();
    this.settings.removeUser();
    //this.menu.reset();
    this.router.navigateByUrl('/auth/login');
  }

}
