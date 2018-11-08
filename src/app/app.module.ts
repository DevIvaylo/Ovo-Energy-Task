import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RockPaperScissorsComponent } from './rock-paper-scissors/rock-paper-scissors.component';


@NgModule({
  declarations: [
    AppComponent,
    RockPaperScissorsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
