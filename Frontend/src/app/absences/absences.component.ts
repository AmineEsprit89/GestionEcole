import { Component, OnInit } from '@angular/core';
import { AbsencesService } from '../services/absences.service';

@Component({
  selector: 'app-absences',
  templateUrl: './absences.component.html',
  styleUrls: ['./absences.component.css']
})
export class AbsencesComponent implements OnInit {
  msg!:string;
  dataArray!:any
  constructor(private as:AbsencesService) { 


    this.as.getallabs().subscribe((d)=>{this.dataArray=d;})
  }

  
  ngOnInit(): void {
  }
  dataabs={Classe:'',NameE:'',Namep:'',Emailp:'',Date_abs:'',heuresc:'',matiere:'',id:''}
  getdata(Classe:string,NameE: string,Namep: string, Emailp: string, Date_abs:string, heuresc:string ,matiere:string,id:any){
    this.dataabs.Classe=Classe;
    this.dataabs.NameE=NameE;
    this.dataabs.Namep=Namep;
    this.dataabs.Emailp=Emailp;
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
      this.dataArray[indexId].Emailp = data.Emailp
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
