import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Projet } from '../models/projet';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  baseUrl = "http://localhost:8898/api/pro/"; 

  constructor(private httpClient : HttpClient) { }

getProjetList() : Observable<Projet[]> {
  return this.httpClient.get<Projet[]>(this.baseUrl+'projet');
}

createProjet(projet : Projet) : Observable<Object> {
  return this.httpClient.post(this.baseUrl+'projet', projet);
}

getProjetById(idprojet : number) : Observable<Projet> {
  return this.httpClient.get<Projet>(this.baseUrl+'projet/'+idprojet);
}

updateProjet(idprojet : number, projet : Projet) : Observable<Object> {
  return this.httpClient.put(this.baseUrl+'projet/'+idprojet, projet);
}

deleteProjet(idprojet : number) : Observable<Object> {
  return this.httpClient.delete(this.baseUrl+'projet/'+idprojet)
}
}
