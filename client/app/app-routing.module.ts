import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BreweryListComponent } from './brewery-list/brewery-list.component';
import { BreweryListResolver } from './brewery-list/brewery-list.resolver';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'beer', component: BeerListComponent },
  { path: 'breweries', component: BreweryListComponent, resolve: { breweries: BreweryListResolver } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const routingComponents = [HomeComponent, BeerListComponent, BreweryListComponent];
