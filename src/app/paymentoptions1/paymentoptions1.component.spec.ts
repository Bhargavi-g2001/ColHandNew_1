import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paymentoptions1Component } from './paymentoptions1.component';

describe('Paymentoptions1Component', () => {
  let component: Paymentoptions1Component;
  let fixture: ComponentFixture<Paymentoptions1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Paymentoptions1Component]
    });
    fixture = TestBed.createComponent(Paymentoptions1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
