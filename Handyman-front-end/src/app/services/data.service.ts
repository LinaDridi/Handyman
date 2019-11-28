import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  getArtisans() {
    return this.http.get('http://localhost:8080/api/artisans');
  }
  getArtisan(id) {
    return this.http.get('http://localhost:8080/api/artisan?id='+id);
  }
}
