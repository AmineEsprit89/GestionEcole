import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getallusers(){
    return this.http.get('http://localhost:3000/users')}


    adduser(f:any){
      return this.http.post('http://localhost:3000/users/create',f);
    }


    updateuser(id:any,datauser:any){
      return this.http.post('http://localhost:3000/users/update/'+id,datauser)

     }


     showuser(id:any){
      return this.http.get('http://localhost:3000/users/'+id)
     }

     deleteuser(id:any){
      return this.http.get('http://localhost:3000/users/delete/'+id)
    }


    getalleleves(){
      return this.http.get('http://localhost:3000/users/eleve')}


    getallprofesseurs(){
      return this.http.get('http://localhost:3000/users/professeur')}












}
