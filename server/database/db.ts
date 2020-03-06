import mongoose from 'mongoose';
import { Brewery } from '../models/brewery';

export class DataBase {
  eraseDatabaseOnSync = true;

  // connectionString: 'mongodb://localhost:27017/mydb?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false';
  private seedData() {
    new Brewery({
      name: 'Goose Island Brewhouse',
      address: '1800 N Clybourn Ave',
      address2: '',
      city: 'Chicago',
      state: 'IL',
      zipcode: '60614'
    }).save();

    new Brewery({
      name: 'Lakefront Brewery',
      address: '1872 N Commerce St',
      address2: '',
      city: 'Milwaukee',
      state: 'WI',
      zipcode: '53212'
    }).save();

    new Brewery({
      name: 'Toppling Goliath Brewing Co',
      address: '1600 Prosperity Rd',
      address2: '',
      city: 'Decorah',
      state: 'IA',
      zipcode: '52101'
    }).save();
  }

  public connect(): void {
    // Set up default mongoose connection
    mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
      if (this.eraseDatabaseOnSync) {
        Promise.all([
          Brewery.deleteMany({}),
        ]);
      }

      this.seedData();
    });

    // Get the default connection
    const db = mongoose.connection;

    // Bind connection to error event (to get notification of connection errors)
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));

    // Bind connection to open event
    db.once('open', () => console.log('Connected to database'));
  }
}
