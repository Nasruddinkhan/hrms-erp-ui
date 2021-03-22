import { CdkDragStart } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SettingsService } from '../../core/bootstrap/settings.service'

@Component({
  selector: 'app-customizer',
  templateUrl: './customizer.component.html',
  styleUrls: ['./customizer.component.scss']
})
export class CustomizerComponent implements OnInit {
  dragging = false;
  opened = false;
  options = this.settings.getOptions();
  @Output() optionsChange = new EventEmitter<object>();

  constructor(private settings: SettingsService) { }

  ngOnInit(): void {
  }
  handleDragStart(event: CdkDragStart): void {
    this.dragging = true;
  }
  openPanel(event: MouseEvent) {
    if (this.dragging) {
      this.dragging = false;
      return;
    }
    this.opened = true;
  }
  closePanel() {
    console.log('called after click');
    this.opened = false;
  }

  
  sendOptions() {
    this.optionsChange.emit(this.options);
  }
}
