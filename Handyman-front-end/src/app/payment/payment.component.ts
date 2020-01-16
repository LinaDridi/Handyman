import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  amount: string = '100';
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  displayHeaders() {
    let header = new HttpHeaders();
    header.append('abc', '22');


    console.log(header.get('abc'));
  }


  chargeCreditCard() {
    let form = document.getElementsByTagName("form")[0];
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
  }

  chargeCard(token: string) {
    console.log(token)
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('token', token);
    headers = headers.append('amount', '100');
    console.log(headers)
    this.http.post('http://localhost:8080/api/payment/charge', {}, { headers: new HttpHeaders().append('token', token).append('amount', '100') })
      .subscribe(resp => {
        console.log(headers)
        console.log
        console.log(resp);
      })
  }

}
