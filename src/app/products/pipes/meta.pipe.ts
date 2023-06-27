import { Pipe, PipeTransform } from '@angular/core';

// === Pipe mayús - Minús -----------------------------------

@Pipe({
    name: 'meta'
})

export class MetaPipe implements PipeTransform {

    transform(meta:boolean):'On Metagame'|'Off Metagame'{
        
        return meta
            ? 'On Metagame'
            : 'Off Metagame';
    }
}