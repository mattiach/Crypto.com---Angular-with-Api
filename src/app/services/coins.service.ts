import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coin } from '../interfaces/coin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CoinsService {

  constructor(private http: HttpClient) { }

  getCoins(): Observable<Coin> {
    let api = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

    return this.http.get<Coin>(api);
  }
}
