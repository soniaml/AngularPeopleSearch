import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Person } from './person';
import { PEOPLE } from './mock-people';


@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private personUrl = 'api/Person/';

  constructor(private http: HttpClient) { }

  addPerson(): void {
  }

  getPeople(): Observable<Person[]> {
    return of (PEOPLE);
  }

  getPersonsByName(): Observable<Person[]> {
    return this.http.get<Person[]>(this.personUrl + 'GetPeopleByNamePart')
      .pipe(tap(data => console.log('All:' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

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
