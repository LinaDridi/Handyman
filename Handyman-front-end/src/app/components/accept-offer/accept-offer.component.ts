import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

import { ArtisanService } from '../../services/artisan.service';
import { DataService } from 'src/app/services/data.service';
import { TokenStorageService } from 'src/app/auth/token-storage.service';

@Component({
    selector: 'app-accept-offer',
    templateUrl: './accept-offer.component.html',
    styleUrls: ['./accept-offer.component.scss']
})
export class AcceptOfferComponent implements OnInit {
  test = false;
    id_project;
    igno = false;
    form: any = {};
    isLoggedIn = false;
    isLoginFailed = false;
    errorMessage = '';
    roles: string[] = [];
    artisan_username
    artisan;

    constructor(private dialogRef: MatDialogRef<AcceptOfferComponent>, private router: Router, private artisanService: ArtisanService, private data: DataService, private tokenStorage: TokenStorageService) { }
    ngOnInit() {

        // this.artisan_username = "aaaartisan"
        this.artisanService.getArtisanByUsername(this.tokenStorage.getUsername()).subscribe(artisan => { this.artisan = artisan })
        this.data.currentMessage2.subscribe(id_project => this.id_project = id_project)
        console.log(this.id_project)
        // console.log(this.artisan)
    }
    onSubmit(f) {
        console.log(f.value);
        this.artisanService.acceptOffer(this.id_project, this.artisan.id, f.value.cost, f.value.currency).subscribe();
        this.dialogRef.close();

    }
}


