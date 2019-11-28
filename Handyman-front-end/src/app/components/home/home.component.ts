import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  st = 'chaymabbbbbbbbb'
  constructor(private homeS : HomeService) { }

  ngOnInit() {
  }
  display() {
    this.homeS.disp(this.st).subscribe((data) => {console.log(data); }
    );
  }

}

