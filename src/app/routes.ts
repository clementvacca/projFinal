import {Routes} from '@angular/router';
import {EditStagiaireComponent} from './rest/stagiaires/edit-stagiaire/edit-stagiaire.component';
import {StagiairesComponent} from './rest/stagiaires/stagiaires.component';
import {FormationComponent} from './rest/formation/formation.component';
import {FormationEditComponent} from './rest/formation/formation-edit/formation-edit.component';
import {FormationDetailComponent} from './rest/formation/formation-detail/formation-detail.component';
import {StagiairesFormationComponent} from './rest/stagiaires/stagiaires-formation/stagiaires-formation.component';
import {ModulenseignementComponent} from './rest/modulenseignement/modulenseignement.component';
import {ModulenseignementlistComponent} from './rest/modulenseignement/modulenseignementlist/modulenseignementlist.component';

export const routes: Routes = [
  {path: 'stagiaire/edit', component: EditStagiaireComponent},
  {path: 'stagiaire/edit/:id', component: EditStagiaireComponent },
  {path: 'stagiaires', component: StagiairesComponent},
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: 'formations', component: FormationComponent},
  {path: 'formations/:titre/edit', component: FormationEditComponent},
  {path: 'formations/edit', component: FormationEditComponent},
<<<<<<< HEAD
  {path: 'formations/:titre/detail', component: FormationDetailComponent},
  {path: 'formations/:titre/detail/stagiaires/:edit/:id', component: EditStagiaireComponent},
  {path: 'formations/:titre/detail/stagiaires/:edit/', component: EditStagiaireComponent},
  {path: 'modulenseignement', component: ModulenseignementComponent}
=======
  {path: 'formations/:id/detail', component: FormationDetailComponent},
  {path: 'formations/:id/detail/stagiaires', component: StagiairesFormationComponent},
  {path: 'modulenseignement/edit/:titre', component: ModulenseignementComponent},
  {path: 'modulenseignement/edit', component: ModulenseignementComponent},
  {path: 'modulenseignementlist', component: ModulenseignementlistComponent}
>>>>>>> e511b0ec30388d9aabb795ca77ffa4d3e172eb48
];
