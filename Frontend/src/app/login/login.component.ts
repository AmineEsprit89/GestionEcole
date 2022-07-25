import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error = ""
  x : boolean = false

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
      this.auth.saveDataProfil(this.dataReceived.token)
      this.route.navigate(['/'])
      .then(() => {
        window.location.reload();
      });
      },
      (err)=>{console.log(err.error)
        this.error = err.error.msg;
        this.x=true

      }
      )
  }

}


