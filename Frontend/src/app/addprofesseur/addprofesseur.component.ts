import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { ActivatedRoute, Route, Router } from '@angular/router';



@Component({
  selector: 'app-addprofesseur',
  templateUrl: './addprofesseur.component.html',
  styleUrls: ['./addprofesseur.component.css']
})
export class AddprofesseurComponent implements OnInit {

  constructor(private service:UsersService,private ar:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
  }

  ajouteruser(f:any){

    this.service.adduser(f).subscribe(
      ()=>{this.route.navigate(['/professeurs'])}

    )
  }

}
