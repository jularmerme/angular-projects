import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ShortUrlComponent } from './components/short-url/short-url.component';
import { FormsModule } from '@angular/forms';
import { ShortInterceptor } from './services/short.interceptor';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SpinnerComponent,
    ShortUrlComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, FontAwesomeModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ShortInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
