import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ClubsService } from '../services/clubs.service';

@Component({
  selector: 'app-addclub',
  templateUrl: './addclub.component.html',
  styleUrls: ['./addclub.component.css']
})
export class AddclubComponent implements OnInit {

  constructor(private service:ClubsService,private ar:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
  }
  ajouterclub(f:any){
   
    this.service.addclub(f).subscribe(
      
      ()=>{this.route.navigate(['/clubs'])}

    )
  }

}
