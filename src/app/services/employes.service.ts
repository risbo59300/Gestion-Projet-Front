import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employes } from '../models/employes';

@Injectable({
  providedIn: 'root'
})
export class EmployesService {

  baseUrl = "http://localhost:8898/api/e/";

  constructor(private httpClient : HttpClient) { }

getEmployesList() : Observable<Employes[]> {
  return this.httpClient.get<Employes[]>(this.baseUrl+'employe');
}

createEmployes(employe : Employes) : Observable<Object> {
  return this.httpClient.post(this.baseUrl+'employe', employe);
}

getEmployesById(idemploye : number) : Observable<Employes> {
  return this.httpClient.get<Employes>(this.baseUrl+'employe/'+idemploye);
}

updateEmployes(idemploye : number, employe : Employes) : Observable<Object> {
  return this.httpClient.put(this.baseUrl+'employe/'+idemploye, employe);
}

deleteEmployes(idemploye : number) : Observable<Object> {
  return this.httpClient.delete(this.baseUrl+'employe/'+idemploye)
}

}
