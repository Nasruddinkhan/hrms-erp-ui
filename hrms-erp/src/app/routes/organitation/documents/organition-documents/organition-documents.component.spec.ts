import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganitionDocumentsComponent } from './organition-documents.component';

describe('OrganitionDocumentsComponent', () => {
  let component: OrganitionDocumentsComponent;
  let fixture: ComponentFixture<OrganitionDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganitionDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganitionDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
