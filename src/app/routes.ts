import {Routes} from '@angular/router';
import {EditStagiaireComponent} from './rest/stagiaires/edit-stagiaire/edit-stagiaire.component';
import {StagiairesComponent} from './rest/stagiaires/stagiaires.component';
import {FormationComponent} from './rest/formation/formation.component';
import {FormationEditComponent} from './rest/formation/formation-edit/formation-edit.component';
import {FormationDetailComponent} from './rest/formation/formation-detail/formation-detail.component';

export const routes: Routes = [
  {path: 'stagiaire/edit', component: EditStagiaireComponent},
  {path: 'stagiaire/edit/:id', component: EditStagiaireComponent },
  {path: 'stagiaires', component: StagiairesComponent},
  {path: '', redirectTo: '/stagiaires', pathMatch: 'full'},
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: 'formations', component: FormationComponent},
  {path: 'formations/edit/:id', component: FormationEditComponent},
  {path: 'formations/edit/', component: FormationEditComponent},
  {path: 'formations/:id/detail', component: FormationDetailComponent}
];
