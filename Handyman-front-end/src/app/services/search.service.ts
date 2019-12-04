import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) {

  }

  searchServices(keyword: string) {
    return this.http.get('http://localhost:8080/api/autocomplete/service/' + keyword);
  }

  searchNames(keyword: string) {
    return this.http.get('http://localhost:8080/api/autocomplete/name/' + keyword);
  }
  searchAddress(keyword: string) {
    return this.http.get('http://localhost:8080/api/autocomplete/address/' + keyword);
  }

}
