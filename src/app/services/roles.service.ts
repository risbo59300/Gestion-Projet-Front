import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Roles } from '../models/roles';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  baseUrl = "http://localhost:8898/api/ro/"; 

  constructor(private httpClient : HttpClient) { }

getRolesList() : Observable<Roles[]> {
  return this.httpClient.get<Roles[]>(this.baseUrl+'role');
}

createRoles(role : Roles) : Observable<Object> {
  return this.httpClient.post(this.baseUrl+'role', role);
}

getRolesById(idrole : number) : Observable<Roles> {
  return this.httpClient.get<Roles>(this.baseUrl+'role/'+idrole);
}

updateRoles(idrole : number, role : Roles) : Observable<Object> {
  return this.httpClient.put(this.baseUrl+'role/'+idrole, role);
}

deleteRoles(idrole : number) : Observable<Object> {
  return this.httpClient.delete(this.baseUrl+'role/'+idrole)
}
}
