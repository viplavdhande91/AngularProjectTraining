import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';


import {ToGramsPipe} from './custom-pipe/custom-pipe.component'

@NgModule({
  declarations: [
    AppComponent,
    CustomPipeComponent,
    ToGramsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
