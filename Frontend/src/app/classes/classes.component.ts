import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ClassesService } from '../services/classes.service';


@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {
  dataArray!:any
  accountType!:any

  constructor(private cl : ClassesService,private ps : AuthService,private ar:ActivatedRoute,private route:Router) { 
  
  this.cl.getAllClasses().subscribe((d)=>{this.dataArray=d;})
  this.accountType=ps.getUserAccountType()
  }
  
  ngOnInit(): void {
   
    

  }


  dataclasse={NivCls:'',ClsID:'', NbrEleves :'' , emailP:'', email:'',id:''}
  getdata(NivCls: string,ClsID: string,NbrEleves: string, emailP: string,email: string,id:any){

    this.dataclasse.NivCls=NivCls;
    this.dataclasse.ClsID=ClsID;
    this.dataclasse.NbrEleves=NbrEleves;
    this.dataclasse.emailP=emailP;
    this.dataclasse.email=email;
  
    this.dataclasse.id=id;
    console.log("ok");
  }

  
  updateClasse(c:any){
    let data = c.value;
    this.cl.updateClasse(this.dataclasse.id,data).subscribe(response=>{
      let indexId = this.dataArray.findIndex((obj:any)=>obj._id==this.dataclasse.id)
      this.dataArray[indexId].ClsID = data.ClsID
      this.dataArray[indexId].NbrEleves = data.NbrEleves
      this.dataArray[indexId].emailP = data.emailP
      this.dataArray[indexId].email = data.email


    })

}

deleteClasse(id:any,i:any){
  this.cl.deleteClasse(id).subscribe(Response=>{
    this.dataArray.splice(i,1)
  })
}




}
