import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginInfo} from './login-info';
import {JwtResponse} from './jwt-response';
import {Artisan} from '../models/artisan';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8080/api/auth';
  private loginUrl = 'http://localhost:8080/api/auth/authenticate';
  private signupUrl = 'http://localhost:8080/api/auth/signup';

  constructor(
    private httpClient: HttpClient
  ) {
  }

  authenticate(loginInfo: LoginInfo): Observable<JwtResponse> {
    return this.httpClient.post<JwtResponse>(this.baseUrl + '/authenticate', loginInfo);
  }

  signUp(info: Artisan): Observable<string> {
    return this.httpClient.post<string>(this.baseUrl + '/signupartisan', info);
  }

  signUpUser(info: User): Observable<string> {
    return this.httpClient.post<string>(this.baseUrl + '/signup', info);
  }

  // isUserLoggedIn() {
  //   const user = localStorage.getItem('username')
  //   // console.log(!(user === null))
  //   return !(user === null);
  // }

  logOut() {
    console.log(window.localStorage,"1")
    window.localStorage.removeItem('AuthUsername');
    console.log(window.localStorage,"2")  }
}
