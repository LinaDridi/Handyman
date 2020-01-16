import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-decline-offer',
  templateUrl: './decline-offer.component.html',
  styleUrls: ['./decline-offer.component.scss']
})
export class DeclineOfferComponent implements OnInit {
  igno = false;
  constructor(private dialogRef: MatDialogRef<DeclineOfferComponent>, ) { }

  ngOnInit() {
  }

}
