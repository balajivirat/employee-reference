import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Employeedetails } from './employeedetails';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:4000';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  create(values: any): Observable <Employeedetails> {
    return this.http.post<Employeedetails>(this.url + '/employeedeteils/', JSON.stringify(values), this.httpOptions)
    .pipe(catchError(this.errorHandler)
      )
  }
  getById(id: any): Observable<Employeedetails> {
    return this.http.get<Employeedetails>(this.url + '/employeedeteils/' + id)
    .pipe(catchError(this.errorHandler)
    )
  }
  getAll(): Observable<Employeedetails[]> {
    return this.http.get<Employeedetails[]>(this.url + '/employeedeteils/')
    .pipe(
      catchError(this.errorHandler)
    )
  }
  update(id: any, values: any): Observable<Employeedetails> {
    return this.http.put<Employeedetails>(this.url + '/employeedeteils/' + id, JSON.stringify(values), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id: any){
    return this.http.delete<Employeedetails>(this.url + '/employeedeteils/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}
