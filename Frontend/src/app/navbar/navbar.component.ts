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
    this.role='x' 
=======
    this.role='y' 
>>>>>>> 8ac37572572a63a4fd358a3ce7d8daeff5867d18
  }

}
