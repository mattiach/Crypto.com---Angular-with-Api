import { Component, OnInit } from '@angular/core';
import { Coin } from 'src/app/interfaces/coin';
import { CoinsService } from 'src/app/services/coins.service';

@Component({
  selector: 'app-cryptocurrencies',
  templateUrl: './cryptocurrencies.component.html',
  styleUrls: ['./cryptocurrencies.component.css']
})
export class CryptocurrenciesComponent implements OnInit {

  // variabili globlali
  ricerca: string = '';
  visible_pagination: boolean = true;

  // arrays
  coins: Coin[] = [];
  coinsFiltrate: Coin[] = [];

  // pagination
  totalLength: any;
  page: number = 1;

  constructor(private servizio: CoinsService) { }

  ngOnInit(): void {
    this.stampaLista();
  }

  stampaLista() {
    this.servizio.getCoins().subscribe({
      next: (response: any) => {
        this.coins = response;
        this.coinsFiltrate = this.coins;

        // pagination
        this.totalLength = response.length;
      }
    })
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
