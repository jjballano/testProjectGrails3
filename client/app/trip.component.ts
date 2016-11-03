import { Component, OnInit } from '@angular/core';
import { City } from './city';
import { CityService } from './city.service' 

@Component({
  selector: 'trip',
  template: `
    <h2>Your current trip is {{name}}.</h2>
    <h3>Trip info: </h3>
    <div> 
      <label>id: </label>{{id}}
    </div>
    <div> 
      <label>name: </label>
      <input [(ngModel)]="name" placeholder="name">
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


export class TripComponent implements OnInit{
  id = 1;
  name = 'Living South America';  
  cities: City[];
  selectedCity: City;

  constructor(private cityService: CityService) {}

  getCities(): void {
    this.cityService.all().then(cities => this.cities = cities);
  }

  onSelect(city: City): void {
    this.selectedCity = city;
  }

  ngOnInit(): void {
    this.getCities();
  }
}
