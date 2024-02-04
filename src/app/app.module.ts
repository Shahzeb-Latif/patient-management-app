// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import {AppComponent} from "./app.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {BrowserModule} from "@angular/platform-browser";

const routes: Routes = [
  { path: '', redirectTo: '/patient-list', pathMatch: 'full' },
  { path: 'patient-list', component: PatientListComponent },
  { path: 'patient/:id', component: PatientDetailsComponent },
  { path: 'add-patient', component: AddPatientComponent },
];




@NgModule({
  declarations: [
    AppComponent,
    PatientListComponent,
    PatientDetailsComponent,
    AddPatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
