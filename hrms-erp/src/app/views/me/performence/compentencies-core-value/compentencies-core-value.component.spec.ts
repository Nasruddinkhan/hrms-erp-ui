import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompentenciesCoreValueComponent } from './compentencies-core-value.component';

describe('CompentenciesCoreValueComponent', () => {
  let component: CompentenciesCoreValueComponent;
  let fixture: ComponentFixture<CompentenciesCoreValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompentenciesCoreValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompentenciesCoreValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
