
import { Router } from 'express';
import { BreweryController } from '../controllers/brewery.controller';

export class BreweryRoutes {
  public breweryController: BreweryController = new BreweryController();

  // const router = express.Router();
  public routes(router: Router): void {
    router.post('/brewery', this.breweryController.add);

    router.get('/', this.breweryController.index);

    router.get('/brewery', this.breweryController.get);

    router
      .get('/brewery/:id', this.breweryController.getById)
      .put('/brewery/:id', this.breweryController.save)
      .delete('/brewery/:id', this.breweryController.delete);
  }
}
