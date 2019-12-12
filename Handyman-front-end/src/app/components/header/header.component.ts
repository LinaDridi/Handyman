import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { LoginComponent } from '../login/login.component';
import {TokenStorageService} from "../../auth/token-storage.service";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;

  constructor(private matDialog : MatDialog ,  private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;}
  }
  openDialog(){
    let dialogRef = this.matDialog.open(LoginComponent, {
      height: '516px',
      width: '420px',
  });
  }
  Logout(){
    this.tokenStorage.logout();
 this.reloadPage();
  }
  private reloadPage() {
    window.location.reload();
  }
}
