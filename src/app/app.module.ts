// angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

// imports
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxPaginationModule } from 'ngx-pagination';

// custom pipes
import { ShortNumberPipe } from './pipes/short-number.pipe';

// components
import { CryptocurrenciesComponent } from './components/cryptocurrencies/cryptocurrencies.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { SmartphoneAppComponent } from './components/smartphone-app/smartphone-app.component';
import { HeroCoinsComponent } from './components/hero-coins/hero-coins.component';


@NgModule({
  declarations: [
    AppComponent,
    CryptocurrenciesComponent,
    NavbarComponent,
    HeaderComponent,
    SmartphoneAppComponent,
    HeroCoinsComponent,

    ShortNumberPipe // pipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }