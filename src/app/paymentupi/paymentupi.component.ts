import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BillingserviceService } from '../service/billingservice.service';
import { customer } from '../customer';

@Component({
  selector: 'app-paymentupi',
  templateUrl: './paymentupi.component.html',
  styleUrls: ['./paymentupi.component.css']
})
export class PaymentupiComponent {
  constructor(private ds: BillingserviceService, private router: Router, private http: HttpClient){}
  private baseUrl = 'http://localhost:1219';

  onSubmit() {
    let customer = localStorage.getItem("userData");
  console.log(customer);
  this.http.post(`${this.baseUrl}/sendemail/${customer}`, customer).subscribe(
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