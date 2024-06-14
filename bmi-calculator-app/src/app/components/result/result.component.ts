import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
  bmi: number = 0;
  result: string = '';
  advice: string = '';

  constructor(private route: ActivatedRoute) {
    this.bmi = +route.snapshot.paramMap.get('value')!;
  }

  ngOnInit(): void {
    this.getResult();
  }

  getResult() {
    if (this.bmi >= 25) {
      this.result = 'Your Weight is above the ideal Weight';
      this.advice = 'You should try working out more often';
    } else if (this.bmi >= 18.5) {
      this.result = 'Normal';
      this.advice = 'You are in the ideal weight. Congratulations!!!!';
    } else {
      this.result = 'Overweighted';
      this.advice = 'Try eating more healthy food and start working out';
    }
  }
}
