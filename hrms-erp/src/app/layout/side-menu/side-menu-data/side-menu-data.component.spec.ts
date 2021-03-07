import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuDataComponent } from './side-menu-data.component';

describe('SideMenuDataComponent', () => {
  let component: SideMenuDataComponent;
  let fixture: ComponentFixture<SideMenuDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideMenuDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
