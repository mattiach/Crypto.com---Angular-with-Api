import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coin } from '../interfaces/coin';

@Injectable({
  providedIn: 'root'
})

export class CoinsService {
  api: string = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

  constructor(private http: HttpClient) {}

  getCoins(){
    this.http.get<Coin>(this.api).subscribe(
      (response) => {
        return response;
      },
      (error) => {
        return  console.error(error)
      }
    )
  }
}
