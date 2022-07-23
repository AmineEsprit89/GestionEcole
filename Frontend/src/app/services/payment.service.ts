import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http:HttpClient) { }

  getallpayments(){
    return this.http.get('http://localhost:3000/payments')}

    pay(){
      return this.http.get('http://localhost:3000/payments/pay')}





}
