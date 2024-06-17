import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  appointmentList: any[] = [];

  addAppointment(appointment: any) {
    console.log(`I'm your father`);
    console.log(this.appointmentList);
    this.appointmentList.push(appointment);
  }

  eliminateAppointment(index: number) {
    this.appointmentList.splice(index, 1);
  }
}
