import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesProvidedPage } from './services-provided.page';

describe('ServicesProvidedPage', () => {
  let component: ServicesProvidedPage;
  let fixture: ComponentFixture<ServicesProvidedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesProvidedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesProvidedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
