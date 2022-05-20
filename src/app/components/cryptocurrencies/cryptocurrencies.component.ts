import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coin } from 'src/app/interfaces/coin';

@Component({
  selector: 'app-cryptocurrencies',
  templateUrl: './cryptocurrencies.component.html',
  styleUrls: ['./cryptocurrencies.component.css']
})
export class CryptocurrenciesComponent implements OnInit {

  coins: Coin[] = [];
  // coinsFiltrate : Coin[] = [];
  api: string = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';


  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.http.get<Coin[]>(this.api).subscribe(
      (res) => {
        this.coins = res;
        // this.coinsFiltrate = this.coins;
        // console.log(this.coinsFiltrate);
      },
      (err) => console.error(err)
    );
  }

}
