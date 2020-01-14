import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {DataService} from '../../services/data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor(private dataservice: DataService, private router: Router) { }

  ngOnInit() {
  }

  OnSubmit(form: NgForm) {
    this.dataservice.SaveMsg(form.value).subscribe((next) => this.router.navigate(['/home']));
  }
}
