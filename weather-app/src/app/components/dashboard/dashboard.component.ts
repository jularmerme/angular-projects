import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  urlWeatherImage = `https://img.freepik.com/free-photo/3d-render-weather-icons-set-sun-clouds-crescent_107791-17928.jpg?size=626&ext=jpg&ga=GA1.1.672697106.1717632000&semt=ais_user`;
  city = '';
  temperature = 0;
  humedity = '';
  weather = '';
  query = false;
  loading = false;
  coordinates: number[] = [];
  showError = false;

  constructor(private _weatherService: WeatherService) {}

  ngOnInit(): void {}

  getForecast() {
    this.query = false;
    this.loading = true;
    this._weatherService.getCityCoordinates(this.city).subscribe(
      (data) => {
        this._weatherService.getCityForecast(data).subscribe((data) => {
          this.loading = false;
          this.query = true;
          this.temperature = data.main.temp - 273;
          this.humedity = data.main.humidity;
          this.weather = data.weather[0].main;
        });
      },
      (error) => {
        console.log(error);
        this.loading = false;
        this.error();
      }
    );
  }
  error() {
    this.showError = true;
    setTimeout(() => {
      this.showError = false;
      this.city = '';
    }, 3000);
  }
}
