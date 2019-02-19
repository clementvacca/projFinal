import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {routes} from './routes';
import {FormsModule} from '@angular/forms';
<<<<<<< HEAD
import { FormationComponent } from './rest/formation/formation/formation.component';
=======
import { StagiairesComponent } from './rest/stagiaires/stagiaires.component';
import { ModulenseignementComponent } from './rest/modulenseignement/modulenseignement.component';
>>>>>>> cebbc5fcd8ed067b0d52feaa87203a3ee2690f51

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    FormationComponent
=======
    StagiairesComponent,
    ModulenseignementComponent
>>>>>>> cebbc5fcd8ed067b0d52feaa87203a3ee2690f51
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(routes), HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
