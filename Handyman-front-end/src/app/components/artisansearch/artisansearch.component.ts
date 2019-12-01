import { Component, OnInit } from '@angular/core';
import { DataService} from '../../services/data.service';
import {Artisan} from '../../models/artisan';

@Component({
  selector: 'app-artisansearch',
  templateUrl: './artisansearch.component.html',
  styleUrls: ['./artisansearch.component.scss']
})
export class ArtisansearchComponent implements OnInit {
 artisans;
  constructor(private data: DataService) {
    this.data.getArtisans().subscribe((res) => {
      this.artisans = res;
      console.log(this.artisans);
    }
    );
  }

  ngOnInit() {
  }

}
