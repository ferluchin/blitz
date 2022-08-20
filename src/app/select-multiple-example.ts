import { Component } from '@angular/core';

@Component({
  selector: 'select-multiple-example',
  templateUrl: 'select-multiple-example.html',
})
export class SelectMultipleExample {

  toppingList: any = [
    { value: 'extra_cheese', label: 'Extra cheese' },
    { value: 'mushroom', label: 'Mushroom' },
    { value: 'onion', label: 'Onion' },
    { value: 'pepperoni', label: 'Pepperoni' },
    { value: 'sausage', label: 'Sausage' },
    { value: 'tomato', label: 'Tomato' }
  ];

  selectedObjects: any[];

  selectedObjectsFromArray: any;

  constructor() { }

  ngOnInit() {
    this.selectedObjects = [{ value: 'tomato', label: 'Tomato' }];

    this.selectedObjectsFromArray = ['tomato', 'sausage']
  }

  comparer(o1: any, o2: any): boolean {
    // si es posible comparar por el nombre del objeto, y no por la referencia.
    return o1 && o2 ? o1.label === o2.label : o2 === o2;
  }
}



// import {Component} from '@angular/core';
// import {FormControl} from '@angular/forms';

// /** @title Select with multiple selection */
// @Component({
//   selector: 'select-multiple-example',
//   templateUrl: 'select-multiple-example.html',
// })
// export class SelectMultipleExample {
//   toppings = new FormControl('');
//   toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
// }

