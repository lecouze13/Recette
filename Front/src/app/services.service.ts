import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  redirectUrl: string;

  baseUrl: string = "http://localhost:8080/collaborateurs";
  demandecongeUrl: string = "http://localhost:8080/demandeadd";
  getdemandecongeUrl: string = "http://localhost:8080/demande";
  getcongeByiDUrl: string = "http://localhost:8080/congebycodeCollab";


  responsablesUrl: string = "http://localhost:8080/responsables";
  changedemandestatusUrl: string = "http://localhost:8080/changedemandestatus";
  addCollaborateur: string = "http://localhost:8080/collaborateuradd";
  addRH: string = "http://localhost:8080/responsableadd";
  Congevalider: string = "http://localhost:8080/conge";
  constructor(private http: HttpClient) {
    this.redirectUrl = "";
  }
  loginCollaborateur(): Observable<any> {
    const body = {

    };

    return this.http.post<any>(this.baseUrl, body);
  }

  loginCollaborateurRH(): Observable<any> {
    const body = {

    };

    return this.http.post<any>(this.responsablesUrl, body);
  }

  CreationCompteC(nom: string, prenom: string): Observable<any> {
    const body = {
      nom: nom,
      prenom: prenom
    };


    return this.http.post<any>(this.addCollaborateur, body);
  }
  CreationCompteRH(nom: string, prenom: string): Observable<any> {
    const body = {
      nom: nom,
      prenom: prenom
    };

    return this.http.post<any>(this.addRH, body);
  }

  DemandeConge(codeCollab: any, nombreJoursDemande: any): Observable<any> {
    const body = {


      codeCollab: codeCollab,
      nombreJoursDemande: nombreJoursDemande,
      status: "en cours"

    };

    return this.http.post<any>(this.demandecongeUrl, body);
  }

  changedemandestatus(codeCollab: String, codeConge: String): Observable<any> {
    const body = {


      codeCollab: codeCollab,
      codeConge: codeConge,
      status: "valide",

    };

    return this.http.post<any>(this.changedemandestatusUrl, body);
  }
  changedemandestatusRefus(codeCollab: String, codeConge: String): Observable<any> {
    const body = {


      codeCollab: codeCollab,
      codeConge: codeConge,
      status: "refuse",

    };

    return this.http.post<any>(this.changedemandestatusUrl, body);
  }




  getDemandeConge(): Observable<any> {
    const body = {




    };

    return this.http.post<any>(this.getdemandecongeUrl, body);
  }
  GetcongeByiDUrl(codeCollab: number): Observable<any> {

    codeCollab = parseInt(codeCollab.toString(), 10);
    return this.http.post<any>(this.getcongeByiDUrl, codeCollab);
  }
  CongeValider(): Observable<any> {
    const body = {




    };

    return this.http.post<any>(this.Congevalider, body);
  }
}


