import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http:HttpClient) { }


  getallnotes(){
    return this.http.get('http://localhost:3000/notes')}


    addnote(f:any){
      return this.http.post('http://localhost:3000/notes/create',f);
    }
    updatenote(id:any,datanote:any){
      return this.http.post('http://localhost:3000/notes/update/'+id,datanote)
   
     }


    deletenote(id:any){
      return this.http.get('http://localhost:3000/notes/delete/'+id)
    }
}
