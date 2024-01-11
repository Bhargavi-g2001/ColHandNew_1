import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BillingserviceService } from '../service/billingservice.service';

@Component({
  selector: 'app-paymentsuccess',
  templateUrl: './paymentsuccess.component.html',
  styleUrls: ['./paymentsuccess.component.css']
})
export class PaymentsuccessComponent {
responseData:any;
bill:number=0

private baseUrl = 'http://localhost:1219';
constructor(private ds: BillingserviceService, private router: Router, private http: HttpClient) {
  this.bill=this.ds.billamount
  let credentials:any = localStorage.getItem("userData");
  console.log(this.bill)
  console.log("Working");

  console.log(credentials);

  this.http.post(`${this.baseUrl}/paydetailsbill/${credentials}`, credentials).subscribe(

      (response: any) => {

 console.log('Login successful:', response);

      this.responseData = response[0];

}


)

 
  }

}
