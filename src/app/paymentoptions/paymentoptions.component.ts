import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BillingserviceService } from '../service/billingservice.service';

@Component({
  selector: 'app-paymentoptions',
  templateUrl: './paymentoptions.component.html',
  styleUrls: ['./paymentoptions.component.css']
})
export class PaymentoptionsComponent {
  baseUrl: any;
  responseData: any;

  constructor(private ds: BillingserviceService, private router: Router, private http: HttpClient) {
    
    let credentials:any = localStorage.getItem("userData");
    console.log("Working");
    console.log(credentials);
    this.http.post(`${this.baseUrl}/paydetailsbill/${credentials}`, credentials).subscribe(
        (response: any) => {
   console.log('Login successful:', response);
        this.responseData = response[0];
        // ds.billamount=this.responseData.outbalance
        this.message()
  }
  
  
  )
  
  
    }
  message() {
    throw new Error('Method not implemented.');
  }
  pay(){
    this.ds.pay=false
  }
}
