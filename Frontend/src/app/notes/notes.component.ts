import { Component, OnInit } from '@angular/core';
import { NotesService} from '../services/notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  dataArray!:any
  constructor(private cs:NotesService) { 

    this.cs.getallnotes().subscribe((d)=>{this.dataArray=d;})
  }

  ngOnInit(): void {
  }


  datanote={Designation:'',nomEnseignant:'',noteCc:'',noteExam:'',id:''}
  getdata(Designation: string,nomEnseignant: string, noteCc: string, noteExam:string,id:any){
    this.datanote.Designation=Designation;
    this.datanote.nomEnseignant=nomEnseignant;
    this.datanote.noteCc=noteCc;
    this.datanote.noteExam=noteExam;
    this.datanote.id=id;


    


  }
  updatenotenofrmations(f:any){
    let data = f.value;
    this.cs.updatenote(this.datanote.id,data).subscribe(response=>{
      let indexId = this.dataArray.findIndex((obj:any)=>obj._id==this.datanote.id)
      this.dataArray[indexId].Designation = data.Designation
      this.dataArray[indexId].nomEnseignant = data.nomEnseignant
      this.dataArray[indexId].noteCc = data.noteCc
      this.dataArray[indexId].noteExam = data.noteExam
      



    })
  }




  delete(id:any,i:any){
    this.cs.deletenote(id).subscribe(Response=>{
      this.dataArray.splice(i,1)
    })
  }

}

