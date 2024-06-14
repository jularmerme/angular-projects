import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
})
export class StartComponent implements OnInit {
  age: number = 25;
  weigth: number = 60;
  height: number = 170;
  option: string = 'male';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  updateHeight(event: any) {
    this.height = event.target.value;
  }

  disableFemale() {
    this.option = 'male';
  }

  disableMale() {
    this.option = 'female';
  }

  calculateBMI() {
    const BMI = this.weigth / Math.pow(this.height / 100, 2);
    console.log(BMI.toFixed(1));
    this.router.navigate(['/result', BMI.toFixed(1)]);
  }
}
