import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StartComponent } from './components/start/start.component';
import { ResultComponent } from './components/result/result.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'result/:value', component: ResultComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [AppComponent, StartComponent, ResultComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
