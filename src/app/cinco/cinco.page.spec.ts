import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CincoPage } from './cinco.page';

describe('CincoPage', () => {
  let component: CincoPage;
  let fixture: ComponentFixture<CincoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CincoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CincoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
