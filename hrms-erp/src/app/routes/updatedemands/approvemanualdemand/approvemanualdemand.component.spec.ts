import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovemanualdemandComponent } from './approvemanualdemand.component';

describe('ApprovemanualdemandComponent', () => {
  let component: ApprovemanualdemandComponent;
  let fixture: ComponentFixture<ApprovemanualdemandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovemanualdemandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovemanualdemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
