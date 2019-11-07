import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuatroPage } from './cuatro.page';

describe('CuatroPage', () => {
  let component: CuatroPage;
  let fixture: ComponentFixture<CuatroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuatroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuatroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
