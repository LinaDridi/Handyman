import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { MatDialog } from '@angular/material/dialog'
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  st = 'chaymabbbbbbbbb'
  constructor(private homeS : HomeService, private matDialog : MatDialog) { }

  ngOnInit() {
  }
  display() {
    this.homeS.disp(this.st).subscribe((data) => {console.log(data); }
    );
  }
  openDialog(){
    let dialogRef = this.matDialog.open(LoginComponent, {
      height: '463px',
      width: '416px',
  });
  }


}

