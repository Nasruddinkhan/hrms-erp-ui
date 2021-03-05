import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectTimeSheetComponent } from './reject-time-sheet.component';

describe('RejectTimeSheetComponent', () => {
  let component: RejectTimeSheetComponent;
  let fixture: ComponentFixture<RejectTimeSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectTimeSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectTimeSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
