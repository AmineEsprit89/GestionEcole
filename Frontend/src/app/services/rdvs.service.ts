import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RdvsService {

 
  constructor(private http:HttpClient) { }

  getallrdvs(){
    return this.http.get('http://localhost:3000/rdvs')}
  
  
    addrdv(f:any){
      return this.http.post('http://localhost:3000/rdvs/create',f);
    }
  
  
    updaterdv(id:any,dataabs:any){
     return this.http.post('http://localhost:3000/rdvs/update/'+id,dataabs)
  
    }
    deleterdv(id:any){
      return this.http.get('http://localhost:3000/rdvs/delete/'+id)
    }
    rdvxls() {
      return this.http.get(' http://localhost:3000/xlsx')
    }
}
