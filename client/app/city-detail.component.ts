import { Component, Input } from '@angular/core';
import { City } from './city'; 


@Component({
  moduleId: module.id,  
  selector: 'city-detail',
  templateUrl: 'city-detail.component.html'
})

export class CityDetailComponent {
  @Input()
  city: City;
}