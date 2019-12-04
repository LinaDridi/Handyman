import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';

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

  getfiltered(event) {
    this.artisans = event;

  }

  ngOnInit() {
  }

}
