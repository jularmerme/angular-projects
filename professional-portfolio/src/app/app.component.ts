import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectsComponent } from './components/projects/projects.component';
import { HomeBannerComponent } from './components/home-banner/home-banner.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    ProjectsComponent,
    HomeBannerComponent,
    ContactComponent,
    FooterComponent,
  ],
})
export class AppComponent {
  title = 'Julian Mercado - Professional Profile';
}
