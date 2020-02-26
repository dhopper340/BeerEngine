import express, { Router, Application } from 'express';
import { BreweryRoutes } from './routes/brewery.routes';
// import { mongoose } from 'mongoose';
// import dbConfig from './database/db';
// import cors from 'cors';

class App {
  public app: Application;
  public router: Router;
  public breweryRoutes: BreweryRoutes = new BreweryRoutes();

  constructor() {
    this.app = express();
    this.router = express.Router();
    this.breweryRoutes.routes(this.router);
    this.config();
  }

  private config(): void {
    this.router.use(express.json());
    this.app.use('/api', this.router);
  }

  // const corsOptions = {
  //   origin: 'http://localhost:4200',
  //   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  // };

  // app.use(cors(corsOptions));

  // const router = express.Router();

  // app.use('/api', router);

  // app.listen(8000, () => {
  //   console.log('Server started!');
  // });
}

export default new App().app;
