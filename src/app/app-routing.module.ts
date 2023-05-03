import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddreservationComponent } from './components/addreservation/addreservation.component';
import { ViewreservationsComponent } from './components/viewreservations/viewreservations.component';

const routes: Routes = [
  {path:'',component:AddreservationComponent},
  { path: 'viewreservation', component: ViewreservationsComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
