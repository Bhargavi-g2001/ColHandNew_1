import { Component } from '@angular/core';
import { BillingserviceService } from '../service/billingservice.service';
import { pendingcustomer } from '../pendingcustomer';

@Component({
  selector: 'app-customer-supportviewpage',
  templateUrl: './customer-supportviewpage.component.html',
  styleUrls: ['./customer-supportviewpage.component.css']
})
export class CustomerSupportviewpageComponent {

  cust: pendingcustomer | undefined;
  http: any;
  emailService: any;
  pendingcustomer: any[] | undefined;


  constructor(private billingService: BillingserviceService ) { }

 
//to view customer details..
  ngOnInit(): void {

    this.billingService.getpendingCustomers().subscribe((data: any[]) => {
      this.pendingcustomer = data;

    });

  }

  //for email sending..........
  sendEmail(customer:pendingcustomer) :void{
    this.billingService.sendEmail(customer.id).subscribe(
      (response: any) => {
        console.log(response);
        // You can handle a success message or action here
      });
  }
}
