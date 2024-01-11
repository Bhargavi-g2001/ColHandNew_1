import { Component } from '@angular/core';
import { BillingserviceService } from '../service/billingservice.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { customer } from '../customer';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  private baseUrl = 'http://localhost:1219';
  responseData: any;
  customerId: any;
  creditCard:any;
  cardNumber:any;
  cvv:any;
  condition:number=0;
  // customer:any;
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
    message(){
      if(this.ds.pay==false){
        this.condition=this.responseData.outbalance 
        this.ds.billamount=this.condition
    }
    else{
      this.condition=this.ds.money
      this.ds.billamount=this.condition
    }
    }
// private baseUrl1 = 'http://localhost:1219';

    onSubmit() {
      let customer = localStorage.getItem("userData");
    console.log(customer);
    this.http.post(`${this.baseUrl}/send-email/${customer}`, customer).subscribe(
      (response: any) => {
        console.log('Email sent successfully:', response);
        // You can handle a success message or action here
      },
      (error: any) => {
        console.error('Email sending failed:', error);
        // Handle the error here if needed
      }
    );
      this.http.delete(`${this.baseUrl}/delete/${customer}`).subscribe(
    
        (response: any) => {
    
          console.log('Deleted successful:', response);
    
         //delete completed
    
          this.http.post(`${this.baseUrl}/admin/${customer}`,customer).subscribe(
    
            (data: any) => {
    
              console.log('Admin successful:', data);
    
              const datas:customer={customer_id:data.customer_id,name:data.name,mobile:data.mobile,email:data.email,duedate:data.duedate,outbalance:data.outbalance,status:"Paid",currentbalance:data.currentbalance,previousbalance:data.previousbalance}
    
              console.log(datas);
    
              this.http.put(`${this.baseUrl}/update/${customer}`, datas).subscribe(
    
                (response1: any) => {
    
                  console.log('update successful:', response1);
    
                }
    
              );
//for sending email. when payment successful........
              
    //end ..........
            }
    
          );
        },
    
        (error: any) => {
    
          console.error('Delete and Update failed:', error);
    
          // Handle login error, e.g., display an error message
    
        }
    
      );
    
    }
    
}
    
    
  

