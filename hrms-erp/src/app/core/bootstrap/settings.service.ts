import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/shared';

export const USER_KEY = 'usr';

export interface User {
  id: number;
  name?: string;
  email?: string;
  avatar?: string;
}

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  constructor(private store: LocalStorageService) {}


  get notify(): Observable<any> {
    return this.notify$.asObservable();
  }
  private notify$ = new BehaviorSubject<any>({});


  setNavState(type: string, value: boolean) {
    this.notify$.next({ type, value } as any);
  }



  /** User information */

  get user() {
    return this.store.get(USER_KEY);
  }

  setUser(value: User) {
    this.store.set(USER_KEY, value);
  }

  removeUser() {
    this.store.remove(USER_KEY);
  }

}
