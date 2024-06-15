import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-count-employee',
  templateUrl: './count-employee.component.html',
  styleUrls: ['./count-employee.component.css'],
})
export class CountEmployeeComponent implements OnInit {
  @Input() all: number;
  @Input() accounting: number;
  @Input() finances: number;
  @Input() it: number;

  @Output() countRadioBtnChange = new EventEmitter<string>();

  optionSelected: string = 'all';

  constructor() {
    this.all = 0;
    this.accounting = 0;
    this.finances = 0;
    this.it = 0;
  }

  ngOnInit(): void {
    console.log(this.all);
  }

  radioChange(): void {
    this.countRadioBtnChange.emit(this.optionSelected);
  }
}
