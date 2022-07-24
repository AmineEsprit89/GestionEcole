import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  profilUser = {
    userId: '',
    accountType: '',
    email: '',
  };

  //isLoggedIn:boolean=false
  helper = new JwtHelperService();

  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.post('http://localhost:3000/users/login', data);
  }

  //save token in local storage et remplir profile admin et set logged in to true
  saveDataProfil(token: any) {
    localStorage.setItem('token', token);
  }

  getUserEmail() {
    let token: any = localStorage.getItem('token');
    if (!token) {
      return '';
    } else {
      let decodeToken = this.helper.decodeToken(token);
      return decodeToken.email;
    }
  }

  getUserAccountType() {
    let token: any = localStorage.getItem('token');
    if (!token) {
      return '';
    } else {
      let decodeToken = this.helper.decodeToken(token);
      return decodeToken.accountType;
    }
  }

  getUserId() {
    let token: any = localStorage.getItem('token');
    if (!token) {
      return '';
    } else {
      let decodeToken = this.helper.decodeToken(token);
      return decodeToken.userId;
    }
  }

  loggedIn() {
    let token: any = localStorage.getItem('token');
    let decodeToken = this.helper.decodeToken(token);

    //  let accountType = decodeToken.accountType
    if ((decodeToken = '')) {
      return false;
    }
    if (this.helper.isTokenExpired(token)) {
      return false;
    }
    return true;
  }

  logout() {
    localStorage.removeItem('token');
    console.log('logout in auth works');
  }
}
