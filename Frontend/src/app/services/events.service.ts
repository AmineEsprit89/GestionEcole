import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http:HttpClient) { }
  getallevents(){
    return this.http.get('http://localhost:3000/events')}


    addevent(f:any){
      return this.http.post('http://localhost:3000/events/create',f);
    }


    updateevent(id:any,dataevent:any){
      return this.http.post('http://localhost:3000/events/update/'+id,dataevent)

     }

     showevent(id:any){
      return this.http.get('http://localhost:3000/events/show/'+id)
     }



    deleteevent(id:any){
      return this.http.get('http://localhost:3000/events/delete/'+id)
    }


}
