import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/core/bootstrap/settings.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  constructor( private settings: SettingsService) { }

  ngOnInit(): void {
  }

}
