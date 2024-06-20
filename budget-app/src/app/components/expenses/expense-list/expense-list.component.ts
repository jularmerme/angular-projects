import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css'],
})
export class ExpenseListComponent implements OnInit {
  subscription: Subscription;
  budget: number;
  available: number;
  expensesList: any[] = [];

  constructor(private _budgetService: BudgetService) {
    this.budget = 0;
    this.available = 0;
    this.subscription = this._budgetService.getExpenses().subscribe((data) => {
      this.available = this.available - data.amount;
      console.log(data);
      this.expensesList.push(data);
    });
  }

  ngOnInit(): void {
    this.budget = this._budgetService.budget;
    this.available = this._budgetService.available;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  changeColor() {
    if (this.budget / 4 > this.available) {
      return 'alert alert-danger';
    } else if (this.budget / 2 > this.available) {
      return 'alert alert-warning';
    } else {
      return 'alert alert-secondary';
    }
  }
}
