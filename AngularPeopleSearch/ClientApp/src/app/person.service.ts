import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Person } from './person';


@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private personUrl = 'api/Person/';

  constructor(private http: HttpClient) { }

  getPeopleByNamePart(namePart: string): Observable<Person[]> {
    return this.http.get<Person[]>(this.personUrl + 'GetPeopleByNamePart/' + namePart)
      .pipe(tap(data => console.log('All:' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = 'An error occurred: $err.error.message';
    }
    else {
      errorMessage = 'Server returned code: ${err.status},l error message is ${err.message}';
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

    
}
