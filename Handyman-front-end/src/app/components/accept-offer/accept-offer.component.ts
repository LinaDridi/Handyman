import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { RouterModule, Router } from '@angular/router';
import { ArtisanService } from '../../services/artisan.service'
@Component({
  selector: 'app-accept-offer',
  templateUrl: './accept-offer.component.html',
  styleUrls: ['./accept-offer.component.scss']
})
export class AcceptOfferComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  //still send idproject from component to component
  constructor(private dialogRef: MatDialogRef<AcceptOfferComponent>, private router: Router, private artisanService: ArtisanService) { }
  ngOnInit() {

  }
  onSubmit(f) {
    console.log("hellooo")
    console.log(f.value)
    this.artisanService.acceptOffer(1, f.value.cost, f.value.currency).subscribe();
  }
}


