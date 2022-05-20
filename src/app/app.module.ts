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


// custom pipes
import { ShortNumberPipe } from './pipes/short-number.pipe';

// components
import { CryptocurrenciesComponent } from './components/cryptocurrencies/cryptocurrencies.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { DominanceComponent } from './components/dominance/dominance.component';
import { SmartphoneAppComponent } from './components/smartphone-app/smartphone-app.component';
import { HeroCoinsComponent } from './components/hero-coins/hero-coins.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CryptocurrenciesComponent,
    NavbarComponent,
    HeaderComponent,
    DominanceComponent,
    SmartphoneAppComponent,
    HeroCoinsComponent,
    ShortNumberPipe,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }