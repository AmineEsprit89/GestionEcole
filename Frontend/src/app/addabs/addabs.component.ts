import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AbsencesService } from '../services/absences.service';


@Component({
  selector: 'app-addabs',
  templateUrl: './addabs.component.html',
  styleUrls: ['./addabs.component.css']
})
export class AddabsComponent implements OnInit {

  constructor(private service:AbsencesService,private ar:ActivatedRoute,private route:Router) { }
 
  ngOnInit(): void {
  }
  ajouterabs(f:any){

   
    this.service.addabs(f).subscribe(
      
      ()=>{this.route.navigate(['/absences'])}

    )
  }


}
