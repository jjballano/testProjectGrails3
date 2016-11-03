import { Component, OnInit } from '@angular/core';

import { TripService } from './trip.service'
import { Trip } from './trip'

@Component({
  moduleId: module.id,
  selector: 'trip-list',
  templateUrl: 'trip-list.component.html'
})

export class TripListComponent {
  trips: Trip[] = [];

  constructor(private tripService: TripService){}        

  ngOnInit(){
    this.tripService.all().then(trips => this.trips = trips);
  }
}