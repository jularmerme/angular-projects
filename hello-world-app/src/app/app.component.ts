import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'name-goes-here';
  placeholderText = 'Enter your Name here...';
  disabled = true;
  imgSrc =
    'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg';
  text = '';

  changeText(): void {
    this.name = 'A name was here, but is not anymore';
  }

  constructor() {
    setInterval(() => (this.name = 'Homer'), 3000);
  }

  students: any[] = [
    { name: 'Vilhelmina', state: 'Promoted' },
    { name: 'Pembroke', state: 'Regular' },
    { name: 'Kara', state: 'Regular' },
    { name: 'Christiana', state: 'Promoted' },
    { name: 'Phillis', state: 'Free' },
  ];

  show = true;

  toogleTable(): void {
    this.show = !this.show;
  }
}
