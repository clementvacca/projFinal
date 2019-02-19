import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {routes} from './routes';
import {FormsModule} from '@angular/forms';
import {FormationComponent} from './rest/formation/formation.component';
import {StagiairesComponent} from './rest/stagiaires/stagiaires.component';
import {ModulenseignementComponent} from './rest/modulenseignement/modulenseignement.component';
import { FormationEditComponent } from './rest/formation/formation-edit/formation-edit.component';
import { FormationDetailComponent } from './rest/formation/formation-detail/formation-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FormationComponent,
    StagiairesComponent,
    ModulenseignementComponent,
    FormationEditComponent,
    FormationDetailComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(routes), HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
