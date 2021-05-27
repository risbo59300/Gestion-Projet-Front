import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Departements } from '../models/departements';
import { Employes } from '../models/employes';
import { EmployesService } from '../services/employes.service';
import { Roles } from '../models/roles';
import { DepartementsService } from '../services/departements.service';
import { ProjetService } from '../services/projet.service';
import { Projet } from '../models/projet';
import { RolesService } from '../services/roles.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-employes',
  templateUrl: './create-employes.component.html',
  styleUrls: ['./create-employes.component.css']
})
export class CreateEmployesComponent implements OnInit {

  userForm:any;

  employe : Employes=new Employes() ;

  dep : Departements[] = [];

  pro : Projet[] = [];

  rol : Roles[] = []; 

  ajouter = false;

  constructor(
    private employeservice : EmployesService,
    private departementservice: DepartementsService,
    private projetservice : ProjetService,
    private roleservice : RolesService,
    private router : Router,
    private route : ActivatedRoute,
    fb: FormBuilder
    ) 
      {
        this.userForm = fb.group({
          nom:['', Validators.required],
          prenom:['', Validators.required],
          email:['', [Validators.required, Validators.email]],
          pwd:['', Validators.required]
        });
     }

  ngOnInit(): void {
    this.route.snapshot.params['idemploye'];

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

  saveEmployes() : void {
    const data = {
      nom : this.employe.nom,
      prenom : this.employe.prenom,
      mail : this.employe.mail,
      pwd : this.employe.pwd,
      departements : this.employe.departements,
      roles : this.employe.roles,
      projets : this.employe.projets
    };

    this.employeservice.createEmployes(this.employe)
    .subscribe(data => {
      console.log(data);
      this.ajouter = true;
      this.goToemployesList();
    },
    error =>{ console.log(error);
  });
}

  goToemployesList() {
    this.router.navigate(['/employes']);
  }

  onSubmit() {
    console.log(this.employe);
    this.saveEmployes();
  }

}
