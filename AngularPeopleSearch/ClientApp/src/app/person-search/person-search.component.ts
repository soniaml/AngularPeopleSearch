import { Component, Inject } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../person.service';


@Component({
  selector: 'app-person-search',
  templateUrl: './person-search.component.html'
})
export class PersonSearchComponent {
  people: Person[];

  _personFilter: string;
  get personFilter(): string {
    return this._personFilter;
  }
  set personFilter(value: string) {
    this.people = this.personFilter
      ? this.performFilter(this.personFilter)
      : this.people;
  }

  pageTitle: string = "Person Search";
  imageWidth: number = 50;
  imageMargin: number = 2;

  constructor(private personService: PersonService) { }

  ngOnInit() {
    //this.getPeople(); //This will be moved later since it will be search based
  }

  getPeople(): void {
    this.personService.getPeople()
      .subscribe(people => this.people = people);
  }

  personSearch(): void {
    this.personService.searchByPerson()
    .subscribe(people => this.people = people);
  }

  performFilter(filterBy: string): Person[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.people.filter((person: Person) =>
      person.firstName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  
}
