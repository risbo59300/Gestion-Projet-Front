import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Projet } from '../models/projet';
import { ProjetService } from '../services/projet.service';

@Component({
  selector: 'app-projet-list',
  templateUrl: './projet-list.component.html',
  styleUrls: ['./projet-list.component.css']
})
export class ProjetListComponent implements OnInit {

  pro : Projet[] = [];

  constructor(
    private projetservice : ProjetService,
    private router : Router,
    
  ) { }

  ngOnInit(): void {
    
    this.getProjet();
  }

  private getProjet() {
    this.projetservice.getProjetList()
    .subscribe(data => {
      this.pro = data;});
  }


  editProjet(idprojet : number){
    this.projetservice.getProjetById(idprojet);
    this.router.navigate(['update-projets', idprojet]);
  }

  deleteProjet(idprojet : number){
    this.projetservice.deleteProjet(idprojet)
    .subscribe(data => {
      console.log(data);
      this.getProjet();
    })
  }
}

