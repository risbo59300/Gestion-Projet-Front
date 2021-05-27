import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employes } from '../models/employes';
import { EmployesService } from '../services/employes.service';
import { Roles } from '../models/roles';
import { Departements } from '../models/departements';
import { Projet } from '../models/projet';
import { DepartementsService } from '../services/departements.service';
import { ProjetService } from '../services/projet.service';
import { RolesService } from '../services/roles.service';

@Component({
  selector: 'app-update-employes',
  templateUrl: './update-employes.component.html',
  styleUrls: ['./update-employes.component.css']
})
export class UpdateEmployesComponent implements OnInit {

  employe : Employes=new Employes() ;

  dep : Departements[] = [];

  pro : Projet[] = [];

  rol : Roles[] = []; 
  
  constructor(
    
    private route : ActivatedRoute,
    private router : Router,
    private departementservice: DepartementsService,
    private projetservice : ProjetService,
    private roleservice : RolesService,
    private employeservice : EmployesService
  ) { }

  ngOnInit(): void {
  
  let idemp=   this.route.snapshot.params['idemploye'];
  console.log("idemp=>"+idemp);

    this.employeservice.getEmployesById(idemp)
    .subscribe(data => {
      this.employe = data;
    },
    error => console.log(error));

    this.departementservice.getDepartementsList()//Reccupération de la liste des departements
    .subscribe(data => {
      this.dep = data;});

    this.projetservice.getProjetList()//Reccupération de la liste des projets
    .subscribe(data => {
      this.pro = data;});

    this.roleservice.getRolesList()//Reccupération de la liste des rôles
    .subscribe(data => {
      this.rol = data;});
  }

  onSubmit() {
    this.employeservice.updateEmployes(this.employe.idemploye, this.employe)
    .subscribe(data => {
    this.goToEmployesList();
    },
    error => console.log(error));
  }

  goToEmployesList() {
    this.router.navigate(['/employes']);
  }
}
