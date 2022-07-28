import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClubsService {

  constructor(private http:HttpClient) { }

getallclubs(){
  return this.http.get('http://localhost:3000/clubs')}


  addclub(f:any){
    return this.http.post('http://localhost:3000/clubs/create',f);
  }


  updateclub(id:any,dataclub:any){
   return this.http.post('http://localhost:3000/clubs/update/'+id,dataclub)

  }

  showclub(id:any){
    return this.http.get('http://localhost:3000/clubs/show/'+id)
   }


  deleteclub(id:any){
    return this.http.get('http://localhost:3000/clubs/delete/'+id)
  }

}
