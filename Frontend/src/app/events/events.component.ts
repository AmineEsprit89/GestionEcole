import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  accountType:any
  dataArray:any
  email:any
  userId:any
  Image:any
  imgFile:any
  constructor(private es:EventsService,private us : AuthService,private ar:ActivatedRoute,private route:Router) { 

    this.es.getallevents().subscribe((e)=>{this.dataArray=e;})
    this.accountType=us.getUserAccountType()
    this.email=us.getUserEmail()
    this.userId=us.getUserId()
    
  }

  ngOnInit(): void {
  }

  dataevent={Name:'',Type:'',Free:'',Price:'',Date_event:'',Date_fin_event:'',
  Heure_debut:'',Lieu:'',Nbr_place:'',Nom_Club:'',id:''}
  getdataevent(Name: string,Type: string,Free:string, Price: string, Date_event:string ,Date_fin_event:string,
    Heure_debut: string, Lieu:string, Nbr_place:string ,Nom_Club:string,id:any){




    this.dataevent.Name=Name;
    this.dataevent.Type=Type;
    
    this.dataevent.Free=Free;
    this.dataevent.Price=Price;
    this.dataevent.Date_event=Date_event;
    this.dataevent.Date_fin_event=Date_fin_event;
    this.dataevent.Heure_debut=Heure_debut;
    this.dataevent.Lieu=Lieu;
    this.dataevent.Nbr_place=Nbr_place;
    this.dataevent.Nom_Club=Nom_Club;
  
    this.dataevent.id=id;

    }


    updateeventInofrmations(f:any){
      let data = f.value;
      this.es.updateevent(this.dataevent.id,data).subscribe(response=>{
        let indexId = this.dataArray.findIndex((obj:any)=>obj._id==this.dataevent.id)
        this.dataArray[indexId].Name = data.Name
        this.dataArray[indexId].Type = data.Type
        this.dataArray[indexId].Price = data.Price
        this.dataArray[indexId].Free = data.Free
        this.dataArray[indexId].Date_event = data.Date_event
        this.dataArray[indexId].Date_fin_event = data.Date_fin_event
        this.dataArray[indexId].Heure_debut = data.Heure_debut
        this.dataArray[indexId].Lieu = data.Lieu
        this.dataArray[indexId].Nbr_place = data.Nbr_place
        this.dataArray[indexId].Nom_Club = data.Nom_Club
        
      })
  
  }


  facebook(id:any){
    this.es.facebookevent(id).subscribe(Response=>{
      this.dataArray=id
    })
  }
  
  show(id:any){
    this.es.showevent(id).subscribe((e)=>{
      this.dataArray=e;})

  }
 
  delete(id:any,i:any){
     this.es.deleteevent(id).subscribe(Response=>{
      this.dataArray.splice(i,1)
    })
    // console.log(this.accountType)
    // console.log(this.email)
    // console.log(this.userId)
  }
  selectImage(event: any) {
    const reader = new FileReader();

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.Image = file;

      reader.readAsDataURL(file);

      reader.onload = () => {
        this.imgFile = reader.result as string;
      };
    }
}
}
