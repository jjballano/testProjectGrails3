import { Component, Input } from '@angular/core';
import { City } from './city'; 


@Component({
  selector: 'city-detail',
  template: `
    <div *ngIf="city">
      <div>
        <h2>{{city.name}} details</h2>
        <div> 
          <label>id: </label>{{city.id}}
        </div>
        <div> 
          <label>name: </label>
          <input [(ngModel)]="city.name" placeholder="name">
        </div>
      </div>
    </div>
  `
})

export class CityDetailComponent {
  @Input()
  city: City;
}