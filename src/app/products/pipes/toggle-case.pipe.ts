import { Pipe, PipeTransform } from '@angular/core';

// === Pipe mayús - Minús -----------------------------------

@Pipe({
    name: 'toggleCase'
})

export class ToggleCasePipe implements PipeTransform {

    transform(value:string, toUpper:boolean= false):string {
        
        return (toUpper) 
            ? value.toUpperCase() // Si "toUpper" es true
            : value.toLowerCase(); // Si "toUpper" es false
    }
}