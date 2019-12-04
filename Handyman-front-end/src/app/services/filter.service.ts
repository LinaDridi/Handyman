import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilterService {


  constructor(private http: HttpClient) {

  }

  filterByService(keyword: string) {
    return this.http.get('http://localhost:8080/api/filter/service/' + keyword);
  }

  filterByServiceAndName(name: string, serv: string, address: string) {
    let params = new HttpParams();
    if (name === '' && serv === '' && address === '') {
      console.log('helloo', name, params);
      params = params;
    }
    if (name !== '') {
      console.log(name, params);
      params = params.append('name', name);
    }
    if (serv !== '') {
      params = params.append('serv', serv);

    }
    if (address !== '') {
      params = params.append('address', address);

    }
    return this.http.get('http://localhost:8080/api/filter/all', {params});

  }
}
