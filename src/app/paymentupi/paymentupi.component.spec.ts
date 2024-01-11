import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentupiComponent } from './paymentupi.component';

describe('PaymentupiComponent', () => {
  let component: PaymentupiComponent;
  let fixture: ComponentFixture<PaymentupiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentupiComponent]
    });
    fixture = TestBed.createComponent(PaymentupiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
