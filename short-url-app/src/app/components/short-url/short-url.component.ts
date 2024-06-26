import { Component, OnInit } from '@angular/core';
import { ShortUrlService } from 'src/app/services/short-url.service';

@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.css'],
})
export class ShortUrlComponent implements OnInit {
  url: string;
  shortUrl: string;
  urlProcessed: boolean;
  loadingSpinner: boolean;
  showError: boolean;
  textError: string;

  constructor(private _shortUrlService: ShortUrlService) {
    this.url = '';
    this.shortUrl = '';
    this.urlProcessed = false;
    this.loadingSpinner = false;
    this.showError = false;
    this.textError = '';
  }

  ngOnInit(): void {}

  processUrl() {
    if (this.url === '') {
      this.errorHandler(`Please enter the URL`);
      return;
    }

    this.urlProcessed = false;
    this.loadingSpinner = true;

    setTimeout(() => {
      this.getNewUrl();
    }, 1000);
  }

  getNewUrl() {
    this._shortUrlService.getShortUrl(this.url).subscribe(
      (data) => {
        this.loadingSpinner = false;
        this.urlProcessed = true;
        this.shortUrl = data.link;
      },
      (error) => {
        this.loadingSpinner = false;
        this.url = '';
        console.log(error);
        if (error.error.description === `The value provided is invalid.`) {
          this.errorHandler(`The url provided is invalid.`);
        }
      }
    );
  }

  errorHandler(value: string) {
    this.showError = true;
    this.textError = value;
    setTimeout(() => {
      this.showError = false;
    }, 4000);
  }
}
