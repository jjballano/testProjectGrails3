import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TaskList } from './app.component' 

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ TaskList ],
  bootstrap: [ TaskList ]
})

export class AppModule {}