import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http:HttpClient) { }

  getallpayments(){
    return this.http.get('http://localhost:3000/payments')}

    pay(){
      return this.http.get('http://localhost:3000/payments/pay')}

      makePayment(stripeToken: any): Observable<any>{
        const url = "http://localhost:3000/payments/checkout/"

        return this.http.post<any>(url,{token:stripeToken})
      }





}
