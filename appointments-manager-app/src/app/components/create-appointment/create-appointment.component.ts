import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css'],
})
export class CreateAppointmentComponent implements OnInit {
  name = '';
  date = '';
  time = '';
  description = '';

  incompleteForm = false;
  @Output() newAppointment = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  createAppointment() {
    if (
      this.name == '' ||
      this.date == '' ||
      this.time == '' ||
      this.description == ''
    ) {
      this.incompleteForm = true;
      return;
    }
    this.incompleteForm = false;
    const APP = {
      name: this.name,
      date: this.date,
      time: this.time,
      description: this.description,
    };
    console.log(APP);
    this.newAppointment.emit(APP);
    this.clearForm();
  }

  clearForm() {
    this.name = '';
    this.date = '';
    this.time = '';
    this.description = '';
  }
}
