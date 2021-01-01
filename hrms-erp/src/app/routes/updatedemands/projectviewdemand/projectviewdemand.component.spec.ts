import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectviewdemandComponent } from './projectviewdemand.component';

describe('ProjectviewdemandComponent', () => {
  let component: ProjectviewdemandComponent;
  let fixture: ComponentFixture<ProjectviewdemandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectviewdemandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectviewdemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
