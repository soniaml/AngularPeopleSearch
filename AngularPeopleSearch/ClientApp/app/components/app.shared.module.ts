import { NgModule } from '@angular/core';
import { PersonService } from '../services/personservice.service'
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchPersonComponent } from './components/fetchperson/fetchperson.component'
import { createperson } from './components/addperson/AddPerson.component'

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    FetchPersonComponent,
    createperson,
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'fetch-person', component: FetchPersonComponent },
      { path: 'register-person', component: createperson },
      { path: 'person/edit/:id', component: createperson },
      { path: '**', redirectTo: 'home' }
    ])
  ],
  providers: [PersonService]
})
export class AppModuleShared {
}  
