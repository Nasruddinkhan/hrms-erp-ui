import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinuousFeedbackComponent } from './continuous-feedback.component';

describe('ContinuousFeedbackComponent', () => {
  let component: ContinuousFeedbackComponent;
  let fixture: ComponentFixture<ContinuousFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContinuousFeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinuousFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
