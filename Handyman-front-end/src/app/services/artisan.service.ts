import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project';
import { MatGridTileHeaderCssMatStyler } from '@angular/material';
import { Artisan } from '../models/artisan';

@Injectable({
  providedIn: 'root'
})
export class ArtisanService {
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
  options = {
    headers: this.httpHeaders
  };
  constructor(private httpClient: HttpClient) { }
  getProposedProjects(id) {
    return this.httpClient.get('http://localhost:8080/api/proposedprojects?id=' + id);
  }
  getProjectList(id) {
    return this.httpClient.get('http://localhost:8080/api/artisan/projects?id=' + id);
  }
  getArtisanByUsername(username) {
    console.log(username)
    return this.httpClient.get('http://localhost:8080/api/artisanByUsername?username=' + username);
  }
  acceptOffer(idProject, idArtisan, cost, currency) {
    return this.httpClient.post('http://localhost:8080/api/artisan/project/offer?idProject=' + idProject + "&id_artisan=" + idArtisan + "&cost=" + cost + "&currency=" + currency, null, this.options);
  }

  declineOffer(idProject) {
    return this.httpClient.post('http://localhost:8080/api/artisan/project/decline?idProject=' + idProject, null, this.options);
  }
}
