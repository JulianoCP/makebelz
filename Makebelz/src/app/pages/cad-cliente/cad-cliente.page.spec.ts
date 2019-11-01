import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadClientePage } from './cad-cliente.page';

describe('CadClientePage', () => {
  let component: CadClientePage;
  let fixture: ComponentFixture<CadClientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadClientePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
