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

async  transform(value: number, args?: any) {
    const data = await this.data.getArtisanName(value).toPromise();

    // this.data.getArtisanName(value).subscribe((res: Artisan) => {
    //     this.artisan = res;
    //     console.log(this.artisan);
    //     const name = this.artisan.firstname;
    //     console.log(name);
    //   }
    // );
    return (data.firstname + ' ' + data.lastname);

  }


}
