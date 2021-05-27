import { DatePipe, getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { pipe } from 'rxjs';
import { Projet } from '../models/projet';
import { ProjetService } from '../services/projet.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-projet',
  templateUrl: './create-projet.component.html',
  styleUrls: ['./create-projet.component.css']
})
export class CreateProjetComponent implements OnInit {

  userForm:any;

  projet : Projet = new Projet() ;
  
  ajouter = false;

  constructor(
    private projetservice : ProjetService,
    private router : Router,
    fb: FormBuilder
    ) { 
      this.userForm = fb.group({
        client:['', Validators.required],
        code:['', Validators.required],
        datedebut:['', Validators.required],
        datefinestimee:['', Validators.required],
        description:['', Validators.required],
        titre:['', Validators.required],
        type:['', Validators.required],
       
      });
    }

  ngOnInit(): void {
  }

  saveProjet() : void {
    const data = {
      idprojet : this.projet.idprojet,
      client : this.projet.client,
      code : this.projet.code,
      datedebut : this.projet.datedebut,
      datefinestimee : this.projet.datefinestimee,
      datefinreel : this.projet.datefinreel,
      description : this.projet.description,
      titre : this.projet.titre,
      type : this.projet.type
    };

    this.projetservice.createProjet(this.projet)
    .subscribe(data => {
      console.log(data);
      this.ajouter = true;
      this.goToProjetList();
    },
    error =>{ console.log(error);
  });
}

  goToProjetList() {
    this.router.navigate(['/projets']);
  }

  onSubmit() {
    console.log(this.projet);
    this.saveProjet();
  }

}
