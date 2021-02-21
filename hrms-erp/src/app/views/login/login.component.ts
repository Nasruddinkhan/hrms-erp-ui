import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/core';
import { SettingsService } from 'src/app/core/bootstrap/settings.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {

    }
  }
  constructor( private router: Router,
    private token: TokenService,
    private settings: SettingsService) { }

  ngOnInit(): void {
  }
  login() {
    const { token, uid, username } = { token: 'nasruddin', uid: 1, username: 'nasruddin' };
    this.settings.setUser({
      id: uid,
      name: 'Nasruddin',
      email: 'nasruddinkhan44@gmail.com',
      avatar: './assets/images/photo.jpeg',
    });
    this.token.set({ token, uid, username });
      let url = this.token.referrer!.url || '/';
      if (url.includes('/auth')) {
        url = '/';
      }
      this.router.navigateByUrl(url);
  }

}
