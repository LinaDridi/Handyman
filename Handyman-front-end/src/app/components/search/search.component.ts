import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SearchService} from 'src/app/services/search.service';
import {Artisan} from '../../models/artisan';
import {FilterService} from '../../services/filter.service';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  keyword: string;
  name: string;
  service: string;
  address: string;
  filteredServices: any[];
  filteredNames: any[];
  filteredAddress: any[];
  errorMessage = '';
  artisans: Artisan[];
  @Output() sendFilter = new EventEmitter();

  constructor(private searchService: SearchService, private filterService: FilterService, private  artisanService: DataService) {
    this.name = '';
    this.service = '';
    this.address='';

  }

  clearService() {
    this.service = '';
  }

  clearName() {
    this.name = '';
  }
  clearAddress(){
    this.address = '';
  }

  ngOnInit() {
  }

  autocompleteServices(event) {
    this.filteredServices = [];
    console.log(event);
    this.searchService.searchServices(event).subscribe((data: any) => {
        this.filteredServices = data;
        console.log(data);

        console.log(this.filteredServices);

      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;

      });
  }

  autocompleteNames(event) {
    this.filteredNames = [];
    console.log(event);
    this.searchService.searchNames(event).subscribe((data: any) => {
        this.filteredNames = data;
        console.log(data);

        console.log(this.filteredNames);

      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;

      });
  }
  autocompleteAddress(event) {
    this.filteredAddress = [];
    console.log(event);
    this.searchService.searchAddress(event).subscribe((data: any) => {
        this.filteredAddress = data;
        console.log(data);

        console.log(this.filteredAddress);

      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;

      });
  }


  // getAll() {
  //   this.artisanService.getArtisans().subscribe((res: any) => {
  //       this.artisans = res;
  //       console.log(this.artisans);
  //       //  this.sendFilter.emit(this.artisans);
  //
  //     }
  //   );
  //
  // }
// filter only by service added in (selected)
//   filter(item) {
//     this.artisans = [];
//     console.log(item);
//     this.filterService.filterByService(item).subscribe((data: any) => {
//         this.artisans = data;
//         console.log(data);
//
//         console.log(this.artisans);
//         // this.sendFilter.emit(this.artisans);
//
//       },
//       error => {
//         console.log(error);
//         this.errorMessage = error.error.message;
//
//       });
//   }

  setName(item) {
    this.name = item;
  }

  setService(item) {
    this.service = item;
  }
  setAddress(item){
    this.address = item;
  }


  send() {
    this.artisans = [];
    this.filterService.filterByServiceAndName(this.name, this.service,this.address).subscribe((data: any) => {
        this.artisans = data;
        console.log(data);

        console.log(this.artisans);
        this.sendFilter.emit(this.artisans);

      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;

      });
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e) {
    // do something when input is focused
  }
}
