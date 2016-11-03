import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'trip-list',
  templateUrl: 'trip-list.component.html'
})

export class TripListComponent {
  trips = [{id: 1, name: "First trip"},
          {id: 2, name: "Second trip"}]
}