import {Component, OnInit} from '@angular/core';
import {ClientService} from '../../services/client.service';

@Component({
  selector: 'app-project-devis',
  templateUrl: './project-devis.component.html',
  styleUrls: ['./project-devis.component.scss']
})
export class ProjectDevisComponent implements OnInit {
  projectId: number;
  usernameClient: string;
  devisList: any;

  constructor(private clientService: ClientService) {
  }

  ngOnInit() {
    this.clientService.getProjectDevis(this.projectId , this.usernameClient).subscribe(
      (data: any) => {
        this.devisList = data;
      });
  }
accept(){}
delete(){}

}
