import mongoose, { Schema, Document } from 'mongoose';
import { IBrewery } from './brewery';

export interface IBeer extends Document {
  name: string;
  style: string;
  brewery: IBrewery['_id'];
}

const beerSchema = new Schema({
  name: { type: String, required: true },
  style: { type: String, required: true },
  brewery: { type: Schema.Types.ObjectId, ref: 'Brewery' }
});

export const BeerModel = mongoose.model<IBeer>('Beer', beerSchema);

// export class Beer {

//   name: string;
//   style: string;

//   constructor(name: string, style: string) {
//       this.name = name;
//       this.style = style;
//   }

//   getName() {
//       return this.name;
//   }

//   getStyle() {
//       return this.style;
//   }
// }
