import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbsencesComponent } from './absences/absences.component';
import { AddclubComponent } from './addclub/addclub.component';
import { AddcoursComponent } from './addcours/addcours.component';
import { AddeleveComponent } from './addeleve/addeleve.component';
import { AddeventComponent } from './addevent/addevent.component';
import { ClassesComponent } from './classes/classes.component';
import { ClubsComponent } from './clubs/clubs.component';
import { ContentComponent } from './content/content.component';
import { CoursesComponent } from './courses/courses.component';
import { ElevesComponent } from './eleves/eleves.component';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { EventsComponent } from './events/events.component';
import { ExercicesComponent } from './exercices/exercices.component';
import { MatieresComponent } from './matieres/matieres.component';
import { ModifyclubComponent } from './modifyclub/modifyclub.component';
import { NotesComponent } from './notes/notes.component';
import { PayementsComponent } from './payements/payements.component';
import { RdvComponent } from './rdv/rdv.component';
import { ReclamationsComponent } from './reclamations/reclamations.component';
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
  {path: 'exercices', component: ExercicesComponent},
  {path: 'matieres', component: MatieresComponent},
  {path: 'reclamations', component: ReclamationsComponent},
  {path: 'payements', component: PayementsComponent},
  {path: 'classes', component: ClassesComponent},


  {path: 'create', component: AddclubComponent},
  {path: 'update', component: ModifyclubComponent},
  {path: 'createE', component: AddeventComponent},
  {path: 'createC', component: AddcoursComponent},


  //path crud eleves
  {path: 'eleves', component: ElevesComponent},
  {path: 'eleves/create', component: AddeleveComponent},


//path crud payments
{path: 'payments', component: PayementsComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
