import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-showevent',
  templateUrl: './showevent.component.html',
  styleUrls: ['./showevent.component.css']
})
export class ShoweventComponent implements OnInit {

  constructor(private es:EventsService) { }
dataArray:any
  ngOnInit(): void {
  }
  show(id:any){
    this.es.showevent(id).subscribe((e)=>{
      this.dataArray=e;})
    
  }
}
