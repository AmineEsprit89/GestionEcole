import { Component, OnInit } from '@angular/core';
import { ClassesService } from '../services/classes.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-addclasse',
  templateUrl: './addclasse.component.html',
  styleUrls: ['./addclasse.component.css']
})
export class AddclasseComponent implements OnInit {

  constructor(private service:ClassesService,private ar:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
  }


  ajouterclasse(cl:any){

    this.service.createNewClasse(cl).subscribe(
      ()=>{this.route.navigate(['/classes'])}

    )
  }

}
