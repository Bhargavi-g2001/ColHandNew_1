import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSupportviewpageComponent } from './customer-supportviewpage.component';

describe('CustomerSupportviewpageComponent', () => {
  let component: CustomerSupportviewpageComponent;
  let fixture: ComponentFixture<CustomerSupportviewpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerSupportviewpageComponent]
    });
    fixture = TestBed.createComponent(CustomerSupportviewpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
