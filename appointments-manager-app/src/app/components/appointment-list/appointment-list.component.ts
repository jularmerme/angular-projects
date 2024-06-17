import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css'],
})
export class AppointmentListComponent implements OnInit {
  @Input() allAppointments: any;
  @Output() removeAppointment = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  deleteAppointment(index: number) {
    this.removeAppointment.emit(index);
  }
}
