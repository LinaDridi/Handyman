import {Component, OnInit} from '@angular/core';
import {ClientService} from '../../services/client.service';
import {MatDialogRef} from '@angular/material/dialog';
import {Devis} from '../../models/devis';

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
  contractId: number;
  artisanId: number;

  constructor(private clientService: ClientService,
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
    this.clientService.sendDevis(this.projectId, this.devisSelected).subscribe(
      (data: any) => {
        console.log(' devis selected');
        console.log(data);
        // // this.clientService.getContactId(this.projectId).subscribe((res: number) => {
        // //   this.contractId = res;
        // //   this.clientService.sendMail(this.artisanId, this.usernameClient, this.contractId).subscribe(( dt: any) => {
        // //     console.log('mail sent');
        // //   });
        // });



      });
    this.dialogRef.close();

  }

  delete() {
    this.dialogRef.close();

  }

}
