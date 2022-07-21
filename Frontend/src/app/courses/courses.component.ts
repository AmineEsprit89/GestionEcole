import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  dataArray!:any
  constructor(private cs:CoursesService) { 

    this.cs.getallcours().subscribe((d)=>{this.dataArray=d;})
  }

  ngOnInit(): void {
  }


  datacour={Designation:'',nomcour:'',nomEnseignant:'',chapitre:'',id:''}
  getdata(Designation: string,nomcour: string, nomEnseignant: string, chapitre:string,id:any){
    this.datacour.Designation=Designation;
    this.datacour.nomcour=nomcour;
    this.datacour.nomEnseignant=nomEnseignant;
    this.datacour.chapitre=chapitre;
    this.datacour.id=id;


    


  }
  updatecourInofrmations(f:any){
    let data = f.value;
    this.cs.updatecour(this.datacour.id,data).subscribe(response=>{
      let indexId = this.dataArray.findIndex((obj:any)=>obj._id==this.datacour.id)
      this.dataArray[indexId].Designation = data.Designation
      this.dataArray[indexId].nomcour = data.nomcour
      this.dataArray[indexId].nomEnseignant = data.nomEnseignant
      this.dataArray[indexId].chapitre = data.chapitre
      



    })
  }




  delete(id:any,i:any){
    this.cs.deletecour(id).subscribe(Response=>{
      this.dataArray.splice(i,1)
    })
  }

}
