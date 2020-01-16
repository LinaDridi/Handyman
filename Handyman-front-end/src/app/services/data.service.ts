import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import {Artisan} from "../models/artisan";
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private messageSource = new BehaviorSubject('default id_artisan undefined ');
  currentMessage = this.messageSource.asObservable();
  private messageSource2 = new BehaviorSubject('default id_project undefined ');
  currentMessage2 = this.messageSource.asObservable();
  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  changeMessage(id_artisan) {

    this.messageSource.next(id_artisan)

  }
  changeMessage2(id_project) {
    console.log('in data service', id_project)
    this.messageSource.next(id_project)

  }

  getArtisans() {
    return this.http.get('http://localhost:8080/api/artisans');
  }

  getArtisan(id) {
    return this.http.get('http://localhost:8080/api/artisan?id=' + id);
  }
  getArtisanName(id) {
    return this.http.get<Artisan>('http://localhost:8080/api/artisan?id=' + id);
  }
  getUserByUserName(username) {
    return this.http.get('http://localhost:8080/api/UserByUsername?username=' + username);
  }

  SaveMsg(form) {
    return this.http.post('http://localhost:8080/api/Message', form);
  }

  SaveImg(filelist) {
    let file: File = filelist[0];
    let formData: FormData = new FormData();
    formData.append('uploadFile', file, file.name);
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    //  let options = new RequestOptions({ headers: headers });
    const options = {
      params: new HttpParams(),
      headers: headers
    };
    this.http.post(`http://localhost:8080/api/files`, formData, options)

      .subscribe(
        data => console.log('success'),
        error => console.log(error)
      );
  }

  isRated(artisan, client) {
    let params = new HttpParams();
    params = params.append('artisan', artisan);
    params = params.append('client', client);
    console.log(params);
    return this.http.get<number>('http://localhost:8080/api/israted', { params });
  }

  rate(info): Observable<string> {
    return this.http.post<string>('http://localhost:8080/api/rate', info);
  }

  getServices(): Observable<string[]> {
    return this.http.get<string[]>('http://localhost:8080/api/services');
  }
  addService(data): Observable<any> {


    return this.http.post<any>('http://localhost:8080/api/addservice', data);
  }

  suggestArtisans(project) {
   return this.http.post('http://localhost:8080/api/suggestProject', project);
  }
  edit(artisan) {
    return this.http.post('http://localhost:8080/api/editartisan', artisan);
  }
}
