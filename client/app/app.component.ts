import { Component } from '@angular/core';
import { Country } from './country';
import { City } from './city';

export class Trip {
  id: number;
  name: string;
}

const COUNTRIES : Country[] = [
  {id: 1, name: 'Argentina'},
  {id: 2, name: 'Chile'},
  {id: 3, name: 'Perú'}
]

const CITIES: City[] = [
  {id: 1, name: 'Buenos Aires', country: COUNTRIES[0] },
  {id: 2, name: 'Santiago de Chile', country: COUNTRIES[1] },
  {id: 3, name: 'Lima', country: COUNTRIES[2] },
]

@Component({
  selector: 'unzulu',
  template: `
    <h1>Hi {{user}}</h1>
    <h2>Your current trip is {{currentTrip.name}}.</h2>
    <h3>Trip info: </h3>
    <div> 
      <label>id: </label>{{currentTrip.id}}
    </div>
    <div> 
      <label>name: </label>
      <input [(ngModel)]="currentTrip.name" placeholder="name">
    </div>
    <div>
      <h2>Cities</h2>
      <ul class="cities">
        <li *ngFor="let city of cities" (click)="onSelect(city)" [class.selected]="city == selectedCity">
          <span class="city">{{city.name}}</span> <span>{{city.country.name}}</span>
        </li>
      </ul>
    </div>
    <city-detail [city]="selectedCity"></city-detail>
    `,
    styles: [`
      .selected {
        background-color: #CFD8DC !important;
        color: white;
      }
      .cities {
        margin: 0 0 2em 0;
        list-style-type: none;
        padding: 0;
        width: 15em;
      }

      .cities li {
        cursor: pointer;
        position: relative;
        left: 0;
        background-color: #EEE;
        margin: .5em;
        padding: .3em 0;
        height: 1.6em;
        border-radius: 4px;
      }
      .cities li:hover {
        color: #607D8B;
        background-color: #DDD;
        left: .1em;
      }
      .cities .text {
        position: relative;
        top: -3px;
      }
      .cities .city {
        display: inline-block;
        font-size: small;
        color: white;
        padding: 0.8em 0.7em 0 0.7em;
        background-color: #607D8B;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -4px;
        height: 1.8em;
        margin-right: .8em;
        border-radius: 4px 0 0 4px;
      }
    `]    
})

export class Unzulu {
  user = 'Jesús';
  currentTrip: Trip = {
    id: 1,
    name: 'Living South America'
  }
  cities = CITIES;
  selectedCity: City;
  onSelect(city: City): void {
    this.selectedCity = city;
  }
}
