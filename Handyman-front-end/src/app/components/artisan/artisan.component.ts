import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {ActivatedRoute} from '@angular/router';
import {Artisan} from '../../models/artisan';
import {TokenStorageService} from '../../auth/token-storage.service';
import {Rate} from "../../models/rate";

@Component({
  selector: 'app-artisan',
  templateUrl: './artisan.component.html',
  styleUrls: ['./artisan.component.scss']
})
export class ArtisanComponent implements OnInit {
  id;
  artisan: any;
  roles: string[] = [];
  isLoggedIn = false;
  isUser = false;
  isRated = false;
  infoRate: Rate;

  constructor(private data: DataService, private route: ActivatedRoute, private tokenStorage: TokenStorageService) {
    this.artisan = new Artisan('', '', '', '', '', '', '', '', '', '', '', '', '');
    this.id = this.route.snapshot.paramMap.get('id');
    this.data.getArtisan(this.id).subscribe((res) => {
      this.artisan = res;
      console.log(res);
    });
  }

  ngOnInit() {
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

  rate() {
    this.infoRate = new Rate(this.id, this.tokenStorage.getUsername());
    this.data.rate(this.infoRate).subscribe((res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      });
  }


}
