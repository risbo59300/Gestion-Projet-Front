import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employes } from '../models/employes';
import { EmployesService } from '../services/employes.service';

@Component({
  selector: 'app-employes-list',
  templateUrl: './employes-list.component.html',
  styleUrls: ['./employes-list.component.css']
})
export class EmployesListComponent implements OnInit {
  
  employ : Employes[] = [];

  constructor(
    private employeservice : EmployesService,
    private router : Router,
    
  ) { }

  ngOnInit(): void {
    
    this.getEmployes();
  }

  private getEmployes() {
    this.employeservice.getEmployesList()
    .subscribe(data => {
      this.employ = data;});
  }


  editEmployes(idemploye : number){
    this.employeservice.getEmployesById(idemploye);
    this.router.navigate(['update-employe', idemploye]);
  }

  deleteEmployes(idemploye : number){
    this.employeservice.deleteEmployes(idemploye)
    .subscribe(data => {
      console.log(data);
      this.getEmployes();
    })
  }
}
