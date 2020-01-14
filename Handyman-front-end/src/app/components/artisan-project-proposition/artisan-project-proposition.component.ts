import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AcceptOfferComponent } from '../accept-offer/accept-offer.component';
import { DeclineOfferComponent } from '../decline-offer/decline-offer.component';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
import { Artisan } from 'src/app/models/artisan';
import { ArtisanService } from '../../services/artisan.service';
import { Project } from 'src/app/models/project';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-artisan-project-proposition',
  templateUrl: './artisan-project-proposition.component.html',
  styleUrls: ['./artisan-project-proposition.component.scss']
})
export class ArtisanProjectPropositionComponent implements OnInit {
  artisan;
  listProject;
  id_project;
  constructor(private data: DataService, private matDialog: MatDialog, private tokenStorage: TokenStorageService,
              private artisanService: ArtisanService) {
    this.artisan = new Artisan('', '', '', '', '', '', '', '', '', '', '', '', ['']);
  }

  ngOnInit() {
    this.data.currentMessage2.subscribe(message => this.id_project = message);
    if (this.tokenStorage.getToken()) {
      this.data.getUserByUserName(this.tokenStorage.getUsername()).subscribe((res) => {
        this.artisan = res;
        console.log(res);
        this.artisanService.getProposedProjects(this.artisan.id).subscribe(list => {
          console.log(list);
          this.listProject = list;
          console.log(this.listProject);
        });
      });
    }
  }
  newMessage(id_project) {
    this.data.changeMessage2(id_project);
  }
  openDialogAccept(id_project) {
    console.log(id_project);
    this.newMessage(id_project);
    let dialogRef = this.matDialog.open(AcceptOfferComponent, {
      height: '511px',
      width: '416px',
    });


  }

  openDialogDecline(id) {
    console.log(id);
    let dialogRef = this.matDialog.open(DeclineOfferComponent, {
      height: '511px',
      width: '416px',
    });
    this.artisanService.declineOffer(id).subscribe();
  }

}
