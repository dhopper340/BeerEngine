import { IBeer } from './beer';

export interface IBrewery {
  _id: number;
  name: string;
  beer: IBeer[];
}
