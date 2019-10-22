import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterPage } from './router.page';

describe('RouterPage', () => {
  let component: RouterPage;
  let fixture: ComponentFixture<RouterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
