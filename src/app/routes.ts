import {Routes} from '@angular/router';
<<<<<<< HEAD
import {EditStagiaireComponent} from './rest/stagiaires/edit-stagiaire/edit-stagiaire.component';
import {StagiairesComponent} from './rest/stagiaires/stagiaires.component';

export const routes: Routes = [
  {path: 'stagiaire/edit', component: EditStagiaireComponent},
  {path: 'stagiaire/edit/:id', component: EditStagiaireComponent },
  {path: 'stagiaires', component: StagiairesComponent},
  {path: '', redirectTo: '/stagiaires', pathMatch: 'full'}
=======
import {FormationComponent} from './rest/formation/formation.component';
import {FormationEditComponent} from './rest/formation/formation-edit/formation-edit.component';

export const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: 'formations', component: FormationComponent},
<<<<<<< HEAD
  {path: 'formations/edit/:id', component: FormationEditComponent},
  {path: 'formations/edit/', component: FormationEditComponent},
=======
>>>>>>> 14e444059d8748b7af4cc77ac8a6f95ac2932f67
>>>>>>> 16919a9382029a75208a19402b536d9a9b9f3b81
];
