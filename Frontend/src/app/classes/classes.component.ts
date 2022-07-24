import { Component, OnInit } from '@angular/core';
import { ClassesService } from '../services/classes.service';


@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {
  dataArray!:any

  constructor(private cl : ClassesService) { }

  ngOnInit(): void {
    this.cl.getAllClasses().subscribe((d)=>{this.dataArray=d;})
  }


  dataclasse={ClsID:'', NbrEleves :'' ,ChefDeClasse:'',id:''}
  getdata(ClsID: string,NbrEleves: string, ChefDeClasse: string,id:any){

    this.dataclasse.ClsID=ClsID;
    this.dataclasse.NbrEleves=NbrEleves;
    this.dataclasse.ChefDeClasse=ChefDeClasse;
  
    this.dataclasse.id=id;
    console.log("ok");
  }

  
  updateClasse(c:any){
    let data = c.value;
    this.cl.updateClasse(this.dataclasse.id,data).subscribe(response=>{
      let indexId = this.dataArray.findIndex((obj:any)=>obj._id==this.dataclasse.id)
      this.dataArray[indexId].ClsID = data.ClsID
      this.dataArray[indexId].NbrEleves = data.NbrEleves
      this.dataArray[indexId].ChefDeClasse = data.ChefDeClasse

    })

}

deleteClasse(id:any,i:any){
  this.cl.deleteClasse(id).subscribe(Response=>{
    this.dataArray.splice(i,1)
  })
}




}
