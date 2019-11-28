import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artisan',
  templateUrl: './artisan.component.html',
  styleUrls: ['./artisan.component.scss']
})
export class ArtisanComponent implements OnInit {
id;
artisan;
  constructor(private data: DataService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.data.getArtisan(this.id).subscribe((res)=>{
      this.artisan = res;
    });
  }

  ngOnInit() {
  }

}
