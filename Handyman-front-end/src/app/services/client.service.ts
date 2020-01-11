import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Project} from "../models/project";
import {HttpClient, HttpClientModule, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) {
  }

  getProjects(username): Observable<Project[]> {
    let params = new HttpParams();
    params = params.append('username_client' , username)
    return this.http.get<Project[]>('http://localhost:8080/api/client/getProjects', {params});
  }
  getProjectDevis(projectId , usernameClient){
    let params = new HttpParams();
    params = params.append('username_client' , usernameClient);
    params = params.append('projectId', projectId)
    return this.http.get<Project[]>('http://localhost:8080/api/client/getProjectDevis', {params});
  }
}
