import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Departements } from '../models/departements';
import { DepartementsService } from '../services/departements.service';

@Component({
  selector: 'app-departements-list',
  templateUrl: './departements-list.component.html',
  styleUrls: ['./departements-list.component.css']
})
export class DepartementsListComponent implements OnInit {

    dept : Departements[] = [];
  constructor(
    private departementservice : DepartementsService,
    private router : Router
  ) { }

  ngOnInit(): void {

    this.getDepartements();
  }

  private getDepartements() {
    this.departementservice.getDepartementsList()
    .subscribe(data => {
      this.dept = data;});
  }


  editDepartements(iddepartement : number){
    this.departementservice.getDepartementsById(iddepartement);
    this.router.navigate(['update-departements', iddepartement]);
  }

  deleteDepartements(iddepartement : number){
    this.departementservice.deleteDepartements(iddepartement)
    .subscribe(data => {
      console.log(data);
      this.getDepartements();
    })
  }
  

}
