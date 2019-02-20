import {Routes} from '@angular/router';
import {EditStagiaireComponent} from './rest/stagiaires/edit-stagiaire/edit-stagiaire.component';
import {StagiairesComponent} from './rest/stagiaires/stagiaires.component';
import {FormationComponent} from './rest/formation/formation.component';
import {FormationEditComponent} from './rest/formation/formation-edit/formation-edit.component';
import {FormationDetailComponent} from './rest/formation/formation-detail/formation-detail.component';
<<<<<<< HEAD
import {StagiairesFormationComponent} from './rest/stagiaires/stagiaires-formation/stagiaires-formation.component';
=======
import {ModulenseignementComponent} from './rest/modulenseignement/modulenseignement.component';
>>>>>>> 6148f0aefefbf578c8ba6ddd758940e6ee7fcc1f

export const routes: Routes = [
  {path: 'stagiaire/edit', component: EditStagiaireComponent},
  {path: 'stagiaire/edit/:id', component: EditStagiaireComponent },
  {path: 'stagiaires', component: StagiairesComponent},
  {path: '', redirectTo: '/formations', pathMatch: 'full'},
  {path: 'formations', component: FormationComponent},
<<<<<<< HEAD
  {path: 'formations/:id/edit', component: FormationEditComponent},
  {path: 'formations/edit', component: FormationEditComponent},
  {path: 'formations/:id/detail', component: FormationDetailComponent}

=======
  {path: 'formations/edit/:id', component: FormationEditComponent},
  {path: 'formations/edit/', component: FormationEditComponent},
  {path: 'formations/:id/detail', component: FormationDetailComponent},
<<<<<<< HEAD
  {path: 'formations/:id/detail/stagiaires', component: StagiairesFormationComponent}
=======
  {path: 'modulenseignement', component: ModulenseignementComponent}
>>>>>>> 6148f0aefefbf578c8ba6ddd758940e6ee7fcc1f
>>>>>>> eb514f41c3c4846450efcc95736b8e253cba9a9a
];
