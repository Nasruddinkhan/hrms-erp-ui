import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTimeSheetComponent } from './all-time-sheet.component';

describe('AllTimeSheetComponent', () => {
  let component: AllTimeSheetComponent;
  let fixture: ComponentFixture<AllTimeSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTimeSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTimeSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
