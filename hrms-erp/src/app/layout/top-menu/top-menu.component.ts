import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router, RouterLinkActive } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Menu, MenuService } from 'src/app/core/bootstrap/menu.service';
export interface TopmenuState {
  active: boolean;
  route: string;
}
@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class TopMenuComponent implements OnDestroy {
  menu$ = this.menuSrv.getAll();
  buildRoute = this.menuSrv.buildRoute;

  menuList: Menu[] = [];
  menuStates: TopmenuState[] = [];

  private menuSubscription: Subscription;
  private routerSubscription?: Subscription;

  constructor(public menuSrv: MenuService, private router: Router) {
    this.menuSubscription = this.menu$.subscribe(res => {
      this.menuList = res;
      this.menuList.forEach(item => {
        this.menuStates.push({
          active: this.router.url.split('/').includes(item.route),
          route: item.route,
        });
      });
    });
  }

  ngOnDestroy() {
    this.menuSubscription.unsubscribe();
    this.routerSubscription?.unsubscribe();
  }

  onRouteChange(rla: RouterLinkActive, index: number) {
    this.routerSubscription?.unsubscribe();
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(e => {
        this.menuStates.forEach(item => (item.active = false));
        setTimeout(() => (this.menuStates[index].active = rla.isActive));
      });
  }
}
