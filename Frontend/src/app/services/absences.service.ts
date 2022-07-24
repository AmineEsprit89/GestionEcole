import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AbsencesService {

  constructor(private http:HttpClient) { }

  getallabs(){
    return this.http.get('http://localhost:3000/absences')}
  
  
    addabs(f:any){
      return this.http.post('http://localhost:3000/absences/create',f);
    }
  
  
    updateabs(id:any,dataabs:any){
     return this.http.post('http://localhost:3000/absences/update/'+id,dataabs)
  
    }
    deleteabs(id:any){
      return this.http.get('http://localhost:3000/absences/delete/'+id)
    }
    xls() {
      return this.http.get(' http://localhost:3000/absxlsx')
    }
   
}
