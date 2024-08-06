import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VcrComponent } from './vcr/vcr.component';


const routes: Routes = [
  { path: 'vcr', component: VcrComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
