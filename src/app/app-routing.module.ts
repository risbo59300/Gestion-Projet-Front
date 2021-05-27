import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaListComponent } from './agenda-list/agenda-list.component';
import { CreateAgendaComponent } from './create-agenda/create-agenda.component';
import { CreateDepartementsComponent } from './create-departements/create-departements.component';
import { CreateEmployesComponent } from './create-employes/create-employes.component';
import { CreateProjetComponent } from './create-projet/create-projet.component';
import { DepartementsListComponent } from './departements-list/departements-list.component';

import { EmployesListComponent } from './employes-list/employes-list.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ProjetListComponent } from './projet-list/projet-list.component';
import { UpdateAgendaComponent } from './update-agenda/update-agenda.component';
import { UpdateDepartementsComponent } from './update-departements/update-departements.component';
import { UpdateEmployesComponent } from './update-employes/update-employes.component';
import { UpdateProjetComponent } from './update-projet/update-projet.component';

const routes: Routes = [
  {path: '', redirectTo: 'employes', pathMatch: 'full'},

  {path: 'employes', component: EmployesListComponent},
  {path: 'create-employes', component: CreateEmployesComponent},
  {path: 'update-employe/:idemploye', component: UpdateEmployesComponent},
 
  {path: 'departements', component: DepartementsListComponent},
  {path: 'create-departements', component: CreateDepartementsComponent},
  {path: 'update-departements/:iddepartement', component: UpdateDepartementsComponent},

  {path: 'projets', component: ProjetListComponent},
  {path: 'create-projets', component: CreateProjetComponent},
  {path: 'update-projets/:idprojet', component: UpdateProjetComponent},

  {path: 'agenda', component: AgendaListComponent},
  {path: 'create-agenda', component: CreateAgendaComponent},
  {path: 'update-agenda/:idagenda', component: UpdateAgendaComponent},

  {path: 'login', component: LoginComponent},

  {path: 'menu', component: MenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
