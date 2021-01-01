import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTimesheetComponent } from './all-timesheet.component';

describe('AllTimesheetComponent', () => {
  let component: AllTimesheetComponent;
  let fixture: ComponentFixture<AllTimesheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllTimesheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
