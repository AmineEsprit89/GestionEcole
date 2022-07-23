import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.component.html',
  styleUrls: ['./addnote.component.css']
})
export class AddnoteComponent implements OnInit {

  constructor(private service:NotesService,private ar:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
  }

  ajouternote(f:any){
   
    this.service.addnote(f).subscribe(
      
      ()=>{this.route.navigate(['/notes'])}

    )
  }

}
