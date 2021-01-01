import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompentenciesAndCoreValueComponent } from './compentencies-and-core-value.component';

describe('CompentenciesAndCoreValueComponent', () => {
  let component: CompentenciesAndCoreValueComponent;
  let fixture: ComponentFixture<CompentenciesAndCoreValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompentenciesAndCoreValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompentenciesAndCoreValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
