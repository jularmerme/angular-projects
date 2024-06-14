import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  number1: number = 0;
  number2: number = 1;

  dice1 = `../assets/img/dice1.png`;
  dice2 = `../assets/img/dice2.png`;

  play(): void {
    this.number1 = Math.ceil(Math.random() * 6);
    this.number2 = Math.ceil(Math.random() * 6);
    this.dice1 = `../assets/img/dice${this.number1}.png`;
    this.dice2 = `../assets/img/dice${this.number2}.png`;
  }
}
