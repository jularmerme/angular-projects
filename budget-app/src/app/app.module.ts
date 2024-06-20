import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { BudgetInputComponent } from './components/budget-input/budget-input.component';
import { ExpenseInputComponent } from './components/expenses/expense-input/expense-input.component';
import { ExpenseListComponent } from './components/expenses/expense-list/expense-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpensesComponent,
    BudgetInputComponent,
    ExpenseInputComponent,
    ExpenseListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
