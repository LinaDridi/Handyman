import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProjectService } from '../services/project.service';
import { Project } from '../models/project';
import { StringifyOptions } from 'querystring';
import {MatDialogRef} from "@angular/material/dialog";
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  //amount: string = '100';
  constructor(private http: HttpClient, private projectService: ProjectService ,     private  dialogRef: MatDialogRef<PaymentComponent>,
  ) { }
  project: Project;
  projectId: number;
  amount: string;
  currency: string;
  form
  ngOnInit() {
    console.log('test', this.projectId)

  }

  chargeCreditCard() {
    let form = document.getElementsByTagName("form")[0];
    console.log(form.projectId.value)
    this.projectService.getProject(this.projectId).subscribe((data) => {
      this.project = data; this.amount = this.project.devis[0].cost.toString(); this.currency = this.project.devis[0].currency.toString(); let form = document.getElementsByTagName("form")[0];
      (<any>window).Stripe.card.createToken({
        number: form.cardNumber.value,
        exp_month: form.expMonth.value,
        exp_year: form.expYear.value,
        cvc: form.cvc.value
      }, (status: number, response: any) => {
        if (status === 200) {
          let token = response.id;
          console.log(token)
          this.chargeCard(token);
        } else {
          console.log(response.error.message);
        }
      });
    });

this.dialogRef.close();

  }

  async chargeCard(token: string) {
    console.log(token)
    await this.http.post('http://localhost:8080/api/payment/charge', {}, { headers: new HttpHeaders().append('token', token).append('amount', this.amount).append('currency', this.currency) })
      .subscribe(resp => {
        console.log(resp);
      })
  }

}
