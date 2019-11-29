import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudServiceProfessionalPage } from './crud-service-professional.page';

describe('CrudServiceProfessionalPage', () => {
  let component: CrudServiceProfessionalPage;
  let fixture: ComponentFixture<CrudServiceProfessionalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudServiceProfessionalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudServiceProfessionalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
