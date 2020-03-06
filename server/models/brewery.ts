import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const brewerySchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  address2: { type: String },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipcode: { type: String, required: true }
});

export const Brewery = mongoose.model('Brewery', brewerySchema);

// export class Brewery {

//   id: number;
//   name: string;
//   address: string;
//   city: string;
//   state: string;
//   zipcode: string;

//   constructor(name: string, address: string, city: string, state: string, zipcode: string) {
//     this.name = name;
//     this.address = address;
//     this.city = city;
//     this.state = state;
//     this.zipcode = zipcode;
//   }

//   getName() {
//     return this.name;
//   }

//   getAddress() {
//     return this.address + ', ' + this.city + ', ' + this.state + ' ' + this.zipcode;
//   }
// }
