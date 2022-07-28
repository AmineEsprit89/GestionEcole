import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClubsService } from '../services/clubs.service';

@Component({
  selector: 'app-showclub',
  templateUrl: './showclub.component.html',
  styleUrls: ['./showclub.component.css']
})
export class ShowclubComponent implements OnInit {

  id:any
   data:any
  constructor(private es:ClubsService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.finalShowclub();
  }

  finalShowclub()
  {
    this.es.showclub(this.id).subscribe(data=>{
      this.data=data
    })
    
  }
}
