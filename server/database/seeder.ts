import { BreweryModel } from '../models/brewery';
import { BeerModel } from './../models/beer';

export class Seeder {
  seedData(): void {
    const brewery1 = new BreweryModel({
      name: 'Goose Island Brewhouse',
      street: '1800 N Clybourn Ave',
      city: 'Chicago',
      state: 'IL',
      zipcode: '60614'
    });

    const brewery2 = new BreweryModel({
      name: 'Lakefront Brewery',
      street: '1872 N Commerce St',
      city: 'Milwaukee',
      state: 'WI',
      zipcode: '53212'
    });

    const brewery3 = new BreweryModel({
      name: 'Toppling Goliath Brewing Co',
      street: '1600 Prosperity Rd',
      city: 'Decorah',
      state: 'IA',
      zipcode: '52101'
    });

    const beer1 = new BeerModel({
      name: 'Lager 1',
      style: 'Lager',
      brewery: brewery1.id
    });

    const beer2 = new BeerModel({
      name: 'Lager 2',
      style: 'Lager',
      brewery: brewery1.id
    });

    const beer3 = new BeerModel({
      name: 'IPA 1',
      style: 'IPA',
      brewery: brewery1.id
    });

    beer1.save();
    beer2.save();
    beer3.save();

    brewery1.beer.push(beer1);
    brewery1.beer.push(beer2);
    brewery1.beer.push(beer3);

    brewery2.beer.push(beer3);
    brewery2.beer.push(beer2);
    brewery2.beer.push(beer1);

    brewery3.beer.push(beer2);
    brewery3.beer.push(beer1);
    brewery3.beer.push(beer3);

    brewery1.save();
    brewery2.save();
    brewery3.save();
  }
}
