import { Request, Response } from 'express';
import { BeerModel } from '../models/beer';

export class BeerController {
  public add(request: Request, response: Response) {
    const newBeer = new BeerModel(request.body);

    newBeer.save((error, beer) => {
      if (error) {
        response.send(error);
      }

      response.send(beer);
    });
  }

  public get(request: Request, response: Response) {
    BeerModel.find({})
      .populate('brewery')
      .exec((error, beer) => {
        if (error) {
          response.send(error);
        }

        response.send(beer);
      });
  }

  public getById(request: Request, response: Response) {
    BeerModel.findById(request.params.id)
      .populate('brewery')
      .exec((error, beer) => {
        if (error) {
          response.send(error);
        }

        response.send(beer);
      });
  }

  public getByBrewery(request: Request, response: Response) {
    BeerModel.find({ brewery: request.params.id })
      .populate('brewery')
      .exec((error, beer) => {
        if (error) {
          response.send(error);
        }

        response.send(beer);
      });
  }

  public save(request: Request, response: Response) {
    BeerModel.findByIdAndUpdate(request.params.id, request.body, { new: true }, (error, beer) => {
      if (error) {
        response.send(error);
      }

      response.send(beer);
    });
  }

  public delete(request: Request, response: Response) {
    BeerModel.findByIdAndDelete(request.params.id, (error, beer) => {
      if (error) {
        response.send(error);
      }

      response.send(beer);
    });
  }
}
