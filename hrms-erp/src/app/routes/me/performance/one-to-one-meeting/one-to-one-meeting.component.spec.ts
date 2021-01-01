import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneToOneMeetingComponent } from './one-to-one-meeting.component';

describe('OneToOneMeetingComponent', () => {
  let component: OneToOneMeetingComponent;
  let fixture: ComponentFixture<OneToOneMeetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneToOneMeetingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneToOneMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
