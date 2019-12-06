import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

  getArtisans() {
    return this.http.get('http://localhost:8080/api/artisans');
  }

  getArtisan(id) {
    return this.http.get('http://localhost:8080/api/artisan?id=' + id);
  }

  isRated(artisan, client) {
    let params = new HttpParams();
    params = params.append('artisan', artisan);
    params = params.append('client', client);
    console.log(params)
    return this.http.get<number>('http://localhost:8080/api/israted', {params});
  }

  rate(info): Observable<string> {
    return this.http.post<string>('http://localhost:8080/api/rate', info);
  }
}
