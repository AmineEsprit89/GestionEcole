import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  constructor(private http:HttpClient) { }


  getAllClasses(){
    return this.http.get('http://localhost:3000/classes')}


  createNewClasse(f:any){
      return this.http.post('http://localhost:3000/classes/create',f)}
  
  getClasseById(id:any){
    return this.http.get('http://localhost:3000/classes/'+id)}

  
    deleteClasse(id:any){
      return this.http.get('http://localhost:3000/classes/delete/'+id)
    }

    updateClasse(id:any,dataclasse:any){
      return this.http.post('http://localhost:3000/classes/update/'+id,dataclasse)

     }



}