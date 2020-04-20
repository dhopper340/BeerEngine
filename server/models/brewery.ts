import mongoose, { Schema, Document } from 'mongoose';
import { IBeer } from './beer';

export interface IBrewery extends Document {
  name: string;
  street: string;
  city: string;
  state: string;
  zipcode: string;
  created_date: Date;
  beer: [IBeer['_id']];
}

const brewerySchema: Schema = new Schema({
  name: { type: String, required: true },
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipcode: { type: String, required: true },
  created_date: { type: Date, default: Date.now },
  // TODO: Need to add beer when brewery is created (push) for this to be populated with populate()
  beer: [{ type: Schema.Types.ObjectId, ref: 'Beer' }]
});

export const BreweryModel = mongoose.model<IBrewery>('Brewery', brewerySchema);

// export class Brewery {

//   id: number;
//   name: string;
//   street: string;
//   city: string;
//   state: string;
//   zipcode: string;

//   constructor(name: string, street: string, city: string, state: string, zipcode: string) {
//     this.name = name;
//     this.street = street;
//     this.city = city;
//     this.state = state;
//     this.zipcode = zipcode;
//   }

//   getName() {
//     return this.name;
//   }

//   getAddress() {
//     return this.street + ', ' + this.city + ', ' + this.state + ' ' + this.zipcode;
//   }
// }
