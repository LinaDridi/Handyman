import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../auth/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  headers;
  token;

  constructor(
    private httpClient: HttpClient, private tokenS: TokenStorageService) {
  }

  disp(data: any): Observable<any> {
    this.token = this.tokenS.getToken();
    this.headers = new HttpHeaders().set('authorization', 'Bearer ' + this.token);
    // this.headers.set('allow')
    return this.httpClient.post('http://localhost:8080/home', data);
  }
}
