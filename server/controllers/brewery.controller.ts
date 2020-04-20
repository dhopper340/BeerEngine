import { Request, Response } from 'express';
import { BreweryModel } from '../models/brewery';

export class BreweryController {
  public add(request: Request, response: Response) {
    const newBrewery = new BreweryModel(request.body);

    newBrewery.save((error, brewery) => {
      if (error) {
        response.send(error);
      }

      response.send(brewery);
    });
  }

  public get(request: Request, response: Response) {
    BreweryModel.find({})
      .populate('beer')
      .exec((error, brewery) => {
        if (error) {
          response.send(error);
        }

        response.send(brewery);
      });
  }

  public getById(request: Request, response: Response) {
    BreweryModel.findById(request.params.id, (error, brewery) => {
      if (error) {
        response.send(error);
      }

      response.send(brewery);
    });
  }

  public save(request: Request, response: Response) {
    BreweryModel.findByIdAndUpdate(request.params.id, request.body, { new: true }, (error, brewery) => {
      if (error) {
        response.send(error);
      }

      response.send(brewery);
    });
  }

  public delete(request: Request, response: Response) {
    BreweryModel.findByIdAndDelete(request.params.id, (error, brewery) => {
      if (error) {
        response.send(error);
      }

      response.send(brewery);
    });
  }
}
