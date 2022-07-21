import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,Route } from '@angular/router';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.css']
})
export class AddeventComponent implements OnInit {

  constructor(private service:EventsService,private ar:ActivatedRoute,private route:Router) { }

  
  ngOnInit(): void {
  }

  ajouterevent(f:any){
   
    this.service.addevent(f).subscribe(
      
      ()=>{this.route.navigate(['/events'])}
      
  
    

    )
  }


  

}
