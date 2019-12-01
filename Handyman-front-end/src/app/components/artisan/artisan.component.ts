import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Artisan } from '../../models/artisan';

@Component({
  selector: 'app-artisan',
  templateUrl: './artisan.component.html',
  styleUrls: ['./artisan.component.scss']
})
export class ArtisanComponent implements OnInit {
id;
artisan: any ;
  constructor(private data: DataService, private route: ActivatedRoute) {
    this.artisan = new Artisan('', '' , '', '', '', '', '', '', '', '', '', '');
    this.id = this.route.snapshot.paramMap.get('id');
    this.data.getArtisan(this.id).subscribe((res) => {
      this.artisan = res;
      console.log(res);
    });
  }

  ngOnInit() {
  }

}
