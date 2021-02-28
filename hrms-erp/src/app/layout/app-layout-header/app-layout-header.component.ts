import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import * as screenfull from 'screenfull';

@Component({
  selector: 'app-app-layout-header',
  templateUrl: './app-layout-header.component.html',
  styleUrls: ['./app-layout-header.component.scss']
})
export class AppLayoutHeaderComponent implements OnInit {
  @Input() showToggle = true;

  @Output() toggleSidenav = new EventEmitter<void>();
  @Output() toggleSidenavNotice = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }
  private get screenfull(): screenfull.Screenfull {
    return screenfull as screenfull.Screenfull;
  }

  toggleFullscreen() {
    if (this.screenfull.isEnabled) {
      this.screenfull.toggle();
    }
  }
}
