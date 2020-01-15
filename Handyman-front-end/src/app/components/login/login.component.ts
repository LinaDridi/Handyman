import { Component, OnInit } from '@angular/core';
import {LoginInfo} from '../../auth/login-info';
import {AuthService} from '../../auth/auth.service';
import { TokenStorageService } from '../../auth/token-storage.service';
import { MatDialog, MatDialogRef  } from  '@angular/material';
import { RouterModule, Router } from '@angular/router';


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
  constructor(private authService: AuthService,
     private tokenStorage: TokenStorageService ,
     private  dialogRef: MatDialogRef<LoginComponent>,
     private router: Router) { }

  ngOnInit() { if (this.tokenStorage.getToken()) {
    this.isLoggedIn = true;
    this.roles = this.tokenStorage.getAuthorities();
  }
  }
  onSubmit() {
    console.log(this.form);

    this.loginInfo = new LoginInfo(
      this.form.username,
      this.form.password);

    this.authService.authenticate(this.loginInfo).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUsername(data.username);
         this.tokenStorage.saveAuthorities(data.authorities);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
         this.roles = this.tokenStorage.getAuthorities();
         this.dialogRef.close();
         this.router.navigate(['/home']).then(e => {
           if (e) {
             console.log("Navigation is successful!");
           } else {
             console.log("Navigation has failed!");
           }
         });
        this.reloadPage();



        console.log(localStorage)
        console.log(data)
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );
  }

nav(){
  this.router.navigate(['signup']);
  this.dialogRef.close();

}
nav1(){
  this.router.navigate(['signup/artisan']);
  this.dialogRef.close();

}

  private reloadPage() {
    window.location.reload();
  }
}
