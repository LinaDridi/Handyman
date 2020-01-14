import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Project } from "../models/project";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { ObserversModule } from '@angular/cdk/observers';

@Injectable({
  providedIn: 'root'
})

export class ClientService {

  constructor(private http: HttpClient) {
  }

  getProjects(username): Observable<Project[]> {
    let params = new HttpParams();
    params = params.append('clientUsername', username);
    return this.http.get<Project[]>('http://localhost:8080/api/client/getProjects', { params });
  }

  // getProjectDevis(projectId , usernameClient){
  //   let params = new HttpParams();
  //   params = params.append('username_client' , usernameClient);
  //   params = params.append('projectId', projectId)
  //   return this.http.get<Project[]>('http://localhost:8080/api/client/getProjectDevis', {params});
  // }

  sendDevis(project_id, devis_id) {
    console.log(devis_id)
    let params = new HttpParams();
    params = params.append('project_id', project_id);
    params = params.append('devis_id', devis_id);
    return this.http.get('http://localhost:8080/api/client/project/acceptDevis', { responseType: 'text', params });

  }
  getContactId(project_id) {
    let params = new HttpParams();
    params = params.append('id', project_id);
    return this.http.get('http://localhost:8080/api/project/contract', { params });
  }


  sendMail(artisan_id, client_username, contract_id): Observable<any> {
    console.log(artisan_id, client_username, contract_id)
    let params = new HttpParams();
    params = params.append('artisan_id', artisan_id);
    params = params.append('client_username', client_username);
    params = params.append('contract_id', contract_id);
    return this.http.get('http://localhost:8080/api/send-mail-attachment', { params });


  }



}
