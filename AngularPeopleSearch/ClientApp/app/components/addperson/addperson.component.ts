import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FetchPersonComponent } from '../fetchperson/fetchperson.component';
import { PersonService } from '../../services/personservice.service';

@Component({
  templateUrl: './AddPerson.component.html'
})

export class createperson implements OnInit {
  personForm: FormGroup;
  title: string = "Create";
  personId: number;
  errorMessage: any;
  //cityList: Array<any> = [];

  constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
    private _personService: PersonService, private _router: Router) {
    if (this._avRoute.snapshot.params["id"]) {
      this.personId = this._avRoute.snapshot.params["id"];
    }

    this.personForm = this._fb.group({
      personId: 0,
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      addresst: ['', [Validators.required]],
      age: ['', [Validators.required]]
    })
  }

  ngOnInit() {

    //this._personService.getCityList().subscribe(
    //  data => this.cityList = data
    //)

    if (this.personId > 0) {
      this.title = "Edit";
      this._personService.getPersonById(this.personId)
        .subscribe(resp => this.personForm.setValue(resp)
          , error => this.errorMessage = error);
    }
  }

  save() {

    if (!this.personForm.valid) {
      return;
    }

    if (this.title == "Create") {
      this._personService.savePerson(this.personForm.value)
        .subscribe((data) => {
          this._router.navigate(['/fetch-person']);
        }, error => this.errorMessage = error)
    }
    else if (this.title == "Edit") {
      this._personService.updatePerson(this.personForm.value)
        .subscribe((data) => {
          this._router.navigate(['/fetch-person']);
        }, error => this.errorMessage = error)
    }
  }

  cancel() {
    this._router.navigate(['/fetch-person']);
  }

  get firstname() { return this.personForm.get('firstname'); }
  get lastname() { return this.personForm.get('lastname'); }
  get address() { return this.personForm.get('address'); }
  get age() { return this.personForm.get('age'); }
}  
