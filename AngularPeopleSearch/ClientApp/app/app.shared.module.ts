import { NgModule } from '@angular/core';
import { PersonService } from './services/personservice.service'
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { FetchPersonComponent } from './components/fetchperson/fetchperson.component'
import { createperson } from './components/addperson/AddPerson.component'

@NgModule({
  declarations: [
    AppComponent,
    FetchPersonComponent,
    createperson,
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'fetch-person', component: FetchPersonComponent },
      { path: 'register-person', component: createperson },
      { path: 'person/edit/:id', component: createperson },
    ])
  ],
  providers: [PersonService]
})
export class AppModuleShared {
}  
