import { Component, OnInit } from '@angular/core';
import { ClubsService } from '../services/clubs.service';

@Component({
  selector: 'app-modifyclub',
  templateUrl: './modifyclub.component.html',
  styleUrls: ['./modifyclub.component.css']
})
export class ModifyclubComponent implements OnInit {

  constructor(private cs:ClubsService) { }

  ngOnInit(): void {
  }
  dataArray:any;
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
}
