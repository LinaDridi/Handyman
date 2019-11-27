import { Component, OnInit } from '@angular/core';
import {LoginInfo} from '../auth/login-info';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private loginInfo: LoginInfo;
  constructor(private authService: AuthService) { }

  ngOnInit() { if (localStorage.getItem('token')) {
    this.isLoggedIn = true;
   // this.roles = this.tokenStorage.getAuthorities();
  }
  }
  onSubmit() {
    console.log(this.form);

    this.loginInfo = new LoginInfo(
      this.form.username,
      this.form.password);

    this.authService.authenticate(this.loginInfo).subscribe(
      data => {
        // this.tokenStorage.saveAuthorities(data.authorities);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        // this.roles = this.tokenStorage.getAuthorities();
        this.reloadPage();
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }
}
