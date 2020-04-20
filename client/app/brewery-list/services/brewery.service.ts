import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IBrewery } from '../../models/brewery';

@Injectable({
  providedIn: 'root'
})

export class BreweryService {
  constructor(private http: HttpClient) { }

  getAllBreweries(): Observable<IBrewery[]> {
    // return throwError('Error loading data!');
    return this.http.get<IBrewery[]>('/api/brewery');
  }

  getBrewery(id: number): Observable<IBrewery> {
    return this.http.get<IBrewery>('/api/brewery/' + id);
  }

  addBrewery(brewery: IBrewery): Observable<IBrewery> {
    return this.http.post<IBrewery>('/api/brewery/', brewery);
  }

  updateBrewery(brewery: IBrewery): Observable<void> {
    return this.http.put<void>('/api/brewery/' + brewery._id, brewery);
  }

  deleteBrewery(id: number) {
    return this.http.delete('/api/brewery/' + id);
  }
}
