import { Component, OnInit } from '@angular/core';
import {IDropdownSettings} from 'ng-multiselect-dropdown/multiselect.model';
import {DataService} from '../../services/data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Artisan} from '../../models/artisan';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-edit-artisan',
  templateUrl: './edit-artisan.component.html',
  styleUrls: ['./edit-artisan.component.scss']
})
export class EditArtisanComponent implements OnInit {
  dropdownSettings: IDropdownSettings = {};
  form: any = {};
  services: string[] = [];
  dropdownList = [];
  id;
  fileList: FileList;
  image;
  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.form = new Artisan('', '', '', '', '', '', '', '', '', '', '', '', ['']);
    this.dataService.getServices().subscribe((res: any) => {
      this.dropdownList = res;
    });
    this.dropdownSettings = {
      singleSelection: false,
      // idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    this.id = this.route.snapshot.paramMap.get('id');
    this.dataService.getArtisan(this.id).subscribe((res) => {
      this.form = res;
      this.getNames(this.form.services);
      this.getNames(this.form.roles);
      console.log(res);
    });
  }

  fileChange(event) {
    this.fileList = event.target.files;
    this.image = this.fileList[0].name;
  }

  onSubmit() {
    console.log(this.form);
    if (this.image) {
    this.dataService.SaveImg(this.fileList);
    }
    this.dataService.edit(this.form).subscribe(
      data => {
        this.router.navigate(['/home']);
      }
    );
  }

  getNames(Str) {
    let i = 0;
    Str.forEach(s => Str[i++] = s.name);
  }
}
