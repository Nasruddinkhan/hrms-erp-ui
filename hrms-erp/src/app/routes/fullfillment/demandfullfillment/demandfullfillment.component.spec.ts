import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandfullfillmentComponent } from './demandfullfillment.component';

describe('DemandfullfillmentComponent', () => {
  let component: DemandfullfillmentComponent;
  let fixture: ComponentFixture<DemandfullfillmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandfullfillmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandfullfillmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
