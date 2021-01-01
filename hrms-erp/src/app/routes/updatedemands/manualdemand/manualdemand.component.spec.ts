import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualdemandComponent } from './manualdemand.component';

describe('ManualdemandComponent', () => {
  let component: ManualdemandComponent;
  let fixture: ComponentFixture<ManualdemandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualdemandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualdemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
