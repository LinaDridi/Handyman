import {Injectable} from '@angular/core';


const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  private roles: Array<string> = [];

  constructor() {
  }

  signOut() {
    window.localStorage.clear();
  }

  public saveToken(token: string) {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return localStorage.getItem(TOKEN_KEY);
  }

  public saveUsername(username: string) {
    window.localStorage.removeItem(USERNAME_KEY);
    window.localStorage.setItem(USERNAME_KEY, username);
  }

  public getUsername(): string {
    return localStorage.getItem(USERNAME_KEY);
  }

  public saveAuthorities(authorities: string[]) {
    window.localStorage.removeItem(AUTHORITIES_KEY);
    window.localStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  public getAuthorities(): string[] {
    this.roles = [];

    if (localStorage.getItem(TOKEN_KEY)) {
      JSON.parse(localStorage.getItem(AUTHORITIES_KEY)).forEach(authority => {
        this.roles.push(authority.authority);
      });
    }

    return this.roles;
  }
  public isUser(): boolean {
    const roles = this.getAuthorities();
    if (roles) {
    if (roles[0] === 'ROLE_USER') {
      return  true;
    }}
  }
  public isArtisan(): boolean {
    const roles = this.getAuthorities();
    if (roles) {
      if (roles[0] === 'ROLE_ARTISAN') {
        return  true;
      }}
  }
  public logout() {
    console.log(window.localStorage, '1');
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.removeItem(AUTHORITIES_KEY);
    window.localStorage.removeItem(USERNAME_KEY);

    console.log(window.localStorage, '2' );
  }
  public isAuthentified() {
    if (window.localStorage.getItem(TOKEN_KEY)) {return true; }
    return false;
  }
}
