import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganazationTreeComponent } from './organazation-tree.component';

describe('OrganazationTreeComponent', () => {
  let component: OrganazationTreeComponent;
  let fixture: ComponentFixture<OrganazationTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganazationTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganazationTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
