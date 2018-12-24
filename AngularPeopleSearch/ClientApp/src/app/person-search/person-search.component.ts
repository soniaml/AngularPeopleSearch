import { Component, Inject } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../person.service';


@Component({
  selector: 'app-person-search',
  templateUrl: './person-search.component.html'
})
export class PersonSearchComponent {
  people: Person[];

  personFilter: string = '';

  pageTitle: string = "Person Search";
  imageWidth: number = 50;
  imageMargin: number = 2;
  errorMessage: string;

  constructor(private personService: PersonService) {
  }

  ngOnInit() {
  }

  getPeople(): void {
    this.personService.getPersonsByName().subscribe(
      people => this.people = people,
      error => this.errorMessage = <any>error
    );
  }

  getPeopleByNamePart(): void {
    this.personService.getPeopleByNamePart(this.personFilter).subscribe(
      people => this.people = people,
      error => this.errorMessage = <any>error
    );
  }
}
