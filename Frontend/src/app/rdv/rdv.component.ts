import { Component, OnInit } from '@angular/core';
import { RdvsService } from '../services/rdvs.service';

@Component({
  selector: 'app-rdv',
  templateUrl: './rdv.component.html',
  styleUrls: ['./rdv.component.css']
})
export class RdvComponent implements OnInit {
msg!:string;
  dataArray!:any
  constructor(private rs:RdvsService) { 


    this.rs.getallrdvs().subscribe((d)=>{this.dataArray=d;})
  }

  ngOnInit(): void {
  }
  datardv={Namep:'',Emailp:'',Date_r:'',heure_r:'',cause:'',id:''}
  getdata(Namep: string,Emailp: string, Date_r: string, heure_r:string, cause:string ,id:any){
    this.datardv.Namep=Namep;
    this.datardv.Emailp=Emailp;
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
    this.dataArray[indexId].Emailp = data.Emailp
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
