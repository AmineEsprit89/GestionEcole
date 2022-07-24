import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-professeurs',
  templateUrl: './professeurs.component.html',
  styleUrls: ['./professeurs.component.css']
})
export class ProfesseursComponent implements OnInit {
  dataArray!:any

  constructor(private us : UsersService) {

    this.us.getallprofesseurs().subscribe((d)=>{this.dataArray=d;})

   }

  ngOnInit(): void {
  }



  datauser={email:'',ActivationCode:'',accountType:'',nom:'',prenom:'',dateDeNaissance:'',adresse:'',isActive:'',specialite:'',id:''}
  getdata(email: string,ActivationCode: string, accountType: string, nom:string, prenom:string ,dateDeNaissance:string,adresse:string,isActive:string,specialite:string,id:any){
    this.datauser.email=email;
    this.datauser.ActivationCode=ActivationCode;
    this.datauser.accountType=accountType;
    this.datauser.nom=nom;
    this.datauser.prenom=prenom;
    this.datauser.dateDeNaissance=dateDeNaissance;
    this.datauser.adresse=adresse;
    this.datauser.isActive=isActive;
    this.datauser.specialite=specialite;
    this.datauser.id=id;
  }



  updateuser(f:any){
    let data = f.value;
    this.us.updateuser(this.datauser.id,data).subscribe(response=>{
      let indexId = this.dataArray.findIndex((obj:any)=>obj._id==this.datauser.id)
      this.dataArray[indexId].email = data.email
      this.dataArray[indexId].ActivationCode = data.ActivationCode
      this.dataArray[indexId].accountType = data.accountType
      this.dataArray[indexId].nom = data.nom
      this.dataArray[indexId].prenom = data.prenom
      this.dataArray[indexId].dateDeNaissance = data.dateDeNaissance
      this.dataArray[indexId].adresse = data.adresse
      this.dataArray[indexId].isActive = data.isActive
      this.dataArray[indexId].specialite = data.specialite
    })

}


delete(id:any,i:any){
  this.us.deleteuser(id).subscribe(Response=>{
    this.dataArray.splice(i,1)
  })
}


}
