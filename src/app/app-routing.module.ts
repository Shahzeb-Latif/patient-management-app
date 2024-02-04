// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { AddPatientComponent } from './add-patient/add-patient.component';

const routes: Routes = [
  { path: '', redirectTo: '/patient-list', pathMatch: 'full' },
  { path: 'patient-list', component: PatientListComponent },
  { path: 'patient/:id', component: PatientDetailsComponent },
  { path: 'add-patient', component: AddPatientComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
