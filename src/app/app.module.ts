import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AlertModule} from 'ngx-bootstrap';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {routes} from './routes';
import {FormsModule} from '@angular/forms';
import {FormationComponent} from './rest/formation/formation.component';
import {StagiairesComponent} from './rest/stagiaires/stagiaires.component';
import {ModulenseignementComponent} from './rest/modulenseignement/modulenseignement.component';
import {EditStagiaireComponent} from './rest/stagiaires/edit-stagiaire/edit-stagiaire.component';
import {FormationEditComponent} from './rest/formation/formation-edit/formation-edit.component';
import {FormationDetailComponent} from './rest/formation/formation-detail/formation-detail.component';
import {StagiairesFormationComponent} from './rest/stagiaires/stagiaires-formation/stagiaires-formation.component';
import {ModulenseignementlistComponent} from './rest/modulenseignement/modulenseignementlist/modulenseignementlist.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component'; // SECURITE
import {AuthGuard} from './rest/services/auth/auth.guard';
import {AuthService} from './rest/services/auth/auth.service'; // SECURITE


@NgModule({
  declarations: [
    AppComponent,
    FormationComponent,
    StagiairesComponent,
    ModulenseignementComponent,
    FormationEditComponent,
    FormationDetailComponent,
    EditStagiaireComponent,
    FormationEditComponent,
    StagiairesFormationComponent,
    ModulenseignementlistComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(routes), HttpClientModule, AlertModule
  ],
  providers: [AuthGuard , AuthService], // SECURITE

  bootstrap: [AppComponent]
})
export class AppModule {
}
