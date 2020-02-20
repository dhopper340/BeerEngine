import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

export interface Employee {
  id: number;
  name: string;
}

export interface EmployeeResolved {
  employees: Employee[];
  error?: any;
}

@Injectable({
  providedIn: 'root'
})

export class EmployeeListService {
  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
    // return throwError('Error loading data!');
    return this.http.get<Employee[]>('/api/employee');
  }

  getEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>('/api/employee/' + id);
  }

  insertEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>('/api/employee/', employee);
  }

  updateEmployee(employee: Employee): Observable<void> {
    return this.http.put<void>('/api/employee/' + employee.id, employee);
  }

  deleteEmployee(id: number) {
    return this.http.delete('/api/employee/' + id);
  }
}
