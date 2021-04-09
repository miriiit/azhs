import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Employee } from '../models/employee';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = '';
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  public getEmployees() : Observable<any> {
    return this.http.get<any>('/api/employees');
  }

  public addEmployee(name: String, id: String): Observable<any> {
    let employee = {
      "id": id,
      "name": name,
      email: `abc ${ id } @gmail.com`,
      jobTitle: "abc",
      phone: `abc ${ id }`,
      imageUrl: "",
      code: `${ id }`
    };
    return this.http.post<Employee>('/api/employees', employee,  this.httpOptions).pipe(
      catchError(this.handleError<Employee>(`getEmployee id=${name}`))
    );
  }
  
  public deleteEmployee(id: String): Observable<{}> {
    return this.http.delete(`/api/employees/${id}`, this.httpOptions).pipe(
      catchError(this.handleError<Employee>(`getEmployee id=${name}`))
    );
  }



  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
