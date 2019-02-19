import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {routes} from './routes';
import {FormsModule} from '@angular/forms';
import { StagiairesComponent } from './rest/stagiaires/stagiaires.component';
import { ModulenseignementComponent } from './rest/modulenseignement/modulenseignement.component';

@NgModule({
  declarations: [
    AppComponent,
    StagiairesComponent,
    ModulenseignementComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(routes), HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
