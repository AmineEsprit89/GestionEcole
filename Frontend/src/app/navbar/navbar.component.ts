import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
//  role!:any;

  id:any
  email:any
  accountType:any

  loggedIn=this.us.loggedIn()

  constructor(private us : AuthService,private ar:ActivatedRoute,private route:Router) {
  //  this.id=us.getUserId()
    //this.email=us.getUserEmail()
    this.accountType=us.getUserAccountType()
  // console.log(this.us.loggedIn())
   }

  ngOnInit(): void {

  }

  logout(){
    this.us.logout();
    this.route.navigate(['/'])
    .then(() => {
      window.location.reload();
    });
  }




}
