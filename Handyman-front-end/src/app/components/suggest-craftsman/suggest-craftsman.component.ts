import { Component, OnInit } from '@angular/core';
import {Project} from '../../models/project';
import { MatDialog } from '@angular/material/dialog';
import {LoginComponent} from '../login/login.component';
import { TokenStorageService } from '../../auth/token-storage.service';
import {DataService} from '../../services/data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-suggest-craftsman',
  templateUrl: './suggest-craftsman.component.html',
  styleUrls: ['./suggest-craftsman.component.scss']
})
export class SuggestCraftsmanComponent implements OnInit {
project: Project = new Project('', '', '', '', '', null , '');
  constructor(private matDialog: MatDialog, private token: TokenStorageService, private data: DataService, private router: Router) {
  }

  ngOnInit() {
  }

  getdate(n) {
    let today = new Date();
    today.setMonth(today.getMonth() + n);
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    let d;
    d = mm + '/' + dd + '/' + yyyy;
    return d;
  }
  onSubmit() {
    this.project.client_username = this.token.getUsername();
    this.project.deadline = 'Not Fixed';
    console.log(this.project);
    this.data.suggestArtisans(this.project).subscribe(res => {
      this.router.navigate(['/home']);
    });
      }
  openDialog(){
    let dialogRef = this.matDialog.open(LoginComponent, {
      height: '516px',
      width: '420px',
    });
  }
}
