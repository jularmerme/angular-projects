import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Data Binding
  title = 'Angular: The Complete Guide';
  txtPlaceholder = 'Type something here'

  // Properties Binding
  disabled = true;
  imgSrc='https://placeimg.com/640/480/any?t=1655075186423';

  // Event Binding
  text = 'This is an event binding video'

  // Two Way Data-Binding
  twoWay = 'unchanged';
  displayText = '';

  // *ngFor
  students: any[] = [
    { name: 'Johm', state: 'Promoted' },
    { name:"Casar",state:'Khaki' },
    { name:"Constancy",state:'Indigo' },
    { name:"Gerry",state:'Indigo' },
    { name:"Hermy",state:'Blue' },
    { name:'Willa',state:'Purple' },
    { name:'Syd',state:'Violet' },
    { name:'Gael',state:'Blue' },
    { name:'Annice',state:'Crimson' },
    { name:'Ricca',state:'Crimson' },
    { name:'Tera',state:'Pink' },
    { name:'Gasper',state:'Turquoise' },
    { name:'Bennie',state:'Puce' },
    { name:'Ethan',state:'Pink' },
    { name:'Edita',state:'Maroon' },
    { name:'Vin',state:'Violet' },
    { name:'Odette',state:'Goldenrod' },
    { name:'Aeriela',state:'Teal' },
    { name:'Ruben',state:'Aquamarine' },
    { name:'Gayle',state:'Purple' },
    { name:'Clare',state:'Orange' }
  ]

  // Toggle Button
  showContent = true;

  constructor() {
    setInterval((()=> this.title = 'Angular'), 1000);
    setInterval((() => this.disabled = false), 3000);
  }

  addNumbers(a: number, b: number) {
    return a + b;
  }

  changeMessage() {
    this.text = 'Next video we\'re gonna to discuss two way data-binding.'
  }

  toggle() {
    this.showContent = !this.showContent;
  }

}
