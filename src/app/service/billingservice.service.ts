import { Injectable } from '@angular/core';
import{HttpClient}from'@angular/common/http';
import { login } from '../login';
import { login1 } from '../login1';
import { Observable } from 'rxjs';
import { OtpRequest } from '../OtpRequest';

@Injectable({
  providedIn: 'root'
})
export class BillingserviceService {
  billamount:number=0;
  otp1:boolean=false;
  pay:boolean=false;
  money:number=0
  post(arg0: string, otpRequest: OtpRequest) {
    throw new Error('Method not implemented.');
  }
  // post(arg0: string, OtpRequest: OtpRequest) {
  //   throw new Error('Method not implemented.');
  // }



  otp:string=''
  private baseUrl='http://localhost:1219';//spring url

  constructor(private http:HttpClient) { }


//   admin (username:string,password:string){
// const body={username,password};
//     return this.http.post(this.baseUrl+'/adminss',body);
//   }
checksignin(log:login){
  console.log(log.username)
  return this.http.post<login>(`${this.baseUrl}`+"/checksignin",log);
}
checksign(log:login1){
  console.log(log.username)
  return this.http.post<login1>(`${this.baseUrl}`+"/checksign",log);
}

sendOtp(otpRequest: any): Observable<any> {
  return this.http.post(`${this.baseUrl}`+"/otp/send-otp", otpRequest);
}

validateOtp(otpValidationRequest: any): Observable<any> {
  return this.http.post(`${this.baseUrl}`+"/otp/validate-otp", otpValidationRequest);
}

private Url = 'http://localhost:1219';

 
//for viewing all customers
getAllCustomers(): Observable<any> {

  return this.http.get(`${this.Url}/all`);

}

//for viewing pending customers
private Url1 = 'http://localhost:1219';

getpendingCustomers(): Observable<any> {

  return this.http.get(`${this.Url1}/pending`);

}

private apiUrl = 'http://localhost:1219';
sendEmail(customerId: number) {
  return this.http.post(`${this.apiUrl}/email/${customerId}`,null);
}


private Url3 = 'http://localhost:1219';
phone(otpRequest:any): Observable<any> {

  return this.http.post(`${this.Url3}`+"/phone",otpRequest);

}

paydetailsbill(customer: any): Observable<any> {

 

  return this.http.post('${this.baseUrl}/paydetailsbill', customer);



}



delete(customer: any): Observable<any> {
 return this.http.post('${this.baseUrl}delete', customer);

}
}

// admin(response: any): Observable<any> {
//   return this.http.post('${this.baseUrl}admin', response);
// }



// update(response1: any): Observable<any> {
//   return this.http.post('${this.baseUrl}update', response1);
// }
// }
