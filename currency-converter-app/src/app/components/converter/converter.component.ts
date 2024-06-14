import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css'],
})
export class ConverterComponent implements OnInit {
  amount: number = 0;
  fromCurrency: string = `United States Dollar`;
  toCurrency: string = `Euro`;
  converted: number = 0;

  currencies: string[] = ['United States Dollar', 'Euro', 'Colombian Peso'];

  constructor() {}

  ngOnInit(): void {}

  convertCurrency() {
    switch (this.fromCurrency) {
      case 'United States Dollar':
        if (this.toCurrency == `United States Dollar`) {
          this.converted = this.amount;
        } else if (this.toCurrency == `Euro`) {
          this.converted = this.amount * 0.93;
        } else {
          this.converted = this.amount * 4136.5;
        }
        break;
      case 'Euro':
        if (this.toCurrency == `United States Dollar`) {
          this.converted = this.amount * 1.07;
        } else if (this.toCurrency == `Euro`) {
          this.converted = this.amount;
        } else {
          this.converted = this.amount * 4423.03;
        }
        break;
      case 'Colombian Peso':
        if (this.toCurrency == `United States Dollar`) {
          this.converted = this.amount * 0.00024;
        } else if (this.toCurrency == `Euro`) {
          this.converted = this.amount * 0.00023;
        } else {
          this.converted = this.amount;
        }
        break;
    }
  }
}
