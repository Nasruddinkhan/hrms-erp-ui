import { HostBinding, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatSidenav, MatSidenavContent } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';
import { SettingsService } from 'src/app/core/bootstrap/settings.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav | undefined;
  @ViewChild('content', { static: true }) content: MatSidenavContent  | undefined;
  private isCollapsedWidthFixed = true;
  private layoutChangesSubscription?: Subscription;
  sidenavCollapsed = false;
  private isContentWidthFixed = true;
  sidenavOpened= true ;
  options = this.settings.getOptions();

  get isOver(): boolean {
    return this.isMobileScreen;
  }
  
  sidenavCloseStart() {
    console.log('zczxccxz')
    this.sidenavCollapsed = true;
  }
  private isMobileScreen = false;
  constructor( private settings: SettingsService) {

    
   }
   closeMenu(){
     console.log('gjghjfhgjh')
    // this.sidenav?.toggle();
    
    console.log(this.sidenav?.opened)
    
   }
  ngOnInit(): void {
    setTimeout(() => (this.isContentWidthFixed = this.isCollapsedWidthFixed = false));

  }
  sidenavOpenedChange(isOpened: boolean) {
    console.log(isOpened);
    this.isCollapsedWidthFixed = !this.isOver;
    this.sidenavOpened = isOpened;
    this.settings.setNavState('opened', isOpened);
    this.isCollapsedWidthFixed = !this.isOver;
    this.resetCollapsedState();
  }

  resetCollapsedState(timer = 400) {
    // TODO: Trigger when transition end
    setTimeout(() => {
      this.settings.setNavState('collapsed', this.sidenavCollapsed);
    }, timer);
  }



}
