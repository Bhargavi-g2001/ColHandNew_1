import { Component } from '@angular/core';
import { BillingserviceService } from '../service/billingservice.service';

@Component({
  selector: 'app-adminviewpage',
  templateUrl: './adminviewpage.component.html',
  styleUrls: ['./adminviewpage.component.css']
})
export class AdminviewpageComponent {
 

  customers: any[] = [];

 

  constructor(private billingService: BillingserviceService ) { }

 
//to view customer details..
  ngOnInit(): void {

    this.billingService.getAllCustomers().subscribe(data => {
      this.customers = data;

    });

  }

}
