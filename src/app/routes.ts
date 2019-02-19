import {Routes} from '@angular/router';
import {FormationComponent} from './rest/formation/formation.component';

export const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: 'formations', component: FormationComponent},
];
