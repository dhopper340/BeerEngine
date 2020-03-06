import { Request, Response } from 'express';
import { Brewery } from '../models/brewery';

export class BreweryController {
  public add(request: Request, response: Response) {
    const newBrewery = new Brewery(request.body);

    newBrewery.save((error, brewery) => {
      if (error) {
        response.send(error);
      }

      response.send(brewery);
    });

    // const brewery = new Brewery(request.body.name, request.body.address, request.body.city, request.body.state, request.body.zipcode);

    // response.send(brewery);
  }

  public get(request: Request, response: Response) {
    Brewery.find({}, (error, brewery) => {
      if (error) {
        response.send(error);
      }

      response.send(brewery);
    });

    // const breweryData = [
    //   new Brewery('Goose Island Brewhouse', '1800 N Clybourn Ave', 'Chicago', 'IL', '60614'),
    //   new Brewery('Lakefront Brewery', '1872 N Commerce St', 'Milwaukee', 'WI', '53212'),
    //   new Brewery('Toppling Goliath Brewing Co', '1600 Prosperity Rd', 'Decorah', 'IA', '52101'),
    // ];

    // response.send(breweryData);
  }

  public getById(request: Request, response: Response) {
    Brewery.findById(request.params.id, (error, brewery) => {
      if (error) {
        response.send(error);
      }

      response.send(brewery);
    });

    // const requestedId = request.params.id;
    // response.send(new Brewery('Lakefront Brewery', '1872 N Commerce St', 'Milwaukee', 'WI', '53212'));
  }

  public save(request: Request, response: Response) {
    Brewery.findByIdAndUpdate(request.params.id, request.body, { new: true }, (error, brewery) => {
      if (error) {
        response.send(error);
      }

      response.send(brewery);
    });

    // const requestedId = request.params.id;
    // response.status(201).send(request.body);
  }

  public delete(request: Request, response: Response) {
    Brewery.findByIdAndDelete(request.params.id, (error, brewery) => {
      if (error) {
        response.send(error);
      }

      response.send(brewery);
    });

    // const requestedId = request.params.id;
    // response.sendStatus(204);
  }
}
