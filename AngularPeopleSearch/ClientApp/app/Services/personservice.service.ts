import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
//import { Observable } from 'rxjs/Observable';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class PersonService {
  myAppUrl: string = "";

  constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
    this.myAppUrl = baseUrl;
  }

  //THE PROBLEM WITH CATCH MIGHT BE THAT THESE ARE ALL OF TYPE ANY.  NEED TO FIX THAT.
  getPersons() {
    return this._http.get(this.myAppUrl + 'api/Person/Index')
      .pipe(map((response: Response) => response.json()))
      //.catch(this.errorHandler);
  }

  getPersonById(id: number){
    return this._http.get(this.myAppUrl + 'api/Person/Details/' + id)
      .pipe(map((response: Response) => response.json()))
    //.catch(this.errorHandler)
  }

  updatePerson(person){
    return this._http.put(this.myAppUrl + 'api/Person/Edit', person)
      .pipe(map((response: Response) => response.json()))
      //.catch(this.errorHandler);
  }

  errorHandler(error: Response){
    console.log(error);
    return Observable.throw(error);
  }
}
