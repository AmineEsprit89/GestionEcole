import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http:HttpClient) { }


  getallcours(){
    return this.http.get('http://localhost:3000/cours')}


    addcour(f:any){
      return this.http.post('http://localhost:3000/cours/create',f);
    }
    updatecour(id:any,datacour:any){
      return this.http.post('http://localhost:3000/cours/update/'+id,datacour)
   
     }


    deletecour(id:any){
      return this.http.get('http://localhost:3000/cours/delete/'+id)
    }
}
