import {Pipe, PipeTransform} from '@angular/core';
import {DataService} from "../services/data.service";
import {Artisan} from "../models/artisan";

@Pipe({
  name: 'artisanName'
})
export class ArtisanNamePipe implements PipeTransform {
  artisan: Artisan;

  constructor(private data: DataService) {
  }

  transform(value: number, args?: any): any {
    this.data.getArtisan(value).subscribe((res: Artisan) => {
        this.artisan = res;
        console.log(this.artisan);
        const name = this.artisan.firstname;
        console.log(name);
      }
      , (error) => {
        console.log('error');
      }
      , () => {
        console.log(name,'ghjk')
        return (name);
            }
    );

  }


}
