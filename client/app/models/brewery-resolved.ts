import { IBrewery } from './brewery';

export interface BreweryResolved {
  breweries: IBrewery[];
  error?: any;
}
