import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';
import { ReduceComponent } from './reduce/reduce.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    ReduceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,NgbModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
