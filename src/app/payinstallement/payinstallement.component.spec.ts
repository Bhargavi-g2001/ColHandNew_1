import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayinstallementComponent } from './payinstallement.component';

describe('PayinstallementComponent', () => {
  let component: PayinstallementComponent;
  let fixture: ComponentFixture<PayinstallementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PayinstallementComponent]
    });
    fixture = TestBed.createComponent(PayinstallementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
