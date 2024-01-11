import { Component } from '@angular/core';
import { BillingserviceService } from '../service/billingservice.service';

@Component({
  selector: 'app-paymentoptions1',
  templateUrl: './paymentoptions1.component.html',
  styleUrls: ['./paymentoptions1.component.css']
})
export class Paymentoptions1Component {
  constructor(private ds:BillingserviceService){}
  pay(){
    this.ds.pay=false
  }
  pay1(){
    this.ds.pay=true
  }
}
