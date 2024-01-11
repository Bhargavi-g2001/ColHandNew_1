import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OtpRequest } from '../OtpRequest';
import { BillingserviceService } from '../service/billingservice.service';

@Component({
  selector: 'app-customer1',
  templateUrl: './customer1.component.html',
  styleUrls: ['./customer1.component.css']
})
export class Customer1Component {
  username: string = '';
  mobileNumber: string = '';
  otpSent: boolean=false;
  verifyotp:boolean=false;
  phone:any;
  phoneNumber: string | undefined;
  

  constructor(private ds:BillingserviceService, private router: Router,private http:HttpClient) {
    ds.otp1=true
  }
  private baseUrl='http://localhost:1219';

  generateOTP(frm: any) {
    // Extract the phone number from the form
    console.log(frm.value.phone);
  
    const otpRequest: OtpRequest = {
      username: this.phoneNumber,
      phoneNumber: frm.value.phone
    };
    console.log(otpRequest);
  
    this.http.post(`${this.baseUrl}/phone`, otpRequest).subscribe(
      (response: any) => {
        console.log('OTP Verification Response:', response);
        console.log(response[0].id);
        localStorage.setItem("userData", response[0].id);
  
        // Call the sendOtp service method inside the success callback
        this.ds.sendOtp(otpRequest).subscribe(
          (data: any) => {
            console.log('OTP Sent:', data);
            this.ds.otp = data.otp;
            console.log(this.ds.otp);
            this.router.navigate(['/otp']);
            this.otpSent = true;
          }
        );
      },
      (error: any) => {
        console.error('Error in /phone endpoint:', error);
        // Handle error, if needed
      }
    );
  }

}
