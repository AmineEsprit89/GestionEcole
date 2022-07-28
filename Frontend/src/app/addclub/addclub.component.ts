import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ClubsService } from '../services/clubs.service';

@Component({
  selector: 'app-addclub',
  templateUrl: './addclub.component.html',
  styleUrls: ['./addclub.component.css']
})
export class AddclubComponent implements OnInit {
  Logo:any
  Logofile:any
  constructor(private service:ClubsService,private ar:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
  }
  ajouterclub(f:any){
    




    const formData = new FormData();

    formData.append('file', this.Logo);
    
    formData.append('Name', f.value.Name);
    formData.append('Type', f.value.Type);
    formData.append('Heure_debut', f.value.Heure_debut)
    formData.append('Date_seance', f.value.Date_seance)
    formData.append('Duree', f.value.Duree);
    formData.append('Description', f.value.Description);
   console.log(formData)


    this.service.addclub(formData).subscribe(data => {
      this.route.navigate(['/clubs'])

      
  
    

  })

  }



  selectImage(club: any) {
    const reader = new FileReader();

    if (club.target.files.length > 0) {
      const file = club.target.files[0];
      this.Logo = file;

      reader.readAsDataURL(file);

      reader.onload = () => {
        this.Logofile = reader.result as string;
      };
    }
  }



  
   
  //   this.service.addclub(f).subscribe(
      
  //     ()=>{this.route.navigate(['/clubs'])}

  //   )
  // }

}
