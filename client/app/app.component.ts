import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'unzulu',
  templateUrl: 'app.component.html'
})

export class Unzulu {
  user = 'Jesus';
  trips = [{id: 1, name: "First trip"},
          {id: 2, name: "Second trip"}]
  currentTrip = this.trips[0];

}