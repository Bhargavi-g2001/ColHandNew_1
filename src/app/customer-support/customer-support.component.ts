import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BillingserviceService } from '../service/billingservice.service';
import { login1 } from '../login1';

@Component({
  selector: 'app-customer-support',
  templateUrl: './customer-support.component.html',
  styleUrls: ['./customer-support.component.css']
})
export class CustomerSupportComponent {

  constructor(private router:Router,private ds:BillingserviceService) { }
  //method for customer support display message
  finds(data:any){
    if(data.status==true){
      alert(data.message)
      this.router.navigate(['/CustomerSupportviewpage'])
    }
    else{
      alert(data.message)
    }
  }
  //for customersupportlogin details stored here
  signin(frm:any){
    const log=new login1();
    log.username=frm.value.username
    log.password=frm.value.password
    let helo$=this.ds.checksign(log);
    helo$.subscribe(
      (data:any)=>this.finds(data),
      err=>console.log(err)
    );

  }

}
