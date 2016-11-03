import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { Unzulu } from './app.component';
import { TripListComponent } from './trip-list.component';
import { TripComponent } from './trip.component';
import { CityDetailComponent } from './city-detail.component'; 
import { CityService } from './city.service' 
import { TripService } from './trip.service' 

var routes: Routes = [
  { path: '', redirectTo: '/trip', pathMatch: 'full' },
  { path: 'trip', component: TripListComponent },
  { path: 'trip/:id', component: TripComponent },
  { path: '**', redirectTo: '' }
]


@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [ Unzulu, TripListComponent, TripComponent, CityDetailComponent ],
  providers: [ CityService, TripService ],
  bootstrap: [ Unzulu ]
})


export class AppModule {}