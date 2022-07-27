import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-showevent',
  templateUrl: './showevent.component.html',
  styleUrls: ['./showevent.component.css']
})
export class ShoweventComponent implements OnInit {

  constructor(private es:EventsService,private route:ActivatedRoute) { }

id:any
data:any
Image:any

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.finalShow();
  }

  finalShow()
  {
    this.es.showevent(this.id).subscribe(data=>{
      this.data=data
    })
    
  }
}
