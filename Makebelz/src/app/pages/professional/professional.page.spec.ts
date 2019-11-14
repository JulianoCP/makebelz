import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalPage } from './professional.page';

describe('ProfessionalPage', () => {
  let component: ProfessionalPage;
  let fixture: ComponentFixture<ProfessionalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
