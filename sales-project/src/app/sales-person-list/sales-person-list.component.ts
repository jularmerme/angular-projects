import { Component } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrl: './sales-person-list.component.css',
})
export class SalesPersonListComponent {
  salesPersonList: SalesPerson[] = [
    new SalesPerson('Bart', 'Simpson', 'bsimpson@gmail.com', 50000),
    new SalesPerson('Lisa', 'Simpson', 'lsimpson@gmail.com', 40000),
    new SalesPerson('Homer', 'Simpson', 'hsimpson@gmail.com', 90000),
    new SalesPerson('Marge', 'Simpson', 'msimpson@gmail.com', 60000),
  ];
}
