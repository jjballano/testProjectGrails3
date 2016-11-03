import { Component } from '@angular/core';

@Component({
  selector: 'trip-list',
  template: `
    <ul>
      <li *ngFor="let trip of trips">{{trip.name}}</li>
    </ul>
  `  
})

export class TripListComponent {
  trips = [{id: 1, name: "First trip"},
          {id: 2, name: "Second trip"}]
}