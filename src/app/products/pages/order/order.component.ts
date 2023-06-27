import { Component } from '@angular/core';
import { Champ, Lane } from '../../interfaces/champ.interface';

@Component({
  selector: 'productsp-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {

  public isUpperCase: boolean= false;
  public sorter: keyof Champ | undefined | ''= '';

  // === Arreglo de campeones - Objetos ---------------------------------

  public champs: Champ[]= [
    {
      name: 'Lee Sin',
      meta:  false,
      lane:  Lane.jg,
    },
    {
      name: 'Rengar',
      meta:  true,
      lane:  Lane.top,
    },
    {
      name: 'Lucian',
      meta:  true,
      lane:  Lane.adc,
    },
    {
      name: 'Ahri',
      meta:  false,
      lane:  Lane.mid,
    },
    {
      name: 'Pyke',
      meta:  false,
      lane:  Lane.support,
    },
    {
      name: 'Zed',
      meta:  false,
      lane:  Lane.mid,
    },
    {
      name: 'Aphelios',
      meta:  false,
      lane:  Lane.adc,
    },
    {
      name: 'Talon',
      meta:  false,
      lane:  Lane.mid,
    },
    {
      name: 'Fiora',
      meta:  true,
      lane:  Lane.top,
    },
    {
      name: 'Rakan',
      meta:  false,
      lane:  Lane.support,
    },
    {
      name: 'Singed',
      meta:  false,
      lane:  Lane.top,
    },
    {
      name: 'Veigar',
      meta:  false,
      lane:  Lane.mid,
    },
    {
      name: 'Jhin',
      meta:  true,
      lane:  Lane.adc,
    },
    {
      name: 'Vi',
      meta:  true,
      lane:  Lane.jg,
    },
    {
      name: 'Thresh',
      meta:  false,
      lane:  Lane.support,
    },
    {
      name: 'Sett',
      meta:  false,
      lane:  Lane.top,
    },
    {
      name: 'Viego',
      meta:  false,
      lane:  Lane.jg,
    },
    {
      name: 'Camile',
      meta:  false,
      lane:  Lane.top,
    },
    {
      name: 'Malphite',
      meta:  true,
      lane:  Lane.top,
    },
    {
      name: 'Kindred',
      meta:  true,
      lane:  Lane.jg,
    },
  ]

  // === Métodos --------------------------------------------------------

  toggleUpperCase():void{
    this.isUpperCase= !this.isUpperCase;
  }

  chageOrder(value:keyof Champ){
    this.sorter= value;
  }

}
