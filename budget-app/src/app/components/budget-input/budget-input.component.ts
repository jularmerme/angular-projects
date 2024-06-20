import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-budget-input',
  templateUrl: './budget-input.component.html',
  styleUrls: ['./budget-input.component.css'],
})
export class BudgetInputComponent implements OnInit {
  amount: number;
  wrongAmount: boolean;

  constructor(private _budgetService: BudgetService, private router: Router) {
    this.amount = 0;
    this.wrongAmount = false;
  }

  ngOnInit(): void {}

  addAmount() {
    if (this.amount > 0) {
      this.wrongAmount = false;
      this._budgetService.budget = this.amount;
      this._budgetService.available = this.amount;
      this.router.navigate(['expenses']);
    } else {
      this.wrongAmount = true;
    }
  }
}
