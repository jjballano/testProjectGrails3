import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { Unzulu } from './app.component';
import { CityDetailComponent } from './city-detail.component'; 

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ Unzulu, CityDetailComponent ],
  bootstrap: [ Unzulu ]
})

export class AppModule {}