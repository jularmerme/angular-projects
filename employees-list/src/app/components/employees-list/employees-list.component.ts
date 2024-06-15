import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css'],
})
export class EmployeesListComponent implements OnInit {
  employeesList: Employee[] = [
    {
      id: 1,
      name: 'Tom',
      lastname: 'Smith',
      area: 'Finances',
      email: 'tsmith@gmail.com',
    },
    {
      id: 2,
      name: 'Bambi',
      lastname: 'Salan',
      area: 'Accounting',
      email: 'bsalan@gmail.com',
    },
    {
      id: 3,
      name: 'Carla',
      lastname: 'Schanke',
      area: 'IT',
      email: 'cschanke@gmail.com',
    },
    {
      id: 4,
      name: 'Aila',
      lastname: 'Ianizzi',
      area: 'Accounting',
      email: 'aianizzi@gmail.com',
    },
    {
      id: 5,
      name: 'Carmine',
      lastname: 'Keeves',
      area: 'Finances',
      email: 'ckeeves@gmail.com',
    },
    {
      id: 6,
      name: 'Phillis',
      lastname: 'Glencross',
      area: 'IT',
      email: 'pglencross@gmail.com',
    },
    {
      id: 7,
      name: 'Henrik',
      lastname: 'Chave',
      area: 'Accounting',
      email: 'hchave@gmail.com',
    },
    {
      id: 8,
      name: 'King',
      lastname: 'Marchant',
      area: 'Finances',
      email: 'kmarchant@gmail.com',
    },
  ];

  optionSelected: string = 'all';

  constructor() {}

  ngOnInit(): void {}

  getEmployeesTotal(): number {
    return this.employeesList.length;
  }

  getAccountingEmployees(): number {
    return this.employeesList.filter((list) => list.area === 'Accounting')
      .length;
  }

  getFinanceEmployees(): number {
    return this.employeesList.filter((list) => list.area === 'Accounting')
      .length;
  }

  getITEmployees(): number {
    return this.employeesList.filter((list) => list.area === 'IT').length;
  }

  employeeCountSelection(radioBtnSelected: string): void {
    this.optionSelected = radioBtnSelected;
  }
}
