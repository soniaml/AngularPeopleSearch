import { Component, Inject } from '@angular/core';  
import { Http, Headers } from '@angular/http';  
import { Router, ActivatedRoute } from '@angular/router';  
import { PersonService } from '../../services/personservice.service'  
  
@Component({  
    templateUrl: './fetchperson.component.html'  
})  
  
export class FetchPersonComponent {  
    public personList: PersonData[];  
  
    constructor(public http: Http, private _router: Router, private _personService: PersonService) {  
        this.getPersons();  
    }  
  
    getPersons() {  
        this._personService.getPersons().subscribe(  
            data => this.personList = data  
        )  
    }  
  
    delete(personID) {  
        var ans = confirm("Do you want to delete person with Id: " + personID);  
        if (ans) {  
            this._personService.deletePerson(personID).subscribe((data) => {  
                this.getPersons();  
            }, error => console.error(error))  
        }  
    }  
}  
  
interface PersonData {  
    personId: number;  
    firstname: string;  
    lastname: string;  
    address: string;  
    age: number;  
}  
