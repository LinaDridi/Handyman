import {Component, OnInit} from '@angular/core';
import {ClientService} from '../../services/client.service';
import {MatDialogRef} from '@angular/material/dialog';
import {Devis} from "../../models/devis";

@Component({
  selector: 'app-project-devis',
  templateUrl: './project-devis.component.html',
  styleUrls: ['./project-devis.component.scss']
})
export class ProjectDevisComponent implements OnInit {
  projectId: number;
  usernameClient: string;
  devisList: Devis[];
  devisSelected;
  constructor(private clientService: ClientService ,
              private  dialogRef: MatDialogRef<ProjectDevisComponent>,
  ) {
  }

  ngOnInit() {
    // this.clientService.getProjectDevis(this.projectId , this.usernameClient).subscribe(
    //   (data: any) => {
    //     this.devisList = data;
    //   });
  }
accept() {
  this.clientService.sendDevis(this.projectId , this.devisSelected).subscribe(
    (data: any) => {
      console.log( ' devis selected');
    });
  this.dialogRef.close();

}
delete() {
  this.dialogRef.close();

}

}
