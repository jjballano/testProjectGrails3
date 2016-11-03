import { Component } from '@angular/core';

@Component({
  selector: 'unzulu',
  template: `
    <h1>Hi {{user}}</h1>
    <nav>
      <a routerLink="/">Home</a>
      <a routerLink="/trip/{{currentTrip.id}}">Current trip</a>
    </nav>
    <router-outlet></router-outlet>
  `  
})

export class Unzulu {
  user = 'Jesus';
  trips = [{id: 1, name: "First trip"},
          {id: 2, name: "Second trip"}]
  currentTrip = this.trips[0];

}