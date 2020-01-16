import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  options = {
    headers: this.httpHeaders
  };
  constructor(private httpClient: HttpClient) { }

  addProject(project: Project): Observable<Project> {
    return this.httpClient.post<Project>('http://localhost:8080/api/addProject', project, this.options);

  }

  getProject(id): Observable<any> {
    return this.httpClient.get('http://localhost:8080/api/project?id=' + id);
  }




}
