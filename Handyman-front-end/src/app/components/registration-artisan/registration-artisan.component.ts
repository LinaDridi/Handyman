import {Component, OnInit} from '@angular/core';
import {Artisan} from '../../models/artisan';
import {AuthService} from '../../auth/auth.service';
import {DataService} from '../../services/data.service';
import {IDropdownSettings} from 'ng-multiselect-dropdown/multiselect.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration-artisan',
  templateUrl: './registration-artisan.component.html',
  styleUrls: ['./registration-artisan.component.scss']
})
export class RegistrationArtisanComponent implements OnInit {
  form: any = {};
  services: string[] = [];
  artisan: Artisan;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  fileList: FileList;
  dropdownList = [];
  dropdownSettings: IDropdownSettings = {};
  image;

  constructor(private authService: AuthService, private dataService: DataService, private router: Router) {
  }

  ngOnInit() {
    this.form.service = [];
    // console.log(this.services);
    // this.services = this.form.service;
    // this.services.push('yyyyes');
    this.dataService.getServices().subscribe((res: any) => { this.dropdownList = res; } );
    this.dropdownSettings = {
      singleSelection: false,
      // idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

fileChange(event) {
    this.fileList = event.target.files;
    this.image = this.fileList[0].name;
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
      this.image,
      // this.services
       this.form.service
    );
    console.log(this.artisan);
    this.dataService.SaveImg(this.fileList);
    this.authService.signUp(this.artisan).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
        this.router.navigate(['/home'])
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
