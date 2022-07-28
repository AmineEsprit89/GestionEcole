import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-addeleve',
  templateUrl: './addeleve.component.html',
  styleUrls: ['./addeleve.component.css']
})
export class AddeleveComponent implements OnInit {

  constructor(private service:UsersService,private ar:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
  }

  ajouteruser(f:any){

    this.service.adduser(f).subscribe(
      ()=>{this.route.navigate(['/eleves'])}

    )
  }


  

}
