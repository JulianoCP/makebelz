import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesTypePage } from './services-type.page';

describe('ServicesTypePage', () => {
  let component: ServicesTypePage;
  let fixture: ComponentFixture<ServicesTypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesTypePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
