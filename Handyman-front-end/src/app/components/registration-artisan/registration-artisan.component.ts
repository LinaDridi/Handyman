import {Component, OnInit} from '@angular/core';
import {Artisan} from '../../models/artisan';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-registration-artisan',
  templateUrl: './registration-artisan.component.html',
  styleUrls: ['./registration-artisan.component.scss']
})
export class RegistrationArtisanComponent implements OnInit {
  form: any = {};
  artisan: Artisan;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form);

    this.artisan = new Artisan(
      this.form.firstName, 
      this.form.lastName,
       this.form.username,
      this.form.email,
      this.form.password,
      this.form.birth,
      this.form.address,
      this.form.job,
      this.form.phone,
      this.form.type,
      this.form.description,
      this.form.img,
      this.form.service
  );
console.log(this.artisan);

    this.authService.signUp(this.artisan).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
