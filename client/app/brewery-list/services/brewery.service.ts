import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

export interface Brewery {
  id: number;
  name: string;
}

export interface BreweryResolved {
  breweries: Brewery[];
  error?: any;
}

@Injectable({
  providedIn: 'root'
})

export class BreweryService {
  constructor(private http: HttpClient) { }

  getAllBreweries(): Observable<Brewery[]> {
    // return throwError('Error loading data!');
    return this.http.get<Brewery[]>('/api/brewery');
  }

  getBrewery(id: number): Observable<Brewery> {
    return this.http.get<Brewery>('/api/brewery/' + id);
  }

  addBrewery(brewery: Brewery): Observable<Brewery> {
    return this.http.post<Brewery>('/api/brewery/', brewery);
  }

  updateBrewery(brewery: Brewery): Observable<void> {
    return this.http.put<void>('/api/brewery/' + brewery.id, brewery);
  }

  deleteBrewery(id: number) {
    return this.http.delete('/api/brewery/' + id);
  }
}
