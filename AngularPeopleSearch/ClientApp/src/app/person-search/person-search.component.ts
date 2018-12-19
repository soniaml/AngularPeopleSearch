import { Component, Inject } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../person.service';


@Component({
  selector: 'app-person-search',
  templateUrl: './person-search.component.html'
})
export class PersonSearchComponent {
  people: Person[];
  personFilter: string = 'a';

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

}
