import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { EmployeeListService, EmployeeResolved } from './services/employee-list.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class EmployeeListResolver implements Resolve<EmployeeResolved> {
  constructor(private service: EmployeeListService) { }

  resolve(): Observable<EmployeeResolved>  {
    return this.service.getAllEmployees()
    .pipe(
      map(data => ({ employees: data, error: null })),
      catchError((error: HttpErrorResponse) => {
        const message = `Retrieval error: ${error.message}`;
        console.error(message);
        return of({ employees: null, error: message });
      })
   );
  }
}
