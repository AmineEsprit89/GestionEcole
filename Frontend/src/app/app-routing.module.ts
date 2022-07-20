import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbsencesComponent } from './absences/absences.component';
import { ClubsComponent } from './clubs/clubs.component';
import { ContentComponent } from './content/content.component';
import { CoursesComponent } from './courses/courses.component';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { EventsComponent } from './events/events.component';
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
  {path: 'evenements', component: EventsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
