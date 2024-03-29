import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationDocumentsComponent } from './organization-documents.component';

describe('OrganizationDocumentsComponent', () => {
  let component: OrganizationDocumentsComponent;
  let fixture: ComponentFixture<OrganizationDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizationDocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
