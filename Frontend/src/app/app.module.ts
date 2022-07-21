import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ContentComponent } from './content/content.component';
import { CoursesComponent } from './courses/courses.component';
import { TeachersComponent } from './teachers/teachers.component';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { ClubsComponent } from './clubs/clubs.component';
import { EventsComponent } from './events/events.component';
import { AbsencesComponent } from './absences/absences.component';
import { RdvComponent } from './rdv/rdv.component';
import { NotesComponent } from './notes/notes.component';
import { AddclubComponent } from './addclub/addclub.component';
import { ModifyclubComponent } from './modifyclub/modifyclub.component';
import { AddeventComponent } from './addevent/addevent.component';
import { ShoweventComponent } from './showevent/showevent.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopbarComponent,
    ContentComponent,
    CoursesComponent,
    TeachersComponent,
    EtudiantsComponent,
    ClubsComponent,
    EventsComponent,
    AbsencesComponent,
    RdvComponent,
    NotesComponent,
    AddclubComponent,
    ModifyclubComponent,
    AddeventComponent,
    ShoweventComponent,
    
    
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
