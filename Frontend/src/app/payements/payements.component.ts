import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { PaymentService } from '../services/payment.service';


@Component({
  selector: 'app-payements',
  templateUrl: './payements.component.html',
  styleUrls: ['./payements.component.css']
})
export class PayementsComponent implements OnInit {
  dataArray!:any
  email:any
  accountType:any




  success : boolean =false;
  failure : boolean =false;
  title = ''
  paymentHandler:any = null

  constructor(private ps : PaymentService,private us : AuthService,private ar:ActivatedRoute,private route:Router) {
    this.ps.getallpayments().subscribe((d)=>{this.dataArray=d;})



    this.accountType=us.getUserAccountType()
    this.email=us.getUserEmail()

  }

  ngOnInit(): void {
    this.invokeStripe()


  }



  makePayment(amount : number){
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key : 'pk_test_51LJbVuD9LnWlf4MjYImWmwJ1tNyS1nnlfBB7YQ5idzfKb1kQNIeTvMb3WMtS6Ygdg3OieetuuvDaXseCHk1KYiof00EUTifYRb',
      locale : 'auto',
      token : function(stripeToken:any){ //after submitting credit card it genereates a unique token
        console.log(stripeToken)

        paymentStripe(stripeToken)

      }

    });
    const paymentStripe = (stripeToken: any) => {
      this.ps.makePayment(stripeToken).subscribe((data: any) => {
        console.log(data);
        if (data.data === "success") {
          this.success = true
        }
        else {
          this.failure = true
        }


      });
    };



    paymentHandler.open({
      name : "",   //nom du payeur
      description : "PAYER ANNEE SCOLAIRE", //produit
      amount : amount*100    //montant a payer
    })
  }

  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';   //stripe library
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51LJbVuD9LnWlf4MjYImWmwJ1tNyS1nnlfBB7YQ5idzfKb1kQNIeTvMb3WMtS6Ygdg3OieetuuvDaXseCHk1KYiof00EUTifYRb', //publishable key
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
          },
        });
      };
      window.document.body.appendChild(script);
    }
  }














}
