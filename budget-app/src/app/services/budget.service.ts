import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  budget: number;
  available: number;
  private budget$ = new Subject<any>();

  constructor() {
    this.budget = 0;
    this.available = 0;
  }

  addExpense(expense: any) {
    this.available = this.available - expense.amount;
    this.budget$.next(expense);
  }

  getExpenses(): Observable<any> {
    return this.budget$.asObservable();
  }
}
