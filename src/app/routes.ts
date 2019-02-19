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

export const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: 'formations', component: FormationComponent},
>>>>>>> 14e444059d8748b7af4cc77ac8a6f95ac2932f67
];
