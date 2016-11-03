import { Injectable } from '@angular/core';
import { CityService } from './city.service';
import { Trip } from './trip';
import { City } from './city';

@Injectable()
export class TripService {
  trips: Trip[] = [];  

  constructor(private cityService: CityService){    
    this.trips = [
      {id: 1, name: "First trip", cities: []},
      {id: 2, name: "Second trip", cities: []}
    ]
    this.cityService.all().then(cities =>       
      this.addCities(cities);
    );
  }

  all(): Promise<Trip[]> {
    return Promise.resolve(this.trips);
  }
  current(id: number): Promise<Trip>{
    return Promise.resolve(this.trips.find(trip => trip.id === id));
  }

  private addCities(cities: City[]){
    this.trips[0].cities = [cities[0], cities[2]];
    this.trips[1].cities = [cities[0], cities[1], cities[2]];
  }
}