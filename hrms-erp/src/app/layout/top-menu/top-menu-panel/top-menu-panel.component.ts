import {
  Component,
  ViewChild,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { MatMenu } from '@angular/material/menu';
import { NavigationEnd, Router, RouterLinkActive } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { MenuChildrenItem, MenuService } from '../../../core/bootstrap/menu.service';
import { TopmenuState } from '../top-menu.component';

@Component({
  selector: 'app-top-menu-panel',
  templateUrl: './top-menu-panel.component.html',
  styleUrls: ['./top-menu-panel.component.scss']
})
export class TopMenuPanelComponent implements OnInit, OnDestroy {
  @ViewChild('menu', { static: true }) menu?: MatMenu;

  @Input() items: MenuChildrenItem[] = [];
  @Input() parentRoute = [];
  @Input() level = 1;
  @Output() routeChange = new EventEmitter<any>();

  menuStates: TopmenuState[] = [];

  buildRoute = this.menuSrv.buildRoute;

  private routerSubscription?: Subscription;

  constructor(public menuSrv: MenuService, private router: Router) {}

  ngOnInit() {
    this.items.forEach(item => {
      this.menuStates.push({ active: this.checkRoute(item), route: item.route });
    });
  }

  ngOnDestroy() {
    this.routerSubscription?.unsubscribe();
  }

  checkRoute(item: MenuChildrenItem) {
    if (!item.route) {
      return this.checkChildRoute(item.children as MenuChildrenItem[]);
    } else {
      return this.router.url.split('/').includes(item.route);
    }
  }

  checkChildRoute(menuItems: MenuChildrenItem[]) : any {
    return menuItems.some(child => {
      if (this.router.url.split('/').includes(child.route)) {
        return true;
      }
      if (!child.route && child.children) {
       return this.checkChildRoute(child.children);
      }
    });
  }

  onRouterLinkClick(rla: RouterLinkActive) {
    this.routeChange.emit(rla);
  }

  onRouteChange(rla: RouterLinkActive, index: number) {
    this.routeChange.emit(rla);

    this.routerSubscription?.unsubscribe();
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(e => {
        this.menuStates.forEach(item => (item.active = false));
        setTimeout(() => (this.menuStates[index].active = rla.isActive));
      });
  }
}
