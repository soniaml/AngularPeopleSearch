import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
//import { PEOPLE } from '../mock-people'; DONT NEED THIS ANYMORE?
import { PersonService } from '../person.service';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html'
})
export class PeopleComponent implements OnInit {
  people: Person[];
  selectedPerson: Person;


  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.getPeople(); //This will be moved later since it will be search based
  }

  getPeople(): void {
    this.people = this.personService.getPeople();
  }

  onSelect(person: Person): void {
    this.selectedPerson = person;
  }
}
