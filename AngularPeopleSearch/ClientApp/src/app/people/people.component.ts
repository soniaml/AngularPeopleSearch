import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PEOPLE } from '../mock-people';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html'
})
export class PeopleComponent implements OnInit {
  people = PEOPLE;
  selectedPerson: Person;


  constructor() { }

  ngOnInit() {
  }

  onSelect(person: Person): void {
    this.selectedPerson = person;
  }
}
