import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  API_key = '726b7c861ceaf51f0729ba510756578d';
  base_url = `https://api.openweathermap.org/geo/1.0/direct?&limit=1&appid=`;
  lat = 0;
  long = 0;

  constructor(private http: HttpClient) {}

  getCityCoordinates(city: string): Observable<any> {
    const url = this.base_url + this.API_key + `&q=${city}`;
    return this.http.get(url);
  }

  getCityForecast(coordinates: any[]): Observable<any> {
    const base_url = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates[0].lat}&lon=${coordinates[0].lon}&appid=${this.API_key}`;
    return this.http.get(base_url);
  }
}
