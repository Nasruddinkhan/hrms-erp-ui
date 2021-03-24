import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentClaimComponent } from './component-claim.component';

describe('ComponentClaimComponent', () => {
  let component: ComponentClaimComponent;
  let fixture: ComponentFixture<ComponentClaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentClaimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
