import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  role!:any;
  constructor() { }

  ngOnInit(): void {
    
<<<<<<< HEAD
    this.role='w' 
=======
    this.role='z' 
>>>>>>> 77475c8ad8846c6d5c99f11368050398f1f48ede
  }

}
