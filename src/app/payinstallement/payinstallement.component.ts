import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BillingserviceService } from '../service/billingservice.service';

@Component({
  selector: 'app-payinstallement',
  templateUrl: './payinstallement.component.html',
  styleUrls: ['./payinstallement.component.css']
})
export class PayinstallementComponent {

  selectedValue: string | undefined; // Initialize with a default value if needed

  // You can access the selectedValue in your component methods or templates
  // For example, you can log the selected value when it changes
  onValueChange() {
    console.log('Selected value:', this.selectedValue);
  }

  responseData:any;
  private baseUrl = 'http://localhost:1219';
  constructor(private ds: BillingserviceService, private router: Router, private http: HttpClient) {
  
    let credentials:any = localStorage.getItem("userData");
  
    console.log("Working");
  
    console.log(credentials);
  
    this.http.post(`${this.baseUrl}/paydetailsbill/${credentials}`, credentials).subscribe(
  
        (response: any) => {
  
   console.log('Login successful:', response);
  
        this.responseData = response[0];
  
  }
  
   
  
  )
  
   
  
    }
   
    onsubmit(){
      // this.ds.pay=true
      if(this.selectedValue=="2"){
          this.ds.money=this.responseData.previousbalance/2
      }
      else if(this.selectedValue=="3"){
        this.ds.money=this.responseData.previousbalance/3
    }
      console.log('Selected value:', this.selectedValue);
      
    }

}
