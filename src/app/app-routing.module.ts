import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FilterComponent} from './filter/filter.component'

import {ReduceComponent} from './reduce/reduce.component'

const routes: Routes = [{component:FilterComponent ,path:'filter'},{component:ReduceComponent ,path:'reduce'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
