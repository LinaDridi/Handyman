import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import {TokenStorageService} from '../../auth/token-storage.service';
import {DataService} from '../../services/data.service';
import {Artisan} from '../../models/artisan';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  artisan: any;
  isUser = false;
  isArtisan = false;
  constructor(private matDialog: MatDialog ,  private tokenStorage: TokenStorageService, private data: DataService) { }

  ngOnInit() {
    this.artisan = new Artisan('', '', '', '', '', '', '', '', '', '', '', '', ['']);
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
    this.data.getUserByUserName(this.tokenStorage.getUsername()).subscribe((res) => {
      this.artisan = res;
      console.log(res);
    });
    this.isUser = this.tokenStorage.isUser();
    this.isArtisan = this.tokenStorage.isArtisan();
  }
  openDialog() {
    let dialogRef = this.matDialog.open(LoginComponent, {
      height: '516px',
      width: '420px',
  });
  }
  Logout() {
    this.tokenStorage.logout();
    this.reloadPage();
  }
  private reloadPage() {
    window.location.reload();
  }
}
