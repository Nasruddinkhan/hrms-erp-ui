import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { MenuService } from './menu.service';
import { SettingsService } from './settings.service';

@Injectable({
  providedIn: 'root',
})
export class StartupService {
  constructor(
    private menu: MenuService,
    private http: HttpClient,
    private settings: SettingsService
  ) {}

  load(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http
        .get('assets/menu.json?_t=' + Date.now())
        .pipe(
          catchError(res => {
            resolve(null);
            return throwError(res);
          })
        )
        .subscribe(
          (res: any) => {
            console.log(res);
           // this.menu.recursMenuForTranslation(res.menu, 'menu');
            this.menu.set(res.menu);
          },
          () => reject(),
          () => resolve(null)
        );
    });
  }
}
