import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'


import { Unzulu } from './app.component' 

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ Unzulu ],
  bootstrap: [ Unzulu ]
})

export class AppModule {}