import { Pipe, PipeTransform } from '@angular/core';
import { Champ, Lane } from '../interfaces/champ.interface';

@Pipe({
  name: 'sorter'
})
export class SortPipe implements PipeTransform {

  transform(champs:Champ[], sorter?: keyof Champ | ''): Champ[] {

    switch(sorter){
      case 'name':
        return champs.sort( (a,b) => ( a.name > b.name ) ? 1 : -1 );
      case 'meta':
        return champs.sort( (a,b) => ( a.meta < b.meta ) ? 1 : -1 );
      case 'lane':
        return champs.sort( (a,b) => ( a.lane > b.lane ) ? 1 : -1 );
      default:
         return champs;
    }
  }
}
