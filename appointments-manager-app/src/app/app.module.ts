import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { CreateAppointmentComponent } from './components/create-appointment/create-appointment.component';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentListComponent,
    CreateAppointmentComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
