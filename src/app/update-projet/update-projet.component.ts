import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Projet } from '../models/projet';
import { ProjetService } from '../services/projet.service';

@Component({
  selector: 'app-update-projet',
  templateUrl: './update-projet.component.html',
  styleUrls: ['./update-projet.component.css']
})
export class UpdateProjetComponent implements OnInit {

  projet : Projet = new Projet();

  constructor(
    
    private route : ActivatedRoute,
    private router : Router,
    private projetservice : ProjetService
  ) { }

  ngOnInit(): void {
  
  let idproj=   this.route.snapshot.params['idprojet'];
  console.log("idproj=>"+idproj);
    this.projetservice.getProjetById(idproj)
    .subscribe(data => {
      this.projet = data;
    },
    error => console.log(error));
  }

  onSubmit() {
    this.projetservice.updateProjet(this.projet.idprojet, this.projet)
    .subscribe(data => {
    this.goToProjetsList();
    },
    error => console.log(error));
  }

  goToProjetsList() {
    this.router.navigate(['/projets']);
  }
}
