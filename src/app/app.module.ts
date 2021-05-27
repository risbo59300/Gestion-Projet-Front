import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CreateEmployesComponent } from './create-employes/create-employes.component';

import { EmployesListComponent } from './employes-list/employes-list.component';
import { UpdateEmployesComponent } from './update-employes/update-employes.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CreateDepartementsComponent } from './create-departements/create-departements.component';
import { UpdateDepartementsComponent } from './update-departements/update-departements.component';
import { DepartementsListComponent } from './departements-list/departements-list.component';
import { LoginComponent } from './login/login.component';
import { CreateProjetComponent } from './create-projet/create-projet.component';
import { UpdateProjetComponent } from './update-projet/update-projet.component';
import { ProjetListComponent } from './projet-list/projet-list.component';
import { AgendaListComponent } from './agenda-list/agenda-list.component';
import { CreateAgendaComponent } from './create-agenda/create-agenda.component';
import { UpdateAgendaComponent } from './update-agenda/update-agenda.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CreateEmployesComponent,
    EmployesListComponent,
    UpdateEmployesComponent,
    CreateDepartementsComponent,
    UpdateDepartementsComponent,
    DepartementsListComponent,
    LoginComponent,
    CreateProjetComponent,
    UpdateProjetComponent,
    ProjetListComponent,
    AgendaListComponent,
    CreateAgendaComponent,
    UpdateAgendaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
