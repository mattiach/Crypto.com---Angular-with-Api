import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { CryptocurrenciesComponent } from './components/cryptocurrencies/cryptocurrencies.component';
import { DominanceComponent } from './components/dominance/dominance.component';
import { HeroCoinsComponent } from './components/hero-coins/hero-coins.component';
import { SmartphoneAppComponent } from './components/smartphone-app/smartphone-app.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HeroCoinsComponent },
  {path: 'home', component: HeroCoinsComponent},
  {path: 'mercati', component: CryptocurrenciesComponent},
  {path: 'dominance', component: DominanceComponent},
  {path: 'app', component: SmartphoneAppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
