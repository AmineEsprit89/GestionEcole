import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'app-payements',
  templateUrl: './payements.component.html',
  styleUrls: ['./payements.component.css']
})
export class PayementsComponent implements OnInit {
  dataArray!:any

  constructor(private ps : PaymentService) {
    this.ps.getallpayments().subscribe((d)=>{this.dataArray=d;})
  }

  ngOnInit(): void {
  }

}
