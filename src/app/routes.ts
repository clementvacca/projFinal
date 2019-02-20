import {Routes} from '@angular/router';
import {EditStagiaireComponent} from './rest/stagiaires/edit-stagiaire/edit-stagiaire.component';
import {StagiairesComponent} from './rest/stagiaires/stagiaires.component';
import {FormationComponent} from './rest/formation/formation.component';
import {FormationEditComponent} from './rest/formation/formation-edit/formation-edit.component';
import {FormationDetailComponent} from './rest/formation/formation-detail/formation-detail.component';
import {StagiairesFormationComponent} from './rest/stagiaires/stagiaires-formation/stagiaires-formation.component';
import {ModulenseignementComponent} from './rest/modulenseignement/modulenseignement.component';

export const routes: Routes = [
  {path: 'stagiaire/edit', component: EditStagiaireComponent},
  {path: 'stagiaire/edit/:id', component: EditStagiaireComponent },
  {path: 'stagiaires', component: StagiairesComponent},
  {path: '', redirectTo: '/formations', pathMatch: 'full'},
  {path: 'formations', component: FormationComponent},
  {path: 'formations/:titre/edit', component: FormationEditComponent},
  {path: 'formations/edit', component: FormationEditComponent},
  {path: 'formations/:titre/detail', component: FormationDetailComponent},
  {path: 'formations/:titre/detail/stagiaires/:edit/:id', component: EditStagiaireComponent},
  {path: 'formations/:titre/detail/stagiaires/:edit/', component: EditStagiaireComponent},
  {path: 'modulenseignement', component: ModulenseignementComponent}
];
