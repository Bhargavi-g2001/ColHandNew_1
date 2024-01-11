import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CustomerSupportComponent } from './customer-support/customer-support.component';
import { CustomerComponent } from './customer/customer.component';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { PaymentComponent } from './payment/payment.component';
import { AdminviewpageComponent } from './adminviewpage/adminviewpage.component';
import { CustomerSupportviewpageComponent } from './customer-supportviewpage/customer-supportviewpage.component';
import { PaymentoptionsComponent } from './paymentoptions/paymentoptions.component';
import { FormsModule,ReactiveFormsModule,FormGroup } from '@angular/forms';
import { OtpComponent } from './otp/otp.component';
import { EmailComponent } from './email/email.component';
import { PaymentsuccessComponent } from './paymentsuccess/paymentsuccess.component';
import { PaymentupiComponent } from './paymentupi/paymentupi.component';
import { OtherissuesComponent } from './otherissues/otherissues.component';
import { PayinstallementComponent } from './payinstallement/payinstallement.component';
import { Paymentoptions1Component } from './paymentoptions1/paymentoptions1.component';
import { Customer1Component } from './customer1/customer1.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    CustomerSupportComponent,
    CustomerComponent,
    AdminComponent,
    PaymentComponent,
    AdminviewpageComponent,
    CustomerSupportviewpageComponent,
    PaymentoptionsComponent,
    OtpComponent,
    EmailComponent,
    PaymentsuccessComponent,
    PaymentupiComponent,
    OtherissuesComponent,
    PayinstallementComponent,
    Paymentoptions1Component,
    Customer1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
