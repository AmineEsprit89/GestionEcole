import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-addcours',
  templateUrl: './addcours.component.html',
  styleUrls: ['./addcours.component.css']
})
export class AddcoursComponent implements OnInit {

  constructor(private service:CoursesService,private ar:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
  }

  ajoutercour(f:any){
   
    this.service.addcour(f).subscribe(
      
      ()=>{this.route.navigate(['/cours'])}

    )
  }

}
