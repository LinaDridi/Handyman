import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private matDialog : MatDialog) { }

  ngOnInit() {
  }
  openDialog(){
    let dialogRef = this.matDialog.open(LoginComponent, {
      height: '516px',
      width: '420px',
  });
  }
}
