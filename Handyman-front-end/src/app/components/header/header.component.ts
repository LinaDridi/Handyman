import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import {TokenStorageService} from '../../auth/token-storage.service';
import {DataService} from '../../services/data.service';
import {Artisan} from '../../models/artisan';
import {ArtisanService} from '../../services/artisan.service';
import {Project} from '../../models/project';
import {Router} from '@angular/router';
import {filter} from "rxjs/operators";
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
  listProject: any = [];
  constructor(private matDialog: MatDialog ,  private tokenStorage: TokenStorageService,
              private data: DataService, private artisanService: ArtisanService, private router: Router) {
  }

  ngOnInit() {
    this.artisan = new Artisan('', '', '', '', '', '', '', '', '', '', '', '', ['']);
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;

      this.data.getUserByUserName(this.tokenStorage.getUsername()).subscribe((res) => {
        this.artisan = res;
        console.log(res);
        this.artisanService.getProposedProjects(this.artisan.id).subscribe((list) => {
          console.log(list);
          this.listProject = list;
          console.log(this.listProject);
        });
      });
      this.isUser = this.tokenStorage.isUser();
      this.isArtisan = this.tokenStorage.isArtisan();
    }
  }
  openDialog() {
    let dialogRef = this.matDialog.open(LoginComponent, {
      height: '530px',
      width: '420px',
  });
  }
  Logout() {
    this.tokenStorage.logout();
    this.isLoggedIn = false;
    this.router.navigate(['/home']);
  }
  private reloadPage() {
    window.location.reload();
  }
}
