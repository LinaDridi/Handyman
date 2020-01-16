import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Artisan } from '../../models/artisan';
import { TokenStorageService } from '../../auth/token-storage.service';
import { Rate } from '../../models/rate';
import { NewService } from '../../models/newservice';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-artisan',
  templateUrl: './artisan.component.html',
  styleUrls: ['./artisan.component.scss']
})
export class ArtisanComponent implements OnInit {

  id_artisan;
  id;
  artisan: any;
  roles: string[] = [];
  isLoggedIn = false;
  isUser = false;
  isRated = false;
  infoRate: Rate;
  isShown: boolean = false;
  service: string;

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

  constructor(private data: DataService, private route: ActivatedRoute, public tokenStorage: TokenStorageService) {
    this.artisan = new Artisan('', '', '', '', '', '', '', '', '', '', '', '', ['']);
    this.artisan.projects = [];
    this.route.params.subscribe((params) => {
      this.id = params.id;
      this.data.getArtisan(this.id).subscribe((res) => {
        this.artisan = res;
        console.log(res);
      });
    });
  }
  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.id_artisan = message);
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
      console.log(this.roles);
    }
    if (this.roles[0] === 'ROLE_USER') {
      this.isUser = true;
      console.log(this.isUser);
    }
    console.log(this.id);
    console.log(this.tokenStorage.getUsername());
    this.data.isRated(this.id, this.tokenStorage.getUsername()).subscribe((res) => {
      if (res !== 0) {
        this.isRated = true;

      }
    },
      (error) => {
        console.log(error);
      });
  }

  newMessage() {
    this.data.changeMessage(this.id);
  }
  rate() {
    this.infoRate = new Rate(this.id, this.tokenStorage.getUsername());
    this.data.rate(this.infoRate).subscribe((res) => {
      console.log(res);
      this.isRated = true;
      this.artisan.rate = this.artisan.rate + 1;
    },
      (error) => {
        console.log(error);
      });
  }

  toggleShow() {
    this.isShown = !this.isShown;
  }

  addService() {
    const data: string[] = [];
    for (const serv of this.artisan.services) {
      data.push(serv.name);
    }

    data.push(this.service);
    console.log(data, 'ghjklkjhgf');
    const info = new NewService(this.id, data);
    this.data.addService(info).subscribe(res => {
      console.log(res);
      this.artisan.services.push({ id: 0, name: this.service });
    });
  }


}
