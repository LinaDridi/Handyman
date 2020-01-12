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
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUsername(username: string) {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, username);
  }

  public getUsername(): string {
    return sessionStorage.getItem(USERNAME_KEY);
  }

  public saveAuthorities(authorities: string[]) {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  public getAuthorities(): string[] {
    this.roles = [];

    if (sessionStorage.getItem(TOKEN_KEY)) {
      JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).forEach(authority => {
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
    console.log(window.sessionStorage, '1');
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.removeItem(USERNAME_KEY);

    console.log(window.sessionStorage, '2' );
  }
  public isAuthentified() {
    if (window.sessionStorage.getItem(TOKEN_KEY)) {return true; }
    return false;
  }
}
