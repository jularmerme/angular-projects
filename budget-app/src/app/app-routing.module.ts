import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BudgetInputComponent } from './components/budget-input/budget-input.component';
import { ExpensesComponent } from './components/expenses/expenses.component';

const routes: Routes = [
  { path: ' ', redirectTo: '/enter-budget', pathMatch: 'full' },
  { path: 'enter-budget', component: BudgetInputComponent },
  { path: 'expenses', component: ExpensesComponent },
  { path: '**', redirectTo: '/enter-budget', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
