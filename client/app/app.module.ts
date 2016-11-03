import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { Unzulu } from './app.component';
import { TripListComponent } from './trip-list.component';
import { TripComponent } from './trip.component';
import { CityDetailComponent } from './city-detail.component'; 
import { CityService } from './city.service' 

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: TripListComponent
      },
      {
        path: 'trip/:id',
        component: TripComponent
      }
    ])
  ],
  declarations: [ Unzulu, TripListComponent, TripComponent, CityDetailComponent ],
  providers: [ CityService ],
  bootstrap: [ Unzulu ]
})


export class AppModule {}