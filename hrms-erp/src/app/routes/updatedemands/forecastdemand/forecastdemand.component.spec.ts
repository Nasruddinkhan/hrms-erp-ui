import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastdemandComponent } from './forecastdemand.component';

describe('ForecastdemandComponent', () => {
  let component: ForecastdemandComponent;
  let fixture: ComponentFixture<ForecastdemandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastdemandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastdemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
