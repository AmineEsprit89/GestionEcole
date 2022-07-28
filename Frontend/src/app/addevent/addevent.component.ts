import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,Route } from '@angular/router';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.css']
})
export class AddeventComponent implements OnInit {
Image:any
imgFile:any
  constructor(private service:EventsService,private ar:ActivatedRoute,private route:Router) { }

  
  ngOnInit(): void {
  }

  ajouterevent(f:any){
   
    const formData = new FormData();
    formData.append('file', this.Image);
<<<<<<< HEAD
    formData.append('Free', f.value.Free);
=======
>>>>>>> 96911e4a6e6da26c6467c1c19bd1050405b6d844
    formData.append('Price', f.value.Price);
    formData.append('Name', f.value.Name);
    formData.append('Type', f.value.Type);
    formData.append('Date_fin_event', f.value.Date_fin_event)
    formData.append('Date_event', f.value.Date_event);
    formData.append('Heure_debut', f.value.Heure_debut);
    formData.append('Lieu', f.value.Lieu);
    formData.append('Nbr_place', f.value.Nbr_place);
    formData.append('Nom_Club', f.value.Nom_Club);


    this.service.addevent(formData).subscribe(data => {
      this.route.navigate(['/evenements'])
  
    

  })

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
