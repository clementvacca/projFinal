import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {routes} from './routes';
import {FormsModule} from '@angular/forms';
<<<<<<< HEAD
import {FormationComponent} from './rest/formation/formation/formation.component';

import {StagiairesComponent} from './rest/stagiaires/stagiaires.component';
import {ModulenseignementComponent} from './rest/modulenseignement/modulenseignement.component';
=======

import { FormationComponent } from './rest/formation/formation.component';

import { StagiairesComponent } from './rest/stagiaires/stagiaires.component';
import { ModulenseignementComponent } from './rest/modulenseignement/modulenseignement.component';
>>>>>>> e862bf713644a7830d65b74ff2d2284cef18d05e


@NgModule({
  declarations: [
    AppComponent,
    FormationComponent,
    StagiairesComponent,
    ModulenseignementComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(routes), HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
