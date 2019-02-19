import {Routes} from '@angular/router';
import {FormationComponent} from './rest/formation/formation.component';
import {FormationEditComponent} from './rest/formation/formation-edit/formation-edit.component';

export const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: 'formations', component: FormationComponent},
  {path: 'formations/edit/:id', component: FormationEditComponent},
  {path: 'formations/edit/', component: FormationEditComponent},
];
