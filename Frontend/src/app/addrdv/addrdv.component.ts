import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { RdvsService } from '../services/rdvs.service';

@Component({
  selector: 'app-addrdv',
  templateUrl: './addrdv.component.html',
  styleUrls: ['./addrdv.component.css']
})
export class AddrdvComponent implements OnInit {

  constructor(private service:RdvsService,private ar:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
  }
  ajouterrdv(f:any){
   
    this.service.addrdv(f).subscribe(
      
      ()=>{this.route.navigate(['/rdv'])}

    )
  }
}
