import { Component } from '@angular/core';
import { pendingcustomer } from '../pendingcustomer';
import { BillingserviceService } from '../service/billingservice.service';
import { HttpClient } from '@angular/common/http';
import { customer } from '../customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otherissues',
  templateUrl: './otherissues.component.html',
  styleUrls: ['./otherissues.component.css']
})
export class OtherissuesComponent {
  constructor(private ds:BillingserviceService, private router: Router,private http:HttpClient) {}
  private baseUrl='http://localhost:1219';
  selectedOption: string | undefined; // Initialize with a default value if needed
  valid:any=false;
  // You can access the selectedOption in your component methods or templates
  // For example, you can log the selected option when it changes
  onOptionChange() {
    let customer = localStorage.getItem("userData");
    console.log('Selected option:', this.selectedOption);
    this.http.post(`${this.baseUrl}/sendemailtoissues/${customer}`, this.selectedOption).subscribe(
      (response: any) => {
        console.log('Email sent successfully:', response);
        // You can handle a success message or action here
      },
      (error: any) => {
        console.error('Email sending failed:', error);
        // Handle the error here if needed
      }
    );
    this.valid=true;
  }
// pendingcustomer:any;
//   constructor(private billingService: BillingserviceService,private  http:HttpClient) { }
//   private baseUrl='http://localhost:1219';
//   sendEmailissues(customer:any) :void{
//     this.http.post(`${this.baseUrl}/sendemailtoissues/${customer}`, customer).subscribe(
//       (response: any) => {
//         console.log('Email sent successfully:', response);
//         // You can handle a success message or action here
//       },
//       (error: any) => {
//         console.error('Email sending failed:', error);
//         // Handle the error here if needed
//       }
//     );
      
  }
