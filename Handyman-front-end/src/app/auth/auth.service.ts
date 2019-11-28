import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Artisan} from '../artisan';
import {Observable} from 'rxjs';
import {LoginInfo} from "./login-info";
import {User} from "../user";
import { JwtResponse } from './jwt-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private loginUrl = 'http://localhost:8080/api/auth/authenticate';
  private signupUrl = 'http://localhost:8080/api/auth/signup';

  constructor(
    private httpClient: HttpClient
  ) {
  }

  authenticate(loginInfo: LoginInfo) :Observable<JwtResponse>{
    return this.httpClient.post<JwtResponse>(this.loginUrl, loginInfo);
  }

  signUp(info: Artisan): Observable<string> {
    return this.httpClient.post<string>(this.signupUrl, info);
  }
  signUpUser(info: User): Observable<string> {
    return this.httpClient.post<string>(this.signupUrl + '/user', info);
  }
  // isUserLoggedIn() {
  //   const user = localStorage.getItem('username')
  //   // console.log(!(user === null))
  //   return !(user === null);
  // }

  logOut() {
    window.sessionStorage.removeItem('username');
  }
}
