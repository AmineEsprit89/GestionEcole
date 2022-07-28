import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AbsencesService } from '../services/absences.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-absences',
  templateUrl: './absences.component.html',
  styleUrls: ['./absences.component.css']
})
export class AbsencesComponent implements OnInit {
  msg!:string;
  dataArray!:any
  accountType!:any
  email!:any
  userId!:any

  constructor (private as:AbsencesService,private ps : AuthService,private ar:ActivatedRoute,private route:Router) { 


    this.as.getallabs().subscribe((d)=>{this.dataArray=d;});
    this.accountType=ps.getUserAccountType();
    this.email=ps.getUserEmail()
    this.userId=ps.getUserId()
    

  }

  
  ngOnInit(): void {
  }
  dataabs={Classe:'',NameE:'',Namep:'',EmailE:'',EmailP:'',Date_abs:'',heuresc:'',matiere:'',id:''}
  getdata(Classe:string,NameE: string,Namep: string, EmailE: string,EmailP:string, Date_abs:string, heuresc:string ,matiere:string,id:any){
    this.dataabs.Classe=Classe;
    this.dataabs.NameE=NameE;
    this.dataabs.Namep=Namep;
    this.dataabs.EmailE=EmailE;
    this.dataabs.EmailP=EmailP;
    this.dataabs.Date_abs=Date_abs;
    this.dataabs.heuresc=heuresc;
    this.dataabs.matiere=matiere;
    this.dataabs.id=id;
  }
  updateabs(f:any){
    let data = f.value;
    this.as.updateabs(this.dataabs.id,data).subscribe(response=>{
      let indexId = this.dataArray.findIndex((obj:any)=>obj._id==this.dataabs.id)
      this.dataArray[indexId].Classe = data.Classe
      this.dataArray[indexId].NameE = data.NameE
      this.dataArray[indexId].Namep = data.Namep
      this.dataArray[indexId].EmailE = data.EmailE
      this.dataArray[indexId].EmailP = data.EmailP
      this.dataArray[indexId].Date_abs = data.Date_abs
      this.dataArray[indexId].heuresc = data.heuresc
      this.dataArray[indexId].matiere = data.matiere

    })

}

delete(id:any,i:any){
  this.as.deleteabs(id).subscribe(Response=>{
    this.dataArray.splice(i,1)
  })
}
exeldownload(){
  this.as.xls().subscribe((d)=>{this.dataArray=d;});
  this.msg="download successfully"
  return this.msg ;
}


}


