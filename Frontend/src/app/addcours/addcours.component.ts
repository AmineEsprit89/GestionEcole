import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-addcours',
  templateUrl: './addcours.component.html',
  styleUrls: ['./addcours.component.css']
})
export class AddcoursComponent implements OnInit {
imageUrl:any
imgFile:any
  constructor(private service:CoursesService,private ar:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
  }

  ajoutercour(f:any){
    
   
      const formData = new FormData();
      formData.append('imageUrl', this.imageUrl);
      formData.append('Designation', f.value.Designation);
      formData.append('nomcour', f.value.nomcour);
      formData.append('nomEnseignant', f.value.nomEnseignant);
      formData.append('chapitre', f.value.chapitre);
      formData.append('EmailE', f.value.EmailE);
      formData.append('EmailP', f.value.EmailP)
     
  
  
      this.service.addcour(formData).subscribe(data => {
        this.route.navigate(['/courses'])
    
      
  
    })
  
    }
  
  
  
    selectImage(event: any) {
      const reader = new FileReader();
  
      if (event.target.files.length > 0) {
        const file = event.target.files[0];
        this.imageUrl = file;
  
        reader.readAsDataURL(file);
  
        reader.onload = () => {
          this.imgFile = reader.result as string;
        };
      }
    }
  
  
  
    
   
  //   this.service.addcour(f).subscribe(
      
  //     ()=>{this.route.navigate(['/cours'])}

  //   )
  // }

}
