import {Routes} from '@angular/router';
import {EditStagiaireComponent} from './rest/stagiaires/edit-stagiaire/edit-stagiaire.component';
import {StagiairesComponent} from './rest/stagiaires/stagiaires.component';
import {FormationComponent} from './rest/formation/formation.component';
import {FormationEditComponent} from './rest/formation/formation-edit/formation-edit.component';
import {FormationDetailComponent} from './rest/formation/formation-detail/formation-detail.component';
import {StagiairesFormationComponent} from './rest/stagiaires/stagiaires-formation/stagiaires-formation.component';
import {ModulenseignementComponent} from './rest/modulenseignement/modulenseignement.component';
import {ModulenseignementlistComponent} from './rest/modulenseignement/modulenseignementlist/modulenseignementlist.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './rest/services/auth/auth.guard';
import {ChoixmoduleComponent} from './rest/modulenseignement/choixmodule/choixmodule.component';
import {AoduleenseignementlistAbsolueComponent} from './rest/modulenseignement/aoduleenseignementlist-absolue/aoduleenseignementlist-absolue.component';

export const routes: Routes = [
  {path: 'stagiaire/edit', component: EditStagiaireComponent},
  {path: 'stagiaire/edit/:id', component: EditStagiaireComponent },
  {path: 'stagiaires', component: StagiairesComponent},
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'formations', canActivate: [AuthGuard], component: FormationComponent},
  {path: 'formations/:titre/edit', component: FormationEditComponent},
  {path: 'formations/edit', component: FormationEditComponent},
  {path: 'formations/:titre/detail', component: FormationDetailComponent},
  {path: 'formations/:titre/detail/stagiaires/:edit/:id', component: EditStagiaireComponent},
  {path: 'formations/:titre/detail/stagiaires/:edit', component: EditStagiaireComponent},
  {path: 'formations/:titre/detail/modules', component: ChoixmoduleComponent},
  {path: 'modulenseignement', component: ModulenseignementComponent},
  {path: 'formations/:id/detail', component: FormationDetailComponent},
  {path: 'formations/:id/detail/stagiaires', component: StagiairesFormationComponent},
  {path: 'modulenseignement/edit/:titre', component: ModulenseignementComponent},
  {path: 'modulenseignement/edit', component: ModulenseignementComponent},
  {path: 'modulenseignementlist', component: AoduleenseignementlistAbsolueComponent},
  {path: 'login', component: LoginComponent}
];
