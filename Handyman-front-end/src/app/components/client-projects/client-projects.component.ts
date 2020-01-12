import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../../auth/token-storage.service';
import {Project} from '../../models/project';
import {ClientService} from '../../services/client.service';
import {AcceptOfferComponent} from "../accept-offer/accept-offer.component";
import {MatDialog} from "@angular/material/dialog";
import {ProjectDevisComponent} from "../project-devis/project-devis.component";

@Component({
  selector: 'app-client-projects',
  templateUrl: './client-projects.component.html',
  styleUrls: ['./client-projects.component.scss']
})
export class ClientProjectsComponent implements OnInit {
  username: string;
  projects: Project[] = [];
  project: Project = new Project('', '', '', '', '', null , '');
  constructor(private matDialog: MatDialog, private tokenStorage: TokenStorageService, private clientService: ClientService) {
  }

  ngOnInit() {
    this.username = this.tokenStorage.getUsername();
    this.clientService.getProjects(this.username).subscribe(
      (data: Project[]) => {
        this.projects = data;
      });
    this.projects.push(this.project);
    this.projects.push(new Project('', '', '', '', '', null , ''))
  }
  openDialog(id) {
    const dialogRef = this.matDialog.open(ProjectDevisComponent, {
      height: '511px',
      width: '416px',
    });
    dialogRef.componentInstance.projectId = id;
    dialogRef.componentInstance.usernameClient = this.username;

  }

}
