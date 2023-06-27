import { Pipe, PipeTransform } from '@angular/core';

// === Pipe mayús - Minús -----------------------------------

@Pipe({
    name: 'lane'
})

export class LanePipe implements PipeTransform {

    transform(lane:number):string{
        
        if(lane===0) return 'Top';
        if(lane===1) return 'Jungle';
        if(lane===2) return 'Mid';
        if(lane===3) return 'Carry';
        return 'Support';
    }
}

//  top, mid, jg, adc, support