import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ClubsService } from '../services/clubs.service';


@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css']
})
export class ClubsComponent implements OnInit {
  dataArray!:any
  accountType:any
  constructor(private cs:ClubsService,private us : AuthService,private ar:ActivatedRoute,private route:Router) { 

    this.cs.getallclubs().subscribe((d)=>{this.dataArray=d;})
    this.accountType=us.getUserAccountType()
  }

  ngOnInit(): void {
  }


  
  dataclub={Name:'',Type:'',Date_seance:'',Heure_debut:'',Duree:'',Description:'',id:''}
  getdata(Name: string,Type: string, Date_seance: string, Heure_debut:string, Duree:string ,Description:string,id:any){
    this.dataclub.Name=Name;
    this.dataclub.Type=Type;
    this.dataclub.Date_seance=Date_seance;
    this.dataclub.Heure_debut=Heure_debut;
    this.dataclub.Duree=Duree;
    this.dataclub.Description=Description;
    this.dataclub.id=id;
  }
  updateclubInofrmations(f:any){
    let data = f.value;
    this.cs.updateclub(this.dataclub.id,data).subscribe(response=>{
      let indexId = this.dataArray.findIndex((obj:any)=>obj._id==this.dataclub.id)
      this.dataArray[indexId].Name = data.Name
      this.dataArray[indexId].Type = data.Type
      this.dataArray[indexId].Date_seance = data.Date_seance
      this.dataArray[indexId].Heure_debut = data.Heure_debut
      this.dataArray[indexId].Duree = data.Duree
      this.dataArray[indexId].Description = data.Description



    })

}

delete(id:any,i:any){
  this.cs.deleteclub(id).subscribe(Response=>{
    this.dataArray.splice(i,1)
  })
}


}
