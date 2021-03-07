import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/core';

@Component({
  selector: 'app-side-menu-data',
  templateUrl: './side-menu-data.component.html',
  styleUrls: ['./side-menu-data.component.scss']
})
export class SideMenuDataComponent  {

  menu$ = this.menuSrv.getAll();
  buildRoute = this.menuSrv.buildRoute;

  constructor(private menuSrv: MenuService) {}

}
