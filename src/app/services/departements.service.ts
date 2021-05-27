import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Departements } from '../models/departements';

@Injectable({
  providedIn: 'root'
})
export class DepartementsService {

  baseUrl = "http://localhost:8898/api/de/";

  constructor(private httpClient : HttpClient) { }
 
  getDepartementsList() : Observable<Departements[]> {
    return this.httpClient.get<Departements[]>(this.baseUrl+'depart');
  }
  
  createDepartements(departement : Departements) : Observable<Object> {
    return this.httpClient.post(this.baseUrl+'depart', departement);
  }
  
  getDepartementsById(iddepartement : number) : Observable<Departements> {
    return this.httpClient.get<Departements>(this.baseUrl+'depart/'+iddepartement);
  }
  
  updateDepartements(iddepartement : number, departement : Departements) : Observable<Object> {
    return this.httpClient.put(this.baseUrl+'depart/'+iddepartement, departement);
  }
  
  deleteDepartements(iddepartement : number) : Observable<Object> {
    return this.httpClient.delete(this.baseUrl+'depart/'+iddepartement)
  }
}
