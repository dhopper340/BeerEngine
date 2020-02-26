import { BreweryService, Brewery, BreweryResolved } from './services/brewery.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { MDCTextField } from '@material/textfield';

@Component({
  selector: 'app-brewery-list',
  templateUrl: './brewery-list.component.html',
  styleUrls: ['./brewery-list.component.scss']
})
export class BreweryListComponent implements OnInit {
  breweries: Brewery[];
  errorMessage: string;

  constructor(public readonly service: BreweryService, private route: ActivatedRoute) { }

  ngOnInit() {
    // TODO: This is used to enable default material control
    // const username = new MDCTextField(document.querySelector('.name'));
    this.getBreweries();
  }

  getBreweries() {
    const resolvedData: BreweryResolved = this.route.snapshot.data.breweries;
    this.errorMessage = resolvedData.error;
    this.breweries = resolvedData.breweries;
  }
}
