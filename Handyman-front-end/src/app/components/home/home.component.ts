import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  st = 'chaymabbbbbbbbb';
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  };
  images = [
    {
      id: 1,
      text: 'Everfresh Flowers',
      image: '../../../assets/images/service-2-2-1.jpg'
    },
    {
      id: 1,
      text: 'Everfresh Flowers',
      image: '../../../assets/images/service-2-2-1.jpg'
    },
    {
      id: 1,
      text: 'Everfresh Flowers',
      image: '../../../assets/images/service-2-2-1.jpg'
    },
    {
      id: 1,
      text: 'Everfresh Flowers',
      image: '../../../assets/images/service-2-2-1.jpg'
    }
  ];
  services;
  artisans;
  constructor(private homeS: HomeService, private matDialog: MatDialog, private data: DataService) { }

  ngOnInit() {
    this.data.getServices().subscribe((res) => {
    this.services = res;
    console.log(res);
    });
    this.data.getArtisans().subscribe((res) => {
        this.artisans = res;
        console.log(this.artisans);
      }
    );
  }
  display() {
    this.homeS.disp(this.st).subscribe((data) => {console.log(data); }
    );
  }
  openDialog() {
    let dialogRef = this.matDialog.open(LoginComponent, {
      height: '463px',
      width: '416px',
  });
  }


}

