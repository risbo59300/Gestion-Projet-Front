import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Departements } from '../models/departements';
import { DepartementsService } from '../services/departements.service';

@Component({
  selector: 'app-update-departements',
  templateUrl: './update-departements.component.html',
  styleUrls: ['./update-departements.component.css']
})
export class UpdateDepartementsComponent implements OnInit {

  departements : Departements = new Departements();

  constructor(
    
    private route : ActivatedRoute,
    private router : Router,
    private departementservice : DepartementsService
  ) { }

  ngOnInit(): void {
  
  let iddep=   this.route.snapshot.params['iddepartement'];
    this.departementservice.getDepartementsById(iddep)
    .subscribe(data => {
      this.departements = data;
    },
    error => console.log(error));
  }

  onSubmit() {
    this.departementservice.updateDepartements(this.departements.iddepartement, this.departements)
    .subscribe(data => {
    this.goToDepartementsList();
    },
    error => console.log(error));
  }

  goToDepartementsList() {
    this.router.navigate(['/departements']);
  }
}
