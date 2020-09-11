import dotenv from 'dotenv';
import express, { Router, Application, Request, Response } from 'express';
import { BreweryRoutes } from './routes/brewery.routes';
import { loggerMiddleware } from './middleware/logger';
import { DataBase } from './database/db';
// import cors from 'cors';

export class App {
  public app: Application;
  public router: Router;
  public breweryRoutes: BreweryRoutes = new BreweryRoutes();
  public database: DataBase = new DataBase();

  constructor() {
    dotenv.config();
    this.app = express();
    this.router = express.Router();
    this.router.get('/', (request: Request, response: Response) => {
      response.status(200).send({
        message: 'GET request successful.'
      });
    });
    this.breweryRoutes.routes(this.router);
    this.router.use(express.json());
    this.app.use(loggerMiddleware);
    this.app.use('/api', this.router);
    this.database.connect();
  }

  // const corsOptions = {
  //   origin: 'http://localhost:4200',
  //   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  // };

  // app.use(cors(corsOptions));
}
