import mongoose from 'mongoose';
import { Seeder } from './seeder';
import { BreweryModel } from '../models/brewery';
import { BeerModel } from './../models/beer';

export class DataBase {
  private eraseDatabaseOnSync = true;
  private seeder: Seeder = new Seeder();

  public connect(): void {
    let mongodbURI: string;

    if (process.env.NODE_ENV === 'LOCAL') {
      mongodbURI = process.env.CONNECTIONSTRING_LOCAL;
    } else {
      mongodbURI = process.env.CONNECTIONSTRING;
    }

    mongoose.Promise = global.Promise;

    // Set up default mongoose connection
    mongoose.connect(mongodbURI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
      if (this.eraseDatabaseOnSync) {
        Promise.all([
          BreweryModel.deleteMany({}),
          BeerModel.deleteMany({}),
        ]);
      }

      this.seeder.seedData();
    });

    // Get the default connection
    const db = mongoose.connection;

    // Bind connection to error event (to get notification of connection errors)
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));

    db.on('connected', () => console.log('Connected to database.'));

    // Bind connection to open event
    db.once('open', () => console.log('Database open.'));
  }
}
