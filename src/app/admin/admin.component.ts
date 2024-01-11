import { Component } from '@angular/core';
import { BillingserviceService } from '../service/billingservice.service';
import { Router } from '@angular/router';
import { login } from '../login';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  username:string='';
  password:string='';
  
  constructor(private router:Router,private ds:BillingserviceService) { }
  // method for adminlogin message alert
  finds(data:any){
    if(data.status==true){
      alert(data.message)
      this.router.navigate(['/adminviewpage'])
    }
    else{
      alert(data.message)
    }
  }
  //for adminlogin details stored 
  signin(frm:any){
    const log=new login();
    log.username=frm.value.username
    log.password=frm.value.password
    let helo$=this.ds.checksignin(log);
    helo$.subscribe(
      (data:any)=>this.finds(data),
      err=>console.log(err)
    );

  }
  // admin (){
  //   if(this.username=='kavi' && this.password=='Reset@123')
  //   {
  //     this.router.navigate(['/admin/adminviewpage'])
  //   }
  //   else{
  //     console.log('login failed');
  //   }
  // }

//   constructor(private authService:BillingserviceService) { }

  
//   admin (){
//     this.authService.admin(this.username,this.password)
//     .subscribe(response=>{
//       console.log('login success',response);
//     },
//    error=>{
//       console.error('failed',error);
      
      
//     }
//     );
// }


}