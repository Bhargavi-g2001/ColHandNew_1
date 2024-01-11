import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerSupportComponent } from './customer-support/customer-support.component';
import { AdminComponent } from './admin/admin.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminviewpageComponent } from './adminviewpage/adminviewpage.component';
import { CustomerSupportviewpageComponent } from './customer-supportviewpage/customer-supportviewpage.component';
import { PaymentoptionsComponent } from './paymentoptions/paymentoptions.component';
import { OtpComponent } from './otp/otp.component';
import { EmailComponent } from './email/email.component';
import { PaymentsuccessComponent } from './paymentsuccess/paymentsuccess.component';
import { PaymentupiComponent } from './paymentupi/paymentupi.component';
import { OtherissuesComponent } from './otherissues/otherissues.component';
import { PayinstallementComponent } from './payinstallement/payinstallement.component';
import { Paymentoptions1Component } from './paymentoptions1/paymentoptions1.component';
import { Customer1Component } from './customer1/customer1.component';

const routes: Routes = [
                    {
                        path:'',
                        component:HomeComponent
                    },
                      {path:'about',
                      component:AboutComponent},
                      {path:'admin',
                      component:AdminComponent},
                      {path:'Customer',
                      component:CustomerComponent},
                      {path:'CustomerSupport',
                      component:CustomerSupportComponent},
                      {path:'payment',
                      component:PaymentComponent},
                      {path:'adminviewpage',
                      component:AdminviewpageComponent},
                      {path:'CustomerSupportviewpage',
                      component:CustomerSupportviewpageComponent},
                      {
                        path:'paymentoptions',
                        component:PaymentoptionsComponent
                      },
                      {
                        path:'otp',
                        component:OtpComponent
                      },
                      {
                        path:'email',
                        component:EmailComponent
                      },
                      {
                        path:'paymentsucces',
                        component:PaymentsuccessComponent
                      },
                      {
                        path:'paymentupi',
                        component:PaymentupiComponent
                      },
                      {
                        path:'otherissues',
                        component:OtherissuesComponent
                      },
                      {
                        path:'paymentinstallment',
                        component:PayinstallementComponent
                      },
                      {
                        path:'paymentoptions1',
                        component:Paymentoptions1Component
                      },
                      {
                        path:'customer1',
                        component:Customer1Component
                      },

                       
                    



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
