import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCoffee,
  faMapMarker,
  faPhone,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home-banner',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './home-banner.component.html',
  styleUrl: './home-banner.component.css',
})
export class HomeBannerComponent {
  faCoffee = faCoffee;
  faMapMarker = faMapMarker;
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
}
