import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveexternalhiringComponent } from './approveexternalhiring.component';

describe('ApproveexternalhiringComponent', () => {
  let component: ApproveexternalhiringComponent;
  let fixture: ComponentFixture<ApproveexternalhiringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveexternalhiringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveexternalhiringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
