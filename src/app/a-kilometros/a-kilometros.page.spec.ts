import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AKilometrosPage } from './a-kilometros.page';

describe('AKilometrosPage', () => {
  let component: AKilometrosPage;
  let fixture: ComponentFixture<AKilometrosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AKilometrosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AKilometrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
