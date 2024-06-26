import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShortUrlService {
  url = `https://api-ssl.bitly.com/v4/shorten`;

  constructor(private http: HttpClient) {}

  getShortUrl(originalUrl: string): Observable<any> {
    // const tokenHeader = new HttpHeaders({
    //   Authorization: `Bearer ${this.token}`,
    // });

    const body = {
      long_url: originalUrl,
    };

    return this.http.post(this.url, body);
  }
}
