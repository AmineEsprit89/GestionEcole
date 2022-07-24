import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  dataReceived:any
  constructor(private auth : AuthService,private ar:ActivatedRoute,private route:Router) {
    console.log(this.auth.loggedIn())
  }

  ngOnInit(): void {
  }

  login(f:any){
    let data=f.value
    this.auth.login(data).subscribe(response=>
      {
        this.dataReceived=response
      //send data to auth service for saving to local storage
      this.auth.saveDataProfil(this.dataReceived.token)
      console.log(this.dataReceived)
     // console.log(this.auth.isLoggedIn)
     console.log(this.auth.loggedIn())
      this.route.navigate(['/'])
      .then(() => {
        window.location.reload();
      });
  


      },err=>console.log(err))
  }

}


