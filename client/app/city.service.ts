import { Injectable } from '@angular/core'; 
import { Country } from './country' 
import { City } from './city' 


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

@Injectable()
export class CityService {
  all(): City[] {
    return CITIES;
  }
}