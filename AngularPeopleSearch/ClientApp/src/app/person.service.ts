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

  searchByPerson(): Person[] {
    return [
  { id: 11, firstName: 'Mr. Nice', lastName: 'Best', address: '1234', age: 24, interests: 'test', image:'http://images.clipartpanda.com/clipart-smiley-face-opT56K6iB.jpeg'},
  { id: 12, firstName: 'Narco', lastName: 'Best', address: '1234', age: 24, interests: 'test', image:'https://www.bing.com/images/search?view=detailV2&ccid=UZu9xIGD&id=04AFC08A93BD5C3F3F8B96F55AA6ACD2234F7D21&thid=OIP.UZu9xIGDSa8JWEVek7xhRgHaEK&mediaurl=http%3a%2f%2fwww.cartoonbucket.com%2fwp-content%2fuploads%2f2015%2f05%2fFace-Image-Of-Bugs-Bunny.jpg&exph=1080&expw=1920&q=picture+of+bugs+bunny&simid=608011786724311777&selectedIndex=0&ajaxhist=0'  },
  { id: 13, firstName: 'Bombasto', lastName: 'Best', address: '1234', age: 24, interests: 'test', image:'https://www.bing.com/images/search?view=detailV2&ccid=UZu9xIGD&id=04AFC08A93BD5C3F3F8B96F55AA6ACD2234F7D21&thid=OIP.UZu9xIGDSa8JWEVek7xhRgHaEK&mediaurl=http%3a%2f%2fwww.cartoonbucket.com%2fwp-content%2fuploads%2f2015%2f05%2fFace-Image-Of-Bugs-Bunny.jpg&exph=1080&expw=1920&q=picture+of+bugs+bunny&simid=608011786724311777&selectedIndex=0&ajaxhist=0' },
  { id: 14, firstName: 'Celeritas', lastName: 'Best', address: '1234', age: 24, interests: 'test', image:'https://www.bing.com/images/search?view=detailV2&ccid=UZu9xIGD&id=04AFC08A93BD5C3F3F8B96F55AA6ACD2234F7D21&thid=OIP.UZu9xIGDSa8JWEVek7xhRgHaEK&mediaurl=http%3a%2f%2fwww.cartoonbucket.com%2fwp-content%2fuploads%2f2015%2f05%2fFace-Image-Of-Bugs-Bunny.jpg&exph=1080&expw=1920&q=picture+of+bugs+bunny&simid=608011786724311777&selectedIndex=0&ajaxhist=0'},
  { id: 15, firstName: 'Magneta', lastName: 'Best', address: '1234', age: 24, interests: 'test', image:'https://www.bing.com/images/search?view=detailV2&ccid=UZu9xIGD&id=04AFC08A93BD5C3F3F8B96F55AA6ACD2234F7D21&thid=OIP.UZu9xIGDSa8JWEVek7xhRgHaEK&mediaurl=http%3a%2f%2fwww.cartoonbucket.com%2fwp-content%2fuploads%2f2015%2f05%2fFace-Image-Of-Bugs-Bunny.jpg&exph=1080&expw=1920&q=picture+of+bugs+bunny&simid=608011786724311777&selectedIndex=0&ajaxhist=0' },
  { id: 16, firstName: 'RubberMan', lastName: 'Best', address: '1234', age: 24, interests: 'test', image:'https://www.bing.com/images/search?view=detailV2&ccid=UZu9xIGD&id=04AFC08A93BD5C3F3F8B96F55AA6ACD2234F7D21&thid=OIP.UZu9xIGDSa8JWEVek7xhRgHaEK&mediaurl=http%3a%2f%2fwww.cartoonbucket.com%2fwp-content%2fuploads%2f2015%2f05%2fFace-Image-Of-Bugs-Bunny.jpg&exph=1080&expw=1920&q=picture+of+bugs+bunny&simid=608011786724311777&selectedIndex=0&ajaxhist=0' },
  { id: 17, firstName: 'Dynama', lastName: 'Best', address: '1234', age: 24, interests: 'test', image:'https://www.bing.com/images/search?view=detailV2&ccid=UZu9xIGD&id=04AFC08A93BD5C3F3F8B96F55AA6ACD2234F7D21&thid=OIP.UZu9xIGDSa8JWEVek7xhRgHaEK&mediaurl=http%3a%2f%2fwww.cartoonbucket.com%2fwp-content%2fuploads%2f2015%2f05%2fFace-Image-Of-Bugs-Bunny.jpg&exph=1080&expw=1920&q=picture+of+bugs+bunny&simid=608011786724311777&selectedIndex=0&ajaxhist=0' },
  { id: 18, firstName: 'Dr IQ', lastName: 'Best', address: '1234', age: 24, interests: 'test', image:'https://www.bing.com/images/search?view=detailV2&ccid=UZu9xIGD&id=04AFC08A93BD5C3F3F8B96F55AA6ACD2234F7D21&thid=OIP.UZu9xIGDSa8JWEVek7xhRgHaEK&mediaurl=http%3a%2f%2fwww.cartoonbucket.com%2fwp-content%2fuploads%2f2015%2f05%2fFace-Image-Of-Bugs-Bunny.jpg&exph=1080&expw=1920&q=picture+of+bugs+bunny&simid=608011786724311777&selectedIndex=0&ajaxhist=0' },
  { id: 19, firstName: 'Magma', lastName: 'Best', address: '1234', age: 24, interests: 'test', image:'https://www.bing.com/images/search?view=detailV2&ccid=UZu9xIGD&id=04AFC08A93BD5C3F3F8B96F55AA6ACD2234F7D21&thid=OIP.UZu9xIGDSa8JWEVek7xhRgHaEK&mediaurl=http%3a%2f%2fwww.cartoonbucket.com%2fwp-content%2fuploads%2f2015%2f05%2fFace-Image-Of-Bugs-Bunny.jpg&exph=1080&expw=1920&q=picture+of+bugs+bunny&simid=608011786724311777&selectedIndex=0&ajaxhist=0' },
  { id: 20, firstName: 'Tornado', lastName: 'Best', address: '1234', age: 24, interests: 'test', image:'https://www.bing.com/images/search?view=detailV2&ccid=UZu9xIGD&id=04AFC08A93BD5C3F3F8B96F55AA6ACD2234F7D21&thid=OIP.UZu9xIGDSa8JWEVek7xhRgHaEK&mediaurl=http%3a%2f%2fwww.cartoonbucket.com%2fwp-content%2fuploads%2f2015%2f05%2fFace-Image-Of-Bugs-Bunny.jpg&exph=1080&expw=1920&q=picture+of+bugs+bunny&simid=608011786724311777&selectedIndex=0&ajaxhist=0' }
    ]
  }

  getPersonsByName(): Observable<Person[]> {
    return this.http.get<Person[]>(this.personUrl + 'Index')
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
