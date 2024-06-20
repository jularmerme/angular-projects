import { Component, OnInit } from '@angular/core';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-expense-input',
  templateUrl: './expense-input.component.html',
  styleUrls: ['./expense-input.component.css'],
})
export class ExpenseInputComponent implements OnInit {
  expenseName: string;
  amount: number;
  wrongForm: boolean;
  wrongText: string;

  constructor(private _budgetService: BudgetService) {
    this.expenseName = '';
    this.amount = 0;
    this.wrongForm = false;
    this.wrongText = 'Description or amount invalid';
  }

  ngOnInit(): void {}

  addExpense() {
    if (this.amount > this._budgetService.available) {
      this.wrongForm = true;
      this.wrongText = 'Amount is greater that available money';
      return;
    }

    if (this.expenseName === '' || this.amount <= 0) {
      this.wrongForm = true;
    } else {
      // Create an object
      const BUDGET = {
        name: this.expenseName,
        amount: this.amount,
      };

      // Send the object to the subscriptors
      this._budgetService.addExpense(BUDGET);
      this.expenseName = '';
      this.amount = 0;
      this.wrongForm = false;
    }
  }
}
