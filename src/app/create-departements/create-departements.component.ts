import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Departements } from '../models/departements';
import { DepartementsService } from '../services/departements.service';

@Component({
  selector: 'app-create-departements',
  templateUrl: './create-departements.component.html',
  styleUrls: ['./create-departements.component.css']
})
export class CreateDepartementsComponent implements OnInit {

  departements : Departements = new Departements() ;

  ajouter = false;

  constructor(
    private departementservice : DepartementsService,
    private router : Router,
    private route : ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.snapshot.params['iddepartement'];
  }

  saveDepartements() : void {
    const data = {
      libelle : this.departements.libelle,
      
    };

    this.departementservice.createDepartements(this.departements)
    .subscribe(data => {
      console.log(data);
      this.ajouter = true;
      this.goToDepartementsList();
    },
    error =>{ console.log(error);
  });
}

goToDepartementsList() {
    this.router.navigate(['/departements']);
  }

  onSubmit() {
    console.log(this.departements);
    this.saveDepartements();
  }


}
