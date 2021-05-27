import { Departements } from "./departements";
import { Projet } from "./projet";
import { Roles } from "./roles";

export class Employes {

    idemploye : number;
    nom  : string ;
    prenom : string ;
    mail : string ;
    pwd : string ;
    departements : Departements = new Departements();
    projets : Projet = new Projet();
    roles : Roles = new Roles();
}
