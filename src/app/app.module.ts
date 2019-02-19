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
<<<<<<< HEAD
import { EditStagiaireComponent } from './rest/stagiaires/edit-stagiaire/edit-stagiaire.component';
=======
import { FormationEditComponent } from './rest/formation/formation-edit/formation-edit.component';
<<<<<<< HEAD
import { FormationDetailComponent } from './rest/formation/formation-detail/formation-detail.component';
=======
>>>>>>> 14e444059d8748b7af4cc77ac8a6f95ac2932f67
>>>>>>> 16919a9382029a75208a19402b536d9a9b9f3b81

@NgModule({
  declarations: [
    AppComponent,
    FormationComponent,
    StagiairesComponent,
    ModulenseignementComponent,
<<<<<<< HEAD
    FormationEditComponent,
    FormationDetailComponent
=======
<<<<<<< HEAD
    EditStagiaireComponent
=======
    FormationEditComponent
>>>>>>> 14e444059d8748b7af4cc77ac8a6f95ac2932f67
>>>>>>> 16919a9382029a75208a19402b536d9a9b9f3b81
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(routes), HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
