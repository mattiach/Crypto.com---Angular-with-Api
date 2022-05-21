import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coin } from 'src/app/interfaces/coin';

@Component({
  selector: 'app-cryptocurrencies',
  templateUrl: './cryptocurrencies.component.html',
  styleUrls: ['./cryptocurrencies.component.css']
})
export class CryptocurrenciesComponent implements OnInit {

  api: string = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

  // variabili globlali
  ricerca: string = '';
  visible_pagination: boolean = true;

  // arrays
  coins: Coin[] = [];
  coinsFiltrate: Coin[] = [];

  // pagination
  totalLength: any;
  page: number = 1;


  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    this.stampaLista();

  }

  stampaLista() {
    this.http.get<Coin[]>(this.api).subscribe(
      (res) => {
        this.coins = res;
        this.coinsFiltrate = this.coins;

        // pagination
        this.totalLength = res.length;
      },
      (err) => console.error(err)
    );
  }


  searchCoin() {
    if (this.ricerca != '') {
      this.coinsFiltrate = this.coins.filter((coin) =>

        // ricerca tramite uno di questi casi
        coin.id.toLowerCase().includes(this.ricerca.toLowerCase()) ||
        coin.name.toLowerCase().includes(this.ricerca.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(this.ricerca.toLowerCase())
      );
      this.visible_pagination = false;
    }

    if (this.ricerca == '') {
      this.stampaLista();
      this.visible_pagination = true;
    }
  }

}
