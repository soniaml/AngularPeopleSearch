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
  processing: boolean = false;

  constructor(private personService: PersonService) {
  }

  ngOnInit() {
  }

  getPeopleByNamePart(): void {

    if (this.personFilter === '') {
      return;
    }
    else {

      this.processing = true;

      this.personService.getPeopleByNamePart(this.personFilter).subscribe(
        people => {
          this.people = people;
          this.processing = false;
        },
        error => this.errorMessage = <any>error
      );
    }
  }
}
