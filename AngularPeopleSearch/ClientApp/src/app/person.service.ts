import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Person } from './person';
import { PEOPLE } from './mock-people';

@Injectable({
  providedIn: 'root',
})
export class PersonService {

  constructor() { }

  getPeople(): Observable<Person[]> {
    return of (PEOPLE);
  }
}
