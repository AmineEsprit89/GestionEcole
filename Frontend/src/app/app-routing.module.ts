import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbsencesComponent } from './absences/absences.component';
import { AddclubComponent } from './addclub/addclub.component';
import { AddcoursComponent } from './addcours/addcours.component';
import { AddeventComponent } from './addevent/addevent.component';
import { AddnoteComponent } from './addnote/addnote.component';
import { ClubsComponent } from './clubs/clubs.component';
import { ContentComponent } from './content/content.component';
import { CoursesComponent } from './courses/courses.component';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { EventsComponent } from './events/events.component';
import { ModifyclubComponent } from './modifyclub/modifyclub.component';
import { NotesComponent } from './notes/notes.component';
import { RdvComponent } from './rdv/rdv.component';
import { TeachersComponent } from './teachers/teachers.component';

const routes: Routes = [
  {path: '', component: ContentComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'teachers', component: TeachersComponent},
  {path: 'etudiants', component: EtudiantsComponent},
  {path: 'notes', component: NotesComponent},
  {path: 'abscences', component: AbsencesComponent},
  {path: 'rdv', component: RdvComponent},
  {path: 'clubs', component: ClubsComponent},
  {path: 'evenements', component: EventsComponent},


  {path: 'create', component: AddclubComponent},
  {path: 'update', component: ModifyclubComponent},

  {path: 'createE', component: AddeventComponent},
  {path: 'createN', component: AddnoteComponent},


  {path: 'createC', component: AddcoursComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
