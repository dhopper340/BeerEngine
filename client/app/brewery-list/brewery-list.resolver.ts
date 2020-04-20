import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BreweryService } from './services/brewery.service';
import { BreweryResolved } from '../models/brewery-resolved';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class BreweryListResolver implements Resolve<BreweryResolved> {
  constructor(private service: BreweryService) { }

  resolve(): Observable<BreweryResolved>  {
    return this.service.getAllBreweries()
    .pipe(
      map(data => {
        return ({ breweries: data, error: null });
      }),
      catchError((error: HttpErrorResponse) => {
        const message = `Retrieval error: ${error.message}`;
        console.error(message);
        return of({ breweries: null, error: message });
      })
   );
  }
}
