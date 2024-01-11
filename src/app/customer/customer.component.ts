import { Component } from '@angular/core';
import { BillingserviceService } from '../service/billingservice.service';
import { Router } from '@angular/router';
import { OtpRequest } from '../OtpRequest';
import { Otpvalidation } from '../Otpvalidation';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  username: string = '';
  mobileNumber: string = '';
  otpSent: boolean=false;
  verifyotp:boolean=false;
  phone:any;
  phoneNumber: string | undefined;
  

  constructor(private ds:BillingserviceService, private router: Router,private http:HttpClient) {}


//   generateOTP(frm:any) {
//     // Extract the phone number from the form
//     const otpRequest = { phoneNumber: this.mobileNumber };

//     // Call the sendOtp service method
//     this.ds.sendOtp(otpRequest).subscribe(
//       (data: any) => {
//         this.finds(data);
//       },
//       (err) => {
//         console.log('Error generating OTP:', err);
//         // Handle the error and provide appropriate feedback to the user
//       }
//     );
//   }
//   finds(data: any) {
//     if (data.status == true) {
//       alert(data.message);
//       this.router.navigate(['/CustomerSupportviewpage']);
//     } else {
//       alert(data.message);
//     }
//   }
// }
private baseUrl='http://localhost:1219';
// generateOTP(frm:any) {
//       // Extract the phone number from the form
//       console.log(frm.value.phone)

//       const otpRequest: OtpRequest = { 
//         username: this.phoneNumber,
//         phoneNumber: frm.value.phone};
//       console.log(otpRequest);
//         this.http.post(`${this.baseUrl}/phone`,otpRequest).subscribe(
//           (response:any)=>{
//             console.log('OTP Verification Response:', response);
//             console.log(response.id);
//             localStorage.setItem("userData",response.id);
//           }
//         )
  
//       // // Call the sendOtp service method
//       this.ds.sendOtp(otpRequest).subscribe(

//         (data: any) => {
//           // console.log('OTP Verification Response:', data.Customer_id);
//           // localStorage.setItem("userData",data.Customer_id);

//           console.log('OTP Sent:',data);
//         this.ds.otp = data.otp;
//         console.log(this.ds.otp)
//         this.router.navigate(['/otp']);
//         this.otpSent=true;
//       });
// }

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
