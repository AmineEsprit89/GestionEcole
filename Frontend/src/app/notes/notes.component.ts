import { NgIf } from '@angular/common';
import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NotesService} from '../services/notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  msg!:string;
  dataArray!:any;
  accountType!:any;
  email:any
  total:any
  totalamount: any
  constructor(private cs:NotesService,private us : AuthService,private ar:ActivatedRoute,private route:Router) { 

    this.cs.getallnotes().subscribe((d)=>{this.dataArray=d;})
    this.accountType=us.getUserAccountType()
    this.email=us.getUserEmail()
  }

 
    
   
  
    ngOnInit(): void {
      
      
    }
  

  datanote={Designation:'',nomEnseignant:'',noteCc:'',EmailE:'',EmailP:'',noteExam:'',id:''}
  getdata(Designation: string,nomEnseignant: string, EmailE: string, EmailP: string,noteCc: string, noteExam:string,id:any){
    this.datanote.Designation=Designation;
    this.datanote.nomEnseignant=nomEnseignant;
    this.datanote.EmailE=EmailE;
    this.datanote.EmailP=EmailP;
    
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
      this.dataArray[indexId].EmailE = data.EmailE
      this.dataArray[indexId].EmailP = data.EmailP
      this.dataArray[indexId].noteCc = data.noteCc
      this.dataArray[indexId].noteExam = data.noteExam
      



    })
  }




  delete(id:any,i:any){
    this.cs.deletenote(id).subscribe(Response=>{
      this.dataArray.splice(i,1)
    })
  }
  public showMyMessage = false
  pdfdownload(){

this.cs.pdf().subscribe((d)=>{this.dataArray=d;});

this.msg='pdf telecharge ';
    return this.msg;
  }
 

}

