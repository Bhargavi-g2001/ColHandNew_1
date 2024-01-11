import { Component } from '@angular/core';
import { Otpvalidation } from '../Otpvalidation';
import { BillingserviceService } from '../service/billingservice.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent {
  username:string='';
  verifyotp:boolean=false;
  constructor(private ds:BillingserviceService, private router: Router) {}

  otpForm:FormGroup = new FormGroup({
    otp1: new FormControl('',[]),
  otp2:new FormControl('',[]),
  otp3:new FormControl('',[]),
  otp4:new FormControl('',[]),
  otp5:new FormControl('',[]),
  otp6:new FormControl('',[]),

  })

  o:string =''
  
  verifyOTP(){
    
    const otpvalidation: Otpvalidation = { 
      username: this.username,
      otpNumber: ''
      
    };
    
    console.log(this.otpForm.value.otp1+this.otpForm.value.otp2+this.otpForm.value.otp3+this.otpForm.value.otp4+this.otpForm.value.otp5+this.otpForm.value.otp6);
    this.o = this.otpForm.value.otp1+this.otpForm.value.otp2+this.otpForm.value.otp3+this.otpForm.value.otp4+this.otpForm.value.otp5+this.otpForm.value.otp6
    console.log("otppppp "+this.o)
    console.log("otttpppp 2 "+this.ds.otp)
    if(this.o == this.ds.otp && this.ds.otp1==false){
      this.router.navigate(['/payment']);
    }
    else if(this.o == this.ds.otp && this.ds.otp1==true){
      this.router.navigate(['/paymentoptions1']);
    }
    else{
      //console.error("invalid otp",console.error)
      console.log('wrong otp') 
    
        }
    
    // console.log(this.otp1);
    // Call the sendOtp service method
    // this.ds.sendOtp(otpvalidation).subscribe(
    
    //   (data: any) => {console.log('OTP Sent:',data);
    //   if(data.status=="success"){
    //     this.verifyotp=true;
    //     this.router.navigate(['/paymentoptions']);
    //   }
    //   else{
    //     console.error("invalid otp",console.error)
        
    //   }
      // this.router.navigate(['/paymentoptions']);
      
    // });


    }
}
