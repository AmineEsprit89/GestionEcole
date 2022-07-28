import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { RdvsService } from '../services/rdvs.service';

@Component({
  selector: 'app-rdv',
  templateUrl: './rdv.component.html',
  styleUrls: ['./rdv.component.css']
})
export class RdvComponent implements OnInit {
msg!:string;
  dataArray!:any
  accountType!:any
  email:any
  
  constructor(private rs:RdvsService,private pr : AuthService,private ar:ActivatedRoute,private route:Router) { 


    this.rs.getallrdvs().subscribe((d)=>{this.dataArray=d;})
    this.accountType=pr.getUserAccountType()
    this.email=pr.getUserEmail()
  }

  ngOnInit(): void {
  }
  datardv={Namep:'',EmailE:'',EmailP:'',Date_r:'',heure_r:'',cause:'',id:''}
  getdata(Namep: string,EmailE: string,EmailP: string, Date_r: string, heure_r:string, cause:string ,id:any){
    this.datardv.Namep=Namep;
    this.datardv.EmailE=EmailE;
    this.datardv.EmailP=EmailP;
    this.datardv.Date_r=Date_r;
    this.datardv.heure_r=heure_r;
    this.datardv.cause=cause;
    this.datardv.id=id;

}
updaterdv(f:any){
  let data = f.value;
  this.rs.updaterdv(this.datardv.id,data).subscribe(response=>{
    let indexId = this.dataArray.findIndex((obj:any)=>obj._id==this.datardv.id)
    this.dataArray[indexId].Namep = data.Namep
    this.dataArray[indexId].EmailE = data.EmailE
    this.dataArray[indexId].EmailP = data.EmailP
    this.dataArray[indexId].Date_r = data.Date_r
    this.dataArray[indexId].heure_r = data.heure_r
    this.dataArray[indexId].cause = data.cause




  })

}

delete(id:any,i:any){
this.rs.deleterdv(id).subscribe(Response=>{
  this.dataArray.splice(i,1)
})
}
exeldownload(){
  this.rs.rdvxls().subscribe((d)=>{this.dataArray=d;});
  this.msg="download successfully"
  return this.msg ;
}


}
